
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSelectedSubCategory(""); // Reset sub-category when category changes
  };

  const handleStateChange = (value: string) => {
    setSelectedState(value);
    setSelectedCity(""); // Reset city when state changes
  };

  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
        {/* Course Category Dropdown */}
        <div className="w-full sm:w-auto min-w-[200px]">
          <Select value={selectedCategory} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Course Category" />
            </SelectTrigger>
            <SelectContent>
              {courseCategories.map((category) => (
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
              {selectedCategory &&
                subCourseCategories[selectedCategory as keyof typeof subCourseCategories].map(
                  (subCategory) => (
                    <SelectItem key={subCategory} value={subCategory}>
                      {subCategory}
                    </SelectItem>
                  )
                )}
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
              {states.map((state) => (
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
              {selectedState &&
                cities[selectedState as keyof typeof cities].map((city) => (
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
              {collegeTypes.map((type) => (
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
