import { Text, Spinner, Box, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../hooks/userGames";
import GameCardSckeleton from "../components/GameCardSckeleton";
import GameCradCotainer from "./GameCradCotainer";
const GameGrid = () => {
  const { games, error, loading } = useGames();
  const skeltons = [1, 2, 3, 4, 5, 6];

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding="10px"
      spacing={6}
    >
      {loading &&
        skeltons.map((id) => (
          <GameCradCotainer key={id}>
            <GameCardSckeleton />
          </GameCradCotainer>
        ))}
      {games.map((game) => (
        <GameCradCotainer key={game.id}>
          <GameCard game={game} />
        </GameCradCotainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
