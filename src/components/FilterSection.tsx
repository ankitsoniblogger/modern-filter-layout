
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const courseCategories = [
  "Engineering",
  "Medical",
  "Arts",
  "Science",
  "Commerce",
];

const subCourseCategories = {
  Engineering: ["Computer Science", "Mechanical", "Civil", "Electrical"],
  Medical: ["MBBS", "BDS", "BAMS", "BHMS"],
  Arts: ["BA", "BFA", "BPA", "BMM"],
  Science: ["BSc", "BCA", "B.Tech", "B.Arch"],
  Commerce: ["BCom", "BBA", "CA", "CS"],
};

const states = [
  "Maharashtra",
  "Delhi",
  "Karnataka",
  "Tamil Nadu",
  "Uttar Pradesh",
];

const cities = {
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Delhi: ["New Delhi", "North Delhi", "South Delhi"],
  Karnataka: ["Bangalore", "Mysore", "Hubli"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
};

const collegeTypes = ["Government", "Private", "Deemed", "Autonomous"];

const FilterSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCollegeType, setSelectedCollegeType] = useState("");
  const [globalSearch, setGlobalSearch] = useState("");
  
  // Search states for each filter
  const [categorySearch, setCategorySearch] = useState("");
  const [subCategorySearch, setSubCategorySearch] = useState("");
  const [stateSearch, setStateSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [collegeTypeSearch, setCollegeTypeSearch] = useState("");

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSelectedSubCategory(""); // Reset sub-category when category changes
  };

  const handleStateChange = (value: string) => {
    setSelectedState(value);
    setSelectedCity(""); // Reset city when state changes
  };

  // Filter functions
  const filterItems = (items: string[], searchTerm: string) => {
    return items.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
      {/* Global Course Search */}
      <div className="mb-8 relative">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for courses..."
            value={globalSearch}
            onChange={(e) => setGlobalSearch(e.target.value)}
            className="pl-10 w-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
        {/* Course Category Dropdown */}
        <div className="w-full sm:w-auto min-w-[200px]">
          <Select value={selectedCategory} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Course Category" />
            </SelectTrigger>
            <SelectContent>
              <div className="p-2">
                <Input
                  type="text"
                  placeholder="Search categories..."
                  value={categorySearch}
                  onChange={(e) => setCategorySearch(e.target.value)}
                  className="mb-2"
                />
              </div>
              {filterItems(courseCategories, categorySearch).map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sub Course Category Dropdown */}
        <div className="w-full sm:w-auto min-w-[200px]">
          <Select
            value={selectedSubCategory}
            onValueChange={setSelectedSubCategory}
            disabled={!selectedCategory}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sub Category" />
            </SelectTrigger>
            <SelectContent>
              <div className="p-2">
                <Input
                  type="text"
                  placeholder="Search sub categories..."
                  value={subCategorySearch}
                  onChange={(e) => setSubCategorySearch(e.target.value)}
                  className="mb-2"
                />
              </div>
              {selectedCategory &&
                filterItems(
                  subCourseCategories[selectedCategory as keyof typeof subCourseCategories],
                  subCategorySearch
                ).map((subCategory) => (
                  <SelectItem key={subCategory} value={subCategory}>
                    {subCategory}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* States Dropdown */}
        <div className="w-full sm:w-auto min-w-[200px]">
          <Select value={selectedState} onValueChange={handleStateChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent>
              <div className="p-2">
                <Input
                  type="text"
                  placeholder="Search states..."
                  value={stateSearch}
                  onChange={(e) => setStateSearch(e.target.value)}
                  className="mb-2"
                />
              </div>
              {filterItems(states, stateSearch).map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Cities Dropdown */}
        <div className="w-full sm:w-auto min-w-[200px]">
          <Select
            value={selectedCity}
            onValueChange={setSelectedCity}
            disabled={!selectedState}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent>
              <div className="p-2">
                <Input
                  type="text"
                  placeholder="Search cities..."
                  value={citySearch}
                  onChange={(e) => setCitySearch(e.target.value)}
                  className="mb-2"
                />
              </div>
              {selectedState &&
                filterItems(
                  cities[selectedState as keyof typeof cities],
                  citySearch
                ).map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* College Type Dropdown */}
        <div className="w-full sm:w-auto min-w-[200px]">
          <Select
            value={selectedCollegeType}
            onValueChange={setSelectedCollegeType}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="College Type" />
            </SelectTrigger>
            <SelectContent>
              <div className="p-2">
                <Input
                  type="text"
                  placeholder="Search college types..."
                  value={collegeTypeSearch}
                  onChange={(e) => setCollegeTypeSearch(e.target.value)}
                  className="mb-2"
                />
              </div>
              {filterItems(collegeTypes, collegeTypeSearch).map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
