"use client";

import { X } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { formatter } from "@/lib/utils";

const ActiveFilter = () => {
    
  const searchParams = useSearchParams();

  // Handle price filter deletion
  function handleDeletePrice (value: string) {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    searchParams.delete(value);
    url.search = searchParams.toString();
    window.location.href = url.toString();
  };

  if (searchParams.get("minPrice") || searchParams.get("maxPrice")) {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          Active filter
        </h1>
        <div className="item-center flex gap-2">
          {searchParams.get("minPrice") && (
            <span className="flex items-center gap-2 text-sm lg:text-base">
              <button
                onClick={() => handleDeletePrice("minPrice")}
                className="rounded-full bg-cyan-600 p-[1px] text-white"
              >
                <X size={14} />
              </button>
              <p>
                Min{" "}
                {formatter.format(
                  parseInt(searchParams?.get("minPrice") ?? "0"),
                )}
              </p>
            </span>
          )}
          {searchParams.get("maxPrice") && (
            <span className="flex items-center gap-2 text-sm lg:text-base">
              <button
                onClick={() => handleDeletePrice("maxPrice")}
                className="rounded-full bg-cyan-600 p-[1px] text-white"
              >
                <X size={14} />
              </button>
              <p>
                Max{" "}
                {formatter.format(
                  parseInt(searchParams?.get("maxPrice") ?? "0"),
                )}
              </p>
            </span>
          )}
        </div>
      </div>
    );
  }
};

export default ActiveFilter;
