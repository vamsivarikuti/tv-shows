import { AppShell, Burger, Center } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { SearchBox } from "./SearchBox";
import { useDisclosure } from "@mantine/hooks";

export const Layout = () => {
  const [opened, { toggle }] = useDisclosure();

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
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Center h="inherit">
          <SearchBox />
        </Center>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>
        {/* Router Content */}
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
