import Layout from "@/components/Layout";
import { Box, Center, Icon, IconButton, Image, Text } from "@chakra-ui/react";
import { FiUploadCloud } from "react-icons/fi";

export default function Upload() {
  return (
    <Layout>
      <Box>
        
        <Box display="flex" flexDirection="column" alignItems={{base: 'center', md: 'inherit'}}>
          <Text mb={'17px'} color={'var(--White, #FFF)'} fontSize={'27.174px'} fontStyle={'normal'} fontWeight={500} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Upload profile photo</Text>
          <Center display={'inline-flex'} flexDir={'column'} gap={'15px'} w={'286px'} h={'201px'} flexShrink={0} border={'1px dashed rgba(255, 255, 255, 0.34)'} borderRadius={'15px'}>
            <Icon w={'24px'} h={'24px'} as={FiUploadCloud}/>
            <Text maxW={'217px'} color={'#DCE0E6'} fontSize={'14px'} fontStyle={'normal'} fontWeight={300} textAlign={'center'}>Browse and chose the files you want to upload from your computer</Text>
            <IconButton size={{base: 'xs', md: 'auto'}} aria-label='logo' bg={'transparent'} icon={<Image src="/upload/add.svg" alt="logo" />} _hover={{ bg: 'transparent' }} />
          </Center>
        </Box>

      </Box>
    </Layout>
  )
};