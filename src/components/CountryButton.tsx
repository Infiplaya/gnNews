import { Button, Flex, Image, Text } from '@mantine/core'

interface Country {
    name: string
    code: string
}

export default function CountryButton({ country }: { country: Country }) {
    return (
        <Button variant={'subtle'} color="indigo" style={{ textAlign: 'left' }}>
            <Flex align={'center'} gap={'md'}>
                <Text>{country.name}</Text>
                <Image
                    src={`https://flagsapi.com/${country.code}/flat/16.png`}
                ></Image>
            </Flex>
        </Button>
    )
}
