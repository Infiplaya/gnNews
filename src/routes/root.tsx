import { AppShell } from '@mantine/core'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import FooterComponent from '../components/Footer'
import HeaderComponent from '../components/Header'
import Sidenav from '../components/Sidenav'

function Root() {
    const [opened, setOpened] = useState(false)
    return (
        <AppShell
            navbarOffsetBreakpoint="sm"
            navbar={<Sidenav opened={opened} />}
            footer={<FooterComponent />}
            header={
                <HeaderComponent
                    opened={opened}
                    handleOpened={() => setOpened((o) => !o)}
                />
            }
        >
            <Outlet />
        </AppShell>
    )
}

export default Root
