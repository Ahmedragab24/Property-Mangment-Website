import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { setFilteringGuests } from "@/store/features/FilteringProperties/filtering";

const SelectGests = () => {
  const dispatch = useAppDispatch();

  return (
    <Select onValueChange={(value) => dispatch(setFilteringGuests(value))}>
      <SelectTrigger className="w-fit px-14">
        <User className="mr-2 h-4 w-4 text-textColor" />
        <SelectValue placeholder="Guests" />
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

export default SelectGests;
