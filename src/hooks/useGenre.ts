import useGenres from "./useGeneres";

const useGenre = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((g) => g.id === id);
};
export default useGenre;
