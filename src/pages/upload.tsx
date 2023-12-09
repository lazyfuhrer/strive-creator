import Layout from "@/components/Layout";
import { Box, Button, Center, Flex, Icon, IconButton, Image, Input, Select, Text, Textarea } from "@chakra-ui/react";
import { ChangeEvent, useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

export default function Upload() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const handleFileUpload = () => {
    // Trigger the file input click event
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
      setUploadedFileName(selectedFile.name);
    }
  };
  return (
    <Layout>
      <Box p={5} ml={{base: 0, md: 4}}>

        <Box>
          <Text mb={['10px', '17px']} color="var(--White, #FFF)" fontSize={['20px', '27.174px']} fontWeight={500} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Upload profile photo</Text>
          <Center display={'inline-flex'} flexDir={'column'} gap={'15px'} w={['100%', '286px']} h={['150px', '201px']} flexShrink={0} border={'2px dashed rgba(255, 255, 255, 0.34)'} borderRadius={'15px'}>
            <Icon w={'24px'} h={'24px'} as={FiUploadCloud}/>
            <Text maxW={'217px'} color={'#DCE0E6'} fontSize={{base: '12px', md: '14px'}} fontWeight={300} textAlign={'center'}>{uploadedFileName || "Browse and chose the files you want to upload from your computer"}</Text>
            <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
            <IconButton onClick={handleFileUpload} size={{base: 'xs', md: 'auto'}} aria-label='logo' bg={'transparent'} icon={<Image src="/upload/add.svg" alt="logo" />} _hover={{ bg: 'transparent' }} />
          </Center>
        </Box>

        <Box mt={['15px', '27px']} >
          <Text mb={['10px', '17px']} color="var(--White, #FFF)" fontSize={['20px', '27.174px']} fontWeight={500} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Username</Text>
          <Input w={['100%', '505px']} h={'48px'} flexShrink={0} borderRadius={'10px'} borderBottom={'1px solid #676767'} bg={'rgba(32, 32, 32, 0.41)'} backdropFilter={'blur(50.45000076293945px)'} placeholder='Type your username here' _placeholder={{ color: 'var(--grayscale-pale-gray, #AAA)', fontSize: {base: '14px', md: '16px'}, fontWeight: 400 }}/>
        </Box>

        <Box mt={['15px', '25px']}>
          <Text mb={['10px', '17px']} color="var(--White, #FFF)" fontSize={['20px', '27.174px']} fontWeight={500} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Category</Text>
          <Select w={['100%', '505px']} h={'48px'} flexShrink={0} borderRadius={'10px'} borderBottom={'1px solid #676767'} bg={'rgba(32, 32, 32, 0.41)'} backdropFilter={'blur(50.45000076293945px)'} color={'var(--grayscale-pale-gray, #AAA)'} fontSize={{base: '14px', md: '16px'}} fontWeight={400} placeholder='Select your category here'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Box>

        <Box mt={['15px', '25px']}>
          <Text mb={['10px', '17px']} color="var(--White, #FFF)" fontSize={['20px', '27.174px']} fontWeight={500} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Description</Text>
          <Textarea w={['100%', '505px']} h={['100px', '161px']} flexShrink={0} borderRadius={'10px'} borderBottom={'1px solid #676767'} bg={'rgba(32, 32, 32, 0.41)'} backdropFilter={'blur(50.45000076293945px)'} placeholder='Type your description here' _placeholder={{ color: 'var(--grayscale-pale-gray, #AAA)', fontSize: {base: '14px', md: '16px'}, fontWeight: 400}} />
        </Box>

        <Box mt={['15px', '25px']}>
          <Text mb={['10px', '17px']} color="var(--White, #FFF)" fontSize={['20px', '27.174px']} fontWeight={500} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Connect Social Media </Text>
          <Flex direction={['column', 'row']} alignItems={['center', 'flex-start']} gap={['15px', '17.81px']}>
            <Button w={['100%', '178.095px']} h={['48px', '51.944px']} flexShrink={0} borderRadius={'29.683px'} borderBottom={'1.484px solid rgba(255, 255, 255, 0.08)'} bg={'linear-gradient(118deg, rgba(2, 0, 31, 0.16) -47.79%, rgba(255, 255, 255, 0.07) 100%)'} color={'var(--White, #FFF)'} fontSize={['16px', '20.363px']} fontWeight={300} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }} leftIcon={<Image src="/upload/insta.svg" alt="insta" />} rightIcon={<Image src="/upload/add-s.svg" alt="add-s" />} >Connect</Button>
            <Button w={['100%', '178.095px']} h={['48px', '51.944px']} flexShrink={0} borderRadius={'29.683px'} borderBottom={'1.484px solid rgba(255, 255, 255, 0.08)'} bg={'linear-gradient(118deg, rgba(2, 0, 31, 0.16) -47.79%, rgba(255, 255, 255, 0.07) 100%)'} color={'var(--White, #FFF)'} fontSize={['16px', '20.363px']} fontWeight={300} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }} leftIcon={<Image src="/upload/twitter.svg" alt="insta" />} rightIcon={<Image src="/upload/add-s.svg" alt="add-s" />} >Connect</Button>
          </Flex>
        </Box>

      </Box>
    </Layout>
  );
}
