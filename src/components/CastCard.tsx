import { AspectRatio, Card, Image, Text } from "@mantine/core";
import { type Icast } from "tvmaze-api-ts";

export const CastCard = ({ person, character }: Icast) => {
  return (
    <Card
      shadow="sm"
      padding="sm"
      radius="md"
      style={{ display: "inline-flex", width: "130px" }}
    >
      <Card.Section>
        <AspectRatio ratio={210 / 295}>
          <Image src={person.image.medium} alt={person.name} />
        </AspectRatio>
      </Card.Section>

      <Text fw={500} truncate>
        {person.name}
      </Text>

      <Text size="sm" c="dimmed" truncate>
        {character.name}
      </Text>
    </Card>
  );
};
