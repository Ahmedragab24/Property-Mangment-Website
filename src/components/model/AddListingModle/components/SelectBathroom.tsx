import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bath } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { setFilteringBathroom } from "@/store/features/FilteringProperties/filtering";

interface Iprops {
  className?: string;
}

const SelectBathroom = ({ className }: Iprops) => {
  const dispatch = useAppDispatch();

  return (
    <Select
      onValueChange={(value) => dispatch(setFilteringBathroom(Number(value)))}
    >
      <SelectTrigger className={`w-fit px-14 ${className}`}>
        <Bath className="mr-2 h-4 w-4 text-textColor" />
        <SelectValue placeholder="Bathroom" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
        <SelectItem value="4">4</SelectItem>
        <SelectItem value="5">5</SelectItem>
        <SelectItem value="6">6</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectBathroom;
