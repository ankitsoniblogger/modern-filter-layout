
import FilterSection from "@/components/FilterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto py-8">
        <div className="text-center mb-12">
          <span className="text-xs font-medium text-filter-accent/60 tracking-wider uppercase">
            Browse Collection
          </span>
          <h1 className="mt-2 text-4xl font-medium text-filter-accent">
            Our Products
          </h1>
        </div>
        <FilterSection />
        <div className="mt-8 text-center text-sm text-filter-text/60">
          Showing all products
        </div>
      </main>
    </div>
  );
};

export default Index;
