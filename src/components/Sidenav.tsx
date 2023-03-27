import {
    Button,
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
import { useTranslation } from 'react-i18next'
import { lngs } from './Header'

export default function Sidenav({ opened }: { opened: boolean }) {
    const { t, i18n } = useTranslation()
    return (
        <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
        >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Group>
                    <Text size={'sm'}>Change View</Text>
                    <ViewButtons />
                    <div style={{ marginLeft: '20px' }}>
                        {Object.keys(lngs).map((lng) => (
                            <Button
                                key={lng}
                                variant={
                                    lng === i18n.resolvedLanguage
                                        ? 'outline'
                                        : 'subtle'
                                }
                                color={'grape'}
                                size={'xs'}
                                onClick={() => i18n.changeLanguage(lng)}
                            >
                                {lngs[lng].nativeName}
                            </Button>
                        ))}
                    </div>
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
