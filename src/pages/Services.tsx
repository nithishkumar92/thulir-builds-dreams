import { useState, useEffect } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text text-center mb-8">
              Tailored Packages for Your Dream Home
            </h1>
            
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
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;