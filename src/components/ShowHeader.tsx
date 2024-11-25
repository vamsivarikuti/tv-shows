import { Flex, Image, Text, Title } from "@mantine/core";
import { IconStarFilled } from "@tabler/icons-react";
import { Ishow } from "tvmaze-api-ts";
import { Parser } from "html-to-react";

interface ShowHeaderProps {
  show: Ishow;
}

// To Safely render HTML
const parser = Parser();

export const ShowHeader = ({ show }: ShowHeaderProps) => {
  const { image, name, premiered, genres, rating, summary } = show;

  return (
    <>
      <Flex gap={"lg"}>
        <Image src={image.medium} radius={5} />
        <Flex direction={"column"} align={"start"}>
          <Title>{name}</Title>
          <Flex>
            <Text>{premiered.split("-").shift()}</Text>
          </Flex>
          <Flex gap={"xs"}>
            <IconStarFilled color="var(--mantine-color-yellow-6)" />
            <>{rating.average}/10</>
          </Flex>
          <Text>
            <b>Genre:</b> {genres.join(" | ")}
          </Text>
          <Text>{parser.parse(summary)}</Text>
        </Flex>
      </Flex>
    </>
  );
};
