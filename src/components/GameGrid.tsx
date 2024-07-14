import { Text, SimpleGrid, Spinner } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../hooks/userGames";
import GameCardSckeleton from "../components/GameCardSckeleton";
import GameCradCotainer from "./GameCradCotainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeltons = [1, 2, 3, 4, 5, 6];

  if (error) {
    return <Text color="red.500">{error.message}</Text>;
  }
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
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
    </InfiniteScroll>
  );
};

export default GameGrid;
