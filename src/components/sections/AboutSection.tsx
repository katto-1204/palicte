import { useState, useCallback, useEffect } from "react";
import { MapPin, Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

// DAY 1 Images
import d1_img1 from "@/assets/D1/84ed53c47ed0ccf783ae1167ab026bcb.jpeg";
import d1_img2 from "@/assets/D1/IMG_9611.jpeg";
import d1_img3 from "@/assets/D1/IMG_9655.jpeg";
import d1_img4 from "@/assets/D1/IMG_9680.jpeg";
import d1_img5 from "@/assets/D1/IMG_9683.jpeg";
import d1_img6 from "@/assets/D1/IMG_9685.jpeg";
import d1_img7 from "@/assets/D1/IMG_9738.jpeg";

// DAY 2 Images
import d2_img1 from "@/assets/D2/IMG_8534.JPG";
import d2_img2 from "@/assets/D2/IMG_8535.JPG";
import d2_img3 from "@/assets/D2/IMG_8536.JPG";
import d2_img4 from "@/assets/D2/IMG_8537.JPG";
import d2_img5 from "@/assets/D2/IMG_8538.JPG";
import d2_img6 from "@/assets/D2/IMG_8539.JPG";
import d2_img7 from "@/assets/D2/IMG_8540.JPG";

// DAY 3 Images
import d3_img1 from "@/assets/D3/IMG_8171.jpeg";
import d3_img2 from "@/assets/D3/IMG_8175.jpeg";
import d3_img3 from "@/assets/D3/IMG_8178.jpeg";
import d3_img4 from "@/assets/D3/IMG_8179.jpeg";
import d3_img5 from "@/assets/D3/IMG_8182.jpeg";
import d3_img6 from "@/assets/D3/IMG_8188.jpeg";
import d3_img7 from "@/assets/D3/IMG_8214.jpeg";

// DAY 4 Images
import d4_img1 from "@/assets/D4/IMG_0275.jpeg";
import d4_img2 from "@/assets/D4/IMG_0626.jpeg";
import d4_img3 from "@/assets/D4/IMG_8212.jpeg";
import d4_img4 from "@/assets/D4/IMG_8219.jpeg";
import d4_img5 from "@/assets/D4/IMG_8220.jpeg";
import d4_img6 from "@/assets/D4/IMG_8223.jpeg";
import d4_img7 from "@/assets/D4/IMG_8225.jpeg";

const tourDays = [
  {
    id: 1,
    day: "Day 1",
    title: "WORLDTECH INFORMATION SOLUTIONS",
    location: "Cebu City",
    description:
      "Started our educational tour with a visit to Worldtech Information Solutions, learning about enterprise software development and IT infrastructure.",
    images: [
      d1_img1,
      d1_img2,
      d1_img3,
      d1_img4,
      d1_img5,
      d1_img6,
      d1_img7,
    ],
  },
  {
    id: 2,
    day: "Day 2",
    title: "RIVAN IT CEBU & CODECHUM",
    location: "Cebu City",
    description:
      "Explored innovative tech solutions at Rivan IT and discovered Codechum's approach to coding education and developer training platforms.",
    images: [
      d2_img1,
      d2_img2,
      d2_img3,
      d2_img4,
      d2_img5,
      d2_img6,
      d2_img7,
    ],
  },
  {
    id: 3,
    day: "Day 3",
    title: "MATA TECHNOLOGIES INC.",
    location: "Cebu City",
    description:
      "Visited Mata Technologies Inc. to understand their cutting-edge developments in AI, software solutions, and digital transformation services.",
    images: [
      d3_img1,
      d3_img2,
      d3_img3,
      d3_img4,
      d3_img5,
      d3_img6,
      d3_img7,
    ],
  },
  {
    id: 4,
    day: "Day 4",
    title: "TAGBILARAN 911",
    location: "Tagbilaran City, Bohol",
    description:
      "Concluded our tour at Tagbilaran 911 Emergency Response Center, learning about technology integration in public safety and emergency management systems.",
    images: [
      d4_img1,
      d4_img2,
      d4_img3,
      d4_img4,
      d4_img5,
      d4_img6,
      d4_img7,
    ],
  },
];

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
      onSelect();
    }
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0"
            >
              <div className="aspect-video relative">
                <img
                  src={image}
                  alt={`${title} - Photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-foreground/80 text-background text-sm rounded-full">
                  {index + 1} / {images.length}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background border-border"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background border-border"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function AboutSection() {
  const [selectedDay, setSelectedDay] = useState<(typeof tourDays)[0] | null>(null);

  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            EDUCATIONAL TOUR 2025
          </h2>
          <p className="text-muted-foreground text-lg">
            A journey through leading tech companies, exploring innovation and gaining
            real-world industry insights.
          </p>
        </div>

        {/* Tour Days Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tourDays.map((day) => (
            <button
              key={day.id}
              onClick={() => setSelectedDay(day)}
              className="text-left group bg-background p-6 rounded-xl border border-border/50 shadow-card hover-lift transition-all duration-300"
            >
              {/* Day badge */}
              <span className="inline-block px-4 py-2 text-sm font-bold bg-primary text-primary-foreground rounded-full mb-4">
                {day.day}
              </span>

              {/* Company name */}
              <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                {day.title}
              </h3>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin size={14} />
                <span>{day.location}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {day.description}
              </p>

              {/* View photos indicator */}
              <div className="flex items-center gap-2 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera size={16} />
                <span>View {day.images.length} photos</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Photo Carousel Modal */}
      <Dialog open={!!selectedDay} onOpenChange={() => setSelectedDay(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background">
          {selectedDay && (
            <div className="p-6">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                    {selectedDay.day}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    <span>{selectedDay.location}</span>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {selectedDay.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {selectedDay.description}
                </p>
              </div>

              {/* Carousel */}
              <ImageCarousel images={selectedDay.images} title={selectedDay.title} />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
