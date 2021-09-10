import Meta from "@/components/layout/Meta";
import Hero from "@/components/notion/Hero";
import Features from "@/components/notion/Features";
import Testimonial from "@/components/notion/Testimonial";
import Instructors from "@/components/notion/Instructors";
import CallToAction from "@/components/notion/CallToAction";
import Contact from "@/components/notion/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Meta
        title="The Marshals - Notion - From Head to Toe"
        description="Learn how Notion will empower you to improve your personal and professional lifestyle"
      />
      <Hero />
      <Features />
      <Testimonial />
      <Instructors />
      <CallToAction />
      <Contact />
      <Footer />
    </>
  );
}
