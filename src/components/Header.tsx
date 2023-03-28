import {
    Anchor,
    Burger,
    Button,
    Group,
    Header,
    MediaQuery,
    Popover,
    Text,
    Title,
} from '@mantine/core'
import ViewButtons from './ViewButtons'
import { useTranslation } from 'react-i18next'

interface Props {
    opened: boolean
    handleOpened: () => void
}

export const lngs = {
    en: { nativeName: 'English' },
    pl: { nativeName: 'Polish' },
}

export default function HeaderComponent({ opened, handleOpened }: Props) {
    const { t, i18n } = useTranslation()

    return (
        <Header height={{ base: 60, md: 80 }} p="md">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    justifyContent: 'flex-start',
                    gap: '40px',
                }}
            >
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={handleOpened}
                        size="sm"
                        mr="xl"
                    />
                </MediaQuery>
                <Anchor
                    href="/"
                    underline={false}
                    style={{ marginRight: 'auto' }}
                >
                    <Title>GnNews</Title>
                </Anchor>
                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Group>
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
                <Popover width={200} position="bottom" withArrow shadow="md">
                    <Popover.Target>
                        <Button>{t('clickme')}</Button>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <Text size="sm">TODO</Text>
                    </Popover.Dropdown>
                </Popover>
            </div>
        </Header>
    )
}
