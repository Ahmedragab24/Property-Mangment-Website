"use client";

import * as React from "react";
import { Check, ChevronsUpDown, MapPinHouse } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cities } from "@/constants";
import { useAppDispatch } from "@/store/hooks";
import { setFilteringCity } from "@/store/features/FilteringProperties/filtering";

interface Iprops {
  className?: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
}

export function SearchProperty({ className, variant }: Iprops) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const dispatch = useAppDispatch();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={variant ? variant : "secondary"}
          role="combobox"
          aria-expanded={open}
          className={`w-[200px] justify-between ${className}`}
        >
          <MapPinHouse className="mr-2 h-4 w-4 text-textColor" />
          {value
            ? cities.find((cities) => cities.value === value)?.label
            : "City"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Cities..." />
          <CommandList>
            <CommandEmpty>No City found.</CommandEmpty>
            <CommandGroup>
              {cities.map((cities) => (
                <CommandItem
                  key={cities.value}
                  value={cities.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    dispatch(setFilteringCity(currentValue));
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === cities.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {cities.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
