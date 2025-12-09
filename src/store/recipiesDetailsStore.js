import { create } from "zustand";

export const useRecipeDetailsStore = create((set, get) => ({
  details: {}, // cache: { [id]: recipeData }
  loading: false,
  error: null,

  getRecipeById: async (recipeId) => {
    const cached = get().details[recipeId];
    if (cached) {
      console.log("j'ai utilisé le cache !");
    //   console.log("details : ", get().details);
      return cached;
    } // retourne directement le cache

    set({ loading: true, error: null });

    // const API_KEY = "7c382b29b3b8403794083080e98a1f64"; //kiketDule
    // const API_KEY = "82de028e24b646f1926f2a097df9f832"; //DuletKik
    const API_KEY = "c32829f64eb947289d361b8ac7886ce1"; //chrisdev
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch recipe details");
      const data = await res.json();
      set((state) => ({
        details: {
          ...state.details,
          [recipeId]: data, // on stocke dans le cache
        },
        loading: false,
      }));
      return data;
    } catch (err) {
      set({ error: err, loading: false });
      console.error(err);
    }
  },
}));


