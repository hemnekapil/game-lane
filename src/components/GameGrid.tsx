import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../hooks/userGames";
import GameCardSckeleton from "../components/GameCardSckeleton";
import GameCradCotainer from "./GameCradCotainer";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeltons = [1, 2, 3, 4, 5, 6];

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeltons.map((id) => (
          <GameCradCotainer key={id}>
            <GameCardSckeleton />
          </GameCradCotainer>
        ))}
      {data.map((game) => (
        <GameCradCotainer key={game.id}>
          <GameCard game={game} />
        </GameCradCotainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
