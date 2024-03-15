"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

enum SortBy {
  Latest = "createdAt",
  Low = "totalPrice",
  High = "totalPrice",
}

const SortForm = () => {
  const [defaultPlaceholder, setDefaultPlaceholder] =
    useState<string>("Sort by");
  const [defaultValue, setDefaultValue] = useState<string>("");
  const searchParams = useSearchParams();

  // Update sort placeholder and default value based on search parameters
  useEffect(() => {
    const sortBy = searchParams.get("sortBy");
    const order = searchParams.get("order");

    if (sortBy === "createdAt" && order === "asc") {
      setDefaultPlaceholder("Sort by latest");
      setDefaultValue("latest");
    } else if (sortBy === "totalPrice" && order === "asc") {
      setDefaultPlaceholder("Sort by price: low to high");
      setDefaultValue("low");
    } else if (sortBy === "totalPrice" && order === "desc") {
      setDefaultPlaceholder("Sort by price: high to low");
      setDefaultValue("high");
    }
  }, [searchParams]);

  // Update search parameters for sorting
  const updateSearchParams = (sortBy: SortBy, order: string) => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    searchParams.delete("sortBy");
    searchParams.delete("order");
    searchParams.set("sortBy", sortBy);
    searchParams.set("order", order);
    url.search = searchParams.toString();
    window.location.href = url.toString();
  };

  // Handle sort change event
  const handleSortChange = (option: string) => {
    switch (option) {
      case "latest":
        updateSearchParams(SortBy.Latest, "asc");
        break;
      case "low":
        updateSearchParams(SortBy.Low, "asc");
        break;
      case "high":
        updateSearchParams(SortBy.High, "desc");
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex items-center gap-x-5">
      <Select onValueChange={(e) => handleSortChange(e)} value={defaultValue}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={defaultPlaceholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="latest">Sort by latest</SelectItem>
          <SelectItem value="low">Sort by price: low to high</SelectItem>
          <SelectItem value="high">Sort by price: high to low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortForm;
