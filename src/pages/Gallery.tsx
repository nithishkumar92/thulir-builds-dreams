import { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Search } from "lucide-react";
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

const [activeFilter, setActiveFilter] = useState<string>("all");
const [query, setQuery] = useState("");
const activeProject = projects[activeProjectIndex];

const filteredProjects = useMemo(() => {
  const q = query.trim().toLowerCase();
  if (!q) return projects;
  return projects.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q)
  );
}, [query]);

const selectedProject = useMemo(() => {
  return activeFilter === "all" ? null : projects.find((p) => p.id === activeFilter) || null;
}, [activeFilter]);

const selectedProjectIndex = useMemo(() => {
  return activeFilter === "all" ? -1 : projects.findIndex((p) => p.id === activeFilter);
}, [activeFilter]);

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
          <div className="mb-3 flex items-center justify-center">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Gallery</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text">
            Completed Projects Gallery
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Explore our completed works. Filter by project, search, and open images in a sleek fullscreen lightbox.
          </p>
        </header>

        <section className="container mx-auto px-4 lg:px-6 pb-12">
          {/* Filters & Search */}
          <div className="w-full space-y-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:max-w-sm">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects..."
                  aria-label="Search projects"
                  className="pl-9"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto py-1">
                <Button
                  size="sm"
                  variant={activeFilter === "all" ? "default" : "outline"}
                  aria-pressed={activeFilter === "all"}
                  onClick={() => setActiveFilter("all")}
                >
                  All
                </Button>
                {projects.map((p) => (
                  <Button
                    key={p.id}
                    size="sm"
                    variant={activeFilter === p.id ? "default" : "outline"}
                    aria-pressed={activeFilter === p.id}
                    onClick={() => setActiveFilter(p.id)}
                    className="whitespace-nowrap"
                  >
                    {p.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Content */}
            {activeFilter === "all" ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => {
                  const globalIdx = projects.findIndex((p) => p.id === project.id);
                  return (
                    <article
                      key={project.id}
                      className="group animate-fade-in hover-scale cursor-pointer"
                      onClick={() => setActiveFilter(project.id)}
                    >
                      <Card className="overflow-hidden border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60 transition-shadow hover:shadow-lg">
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
                          <div className="text-sm text-muted-foreground">Open project</div>
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              openLightbox(globalIdx, 0);
                            }}
                          >
                            View Gallery
                          </Button>
                        </div>
                      </Card>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div>
                <header className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">{selectedProject?.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      {selectedProject?.location} • {selectedProject?.year}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" onClick={() => setActiveFilter("all")}>Back to all</Button>
                    <Button
                      variant="default"
                      onClick={() => selectedProjectIndex >= 0 && openLightbox(selectedProjectIndex, 0)}
                    >
                      Open Slideshow
                    </Button>
                  </div>
                </header>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedProject?.images.map((src, i) => (
                    <figure
                      key={i}
                      className="group hover-scale cursor-pointer"
                      onClick={() => selectedProjectIndex >= 0 && openLightbox(selectedProjectIndex, i)}
                    >
                      <AspectRatio ratio={4 / 3}>
                        <img
                          src={src}
                          alt={`${selectedProject?.name} - photo ${i + 1}`}
                          className="h-full w-full object-cover rounded-md"
                          loading="lazy"
                        />
                      </AspectRatio>
                      <figcaption className="sr-only">{selectedProject?.name} – Photo {i + 1}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Lightbox Dialog */}
          {/* Using a minimal custom lightbox with Carousel for a sleek UX */}
          {open && (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm animate-fade-in"
              onClick={() => setOpen(false)}
            >
              <button
                className="absolute right-4 top-4 z-[61] rounded-md border bg-background/80 px-3 py-1 text-sm shadow"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                }}
              >
                Close
              </button>
              <div className="h-full w-full" onClick={(e) => e.stopPropagation()}>
                <Carousel>
                  <CarouselContent>
                    {rotatedImages.map((src, i) => (
                      <CarouselItem key={i} className="h-screen flex items-center justify-center p-4">
                        <img
                          src={src}
                          alt={`${activeProject?.name} – slideshow ${i + 1}`}
                          className="max-h-[90vh] w-auto object-contain"
                          loading="eager"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
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
