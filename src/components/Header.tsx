import {
    Anchor,
    Burger,
    Button,
    Flex,
    Group,
    Header,
    MediaQuery,
    Popover,
    Text,
    Title,
} from '@mantine/core'
import ViewButtons from './ViewButtons'
import type { MantineTheme } from '@mantine/core'

interface Props {
    opened: boolean
    handleOpened: () => void
    theme: MantineTheme
}

export default function HeaderComponent({
    opened,
    handleOpened,
    theme,
}: Props) {
    return (
        <Header height={{ base: 60, md: 80 }} p="md">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={handleOpened}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MediaQuery>
                <Anchor href="/" underline={false}>
                    <Title>GnNews</Title>
                </Anchor>
                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Group>
                        <ViewButtons />
                    </Group>
                </MediaQuery>
                <Popover width={200} position="bottom" withArrow shadow="md">
                    <Popover.Target>
                        <Button>Kliknij</Button>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <Text size="sm">TODO</Text>
                    </Popover.Dropdown>
                </Popover>
            </div>
        </Header>
    )
}
