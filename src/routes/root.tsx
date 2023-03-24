import { AppShell, Aside, Burger, Header, MediaQuery, Navbar, Text, useMantineTheme, Footer, Title, Anchor } from "@mantine/core"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import FooterComponent from "../components/Footer";
import HeaderComponent from "../components/Header";

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
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
            <Text>Application navbar</Text>
          </Navbar>
        }
        footer={
          <FooterComponent />
        }
        header={
          <HeaderComponent opened={opened} handleOpened={() => setOpened((o) => !o)} theme={theme}/>
        }
      >
        <Outlet />
      </AppShell>
    );
}

export default Root