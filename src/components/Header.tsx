import { app } from "@/firebase-config";
import { Avatar, Box, Flex, FlexProps, HStack, IconButton, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Progress, Text, useToast } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { deleteCookie } from "cookies-next";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useAccount } from "wagmi";

interface NavbarProps extends FlexProps {
  onOpen: () => void
}

export default function Header({ onOpen, ...rest }: NavbarProps) {
  const { isConnected } = useAccount();
  const router = useRouter();
  const toast = useToast();
  
  const handleSignOut = async () => {
    const auth = getAuth(app);
    try {
      await signOut(auth);
      deleteCookie('jwtToken');
      router.push('/login');

    } catch (error: any) {
      //@ts-ignore
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Flex
      bg={'rgba(0, 0, 10, 0.9)'}
      backdropFilter={'blur(8.149999618530273px)'}
      zIndex={'99'}
      position={'fixed'}
      w={'100%'}
      ml={{ base: 0, md: '60' }}
      px={{ base: 4, md: 5 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      justifyContent={{ base: 'space-between', md: 'space-between' }}
      //gap={60}
      {...rest}>
        
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

    
    <Flex
        //bg={'green'}
        direction={['column', 'row']}
        gap={{base: 0, md: 5}}
        w={['40%', '352px']}
        h={'auto'}
        align={['initial', 'center']}
        justify={'center'}
        display={{ base: 'none', md: 'flex' }}
        >
        <Text
            sx={{
            'leading-trim': 'both',
            'text-edge': 'cap',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            }}
            bg={'var(--2, linear-gradient(90deg, #5BB3EB 0.13%, #D467E2 99.88%))'}
            bgClip={'text'}
            fontSize={['12px', '16px']}
            fontWeight={600}
            fontStyle={'normal'}
            mb={[1, 0]}
        >
            Total Capital Raised
        </Text>
        <Box alignItems={['center', 'center']} justifyContent={['center', 'flex-start']} flex={'1'}>
            <Text
                color={'ar(--White, #FFF)'}
                fontSize={['8px', '12px']}
                fontWeight={400}
                fontStyle={'normal'}
                mb={[1, 1]}
                >
                $ 230.00
            </Text>
            <Progress
                size={['xs', 'sm']}
                borderRadius={'49px'}
                bg={'rgba(255, 255, 255, 0.24)'}
                colorScheme='pink'
                boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset'}
                value={40}
            />
        </Box>
    </Flex>

      
    
    <HStack spacing={{ base: '0', md: '10' }} w={ isConnected ? '850px' : '930px' } justify={{base: 'space-evenly', md: 'normal'}}
      //bg={'red'} 
    >
      <ConnectButton accountStatus={'avatar'} showBalance={false} /> 
      
      <IconButton display={{base: 'flex', md: 'none'}} size="md" bg={'transparent'} variant="ghost" aria-label="open menu" icon={<Image src="/profile/search.svg" alt="bell" />} />
     
      
      <InputGroup display={{base: 'none', md: 'initial'}} w={'auto'}>
          <InputLeftElement pointerEvents='none'>
            <BsSearch />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search for creators..."
            _placeholder={{ color: '#898989', fontSize: '11.646px'}}
            size="md"
            bg={'#1E1E1E'}
            borderRadius={'31.056px'}
            border={'none'}
            width={{ base: '100%', md: '339.674px' }}
          />
      </InputGroup>
      
      <IconButton size="lg" bg={'transparent'} variant="ghost" aria-label="open menu" icon={<Image src="/navbar/bell.svg" alt="bell" />} />

      <Menu>
        <MenuButton>
          <Avatar size={'sm'} src={ '/navbar/avatar.svg'} />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => router.push('/upload')}>Profile</MenuItem>
          <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
        </MenuList>
      </Menu>

    </HStack>
    </Flex>
  )
};