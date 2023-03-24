import {
    AppShell,
    MediaQuery,
    Navbar,
    Text,
    useMantineTheme,
    Group,
} from '@mantine/core'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import FooterComponent from '../components/Footer'
import HeaderComponent from '../components/Header'
import Sidenav from '../components/Sidenav'
import ViewButtons from '../components/ViewButtons'

function Root() {
    const theme = useMantineTheme()
    const [opened, setOpened] = useState(false)
    return (
        <AppShell
            styles={{
                main: {
                    background:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            navbar={<Sidenav opened={opened} />}
            footer={<FooterComponent />}
            header={
                <HeaderComponent
                    opened={opened}
                    handleOpened={() => setOpened((o) => !o)}
                    theme={theme}
                />
            }
        >
            <Outlet />
        </AppShell>
    )
}

export default Root
