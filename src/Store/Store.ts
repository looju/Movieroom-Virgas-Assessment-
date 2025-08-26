import { create } from "zustand";
import { persist } from "zustand/middleware";

type WatchlistState = {
  movies: any[];
  darkTheme: boolean;
  addMovie: (movie: any) => void;
  removeMovie: (id: string) => void;
  switchMode: (v: boolean) => void;
};

export const useWatchlistStore = create<WatchlistState>()(
  persist(
    (set, get) => ({
      movies: [],
      darkTheme: true,
      addMovie: (movie) => {
        const exists = get().movies.find((m) => m.id === movie.id);
        if (!exists) {
          set({ movies: [...get().movies, movie] });
        }
      },
      switchMode: (v) => set({ darkTheme: v }),
      removeMovie: (id) =>
        set({ movies: get().movies.filter((m) => m.id !== id) }),
    }),
    {
      name: "watchlist-storage",
    }
  )
);
