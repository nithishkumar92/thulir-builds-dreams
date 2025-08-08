import { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  id: string;
  name: string;
  location: string;
  year: number;
  cover: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: "sunrise-villas",
    name: "Sunrise Villas",
    location: "Salem, TN",
    year: 2024,
    cover:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: "green-meadows",
    name: "Green Meadows Residence",
    location: "Erode, TN",
    year: 2023,
    cover:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582582621959-48d0b1cc88a7?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: "royal-enclave",
    name: "Royal Enclave",
    location: "Coimbatore, TN",
    year: 2024,
    cover:
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a3?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556784344-ad913c73cfc0?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1600&auto=format&fit=crop",
    ],
  },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const activeProject = projects[activeProjectIndex];

  const rotatedImages = useMemo(() => {
    if (!activeProject) return [] as string[];
    const imgs = activeProject.images;
    const idx = Math.min(Math.max(activeImageIndex, 0), imgs.length - 1);
    return [...imgs.slice(idx), ...imgs.slice(0, idx)];
  }, [activeProject, activeImageIndex]);

  useEffect(() => {
    // Basic SEO for SPA
    document.title = "THULIR Construction | Completed Projects Gallery";

    const ensureMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    ensureMeta(
      "description",
      "Explore THULIR Construction's completed projects gallery – professional, interactive, project-wise photos."
    );

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);
  }, []);

  const openLightbox = (projectIdx: number, imageIdx = 0) => {
    setActiveProjectIndex(projectIdx);
    setActiveImageIndex(imageIdx);
    setOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        <header className="container mx-auto px-4 lg:px-6 py-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text">
            Completed Projects Gallery
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Discover our craftsmanship through a modern, interactive gallery. Browse by project and open any image for a full-screen experience.
          </p>
        </header>

        <section className="container mx-auto px-4 lg:px-6 pb-12">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap gap-2 justify-center">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              {projects.map((p) => (
                <TabsTrigger key={p.id} value={p.id}>
                  {p.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* All Projects Grid */}
            <TabsContent value="all" className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                  <article key={project.id} className="group animate-fade-in">
                    <Card className="overflow-hidden border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60 hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <AspectRatio ratio={16 / 10}>
                          <img
                            src={project.cover}
                            alt={`${project.name} project cover photo`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                          <div>
                            <h2 className="text-lg font-semibold">{project.name}</h2>
                            <p className="text-sm text-muted-foreground">
                              {project.location} • {project.year}
                            </p>
                          </div>
                          <Badge>{project.images.length} photos</Badge>
                        </div>
                      </div>
                      <div className="p-4 flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          Tap to preview the gallery
                        </div>
                        <Button size="sm" onClick={() => openLightbox(idx, 0)}>
                          View Project
                        </Button>
                      </div>
                    </Card>
                  </article>
                ))}
              </div>
            </TabsContent>

            {/* Individual Project Tabs with Masonry-style grid */}
            {projects.map((project, pIdx) => (
              <TabsContent key={project.id} value={project.id} className="mt-6">
                <header className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">{project.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      {project.location} • {project.year}
                    </p>
                  </div>
                  <Button variant="outline" onClick={() => openLightbox(pIdx, 0)}>
                    Open Slideshow
                  </Button>
                </header>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
                  {project.images.map((src, i) => (
                    <figure key={i} className="mb-4 break-inside-avoid hover-scale cursor-pointer" onClick={() => openLightbox(pIdx, i)}>
                      <AspectRatio ratio={4 / 3}>
                        <img
                          src={src}
                          alt={`${project.name} - photo ${i + 1}`}
                          className="h-full w-full object-cover rounded-md"
                          loading="lazy"
                        />
                      </AspectRatio>
                      <figcaption className="sr-only">{project.name} – Photo {i + 1}</figcaption>
                    </figure>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Lightbox Dialog */}
          {/* Using a minimal custom lightbox with Carousel for a sleek UX */}
          {open && (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
              onClick={() => setOpen(false)}
            >
              <div
                className="relative w-full max-w-5xl bg-background rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <header className="flex items-center justify-between p-3 border-b">
                  <div className="space-y-0.5">
                    <h3 className="text-base font-semibold leading-none">
                      {activeProject?.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {activeProject?.location} • {activeProject?.year}
                    </p>
                  </div>
                  <Button size="sm" variant="outline" onClick={() => setOpen(false)}>
                    Close
                  </Button>
                </header>
                <div className="p-2">
                  <Carousel>
                    <CarouselContent>
                      {rotatedImages.map((src, i) => (
                        <CarouselItem key={i} className="">
                          <AspectRatio ratio={16 / 9}>
                            <img
                              src={src}
                              alt={`${activeProject?.name} – slideshow ${i + 1}`}
                              className="h-full w-full object-cover"
                              loading="eager"
                            />
                          </AspectRatio>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            </div>
          )}

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                name: "THULIR Construction – Completed Projects Gallery",
                hasPart: projects.map((p) => ({
                  "@type": "CreativeWork",
                  name: p.name,
                  locationCreated: p.location,
                  dateCreated: String(p.year),
                  image: p.images,
                })),
              }),
            }}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
