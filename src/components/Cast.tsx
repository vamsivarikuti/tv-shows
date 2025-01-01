import { Flex, Loader, Text, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { Icast } from "tvmaze-api-ts";
import { CastCard } from "./CastCard";

interface CastProps {
  showId: number;
}

export const Cast = ({ showId }: CastProps) => {
  const { data: people, isLoading } = useQuery<Icast[]>({
    queryKey: [`shows/${showId}/cast`],
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!people) {
    throw "something went wrong";
  }

  return (
    <>
      <Title my={"xs"}>Cast</Title>
      <Flex gap={"xs"}>
        {people.map((person) => (
          <CastCard key={person.person.id} {...person} />
        ))}
      </Flex>
    </>
  );
};
