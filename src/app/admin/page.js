// app/admin/page.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function AdminPage() {
  const [pageData, setPageData] = useState({ title: '', slug: '' });
  const [contentBlocks, setContentBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState(null);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    // Fetch available pages
    const fetchPages = async () => {
      const response = await fetch('/api/pages');
      const data = await response.json();
      setPages(data);
      setIsLoading(false);
    };
    
    fetchPages();
  }, []);

  useEffect(() => {
    if (selectedPage) {
      loadPageContent(selectedPage);
    }
  }, [selectedPage]);

  const loadPageContent = async (slug) => {
    setIsLoading(true);
    const response = await fetch(`/api/content?slug=${slug}`);
    const data = await response.json();
    
    setPageData({
      title: data.page.title,
      slug: data.page.slug
    });
    
    setContentBlocks(data.contentBlocks);
    setIsLoading(false);
  };

  const handleAddTextBlock = () => {
    const newOrder = contentBlocks.length > 0 
      ? Math.max(...contentBlocks.map(block => block.order)) + 1 
      : 0;
      
    setContentBlocks([
      ...contentBlocks, 
      { 
        id: `temp-${Date.now()}`,
        type: 'text',
        content: '',
        order: newOrder
      }
    ]);
  };

  const handleAddImageBlock = () => {
    const newOrder = contentBlocks.length > 0 
      ? Math.max(...contentBlocks.map(block => block.order)) + 1 
      : 0;
      
    setContentBlocks([
      ...contentBlocks, 
      { 
        id: `temp-${Date.now()}`,
        type: 'image',
        content: '',
        order: newOrder
      }
    ]);
  };

  const handleContentChange = (id, newContent) => {
    setContentBlocks(
      contentBlocks.map(block => 
        block.id === id ? { ...block, content: newContent } : block
      )
    );
  };

  const handleImageUpload = async (id, file) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    
    setContentBlocks(
      contentBlocks.map(block => 
        block.id === id ? { ...block, content: data.url } : block
      )
    );
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    
    const items = Array.from(contentBlocks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    // Update order property
    const updatedItems = items.map((item, index) => ({
      ...item,
      order: index
    }));
    
    setContentBlocks(updatedItems);
  };

  const handleSave = async () => {
    const response = await fetch('/api/content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        page: pageData,
        contentBlocks
      })
    });
    
    const data = await response.json();
    // Handle response, show success/error message
  };

  const handleDeleteBlock = (id) => {
    setContentBlocks(contentBlocks.filter(block => block.id !== id));
  };
  
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Page Editor</h1>
      
      <div className="mb-6">
        <select 
          className="border p-2 rounded"
          value={selectedPage || ''}
          onChange={(e) => setSelectedPage(e.target.value)}
        >
          <option value="">Select a page</option>
          {pages.map(page => (
            <option key={page.slug} value={page.slug}>{page.title}</option>
          ))}
        </select>
      </div>
      
      {selectedPage && (
        <>
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Page Title</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={pageData.title}
                onChange={(e) => setPageData({...pageData, title: e.target.value})}
              />
            </div>
            <div>
              <label className="block mb-2">Page Slug</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={pageData.slug}
                onChange={(e) => setPageData({...pageData, slug: e.target.value})}
              />
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Content Blocks</h2>
            
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="content-blocks">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="space-y-4"
                  >
                    {contentBlocks.map((block, index) => (
                      <Draggable key={block.id} draggableId={block.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className="border p-4 rounded bg-white"
                          >
                            <div className="flex justify-between items-center mb-2">
                              <div 
                                {...provided.dragHandleProps}
                                className="cursor-move bg-gray-100 p-2 rounded"
                              >
                                ≡
                              </div>
                              <div>
                                <button 
                                  className="text-red-500 hover:text-red-700"
                                  onClick={() => handleDeleteBlock(block.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                            
                            {block.type === 'text' ? (
                              <textarea
                                className="w-full h-32 border p-2 rounded"
                                value={block.content}
                                onChange={(e) => handleContentChange(block.id, e.target.value)}
                              />
                            ) : (
                              <div>
                                {block.content ? (
                                  <div className="relative h-48 mb-2">
                                    <Image
                                      src={block.content}
                                      alt="Content image"
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                ) : (
                                  <div className="h-48 bg-gray-100 flex items-center justify-center mb-2">
                                    No image selected
                                  </div>
                                )}
                                <input
                                  type="file"
                                  onChange={(e) => handleImageUpload(block.id, e.target.files[0])}
                                  className="w-full"
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          
          <div className="flex space-x-2 mb-6">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleAddTextBlock}
            >
              Add Text Block
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={handleAddImageBlock}
            >
              Add Image Block
            </button>
          </div>
          
          <button
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
            onClick={handleSave}
          >
            Save Page
          </button>
        </>
      )}
    </div>
  );
}