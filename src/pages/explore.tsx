import Layout from "@/components/Layout";
import TrendingProjectCard from "@/components/TrendingProjectCard";
import { Camera, PersonS } from "@/icons/strive";
import { Flex, Icon, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";

export default function Explore() {
  const cardCount = 12;
  const cardIndices = Array.from({ length: cardCount }, (_, index) => index);  
  return (
    <Layout>
        <Flex direction={'column'} p={5}>
            <Flex direction={'column'}>
                <Text mb={['10px', '17px']} color="var(--White, #FFF)" fontSize={['20px', '24px']} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }} opacity={'0.5'}>Top Creators</Text>
                <Flex direction={{base: 'column', md: 'initial'}} gap={3}>
                    <Flex direction={{base: 'column', md: 'initial'}} w={{base: 'auto', md: '275.217px'}} h={{base: 'auto', md: '113.325px'}} borderRadius={'7.709px'} border={'0.771px solid var(--2, #5BB3EB)'} bg={'rgba(31, 31, 31, 0.15)'} backdropFilter={'blur(7.169522285461426px)'}>
                        <Flex p={4} w={'100%'} justify={'space-between'} direction={{base: 'column', md: 'initial'}} gap={4}>
                            <Image src="/explore/explore.svg" />
                            <Flex direction={'column'} w={'100%'} align={{base: 'center', md: 'normal'}}>
                                <Text color="var(--White, #FFF)" fontStyle={'normal'} fontSize={['15px', '18.502px']} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Andy Ledenov</Text>
                                <Flex mt={1} align={'center'} gap={2}>
                                    <Icon as={Camera} />
                                    <Text color="var(--White, #FFF)" fontSize={['5px', '10.793px']} fontStyle={'normal'} fontWeight={400}>
                                        Vlogger
                                    </Text>
                                </Flex>
                                <Flex mt={2} align={'center'} gap={2}>
                                    <Icon as={PersonS} opacity={'0.5'} />
                                    <Text color="var(--White, #FFF)" fontSize={['5px', '9.251px']} fontStyle={'normal'} fontWeight={400} opacity={'0.5'}>
                                        230 Followers
                                    </Text>
                                </Flex>
                            </Flex>    
                        </Flex>
                    </Flex>

                    <Flex direction={{base: 'column', md: 'initial'}} w={{base: 'auto', md: '275.217px'}} h={{base: 'auto', md: '113.325px'}} borderRadius={'7.709px'} border={'0.771px solid var(--2, #5BB3EB)'} bg={'rgba(31, 31, 31, 0.15)'} backdropFilter={'blur(7.169522285461426px)'}>
                        <Flex p={4} w={'100%'} justify={'space-between'} direction={{base: 'column', md: 'initial'}} gap={4}>
                            <Image src="/explore/explore.svg" />
                            <Flex direction={'column'} w={'100%'} align={{base: 'center', md: 'normal'}}>
                                <Text color="var(--White, #FFF)" fontStyle={'normal'} fontSize={['15px', '18.502px']} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Andy Ledenov</Text>
                                <Flex mt={1} align={'center'} gap={2}>
                                    <Icon as={Camera} />
                                    <Text color="var(--White, #FFF)" fontSize={['5px', '10.793px']} fontStyle={'normal'} fontWeight={400}>
                                        Vlogger
                                    </Text>
                                </Flex>
                                <Flex mt={2} align={'center'} gap={2}>
                                    <Icon as={PersonS} opacity={'0.5'} />
                                    <Text color="var(--White, #FFF)" fontSize={['5px', '9.251px']} fontStyle={'normal'} fontWeight={400} opacity={'0.5'}>
                                        230 Followers
                                    </Text>
                                </Flex>
                            </Flex>    
                        </Flex>
                    </Flex>

                    <Flex direction={{base: 'column', md: 'initial'}} w={{base: 'auto', md: '275.217px'}} h={{base: 'auto', md: '113.325px'}} borderRadius={'7.709px'} border={'0.771px solid var(--2, #5BB3EB)'} bg={'rgba(31, 31, 31, 0.15)'} backdropFilter={'blur(7.169522285461426px)'}>
                        <Flex p={4} w={'100%'} justify={'space-between'} direction={{base: 'column', md: 'initial'}} gap={4}>
                            <Image src="/explore/explore.svg" />
                            <Flex direction={'column'} w={'100%'} align={{base: 'center', md: 'normal'}}>
                                <Text color="var(--White, #FFF)" fontStyle={'normal'} fontSize={['15px', '18.502px']} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Andy Ledenov</Text>
                                <Flex mt={1} align={'center'} gap={2}>
                                    <Icon as={Camera} />
                                    <Text color="var(--White, #FFF)" fontSize={['5px', '10.793px']} fontStyle={'normal'} fontWeight={400}>
                                        Vlogger
                                    </Text>
                                </Flex>
                                <Flex mt={2} align={'center'} gap={2}>
                                    <Icon as={PersonS} opacity={'0.5'} />
                                    <Text color="var(--White, #FFF)" fontSize={['5px', '9.251px']} fontStyle={'normal'} fontWeight={400} opacity={'0.5'}>
                                        230 Followers
                                    </Text>
                                </Flex>
                            </Flex>    
                        </Flex>
                    </Flex>

                    <Flex direction={{base: 'column', md: 'initial'}} w={{base: 'auto', md: '275.217px'}} h={{base: 'auto', md: '113.325px'}} borderRadius={'7.709px'} border={'0.771px solid var(--2, #5BB3EB)'} bg={'rgba(31, 31, 31, 0.15)'} backdropFilter={'blur(7.169522285461426px)'}>
                        <Flex p={4} w={'100%'} justify={'space-between'} direction={{base: 'column', md: 'initial'}} gap={4}>
                            <Image src="/explore/explore.svg" />
                            <Flex direction={'column'} w={'100%'} align={{base: 'center', md: 'normal'}}>
                                <Text color="var(--White, #FFF)" fontStyle={'normal'} fontSize={['15px', '18.502px']} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Andy Ledenov</Text>
                                <Flex mt={1} align={'center'} gap={2}>
                                    <Icon as={Camera} />
                                    <Text color="var(--White, #FFF)" fontSize={['5px', '10.793px']} fontStyle={'normal'} fontWeight={400}>
                                        Vlogger
                                    </Text>
                                </Flex>
                                <Flex mt={2} align={'center'} gap={2}>
                                    <Icon as={PersonS} opacity={'0.5'} />
                                    <Text color="var(--White, #FFF)" fontSize={['5px', '9.251px']} fontStyle={'normal'} fontWeight={400} opacity={'0.5'}>
                                        230 Followers
                                    </Text>
                                </Flex>
                            </Flex>    
                        </Flex>
                    </Flex>

                    <Flex direction={{base: 'column', md: 'initial'}} w={{base: 'auto', md: '275.217px'}} h={{base: 'auto', md: '113.325px'}} borderRadius={'7.709px'} border={'0.771px solid var(--2, #5BB3EB)'} bg={'rgba(31, 31, 31, 0.15)'} backdropFilter={'blur(7.169522285461426px)'}>
                        <Flex p={4} w={'100%'} justify={'space-between'} direction={{base: 'column', md: 'initial'}} gap={4}>
                            <Image src="/explore/explore.svg" />
                            <Flex direction={'column'} w={'100%'} align={{base: 'center', md: 'normal'}}>
                                <Text color="var(--White, #FFF)" fontStyle={'normal'} fontSize={['15px', '18.502px']} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Andy Ledenov</Text>
                                <Flex mt={1} align={'center'} gap={2}>
                                    <Icon as={Camera} />
                                    <Text color="var(--White, #FFF)" fontSize={['5px', '10.793px']} fontStyle={'normal'} fontWeight={400}>
                                        Vlogger
                                    </Text>
                                </Flex>
                                <Flex mt={2} align={'center'} gap={2}>
                                    <Icon as={PersonS} opacity={'0.5'} />
                                    <Text color="var(--White, #FFF)" fontSize={['5px', '9.251px']} fontStyle={'normal'} fontWeight={400} opacity={'0.5'}>
                                        230 Followers
                                    </Text>
                                </Flex>
                            </Flex>    
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>


            <Flex mt={'30px'} direction={'column'}>
                <Text mb={['10px', '17px']} color="var(--White, #FFF)" fontSize={['20px', '24px']} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }} opacity={'0.5'}>Explore by Category</Text>
                <Flex gap={5}>
                    <Flex align={'center'} justify={'center'} textAlign={'center'} minW={'52px'} minH={'32px'} borderRadius={'31.056px'} bg={'var(--2, linear-gradient(90deg, #5BB3EB 0.13%, #D467E2 99.88%))'} color="var(--White, #FFF)" fontStyle={'normal'} fontSize={['5px', '11.646px']} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>All</Flex>
                    <Flex align={'center'} justify={'center'} textAlign={'center'} minW={'91px'} minH={'31px'} borderRadius={'31.056px'} bg={'#1D1D1D'} color="#898989" fontStyle={'normal'} fontSize={['5px', '11.646px']} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Adventure</Flex>
                    <Flex align={'center'} justify={'center'} textAlign={'center'} minW={'91px'} minH={'31px'} borderRadius={'31.056px'} bg={'#1D1D1D'} color="#898989" fontStyle={'normal'} fontSize={['5px', '11.646px']} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Life Style</Flex>
                    <Flex align={'center'} justify={'center'} textAlign={'center'} minW={'91px'} minH={'31px'} borderRadius={'31.056px'} bg={'#1D1D1D'} color="#898989" fontStyle={'normal'} fontSize={['5px', '11.646px']} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Web 3.0</Flex>
                    <Flex align={'center'} justify={'center'} textAlign={'center'} minW={'91px'} minH={'31px'} borderRadius={'31.056px'} bg={'#1D1D1D'} color="#898989" fontStyle={'normal'} fontSize={['5px', '11.646px']} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Cooking</Flex>
                    <Flex align={'center'} justify={'center'} textAlign={'center'} minW={'91px'} minH={'31px'} borderRadius={'31.056px'} bg={'#1D1D1D'} color="#898989" fontStyle={'normal'} fontSize={['5px', '11.646px']} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Sports</Flex>
                    <Flex align={'center'} justify={'center'} textAlign={'center'} minW={'91px'} minH={'31px'} borderRadius={'31.056px'} bg={'#1D1D1D'} color="#898989" fontStyle={'normal'} fontSize={['5px', '11.646px']} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Gaming</Flex>
                    <Flex align={'center'} justify={'center'} textAlign={'center'} minW={'91px'} minH={'31px'} borderRadius={'31.056px'} bg={'#1D1D1D'} color="#898989" fontStyle={'normal'} fontSize={['5px', '11.646px']} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Music</Flex>
                </Flex>
            </Flex>

            <Flex mt={'30px'} direction={'column'}>
                <Text mb={['10px', '17px']} color="var(--White, #FFF)" fontSize={['20px', '24px']} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }} opacity={'0.5'}>Trending Projects</Text>
                <Flex
                    mt={5}
                    direction="column"
                    alignItems={{ base: "center", md: "normal" }}
                    >
                    <Wrap spacing={4} justify={{ base: "center", md: "normal" }}>
                        {cardIndices.map((index) => (
                        <WrapItem key={index}>
                            <TrendingProjectCard />
                        </WrapItem>
                        ))}
                    </Wrap>
                </Flex>
            </Flex>
        </Flex>
    </Layout>
  )
};