import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <About />
    </main>
  );
}
