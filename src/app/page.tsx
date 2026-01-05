import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import Instructor from "@/components/Instructor";
import Testimonial from "@/components/Testimonial";
import UpcommingWebinars from "@/components/UpcommingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-grid-white/[0.02] bg-black/96 antialiased">
      <Hero />
      <Courses />
      <WhyChooseUs />
      <Testimonial />
      <UpcommingWebinars />
      <Instructor />
    </main>
  );
}
