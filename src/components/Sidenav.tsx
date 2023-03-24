import {
    Flex,
    Group,
    MediaQuery,
    Navbar,
    ScrollArea,
    Text,
} from '@mantine/core'
import countriesData from '../data.json'
import CountryButton from './CountryButton'
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
                    <Text size={"sm"}>Change View</Text>
                    <ViewButtons />
                </Group>
            </MediaQuery>
            <Navbar.Section grow component={ScrollArea} mt="md">
                <Flex direction="column">
                    {countriesData.map((country) => (
                        <CountryButton country={country} key={country.code} />
                    ))}
                </Flex>
            </Navbar.Section>
        </Navbar>
    )
}
