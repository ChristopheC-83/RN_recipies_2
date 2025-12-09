import { create } from "zustand";

export const useRecipesStore = create((set) => ({
  recipes: [],
  loading: false,
  error: null,

  setRecipes: (recipes) => set({ recipes }),
  clearRecipes: () => set({ recipes: [] }),

  fetchRecipes: async () => {
    set({ loading: true, error: null });
    const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";
    // const API_KEY = "7c382b29b3b8403794083080e98a1f64"; //kiketDule
    // const API_KEY = "82de028e24b646f1926f2a097df9f832"; //DuletKik
    const API_KEY = "c32829f64eb947289d361b8ac7886ce1"; //chrisdev
    const MAX_PER_PAGE = 20;

    const url = `${BASE_URL}?apiKey=${API_KEY}&number=${MAX_PER_PAGE}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      set({ recipes: data.results || [] });
    } catch (err) {
      set({ error: err });
      console.error(err);
    } finally {
      set({ loading: false });
    }
  },
}));

//  dans un composant
// const { recipes, loading, error, fetchRecipes } = useRecipesStore();
