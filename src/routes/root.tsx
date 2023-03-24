import { AppShell, Aside, Burger, Header, MediaQuery, Navbar, Text, useMantineTheme, Footer } from "@mantine/core"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import FooterComponent from "../components/Footer";
import ViewButtons from "../components/ViewButtons";
import SelectView from "../components/ViewButtons";

function Root() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
            <Text>Application navbar</Text>
          </Navbar>
        }
        footer={
          <FooterComponent />
        }
        header={
          <Header height={{ base: 50, md: 80 }} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: "space-between" }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
                <Text>Application header</Text>
                <ViewButtons />
            </div>
          </Header>
        }
      >
        <Outlet />
      </AppShell>
    );
}

export default Root