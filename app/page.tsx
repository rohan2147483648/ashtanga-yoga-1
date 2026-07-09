import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Instructors from "@/components/Instructors";
import Retreats from "@/components/Retreats";
import Shop from "@/components/Shop";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-sand-50 text-ink">
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Instructors />
      <Retreats />
      <Testimonial />
      <Shop />
      <Footer />
    </main>
  );
}