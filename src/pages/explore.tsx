import CreatorCard from "@/components/CreatorCard";
import Layout from "@/components/Layout";
import TrendingProjectCard from "@/components/TrendingProjectCard";
import { Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";

export default function Explore() {
  const cardCount = 12;
  const cardIndices = Array.from({ length: cardCount }, (_, index) => index);  

  const creatorCardCount = 5;
  const creatorCardIndices = Array.from({ length: creatorCardCount }, (_, index) => index); 

  return (
    <Layout>
        <Flex direction={'column'} p={5}>
            <Flex direction={'column'}>
                <Text mb={{base: '10px', md: '17px'}} color="var(--White, #FFF)" fontSize={{base: '20px', md: '24px'}} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }} opacity={'0.5'}>Top Creators</Text>
                <Flex direction={{base: 'column', md: 'initial'}} gap={3}>
                    <Wrap justify={{ base: "center", md: "normal" }} spacing={3}>
                        {creatorCardIndices.map((index) => (
                            <WrapItem key={index} w={{base: 'full', md: 'auto'}}>
                                <CreatorCard />
                            </WrapItem>
                        ))}
                    </Wrap>
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