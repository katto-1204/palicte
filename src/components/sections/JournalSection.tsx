import { useState } from "react";
import { Calendar, X, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

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

// Journal Images
import journal_img1 from "@/assets/Journal/IMG_8574.JPG";
import journal_img2 from "@/assets/Journal/IMG_8575.JPG";
import journal_img3 from "@/assets/Journal/IMG_8576.JPG";
import journal_img4 from "@/assets/Journal/IMG_8577.JPG";
import journal_img5 from "@/assets/Journal/IMG_8578.JPG";
import journal_img6 from "@/assets/Journal/IMG_8579.JPG";
import journal_img7 from "@/assets/Journal/IMG_8580.JPG";
import journal_img8 from "@/assets/Journal/IMG_8581.JPG";
import journal_img9 from "@/assets/Journal/IMG_8582.JPG";

const day1Images = [
  { src: d1_img1, alt: "Day 1 - Image 1" },
  { src: d1_img2, alt: "Day 1 - Image 2" },
  { src: d1_img3, alt: "Day 1 - Image 3" },
  { src: d1_img4, alt: "Day 1 - Image 4" },
  { src: d1_img5, alt: "Day 1 - Image 5" },
  { src: d1_img6, alt: "Day 1 - Image 6" },
  { src: d1_img7, alt: "Day 1 - Image 7" },
];

const day2Images = [
  { src: d2_img1, alt: "Day 2 - Image 1" },
  { src: d2_img2, alt: "Day 2 - Image 2" },
  { src: d2_img3, alt: "Day 2 - Image 3" },
  { src: d2_img4, alt: "Day 2 - Image 4" },
  { src: d2_img5, alt: "Day 2 - Image 5" },
  { src: d2_img6, alt: "Day 2 - Image 6" },
  { src: d2_img7, alt: "Day 2 - Image 7" },
];

const day3Images = [
  { src: d3_img1, alt: "Day 3 - Image 1" },
  { src: d3_img2, alt: "Day 3 - Image 2" },
  { src: d3_img3, alt: "Day 3 - Image 3" },
  { src: d3_img4, alt: "Day 3 - Image 4" },
  { src: d3_img5, alt: "Day 3 - Image 5" },
  { src: d3_img6, alt: "Day 3 - Image 6" },
  { src: d3_img7, alt: "Day 3 - Image 7" },
];

const day4Images = [
  { src: d4_img1, alt: "Day 4 - Image 1" },
  { src: d4_img2, alt: "Day 4 - Image 2" },
  { src: d4_img3, alt: "Day 4 - Image 3" },
  { src: d4_img4, alt: "Day 4 - Image 4" },
  { src: d4_img5, alt: "Day 4 - Image 5" },
  { src: d4_img6, alt: "Day 4 - Image 6" },
  { src: d4_img7, alt: "Day 4 - Image 7" },
];

const journalImages = [
  { src: journal_img1, alt: "Journal - Image 1" },
  { src: journal_img2, alt: "Journal - Image 2" },
  { src: journal_img3, alt: "Journal - Image 3" },
  { src: journal_img4, alt: "Journal - Image 4" },
  { src: journal_img5, alt: "Journal - Image 5" },
  { src: journal_img6, alt: "Journal - Image 6" },
  { src: journal_img7, alt: "Journal - Image 7" },
  { src: journal_img8, alt: "Journal - Image 8" },
  { src: journal_img9, alt: "Journal - Image 9" },
];

export function JournalSection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const ImageGrid = ({ images }: { images: typeof day1Images }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <Card
          key={index}
          className="group relative aspect-square overflow-hidden rounded-xl border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer hover-lift"
          onClick={() => setSelectedImage(image)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <section id="journal" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Educational Tour Gallery
          </h2>
          <p className="text-muted-foreground text-lg">
            Visual journey through the Cebu-Bohol Educational Tour, November
            19-22, 2025
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-8">
            <TabsTrigger value="day1">DAY 1</TabsTrigger>
            <TabsTrigger value="day2">DAY 2</TabsTrigger>
            <TabsTrigger value="day3">DAY 3</TabsTrigger>
            <TabsTrigger value="day4">DAY 4</TabsTrigger>
            <TabsTrigger value="journal">Journal</TabsTrigger>
          </TabsList>

          <TabsContent value="day1" className="mt-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Calendar size={16} />
                <span className="text-sm font-medium">November 19, 2025</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Day 1 - Arrival & Company Visits
              </h3>
            </div>
            <ImageGrid images={day1Images} />
          </TabsContent>

          <TabsContent value="day2" className="mt-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Calendar size={16} />
                <span className="text-sm font-medium">November 20, 2025</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Day 2 - Company Visits & Learning Sessions
              </h3>
            </div>
            <ImageGrid images={day2Images} />
          </TabsContent>

          <TabsContent value="day3" className="mt-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Calendar size={16} />
                <span className="text-sm font-medium">November 21, 2025</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Day 3 - Company Visits & Travel to Bohol
              </h3>
            </div>
            <ImageGrid images={day3Images} />
          </TabsContent>

          <TabsContent value="day4" className="mt-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Calendar size={16} />
                <span className="text-sm font-medium">November 22, 2025</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Day 4 - Bohol Tour & Departure
              </h3>
            </div>
            <ImageGrid images={day4Images} />
          </TabsContent>

          <TabsContent value="journal" className="mt-8">
            <div className="mb-6">
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Learning Journal
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Documentation of observations and learnings from the
                educational tour
              </p>
            </div>
            <ImageGrid images={journalImages} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Image Modal */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-5xl max-h-[90vh] p-0">
          {selectedImage && (
            <>
              <DialogHeader className="px-6 pt-6 pb-2">
                <DialogTitle className="font-heading text-lg">
                  {selectedImage.alt}
                </DialogTitle>
              </DialogHeader>
              <div className="relative w-full h-[70vh] flex items-center justify-center bg-muted">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
