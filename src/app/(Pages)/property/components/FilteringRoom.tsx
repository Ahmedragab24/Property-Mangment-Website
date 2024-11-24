import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { setFilteringRoom } from "@/store/features/FilteringProperties/filtering";
import { useAppDispatch } from "@/store/hooks";
import { DoorClosed } from "lucide-react";

interface Iprops {
  filterBtn: () => void;
  type: string;
}

const FilteringRoom = ({ filterBtn, type }: Iprops) => {
  const dispatch = useAppDispatch();

  return (
    <Select
      onValueChange={(value: string) => {
        dispatch(setFilteringRoom(value));
        filterBtn();
      }}
    >
      <SelectTrigger
        className={`${
          type == "room" ? "bg-secondary" : "bg-transparent"
        } hover:bg-secondary`}
      >
        <div className="bg-transparent hover:bg-transparent text-foreground flex">
          <DoorClosed size={18} className="lg:me-2" />
          <span className="hidden md:block">Room</span>
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
        <SelectItem value="4">4</SelectItem>
        <SelectItem value="5">5</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FilteringRoom;
