import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Slider } from "./ui/slider";
import { X } from "lucide-react";

interface FilterPanelProps {
  onFilterChange?: (filters: FilterState) => void;
  onClose?: () => void;
  isMobile?: boolean;
}

export interface FilterState {
  budget: [number, number];
  destination: string;
  duration: string;
  category: string;
  travelType: string;
}

export function FilterPanel({ onFilterChange, onClose, isMobile = false }: FilterPanelProps) {
  const [filters, setFilters] = useState<FilterState>({
    budget: [10000, 100000],
    destination: "all",
    duration: "all",
    category: "all",
    travelType: "all",
  });

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters: FilterState = {
      budget: [10000, 100000],
      destination: "all",
      duration: "all",
      category: "all",
      travelType: "all",
    };
    setFilters(defaultFilters);
    onFilterChange?.(defaultFilters);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">
      {isMobile && (
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Filters</h3>
          <button onClick={onClose} className="p-2">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <div>
        <Label className="text-sm font-semibold mb-3 block">Budget Range (₹)</Label>
        <Slider
          min={5000}
          max={200000}
          step={5000}
          value={filters.budget}
          onValueChange={(value) => handleFilterChange("budget", value as [number, number])}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>₹{filters.budget[0].toLocaleString()}</span>
          <span>₹{filters.budget[1].toLocaleString()}</span>
        </div>
      </div>

      <div>
        <Label className="text-sm font-semibold mb-2 block">Destination</Label>
        <Select value={filters.destination} onValueChange={(value) => handleFilterChange("destination", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select destination" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Destinations</SelectItem>
            <SelectItem value="domestic">Domestic</SelectItem>
            <SelectItem value="international">International</SelectItem>
            <SelectItem value="kashmir">Kashmir</SelectItem>
            <SelectItem value="rajasthan">Rajasthan</SelectItem>
            <SelectItem value="thailand">Thailand</SelectItem>
            <SelectItem value="dubai">Dubai</SelectItem>
            <SelectItem value="maldives">Maldives</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-semibold mb-2 block">Duration</Label>
        <Select value={filters.duration} onValueChange={(value) => handleFilterChange("duration", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Duration</SelectItem>
            <SelectItem value="1-3">1-3 Days</SelectItem>
            <SelectItem value="4-7">4-7 Days</SelectItem>
            <SelectItem value="8-14">8-14 Days</SelectItem>
            <SelectItem value="15+">15+ Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-semibold mb-2 block">Category</Label>
        <Select value={filters.category} onValueChange={(value) => handleFilterChange("category", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="honeymoon">Honeymoon</SelectItem>
            <SelectItem value="family">Family Tours</SelectItem>
            <SelectItem value="adventure">Adventure</SelectItem>
            <SelectItem value="religious">Religious</SelectItem>
            <SelectItem value="educational">Educational</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-semibold mb-2 block">Travel Type</Label>
        <Select value={filters.travelType} onValueChange={(value) => handleFilterChange("travelType", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="group">Group Tours</SelectItem>
            <SelectItem value="individual">Individual/FIT</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-3 pt-4">
        <Button onClick={resetFilters} variant="outline" className="flex-1">
          Reset
        </Button>
        {isMobile && (
          <Button onClick={onClose} className="flex-1 bg-primary">
            Apply
          </Button>
        )}
      </div>
    </div>
  );
}
