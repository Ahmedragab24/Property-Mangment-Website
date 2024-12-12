import Link from "next/link";
import { SearchProperty } from "../components/SearchProprtys";
import { SearchProprty2 } from "../components/SearchProprtys2";
import { SearchProprty3 } from "../components/SearchProprtys3";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const FilteringButtons = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-4">
      <SearchProperty />
      <SearchProprty2 />
      <SearchProprty3 />
      <Link href={"/property"}>
        <Button variant={"secondary"} className="w-[200px]">
          Search <Search size={18} className="ml-1" />
        </Button>
      </Link>
    </div>
  );
};

export default FilteringButtons;
