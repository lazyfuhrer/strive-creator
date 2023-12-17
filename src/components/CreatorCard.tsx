import { Camera, PersonS } from "@/icons/strive";
import { Flex, Icon, Image, Text } from "@chakra-ui/react";

export default function CreatorCard() {
  return (
    <Flex direction={{base: 'column', md: 'initial'}} w={{base: 'full', md: '275.217px'}} h={{base: 'full', md: '113.325px'}} borderRadius={'7.709px'} border={'0.771px solid var(--2, #5BB3EB)'} bg={'rgba(31, 31, 31, 0.15)'} backdropFilter={'blur(7.169522285461426px)'}>
        <Flex p={4} w={'100%'} align={{base: 'center', md: 'normal'}} justify={'space-between'} direction={{base: 'column', md: 'initial'}} gap={4}>
            <Image src="/explore/explore.svg" w={{base: 'auto', md: 'initial'}} h={{base: 'auto', md: 'initial'}} />
            <Flex direction={'column'} w={'100%'} align={{base: 'center', md: 'normal'}}>
                <Text color="var(--White, #FFF)" fontStyle={'normal'} fontSize={{base: '17px', md: '18.502px'}} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Andy Ledenov</Text>
                <Flex mt={1} align={'center'} gap={2}>
                    <Icon as={Camera} />
                    <Text color="var(--White, #FFF)" fontSize={{base: '10px', md: '10.793px'}} fontStyle={'normal'} fontWeight={400}>
                        Vlogger
                    </Text>
                </Flex>
                <Flex mt={2} align={'center'} gap={2}>
                    <Icon as={PersonS} opacity={'0.5'} />
                    <Text color="var(--White, #FFF)" fontSize={{base: '10px', md: '9.251px'}} fontStyle={'normal'} fontWeight={400} opacity={'0.5'}>
                        230 Followers
                    </Text>
                </Flex>
            </Flex>    
        </Flex>
    </Flex>
  )
};