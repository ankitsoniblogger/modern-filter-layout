
import { useState } from "react";
import { Check } from "lucide-react";

interface FilterItemProps {
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const FilterItem = ({ label, isSelected = false, onClick }: FilterItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`
        relative px-6 py-3 rounded-lg transition-all duration-200
        ${isSelected ? 'bg-filter-accent text-white' : 'bg-filter-bg text-filter-text hover:bg-filter-hover'}
        border border-filter-border
        flex items-center justify-center gap-2
        group focus:outline-none focus:ring-2 focus:ring-filter-accent/20
        ${isHovered ? 'animate-filter-hover' : ''}
      `}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      type="button"
    >
      {isSelected && (
        <Check className="w-4 h-4 transition-transform group-hover:scale-110" />
      )}
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default FilterItem;
