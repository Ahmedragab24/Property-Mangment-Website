import React from "react";
import { useAppDispatch } from "@/store/hooks";
import { setFilteringAmenities } from "@/store/features/FilteringProperties/filtering";
import { amenitiesOptions } from "@/constants";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface Iprops {
  className?: string;
}

const SelectAmenities = ({ className }: Iprops) => {
  const [selectedAmenities, setSelectedAmenities] = React.useState<string[]>(
    []
  );
  const dispatch = useAppDispatch();

  const handleToggleChange = (value: string[]) => {
    setSelectedAmenities(value);

    const addedValues = value.filter(
      (item) => !selectedAmenities.includes(item)
    );

    addedValues.forEach((newValue) => {
      const selectedOption = amenitiesOptions.find(
        (item) => item.value === newValue
      );
      if (selectedOption) {
        dispatch(setFilteringAmenities(selectedOption.value));
      }
    });
  };

  return (
    <div className={`relative ${className}`}>
      <div className="bg-secondary rounded-lg shadow p-4">
        <ToggleGroup.Root
          type="multiple"
          value={selectedAmenities}
          onValueChange={handleToggleChange}
          className="flex flex-wrap gap-3 justify-center items-center"
        >
          {amenitiesOptions.map((item) => (
            <ToggleGroup.Item
              key={item.value}
              value={item.value}
              className={`flex items-center gap-1 text-sm px-3 py-2 border border-primary rounded-lg cursor-pointer 
                ${
                  selectedAmenities.includes(item.value)
                    ? "bg-primary"
                    : "bg-secondary"
                }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </ToggleGroup.Item>
          ))}
        </ToggleGroup.Root>
      </div>
    </div>
  );
};

export default SelectAmenities;
