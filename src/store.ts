import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

interface GameQueryStoreType {
  gameQuery: GameQuery;
  setGenreId: (genreId?: number) => void;
  setPlatformId: (platformId?: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStoreType>((set) => ({
  gameQuery: {} as GameQuery,
  setGenreId: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
  setSortOrder: (sOrder) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder: sOrder } })),
  setSearchText: (sText) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, searchText: sText } })),
}));

export default useGameQueryStore;
