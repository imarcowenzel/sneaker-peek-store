import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Query } from "@/actions/get-products";

// Define the interface for the cart state
interface SortProps {
  sortField: Query["sortField"];
  sortOrder: Query["sortOrder"];
  setSort: () => "";
}

// Create the cart state using Zustand with persistence middleware
const useSort = create(
  persist<SortProps>(
    (set, get) => ({
      sortField: "createdAt",
      sortOrder: "asc",
      setSort: () => "",
    }),
    // Configure Zustand with persistence options
    {
      name: "sort-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSort;
