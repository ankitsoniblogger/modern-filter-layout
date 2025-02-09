
import { useState } from "react";
import FilterItem from "./FilterItem";

const filters = [
  "All Items",
  "New Arrivals",
  "Best Sellers",
  "Sale Items",
  "Limited Edition",
];

const FilterSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Items");

  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        {filters.map((filter) => (
          <FilterItem
            key={filter}
            label={filter}
            isSelected={selectedFilter === filter}
            onClick={() => setSelectedFilter(filter)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
