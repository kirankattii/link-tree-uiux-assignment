import Header from "@/components/layout/Header";
import AboutSection from "@/components/sections/AboutSection";
import FeaturesBar from "@/components/sections/FeaturesBar";
import BrandMarquee from "@/components/sections/BrandMarquee";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyDeserves from "@/components/sections/WhyDeserves";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <FeaturesBar />
      <AboutSection />
      <ServicesSection />
      <BrandMarquee />
      <WhyDeserves />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
