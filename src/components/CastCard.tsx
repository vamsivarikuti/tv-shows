import { AspectRatio, Card, Image, Text } from "@mantine/core";
import { Icast } from "tvmaze-api-ts";

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

      {/* <Group justify="space-between" mt="md" mb="xs"> */}
      <Text fw={500} truncate>
        {person.name}
      </Text>
      {/* <Badge color="pink">On Sale</Badge> */}
      {/* </Group> */}

      <Text size="sm" c="dimmed" truncate>
        {character.name}
      </Text>

      {/* <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button> */}
    </Card>
  );
};
