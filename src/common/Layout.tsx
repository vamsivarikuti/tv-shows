import {
  ActionIcon,
  AppShell,
  Burger,
  Center,
  Flex,
  useMantineColorScheme,
} from "@mantine/core";
import { Outlet } from "react-router-dom";
import { SearchBox } from "./SearchBox";
import { useDisclosure } from "@mantine/hooks";
import { IconMoon, IconSun } from "@tabler/icons-react";

export const Layout = () => {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Flex
          h={"inherit"}
          justify={"space-between"}
          px={"md"}
          align={"center"}
        >
          <div>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
          </div>
          <SearchBox />
          <ActionIcon
            variant="default"
            onClick={toggleColorScheme}
            aria-label="Toggle Color Scheme"
          >
            {colorScheme === "dark" ? (
              <IconSun></IconSun>
            ) : (
              <IconMoon></IconMoon>
            )}
          </ActionIcon>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>
        {/* Router Content */}
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
