import { Flex, Loader, Text, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { Iseason } from "tvmaze-api-ts";
import { SeasonCard } from "./SeasonCard";

interface SeasonsProps {
  showId: number;
}

export const Seasons = ({ showId }: SeasonsProps) => {
  const { data: seasons, isLoading } = useQuery<Iseason[]>({
    queryKey: [`shows/${showId}/seasons`],
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!seasons) {
    throw "something went wrong";
  }

  return (
    <>
      <Title my={"md"}>{seasons.length} Seasons</Title>
      <Flex gap={"md"} justify={"space-between"} style={{ overflowX: "auto" }}>
        {seasons.map((season) => (
          <SeasonCard key={season.id} {...season}></SeasonCard>
        ))}
      </Flex>
    </>
  );
};
