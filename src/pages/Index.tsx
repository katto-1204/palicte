import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { JournalSection } from "@/components/sections/JournalSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Luis Mario Palicte | Digital Portfolio & Professional Growth Journal</title>
        <meta
          name="description"
          content="Explore the professional portfolio of Luis Mario Palicte - an aspiring professional and digital innovator documenting growth through internship experiences and continuous learning."
        />
        <meta
          name="keywords"
          content="Luis Mario Palicte, portfolio, software developer, intern, professional growth, web development"
        />
        <link rel="canonical" href="https://luismario.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <CertificationsSection />
          <JournalSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
