
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto py-8">
        <div className="text-center mb-12">
          <span className="text-xs font-medium text-filter-accent/60 tracking-wider uppercase">
            Find Courses
          </span>
          <h1 className="mt-2 text-4xl font-medium text-filter-accent">
            Course Finder
          </h1>
        </div>
        <FilterSection />
        <div className="mt-8 text-center text-sm text-filter-text/60">
          Select filters to find courses
        </div>
      </main>
    </div>
  );
};

export default Index;

