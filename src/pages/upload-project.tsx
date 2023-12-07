import Layout from "@/components/Layout";
import { Checkmark, Upload, VideoCall, Write } from "@/icons/strive";
import { getMaticExchangeRates } from "@/utils/actions";
import { Button, Center, Flex, Icon, IconButton, Image, Input, InputGroup, InputLeftAddon, Select, Text, Textarea } from "@chakra-ui/react";
import { ChangeEvent, useRef, useState } from "react";
import { FiUploadCloud, FiUpload } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";

export default function UploadProject() {
    const [usdValueToConvert, setUsdValueToConvert] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const handleConvertClick = async () => {
      const result = await getMaticExchangeRates(usdValueToConvert);
      if (result !== null) {
        console.log(result)
      } else {
        console.error('Failed to retrieve MATIC value');
      }
    };

    

    const handleFileUpload = () => {
    // Trigger the file input click event
    if (fileInputRef.current) {
        fileInputRef.current.click();
    }
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    // Handle the selected file as needed
    console.log('Selected file:', selectedFile);
    };

  return (
    <Layout>
        <Flex direction={'column'} p={5}>

            <Flex direction={{base: 'column', md: 'initial'}} justify={'space-between'} gap={10}>
                
                <Flex p={7} align={'center'} justify={'center'} gap={6} direction={'column'} w={['auto', '1000px']}  borderRadius={'20px'} borderBottom={'1px solid #676767'} bg={'rgba(32, 32, 32, 0.41)'} backdropFilter={'blur(50.45000076293945px)'}>

                    <Flex w={{base: 'auto', md: '100%'}}>
                        <Flex w={'225px'} h={'43px'} p={'4px'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={'10px'} borderRadius={'8px'} bg={'rgba(255, 255, 255, 0.10)'}>
                            <Select placeholder='Choose File Type' color={'#DCE0E6'} fontSize={'16px'} fontWeight={400} fontStyle={'normal'} w={'216px'} h={'35px'} border={'none'} justifyContent={'center'} alignItems={'center'} gap={'10px'} borderRadius={'8px'} bg={'rgba(255, 255, 255, 0.10)'}>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Flex>
                    </Flex>
                    

                    <Center display={'inline-flex'} flexDir={'column'} gap={'15px'} w={['auto', '777px']} h={['auto', '217px']} p={'24px'} flexShrink={0} border={'1px dashed #2D333E'} bg={'rgba(13, 13, 13, 0.13)'} borderRadius={'4px'}>
                        <Icon w={'24px'} h={'24px'} as={FiUploadCloud}/>
                        <Text color={'#DCE0E6'} fontSize={{base: '12px', md: '15px'}} fontWeight={400} textAlign={'center'} alignSelf={'stretch'}>Browse and chose the files you want to upload from your computer</Text>
                        <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
                        <IconButton onClick={handleFileUpload} size={{base: 'xs', md: 'auto'}} aria-label='logo' bg={'transparent'} icon={<Image src="/upload/add.svg" alt="logo" />} _hover={{ bg: 'transparent' }} />
                    </Center>

                    <Button
                        loadingText="Uploading"
                        h={{ base: '36px', md: '44px' }}
                        w={{ base: 'auto', md: '411px' }}
                        borderRadius={'5px'}
                        fontSize={{ base: '14px', md: '16px' }}
                        fontWeight={400}
                        fontStyle={'normal'}
                        leftIcon={<FiUpload />}
                        bg='var(--2, linear-gradient(90deg, #5BB3EB 0.13%, #D467E2 99.88%))'
                        color={'white'}
                    >
                        Upload Content
                    </Button>

                </Flex>

                <Flex p={6} direction={'column'} borderRadius={'20px'} borderBottom={'1px solid #676767'} bg={'rgba(82, 82, 82, 0.41)'} backdropFilter={'blur(50.45000076293945px)'} w={{base: 'auto', md: '400px'}}>
                    <Image src="/upload-project/box.svg" alt="logo" />

                    <Flex mt={4}>
                        <Image src="/upload-project/progress.svg" alt="logo" />
                        <Flex ml={3} w={'100%'} mt={8} gap={5}  direction={'column'} fontSize={'16.39px'} color={'#DCE0E6'}>
                            <Flex mt={1} align={'center'} justify={'space-between'} fontWeight={400}>
                                <Flex gap={2}>
                                    <Icon as={VideoCall} w={'25px'} h={'25px'} />
                                    <Text>Choose file type</Text>
                                </Flex>
                                <Icon as={Checkmark} w={'25px'} h={'25px'} />
                            </Flex>

                            <Flex align={'center'} justify={'space-between'} fontWeight={400}>
                                <Flex gap={2}>
                                    <Icon as={Upload} w={'25px'} h={'25px'} />
                                    <Text>Upload Your File</Text>
                                </Flex>
                                <Icon as={Checkmark} w={'25px'} h={'25px'} />
                            </Flex>

                            <Flex align={'center'} justify={'space-between'} fontWeight={400}>
                                <Flex gap={2}>
                                    <Icon as={Write} w={'25px'} h={'25px'} />
                                    <Text>Add Project Title</Text>
                                </Flex>
                                <Icon as={Checkmark} w={'25px'} h={'25px'} />
                            </Flex>


                            <Flex align={'center'} justify={'space-between'} fontWeight={400}>
                                <Flex gap={2}>
                                    <Icon as={Write} w={'25px'} h={'25px'} />
                                    <Text>Write Description</Text>
                                </Flex>
                                <Icon as={Checkmark} w={'25px'} h={'25px'} />
                            </Flex>

                            <Flex align={'center'} justify={'space-between'} fontWeight={400}>
                                <Flex gap={2}>
                                    <Icon as={MdAttachMoney} w={'25px'} h={'25px'} />
                                    <Text>Enter Amount</Text>
                                </Flex>
                                <Icon as={Checkmark} w={'25px'} h={'25px'} />
                            </Flex>
                        </Flex>
                    </Flex>

                    <Button
                        mt={6}
                        loadingText="Publishing"
                        p={'8px 16px'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={'8px'}
                        h={{ base: '36px', md: '44px' }}
                        borderRadius={'5px'}
                        fontSize={'16px'}
                        fontWeight={400}
                        fontStyle={'normal'}
                        bg='var(--2, linear-gradient(90deg, #5BB3EB 0.13%, #D467E2 99.88%))'
                        color={'white'}
                        onClick={handleConvertClick}
                    >
                        Publish
                    </Button>
                </Flex>
            </Flex>

            <Flex direction={'column'} mt={10} gap={7}>
                <Flex direction={'column'} gap={3}>
                    <Text color="rgba(255, 255, 255, 0.64)" fontSize={['20px', '27.174px']} fontStyle={'normal'} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Title</Text>
                    <Input placeholder="Type your project title here" _placeholder={{ color: 'var(--grayscale-pale-gray, #AAA)', fontSize: {base: '15px', md: '20px'}, fontWeight: 400, fontStyle: 'normal'}} h={['55px', '79px']} borderRadius={'10px'} borderBottom={'1px solid #676767'} bg={'rgba(32, 32, 32, 0.41)'} backdropFilter={'blur(50.45000076293945px)'}/>
                </Flex>

                <Flex direction={'column'} gap={3}>
                    <Text color="rgba(255, 255, 255, 0.64)" fontSize={['20px', '27.174px']} fontStyle={'normal'} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Description</Text>
                    <Textarea placeholder="Add your description..." p={5} _placeholder={{ color: 'var(--grayscale-pale-gray, #AAA)', fontSize: {base: '15px', md: '20px'}, fontWeight: 400, fontStyle: 'normal'}} h={['179px', '225px']} borderRadius={'10px'} borderBottom={'1px solid #676767'} bg={'rgba(32, 32, 32, 0.41)'} backdropFilter={'blur(50.45000076293945px)'}/>
                </Flex>

                <Flex direction={'column'} gap={3}>
                    <Text color="rgba(255, 255, 255, 0.64)" fontSize={['20px', '27.174px']} fontStyle={'normal'} fontWeight={400} sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}>Amount</Text>
                    <InputGroup>
                        <InputLeftAddon alignItems={'center'} justifyContent={'center'} h={['55px', '79px']} w={'79px'} fontSize={'20px'}>$</InputLeftAddon>
                        <Input type="number" value={usdValueToConvert} onChange={(e) => setUsdValueToConvert(parseFloat(e.target.value))} placeholder="Enter amount" _placeholder={{ color: 'var(--grayscale-pale-gray, #AAA)', fontSize: {base: '15px', md: '20px'}, fontWeight: 400, fontStyle: 'normal'}} h={['55px', '79px']} borderRadius={'10px'} borderBottom={'1px solid #676767'} bg={'rgba(32, 32, 32, 0.41)'} backdropFilter={'blur(50.45000076293945px)'}/>
                    </InputGroup>
                </Flex>
            </Flex>

        </Flex>
    </Layout>
  )
};