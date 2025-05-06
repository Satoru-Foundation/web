'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    description: '',
    requirements: '',
    salary: '',
  });
  const [editingJob, setEditingJob] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('/api/admin/jobs');
      if (!response.ok) throw new Error('Failed to fetch jobs');
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingJob 
        ? `/api/admin/jobs/${editingJob.id}`
        : '/api/admin/jobs';
      
      const method = editingJob ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to save job');
      
      await fetchJobs();
      setShowModal(false);
      setFormData({
        title: '',
        company: '',
        location: '',
        type: '',
        description: '',
        requirements: '',
        salary: '',
      });
      setEditingJob(null);
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      company: job.company,
      location: job.location,
      type: job.type,
      description: job.description,
      requirements: job.requirements,
      salary: job.salary || '',
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this job?')) return;
    
    try {
      const response = await fetch(`/api/admin/jobs/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete job');
      
      await fetchJobs();
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const handleToggleActive = async (id, currentStatus) => {
    try {
      const response = await fetch(`/api/admin/jobs/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !currentStatus }),
      });

      if (!response.ok) throw new Error('Failed to update job status');
      
      await fetchJobs();
    } catch (error) {
      console.error('Error updating job status:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="text-black">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">Jobs Management</h1>
          <button
            onClick={() => {
              setEditingJob(null);
              setFormData({
                title: '',
                company: '',
                location: '',
                type: '',
                description: '',
                requirements: '',
                salary: '',
              });
              setShowModal(true);
            }}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Add Job
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-1">{job.company}</p>
                  <p className="text-gray-600 mb-1">{job.location}</p>
                  <p className="text-gray-600 mb-4">{job.type}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(job)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleToggleActive(job.id, job.isActive)}
                    className={`${
                      job.isActive ? 'text-green-600 hover:text-green-800' : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {job.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-black mb-2">Description</h4>
                <p className="text-gray-700 whitespace-pre-wrap">{job.description}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-black mb-2">Requirements</h4>
                <p className="text-gray-700 whitespace-pre-wrap">{job.requirements}</p>
              </div>
              
              {job.salary && (
                <div>
                  <h4 className="font-semibold text-black mb-2">Salary</h4>
                  <p className="text-gray-700">{job.salary}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
            <h2 className="text-2xl font-bold text-black mb-6">
              {editingJob ? 'Edit Job' : 'Add Job'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-black mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-black mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-black mb-2">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-black mb-2">Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  required
                >
                  <option value="">Select a type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                  <option value="Freelance">Freelance</option>
                </select>
              </div>
              <div>
                <label className="block text-black mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  rows="4"
                  required
                />
              </div>
              <div>
                <label className="block text-black mb-2">Requirements</label>
                <textarea
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  rows="4"
                  required
                />
              </div>
              <div>
                <label className="block text-black mb-2">Salary (optional)</label>
                <input
                  type="text"
                  value={formData.salary}
                  onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  placeholder="e.g., $50,000 - $70,000"
                />
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                >
                  {editingJob ? 'Update' : 'Add'} Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 