import { useState, useEffect, useMemo } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface PackageData {
  feature: string;
  silver: string;
  gold: string;
  platinum: string;
}

const Services = () => {
  const [packageData, setPackageData] = useState<PackageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'packages' | 'compare'>("packages");

  useEffect(() => {
    document.title = "THULIR Construction Packages | Compare Silver, Gold, Platinum";
  }, []);

  // Group rows into sections based on heading rows (rows with empty package columns)
  const sections = useMemo(() => {
    const groups: { title: string | null; items: PackageData[] }[] = [];
    let current: { title: string | null; items: PackageData[] } = { title: null, items: [] };
    packageData.forEach((row) => {
      const isHeading = !row.silver && !row.gold && !row.platinum && !!row.feature;
      if (isHeading) {
        if (current.items.length) groups.push(current);
        current = { title: row.feature.replace(/[:]+$/, ''), items: [] };
      } else {
        current.items.push(row);
      }
    });
    if (current.items.length) groups.push(current);
    return groups;
  }, [packageData]);

  const renderValue = (value: string) => {
    const trimmed = (value || '').trim();
    const isNil = trimmed.toLowerCase() === 'nil' || trimmed === '';
    if (isNil) {
      return (
        <span className="inline-flex items-center gap-2 text-muted-foreground">
          <X className="h-4 w-4" aria-hidden />
          <span>Not included</span>
        </span>
      );
    }
    const lines = trimmed.split('\n');
    return (
      <span className="inline-flex items-start gap-2">
        <Check className="h-4 w-4 text-primary" aria-hidden />
        <span className="whitespace-pre-line">{lines.join('\n')}</span>
      </span>
    );
  };

  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const apiKey = 'AIzaSyAwVNjzgZ2Q0XdOVPtzNUBYTqfZxfoie6I';
        const spreadsheetId = '14xy2C6uXhbwAc_9u2ey8_kEPR2F-tsbLs-FLdZs7THM';
        const range = 'English!A1:D46';
        
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const data = await response.json();
        const values = data.values || [];
        
        // Skip header row and process data
        const processedData: PackageData[] = values.slice(1).map((row: string[]) => ({
          feature: row[0] || '',
          silver: row[1] || '',
          gold: row[2] || '',
          platinum: row[3] || ''
        })).filter(item => item.feature); // Filter out empty rows
        
        setPackageData(processedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPackageData();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="package-section">
          <div className="container mx-auto px-4 lg:px-6">
            <header className="mb-6 text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text"> 
                Tailored Packages for Your Dream Home
              </h1>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Compare our Silver, Gold, and Platinum construction packages. Switch views to explore details by package or compare all features.
              </p>
            </header>

            <div className="flex justify-center gap-3 mb-6">
              <Button
                variant={viewMode === 'packages' ? 'default' : 'outline'}
                onClick={() => setViewMode('packages')}
                aria-pressed={viewMode === 'packages'}
              >
                View by Package
              </Button>
              <Button
                variant={viewMode === 'compare' ? 'default' : 'outline'}
                onClick={() => setViewMode('compare')}
                aria-pressed={viewMode === 'compare'}
              >
                Compare All
              </Button>
            </div>
            
            {loading && (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <p className="mt-2 text-muted-foreground">Loading packages...</p>
              </div>
            )}
            
            {error && (
              <div className="text-center py-8">
                <p className="text-destructive">Error loading packages: {error}</p>
              </div>
            )}
            
            {!loading && !error && (
              viewMode === 'compare' ? (
                <div className="overflow-x-auto">
                  <table className="package-table w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="package-header">Feature</th>
                        <th className="package-header">Silver Package</th>
                        <th className="package-header">Gold Package</th>
                        <th className="package-header">Platinum Package</th>
                      </tr>
                    </thead>
                    <tbody>
                      {packageData.map((row, index) => (
                        <tr key={index} className="package-row">
                          <td className="package-cell feature-cell">
                            {row.feature.startsWith('<b>') && row.feature.endsWith('</b>') ? (
                              <span dangerouslySetInnerHTML={{ __html: row.feature }} />
                            ) : (
                              row.feature
                            )}
                          </td>
                          <td className="package-cell" data-label="Silver">
                            {row.silver}
                          </td>
                          <td className="package-cell" data-label="Gold">
                            {row.gold}
                          </td>
                          <td className="package-cell" data-label="Platinum">
                            {row.platinum}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <Tabs defaultValue="gold" className="w-full">
                  <TabsList className="grid grid-cols-3 max-w-md mx-auto">
                    <TabsTrigger value="silver">Silver</TabsTrigger>
                    <TabsTrigger value="gold">Gold <Badge className="ml-2">Popular</Badge></TabsTrigger>
                    <TabsTrigger value="platinum">Platinum</TabsTrigger>
                  </TabsList>

                  <div className="mt-6 space-y-6">
                    <TabsContent value="silver">
                      {sections.map((section, idx) => (
                        <article key={idx} className="space-y-3">
                          {section.title && (
                            <h2 className="font-semibold text-lg">{section.title}</h2>
                          )}
                          <Card className="divide-y">
                            {section.items.map((item, i) => (
                              <div key={i} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 p-4">
                                <span className="font-medium">{item.feature}</span>
                                <div className="sm:text-right">{renderValue(item.silver)}</div>
                              </div>
                            ))}
                          </Card>
                        </article>
                      ))}
                    </TabsContent>

                    <TabsContent value="gold">
                      {sections.map((section, idx) => (
                        <article key={idx} className="space-y-3">
                          {section.title && (
                            <h2 className="font-semibold text-lg">{section.title}</h2>
                          )}
                          <Card className="divide-y">
                            {section.items.map((item, i) => (
                              <div key={i} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 p-4">
                                <span className="font-medium">{item.feature}</span>
                                <div className="sm:text-right">{renderValue(item.gold)}</div>
                              </div>
                            ))}
                          </Card>
                        </article>
                      ))}
                    </TabsContent>

                    <TabsContent value="platinum">
                      {sections.map((section, idx) => (
                        <article key={idx} className="space-y-3">
                          {section.title && (
                            <h2 className="font-semibold text-lg">{section.title}</h2>
                          )}
                          <Card className="divide-y">
                            {section.items.map((item, i) => (
                              <div key={i} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 p-4">
                                <span className="font-medium">{item.feature}</span>
                                <div className="sm:text-right">{renderValue(item.platinum)}</div>
                              </div>
                            ))}
                          </Card>
                        </article>
                      ))}
                    </TabsContent>
                  </div>
                </Tabs>
              )
            )}

            {/* Structured Data for SEO */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Service",
                  name: "THULIR Construction Packages",
                  description: "Silver, Gold, and Platinum packages for home construction.",
                  provider: { "@type": "Organization", name: "THULIR Construction" },
                  areaServed: "IN",
                }),
              }}
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;