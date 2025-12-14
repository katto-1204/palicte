import { ArrowDown, Sparkles, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import profileImage from "@/assets/image.png";

export function HeroSection() {
  const handleScrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="dashboard"
      className="relative min-h-screen flex items-center gradient-hero overflow-hidden"
    >
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 md:right-20 opacity-20 animate-float">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/30 blur-3xl" />
      </div>
      <div className="absolute bottom-20 left-10 md:left-20 opacity-15 animate-float-delayed">
        <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-accent-foreground/20 blur-3xl" />
      </div>

      {/* Floating icons */}
      <div className="absolute top-1/4 right-1/4 hidden lg:block animate-float">
        <div className="p-3 bg-card shadow-card rounded-xl">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="absolute top-1/3 left-1/4 hidden lg:block animate-float-delayed">
        <div className="p-3 bg-card shadow-card rounded-xl">
          <Target className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-1/3 right-1/3 hidden lg:block animate-float">
        <div className="p-3 bg-card shadow-card rounded-xl">
          <Lightbulb className="w-6 h-6 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-6 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card - Left Side */}
          <div
            className="flex justify-center lg:justify-start animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Card className="relative w-full max-w-md h-[500px] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border-0 hover-lift">
              <div className="w-full h-full relative">
                <img
                  src={profileImage}
                  alt="Luis Mario Palicte"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Luis Mario Palicte</h3>
                  <p className="text-sm opacity-90">Aspiring Professional</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Text Content - Right Side */}
          <div className="text-center lg:text-left animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-8 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Sparkles size={14} />
              <span>Open to Opportunities</span>
            </div>

            {/* Main heading */}
            <h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Hi, I'm{" "}
              <span className="text-gradient">Luis Mario Palicte</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              Aspiring Professional • Digital Innovator • Lifelong Learner
            </p>

            {/* Description */}
            <p
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-up leading-relaxed"
              style={{ animationDelay: "0.6s" }}
            >
              Passionate about transforming ideas into impactful digital solutions.
              Currently documenting my professional journey and growth through
              hands-on internship experiences and continuous learning.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-up"
              style={{ animationDelay: "0.7s" }}
            >
              <Button
                size="lg"
                onClick={handleScrollToAbout}
                className="group px-8 py-6 text-base font-medium shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                View My Journey
                <ArrowDown
                  size={18}
                  className="ml-2 group-hover:translate-y-1 transition-transform"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-6 text-base font-medium hover:bg-accent transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
