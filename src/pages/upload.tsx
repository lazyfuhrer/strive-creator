import Layout from "@/components/Layout";
import { Box, Button, Center, Flex, Icon, IconButton, Image, Input, Text, Textarea } from "@chakra-ui/react";
import { FiUploadCloud } from "react-icons/fi";

export default function Upload() {
  return (
    <Layout>
      <Box p={5} pt={7}>

        <Box>
          <Text mb={['10px', '17px']} color="var(--White, #FFF)" fontSize={['20px', '27.174px']} fontWeight={500} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Upload profile photo</Text>
          <Center display={'inline-flex'} flexDir={'column'} gap={'15px'} w={['90%', '286px']} h={['150px', '201px']} flexShrink={0} border={'2px dashed rgba(255, 255, 255, 0.34)'} borderRadius={'15px'}>
            <Icon w={'24px'} h={'24px'} as={FiUploadCloud}/>
            <Text maxW={'217px'} color={'#DCE0E6'} fontSize={'14px'} fontWeight={300} textAlign={'center'}>Browse and chose the files you want to upload from your computer</Text>
            <IconButton size={{base: 'xs', md: 'auto'}} aria-label='logo' bg={'transparent'} icon={<Image src="/upload/add.svg" alt="logo" />} _hover={{ bg: 'transparent' }} />
          </Center>
        </Box>

        <Box mt={['15px', '27px']} >
          <Text mb={['10px', '17px']} color="var(--White, #FFF)" fontSize={['20px', '27.174px']} fontWeight={500} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Username</Text>
          <Input w={['90%', '505px']} h={'48px'} flexShrink={0} borderRadius={'10px'} borderBottom={'1px solid #676767'} bg={'rgba(32, 32, 32, 0.41)'} backdropFilter={'blur(50.45000076293945px)'} placeholder='Type your username here' _placeholder={{ color: 'var(--grayscale-pale-gray, #AAA)', fontSize: '16px', fontWeight: 400 }}/>
        </Box>

        <Box mt={['15px', '25px']}>
          <Text mb={['10px', '17px']} color="var(--White, #FFF)" fontSize={['20px', '27.174px']} fontWeight={500} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Category</Text>
          <Input w={['90%', '505px']} h={'48px'} flexShrink={0} borderRadius={'10px'} borderBottom={'1px solid #676767'} bg={'rgba(32, 32, 32, 0.41)'} backdropFilter={'blur(50.45000076293945px)'} placeholder='Type your category here' _placeholder={{ color: 'var(--grayscale-pale-gray, #AAA)', fontSize: '16px', fontWeight: 400 }} />
        </Box>

        <Box mt={['15px', '25px']}>
          <Text mb={['10px', '17px']} color="var(--White, #FFF)" fontSize={['20px', '27.174px']} fontWeight={500} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Description</Text>
          <Textarea w={['90%', '505px']} h={['100px', '161px']} flexShrink={0} borderRadius={'10px'} borderBottom={'1px solid #676767'} bg={'rgba(32, 32, 32, 0.41)'} backdropFilter={'blur(50.45000076293945px)'} placeholder='Type your description here' _placeholder={{ color: 'var(--grayscale-pale-gray, #AAA)', fontSize: '16px', fontWeight: 400}} />
        </Box>

        <Box mt={['15px', '25px']}>
          <Text mb={['10px', '17px']} color="var(--White, #FFF)" fontSize={['20px', '27.174px']} fontWeight={500} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Connect Social Media </Text>
          <Flex direction={['column', 'row']} alignItems={['center', 'flex-start']} gap={['15px', '17.81px']}>
            <Button w={['90%', '178.095px']} h={['48px', '51.944px']} flexShrink={0} borderRadius={'29.683px'} borderBottom={'1.484px solid rgba(255, 255, 255, 0.08)'} bg={'linear-gradient(118deg, rgba(2, 0, 31, 0.16) -47.79%, rgba(255, 255, 255, 0.07) 100%)'} color={'var(--White, #FFF)'} fontSize={['16px', '20.363px']} fontWeight={300} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }} leftIcon={<Image src="/upload/insta.svg" alt="insta" />} rightIcon={<Image src="/upload/add-s.svg" alt="add-s" />} >Connect</Button>
            <Button w={['90%', '178.095px']} h={['48px', '51.944px']} flexShrink={0} borderRadius={'29.683px'} borderBottom={'1.484px solid rgba(255, 255, 255, 0.08)'} bg={'linear-gradient(118deg, rgba(2, 0, 31, 0.16) -47.79%, rgba(255, 255, 255, 0.07) 100%)'} color={'var(--White, #FFF)'} fontSize={['16px', '20.363px']} fontWeight={300} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }} leftIcon={<Image src="/upload/twitter.svg" alt="insta" />} rightIcon={<Image src="/upload/add-s.svg" alt="add-s" />} >Connect</Button>
          </Flex>
        </Box>

      </Box>
    </Layout>
  );
}
