import { Text, SimpleGrid, Button, Box } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../hooks/userGames";
import GameCardSckeleton from "../components/GameCardSckeleton";
import GameCradCotainer from "./GameCradCotainer";
import { GameQuery } from "../App";
import React from "react";
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeltons = [1, 2, 3, 4, 5, 6];

  if (error) {
    return <Text color="red.500">{error.message}</Text>;
  }

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeltons.map((id) => (
            <GameCradCotainer key={id}>
              <GameCardSckeleton />
            </GameCradCotainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCradCotainer key={game.id}>
                <GameCard game={game} />
              </GameCradCotainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
