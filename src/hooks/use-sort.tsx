import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Query } from "@/actions/get-products";

interface SortProps {
  sortField: Query["sortField"];
  sortOrder: Query["sortOrder"];
  setSort: () => "";
}

const useSort = create(
  persist<SortProps>(
    (set, get) => ({
      sortField: "createdAt",
      sortOrder: "asc",
      setSort: () => "",
    }),
    {
      name: "sort-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSort;
