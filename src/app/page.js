import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import OurActivitiesHome from "./components/OurActivities-Home";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <About />
      <OurActivitiesHome />
    </main>
  );
}
