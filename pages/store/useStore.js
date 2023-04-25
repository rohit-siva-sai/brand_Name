import { create } from "zustand";

export const useProductStore = create((set, get) => ({
  products: [],
  filteredProducts: [],

  setProducts: (products) =>
    set((state) => ({
      ...state,
      products,
      filteredProducts: products, // Set filteredProducts to initial products
    })),

  filterProducts: (filters) =>
    set((state) => ({
      ...state,
      filteredProducts: state.products.filter((product) => {
        // Filter products based on selected filters
        let matchesFilters = true;
        filters.forEach((filter) => {
          if (!product[filter.key].includes(filter.value)) {
            matchesFilters = false;
          }
        });
        return matchesFilters;
      }),
    })),
}));

export default useProductStore;
