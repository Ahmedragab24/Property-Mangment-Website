import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setFilteringRoom } from "@/store/features/FilteringProperties/filtering";
import { useAppDispatch } from "@/store/hooks";
import { DoorClosed } from "lucide-react";

interface Iprops {
  filterBtn?: () => void;
  type?: string;
  className?: string;
}

const FilteringRoom = ({ filterBtn, type, className }: Iprops) => {
  const dispatch = useAppDispatch();

  return (
    <Select
      onValueChange={(value: string) => {
        dispatch(setFilteringRoom(value));
        if (filterBtn) filterBtn();
      }}
    >
      <SelectTrigger
        className={`${
          type == "room" && filterBtn ? "bg-secondary" : "bg-transparent"
        } ${className} hover:bg-secondary`}
      >
        {filterBtn ? (
          <div className="bg-transparent hover:bg-transparent text-foreground flex">
            <DoorClosed size={18} className="lg:me-2" />
            <span className="hidden md:block">Room</span>
          </div>
        ) : (
          <>
            <DoorClosed size={18} className="lg:me-2 text-textColor" />
            <SelectValue placeholder="Room" />
          </>
        )}
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
