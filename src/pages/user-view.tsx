import Layout from "@/components/Layout";
import { Badge_1, Badge_2, Comment, Like, PersonS } from "@/icons/strive";
import { Avatar, Box, Button, Flex, Icon, Image, Progress, Text } from "@chakra-ui/react";

export default function UserView() {
  return (
    <Layout>
      <Flex direction={'column'} p={5} gap={7}>
        {/* <Flex
          w={'auto'}
          h={'444px'}
          borderRadius={'10px'}
          //bgSize={'100% 100%'} // or 'contain'
          bg={'url(/user-view/cover.svg), lightgray 50% / cover no-repeat'}
          bgRepeat={'no-repeat'}
          backgroundPosition="center"
        >
        </Flex> */}
        <Image src="/user-view/cover.svg" alt="cover" backgroundSize={'cover'} bgPosition={'center'} />

        <Flex direction={'column'} gap={7}>

          <Flex direction={'column'} gap={3}>
            <Flex justify={'space-between'} align={'center'}>
              <Text color="var(--White, #FFF)" fontSize={['27px', '32px']} fontWeight={500} fontStyle={'normal'} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Name of this project</Text>
              <Flex align={'center'} h={'34px'} gap={'20px'} fontSize={'19.926px'}>
                <Flex gap={1}>
                  <Icon as={Comment} w="27.896px" h="27.896px" />
                  <Text color="rgba(255, 255, 255, 0.64)" fontStyle="normal" fontWeight={300}>23</Text>
                </Flex>

                <Flex gap={1}>
                  <Icon as={Like} w="26.193px" h="26.193px" color={'#E34848'} />
                  <Text color="rgba(255, 255, 255, 0.64)" fontStyle="normal" fontWeight={300}>23</Text>
                </Flex>
              </Flex>            
            </Flex>
            <Text maxW={{base: 'auto', md: '782px'}} color="var(--White, #FFF)" fontSize={['11px', '16px']} fontWeight={300} fontStyle={'normal'}>Lorem ipsum dolor sit amet consectetur. Enim amet ultrices risus velit suspendisse vitae laoreet. Etiam enim turpis velit cursus. Ipsum morbi aenean magna non erat. Nibh tortor pharetra purus quis mi.</Text>
          </Flex>

          <Flex direction={{base: 'column', md: 'initial'}} gap={{base: 1, md: 3}} mt={3} align={'center'} >
            <Avatar bg={'lightgray 50% / cover no-repeat, #D9D9D9'} w={{base: '100px', md: '46px'}} h={{base: '100px', md: '46px'}} borderRadius={{base: '100px', md: '46px'}} src="/user-view/user-1.svg" />
            <Flex direction={'column'} align={{base: 'center', md: 'normal'}} gap={{base: 3, md: 0}}>
              <Flex direction={{base: 'column', md: 'initial'}} gap={{base: 2, md: 5}} align={{base: 'center', md: 'center'}}>
                <Text color="var(--White, #FFF)" fontSize={['25px', '18.502px']} fontWeight={400} fontStyle={'normal'} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Andy Ledenov</Text>
                <Button w={{base: '120px', md: '50px'}} h={{base: '29px', md: '19px'}} borderRadius={'43px'} border={'1px solid var(--2, #5BB3EB)'} color="var(--White, #FFF)" fontSize={{base: '13px', md: '9.251px'}} fontWeight={400} fontStyle={'normal'}>Follow</Button>
              </Flex>
              <Flex align={'center'} gap={2}>
                <Icon as={PersonS} opacity={'0.5'} />
                <Text color="var(--White, #FFF)" fontSize={['11px', '9.251px']} fontStyle={'normal'} fontWeight={400} opacity={'0.5'}>230 Followers</Text>
              </Flex>      
            </Flex>
          </Flex>

        </Flex>

        <Flex mt={5} justify={'space-between'} p={8} h={{base: 'auto', md: '231px'}} borderRadius={'20px'} borderBottom={'1px solid #676767'} bg={'rgba(32, 32, 32, 0.41)'} backdropFilter={'blur(50.45000076293945px)'}>
          <Flex direction={'column'} w={{base: '100%', md: '65%'}} gap={2}>
            <Text color="var(--White, #FFF)" fontSize={['30px', '35.915px']} fontWeight={400} fontStyle={'normal'} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Total Capital Raised</Text>
            <Flex justify={'space-between'} align={'center'}>
              <Text color="var(--White, #FFF)" fontSize={['21px', '26.282px']} fontWeight={400} fontStyle={'normal'} bg={'var(--2, linear-gradient(90deg, #5BB3EB 0.13%, #D467E2 99.88%))'} bgClip={'text'} sx={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>$ 230.00</Text>
              <Text color="var(--White, #FFF)" fontSize={['17px', '22.239px']} fontStyle={'normal'} fontWeight={400}>35%</Text>            
            </Flex>
            <Progress
              size={['sm', 'md']}
              borderRadius={'77.679px'}
              bg={'rgba(255, 255, 255, 0.24)'}
              colorScheme='pink'
              boxShadow={'0px 6.341px 6.341px 0px rgba(0, 0, 0, 0.25) inset'}
              value={35}
            />
            <Flex justify={'space-between'} align={'center'} fontSize={'14.877px'}>
              <Flex align={'center'} gap={2}>
                  <Icon as={Badge_1} w={'21.253px'} h={'21.253px'}/>
                  <Text color="#494949"  fontStyle={'normal'} fontWeight={400}>None</Text>
              </Flex>
              <Flex align={'center'} gap={2}>
                <Icon as={Badge_2} w={'21.253px'} h={'21.253px'} color={'red'}/>
                <Text color="#494949"  fontStyle={'normal'} fontWeight={400} >Bronze</Text>
              </Flex>
            </Flex>    
          </Flex>
          <Image display={{base: 'none', md: 'initial'}} src="/user-view/vault.svg" alt="vault" />
        </Flex>

      </Flex>
    </Layout>
  );
}
