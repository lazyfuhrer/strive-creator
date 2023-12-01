import Layout from "@/components/Layout";
import { PersonS, UpS } from "@/icons/strive";
import { Avatar, Flex, Icon, Text } from "@chakra-ui/react";

export default function Portfolio() {
  return (
    <Layout>
        <Flex direction="column" p={5}>
            <Flex direction="column">
                <Text opacity={'0.5'} color="var(--White, #FFF)" fontSize={['20px', '24px']} fontStyle={'normal'} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>My portfolio</Text>
                <Flex gap={4} mt={10} direction={{base: 'column', md: 'initial'}}>
                    <Flex p={5} direction={'column'} w={{base: 'auto', md: '356px'}} h={{base: 'auto', md: '144px'}} flexShrink={0} borderRadius={'7.709px'} border={'0.771px solid var(--2, #5BB3EB)'} bg={'rgba(31, 31, 31, 0.15)'} backdropFilter={'blur(7.169522285461426px)'}>
                        <Text color="var(--White, #FFF)" fontSize={['20px', '20.77px']} fontStyle={'normal'} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }} textTransform={'uppercase'} letterSpacing={'0.831px'}>
                            Amount invested
                        </Text>
                        <Text color="var(--White, #FFF)" fontSize={['20px', '46.052px']} fontStyle={'normal'} fontWeight={500} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }} textTransform={'uppercase'} letterSpacing={'1.842px'}>
                            $2040.00
                        </Text>
                    </Flex>
                    <Flex p={5} direction={'column'} w={{base: 'auto', md: '356px'}} h={{base: 'auto', md: '144px'}} flexShrink={0} borderRadius={'7.709px'} border={'0.771px solid var(--2, #5BB3EB)'} bg={'rgba(31, 31, 31, 0.15)'} backdropFilter={'blur(7.169522285461426px)'}>
                        <Text color="var(--White, #FFF)" fontSize={['20px', '20.77px']} fontStyle={'normal'} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }} textTransform={'uppercase'} letterSpacing={'0.831px'}>
                            Total Gain
                        </Text>
                        <Text color="var(--White, #FFF)" fontSize={['20px', '46.052px']} fontStyle={'normal'} fontWeight={500} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }} textTransform={'uppercase'} letterSpacing={'1.842px'}>
                            $240.00
                        </Text>
                        
                        <Flex mt={{base: 0, md: -2}} align={'center'}>
                            <Text color="#0FEC9C" fontSize={['10px', '11.339px']} fontStyle={'normal'} fontWeight={500} textTransform={'uppercase'} letterSpacing={'0.454px'}>+10%</Text>
                            <Icon as={UpS} h={'9px'} color="#0FEC9C" />
                        </Flex>
                        
                    </Flex>
                </Flex>
            </Flex>

            <Flex mt={10} direction={'column'}>
                <Flex w={'full'} justify={{base: 'normal', md: 'space-between'}} direction={{base: 'column', md: 'initial'}}>
                    <Text opacity={'0.5'} color="var(--White, #FFF)" fontSize={['20px', '24px']} fontStyle={'normal'} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Project</Text>
                    <Text opacity={'0.5'} color="var(--White, #FFF)" fontSize={['20px', '24px']} fontStyle={'normal'} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Invested Amount</Text>
                </Flex>
                
                <Flex gap={{base: 5, md: 0}} direction={{base: 'column', md: 'initial'}} p={4} align={{base: 'normal', md: 'center'}} mt={3} justify={{base: 'normal', md: 'space-between'}} backdropFilter={'blur(8.800000190734863px)'} bg={'linear-gradient(118deg, rgba(13, 197, 255, 0.16) -47.79%, rgba(255, 255, 255, 0.07) 100%)'} borderTop={'1px solid rgba(255, 255, 255, 0.08)'} borderRadius={'10px'}  h={{base: 'auto', md: '103px'}} flexShrink={0}>
                    <Flex gap={5} direction={{base: 'column', md: 'initial'}}>
                        <Avatar bg={'lightgray 50% / cover no-repeat, #D9D9D9'} w={'82px'} h={'82px'} borderRadius={'82px'} src="/portfolio/project.svg" />
                        <Flex direction={'column'}>
                            <Text color="var(--White, #FFF)" fontSize={['20px', '24px']} fontStyle={'normal'} fontWeight={400} >
                                Name of the project
                            </Text>
                            <Text color="var(--White, #FFF)" fontSize={['10px', '14px']} fontStyle={'normal'} fontWeight={300}>
                                Lorem ipsum dolor sit amet consectetur. Pellentesque iaculis consectetur vel nunc facilisi...
                            </Text>
                            
                            <Flex mt={1} align={'center'} gap={2}>
                                <Icon as={PersonS} />
                                <Text color="var(--White, #FFF)" fontSize={['5px', '9.251px']} fontStyle={'normal'} fontWeight={400} opacity={'0.5'}>
                                    230 Followers
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Text color="var(--White, #FFF)" fontSize={['20px', '24px']} fontStyle={'normal'} fontWeight={400} textTransform={'uppercase'} letterSpacing={'0.96px'}>
                        $2040.00
                    </Text>
                </Flex>

                <Flex gap={{base: 5, md: 0}} direction={{base: 'column', md: 'initial'}} p={4} align={{base: 'normal', md: 'center'}} mt={4} justify={{base: 'normal', md: 'space-between'}} backdropFilter={'blur(8.800000190734863px)'} bg={'linear-gradient(118deg, rgba(13, 197, 255, 0.16) -47.79%, rgba(255, 255, 255, 0.07) 100%)'} borderTop={'1px solid rgba(255, 255, 255, 0.08)'} borderRadius={'10px'}  h={{base: 'auto', md: '103px'}} flexShrink={0}>
                    <Flex gap={5} direction={{base: 'column', md: 'initial'}}>
                        <Avatar bg={'lightgray 50% / cover no-repeat, #D9D9D9'} w={'82px'} h={'82px'} borderRadius={'82px'} src="/portfolio/project.svg" />
                        <Flex direction={'column'}>
                            <Text color="var(--White, #FFF)" fontSize={['20px', '24px']} fontStyle={'normal'} fontWeight={400} >
                                Name of the project
                            </Text>
                            <Text color="var(--White, #FFF)" fontSize={['10px', '14px']} fontStyle={'normal'} fontWeight={300}>
                                Lorem ipsum dolor sit amet consectetur. Pellentesque iaculis consectetur vel nunc facilisi...
                            </Text>
                            
                            <Flex mt={1} align={'center'} gap={2}>
                                <Icon as={PersonS} />
                                <Text color="var(--White, #FFF)" fontSize={['5px', '9.251px']} fontStyle={'normal'} fontWeight={400} opacity={'0.5'}>
                                    230 Followers
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Text color="var(--White, #FFF)" fontSize={['20px', '24px']} fontStyle={'normal'} fontWeight={400} textTransform={'uppercase'} letterSpacing={'0.96px'}>
                        $2040.00
                    </Text>
                </Flex>

                <Flex gap={{base: 5, md: 0}} direction={{base: 'column', md: 'initial'}} p={4} align={{base: 'normal', md: 'center'}} mt={4} justify={{base: 'normal', md: 'space-between'}} backdropFilter={'blur(8.800000190734863px)'} bg={'linear-gradient(118deg, rgba(13, 197, 255, 0.16) -47.79%, rgba(255, 255, 255, 0.07) 100%)'} borderTop={'1px solid rgba(255, 255, 255, 0.08)'} borderRadius={'10px'}  h={{base: 'auto', md: '103px'}} flexShrink={0}>
                    <Flex gap={5} direction={{base: 'column', md: 'initial'}}>
                        <Avatar bg={'lightgray 50% / cover no-repeat, #D9D9D9'} w={'82px'} h={'82px'} borderRadius={'82px'} src="/portfolio/project.svg" />
                        <Flex direction={'column'}>
                            <Text color="var(--White, #FFF)" fontSize={['20px', '24px']} fontStyle={'normal'} fontWeight={400} >
                                Name of the project
                            </Text>
                            <Text color="var(--White, #FFF)" fontSize={['10px', '14px']} fontStyle={'normal'} fontWeight={300}>
                                Lorem ipsum dolor sit amet consectetur. Pellentesque iaculis consectetur vel nunc facilisi...
                            </Text>
                            
                            <Flex mt={1} align={'center'} gap={2}>
                                <Icon as={PersonS} />
                                <Text color="var(--White, #FFF)" fontSize={['5px', '9.251px']} fontStyle={'normal'} fontWeight={400} opacity={'0.5'}>
                                    230 Followers
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Text color="var(--White, #FFF)" fontSize={['20px', '24px']} fontStyle={'normal'} fontWeight={400} textTransform={'uppercase'} letterSpacing={'0.96px'}>
                        $2040.00
                    </Text>
                </Flex>

                <Flex gap={{base: 5, md: 0}} direction={{base: 'column', md: 'initial'}} p={4} align={{base: 'normal', md: 'center'}} mt={4} justify={{base: 'normal', md: 'space-between'}} backdropFilter={'blur(8.800000190734863px)'} bg={'linear-gradient(118deg, rgba(13, 197, 255, 0.16) -47.79%, rgba(255, 255, 255, 0.07) 100%)'} borderTop={'1px solid rgba(255, 255, 255, 0.08)'} borderRadius={'10px'}  h={{base: 'auto', md: '103px'}} flexShrink={0}>
                    <Flex gap={5} direction={{base: 'column', md: 'initial'}}>
                        <Avatar bg={'lightgray 50% / cover no-repeat, #D9D9D9'} w={'82px'} h={'82px'} borderRadius={'82px'} src="/portfolio/project.svg" />
                        <Flex direction={'column'}>
                            <Text color="var(--White, #FFF)" fontSize={['20px', '24px']} fontStyle={'normal'} fontWeight={400} >
                                Name of the project
                            </Text>
                            <Text color="var(--White, #FFF)" fontSize={['10px', '14px']} fontStyle={'normal'} fontWeight={300}>
                                Lorem ipsum dolor sit amet consectetur. Pellentesque iaculis consectetur vel nunc facilisi...
                            </Text>
                            
                            <Flex mt={1} align={'center'} gap={2}>
                                <Icon as={PersonS} />
                                <Text color="var(--White, #FFF)" fontSize={['5px', '9.251px']} fontStyle={'normal'} fontWeight={400} opacity={'0.5'}>
                                    230 Followers
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Text color="var(--White, #FFF)" fontSize={['20px', '24px']} fontStyle={'normal'} fontWeight={400} textTransform={'uppercase'} letterSpacing={'0.96px'}>
                        $2040.00
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    </Layout>
  )
};