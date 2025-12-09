import { create } from "zustand";
import { API_KEY } from "../keys";

export const useRecipesStore = create((set, get) => ({
  recipes: [],
  loading: false,
  error: null,

  //  pour un scroll infini
  offset: 0,
  hasMore: true, // si l'API dit qu'il reste des résultats

  setRecipes: (recipes) => set({ recipes }),
  clearRecipes: () => set({ recipes: [] }),

  fetchRecipes: async () => {
    // set({ loading: true, error: null }); // sans rechergement infini

    const { offset, recipes, loading, hasMore } = get();
    if (loading || !hasMore) return; // si on est en train de charger ou qu'il n'y a plus rien, on sort

    set({ loading: true, error: null });
    const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";

    const MAX_PER_PAGE = 20;

    // const url = `${BASE_URL}?apiKey=${API_KEY}&number=${MAX_PER_PAGE}`;
    const url = `${BASE_URL}?apiKey=${API_KEY}&number=${MAX_PER_PAGE}&offset=${offset}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      // set({ recipes: data.results || [] });
      set({
        recipes: [...recipes, ...(data.results || [])],
        offset: offset + MAX_PER_PAGE,
        hasMore: (data.results || []).length === MAX_PER_PAGE,
      });
    } catch (err) {
      set({ error: err });
      console.error(err);
    } finally {
      set({ loading: false });
    }
  },

  resetRecipes: () => set({ recipes: [], offset: 0, hasMore: true }),
}));

//  dans un composant
// const { recipes, loading, error, fetchRecipes } = useRecipesStore();
