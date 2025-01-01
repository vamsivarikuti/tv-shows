import {
  ActionIcon,
  AppShell,
  Flex,
  useMantineColorScheme,
} from "@mantine/core";
import { Outlet } from "react-router-dom";
import { SearchBox } from "./SearchBox";
import { IconMoon, IconSun } from "@tabler/icons-react";

export const Layout = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Flex
          h={"inherit"}
          justify={"space-between"}
          px={"md"}
          align={"center"}
        >
          <div></div>
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

      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}

      <AppShell.Main>
        {/* Router Content */}
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
