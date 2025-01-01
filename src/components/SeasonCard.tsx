import { AspectRatio, Card, Image, Text } from "@mantine/core";
import { Iseason } from "tvmaze-api-ts";

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

      {/* <Group justify="space-between" mt="md" mb="xs"> */}
      <Text fw={500}>Season {number}</Text>
      {/* <Badge color="pink">On Sale</Badge> */}
      {/* </Group> */}

      <Text size="sm" c="dimmed">
        {episodeOrder} Episodes
      </Text>

      {/* <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button> */}
    </Card>
  );
};
