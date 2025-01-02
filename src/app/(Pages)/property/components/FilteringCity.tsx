import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setFilteringCity } from "@/store/features/FilteringProperties/filtering";
import { useAppDispatch } from "@/store/hooks";
import { Building } from "lucide-react";
import { city } from "@/interfaces";
import { cities } from "@/constants";

interface IProps {
  filterBtn?: () => void;
  type?: string;
  className?: string;
}

const FilteringCity = ({ filterBtn, type, className }: IProps) => {
  const dispatch = useAppDispatch();

  const handleValueChange = (value: string) => {
    dispatch(setFilteringCity(value as city));
    if (filterBtn) filterBtn();
  };

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger
        className={`${
          type === "city" && filterBtn ? "bg-secondary" : "bg-transparent"
        } ${className} hover:bg-secondary`}
      >
        {filterBtn ? (
          <div className="bg-transparent hover:bg-transparent text-foreground flex">
            <Building  size={18} className="lg:me-2" />
            <span className="hidden md:block">City</span>
          </div>
        ) : (
          <>
            <Building size={18} className="lg:me-2 text-textColor" />
            <SelectValue placeholder="city" />
          </>
        )}
      </SelectTrigger>
      <SelectContent>
        {cities.map((city, indx) => (
          <SelectItem key={indx} value={city.value}>
            {city.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FilteringCity;
