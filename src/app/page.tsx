import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import FAQ from "@/sections/FAQ";
import Pricing from "@/sections/Pricing";
import Team from "@/sections/Team";
import Steps from "@/sections/Steps";
import Portfolio from "@/sections/Portfolio";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Steps />
        <Portfolio />
        <Team />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
