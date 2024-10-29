import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

interface GameQueryStoreType{
  gameQuery:GameQuery,
  setGenreId: (genreId:number)=> void,
  setPlatformId: (platformId:number)=> void,
  setSortOrder:(sortOrder:string)=> void,
  setSearchText:(searchText:string)=> void
}

const useGameQueryStore = create<GameQueryStoreType>(set=>({} as GameQueryStoreType))

export default useGameQueryStore