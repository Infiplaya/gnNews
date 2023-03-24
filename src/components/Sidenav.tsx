import { Group, MediaQuery, Navbar, Text } from '@mantine/core'
import ViewButtons from './ViewButtons'

export default function Sidenav({ opened }: { opened: boolean }) {
    return (
        <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
        >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Group>
                    <Text>Change View</Text>
                    <ViewButtons />
                </Group>
            </MediaQuery>
        </Navbar>
    )
}
