import {
  Avatar,
  Center,
  Combobox,
  Group,
  Loader,
  rem,
  Text,
  TextInput,
  useCombobox,
} from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { IshowSearch } from "tvmaze-api-ts";

export const SearchBox = () => {
  const combobox = useCombobox();
  const [value, setValue] = useState("");
  const [debouncedValue] = useDebouncedValue(value, 300);

  const { data, isLoading } = useQuery<IshowSearch[]>({
    queryKey: ["search/shows", { q: debouncedValue }],
  });

  const shows = useMemo(() => data?.map(({ show }) => show), [data]);

  const icon = <IconSearch style={{ width: rem(16), height: rem(16) }} />;

  const options =
    shows?.map((item) => (
      <Combobox.Option value={item.id.toString()} key={item.id}>
        <Group gap="sm">
          <Avatar src={item.image?.medium} size={36} radius="xl" />
          <div>
            <Text size="sm">{item.name}</Text>
            <Text size="xs" opacity={0.5}>
              {item.type}
            </Text>
          </div>
        </Group>
      </Combobox.Option>
    )) || [];

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          placeholder="Search for your favorite TV show"
          value={value}
          styles={{ wrapper: { width: 500 } }}
          leftSection={icon}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {isLoading ? (
            <Combobox.Empty>
              <Center>
                <Loader color="blue" type="dots" size={30} />
              </Center>
            </Combobox.Empty>
          ) : options.length === 0 ? (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          ) : (
            options
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
