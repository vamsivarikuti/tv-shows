import { AspectRatio, Card, Image, Text } from "@mantine/core";
import { type Iseason } from "tvmaze-api-ts";

export const SeasonCard = ({ number, name, image, episodeOrder }: Iseason) => {
  return (
    <Card
      shadow="sm"
      padding="sm"
      radius="md"
      style={{ display: "inline-flex", width: "130px" }}
    >
      <Card.Section>
        <AspectRatio ratio={210 / 295}>
          <Image src={image.medium} alt={name} />
        </AspectRatio>
      </Card.Section>

      <Text fw={500}>Season {number}</Text>

      <Text size="sm" c="dimmed">
        {episodeOrder} Episodes
      </Text>
    </Card>
  );
};
