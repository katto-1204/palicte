import { useState } from "react";
import { Award, Calendar, ExternalLink, Building } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import certImage from "@/assets/luiscert.png";

export function CertificationsSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="certifications" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional certifications and credentials that validate my skills
            and knowledge.
          </p>
        </div>

        {/* Certification Display */}
        <div className="max-w-4xl mx-auto">
          <Card
            className="group bg-background rounded-2xl border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift cursor-pointer overflow-hidden"
            onClick={() => setIsDialogOpen(true)}
          >
            <div className="relative">
              <img
                src={certImage}
                alt="Certificate of Completion - Educational Tour in Cebu and Bohol"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <span>Click to view full size</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            </div>
          </Card>

          {/* Certificate Info */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm">
              <Award size={16} />
              <span>Certificate of Completion</span>
            </div>
            <p className="mt-4 text-muted-foreground">
              Educational Tour in Cebu and Bohol • November 19-22, 2025
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Issued by World of Adventures Travel and Tours
            </p>
          </div>
        </div>
      </div>

      {/* Certificate Detail Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-center">
              Certificate of Completion
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4">
            <img
              src={certImage}
              alt="Certificate of Completion - Educational Tour in Cebu and Bohol"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="mt-6 space-y-3 text-center">
            <div className="flex items-center justify-center gap-2 text-foreground">
              <Building size={16} />
              <span className="font-medium">World of Adventures Travel and Tours</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <Calendar size={14} />
              <span>Issued November 22, 2025</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Educational Tour in Cebu and Bohol (November 19-22, 2025)
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
