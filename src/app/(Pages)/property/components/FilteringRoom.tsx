import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setFilteringRoom, setFilteringType } from "@/store/features/FilteringProperties/filtering";
import { useAppDispatch } from "@/store/hooks";
import { DoorClosed } from "lucide-react";
import { rooms } from "@/constants";

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
        dispatch(setFilteringRoom(Number(value)));
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
        {rooms.map(({ label, value }, index) => (
          <SelectItem key={index} value={value} onClick={() => dispatch(setFilteringType("room"))}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FilteringRoom;
