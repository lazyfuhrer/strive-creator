import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  Progress,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { Urbanist } from 'next/font/google'
import {
  FiMenu,
} from 'react-icons/fi'
import { BsSearch } from "react-icons/bs";
import { Calendar, Dashboard, Message } from '@/icons/strive';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '@/firebase-config';
import { useRouter } from 'next/router';
import { deleteCookie } from 'cookies-next';

const urbanist = Urbanist({ weight: ['300', '400', '500', '600'], subsets: ['latin'] })

interface LayoutProps {
    children: React.ReactNode;
}

interface LinkItemProps {
  name: string
  icon: any
}

interface NavItemProps extends FlexProps {
  icon: any
  children: React.ReactNode
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: Dashboard },
  { name: 'Messages', icon: Message },
  { name: 'Calender', icon: Calendar },
]

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      borderRightWidth="1px"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <IconButton size={{base: 'xs', md: 'auto'}} aria-label='logo' bg={'transparent'} icon={<Image src="/navbar/logo.svg" alt="logo" />} _hover={{ bg: 'transparent' }} />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} linkName={link.name}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

const NavItem = ({ icon, children, linkName , ...rest }: NavItemProps & { linkName: string }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        className={urbanist.className}
        color={'#898989'}
        fontSize={'15.528px'}
        fontWeight={400}
        align="center"
        p="4"
        mx="4"
        mt={{ base: 0, md: 5 }}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'var(--2, linear-gradient(90deg, #5BB3EB 0.13%, #D467E2 99.88%))',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="22"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
        {linkName === 'Messages' && <Image ml={8} src="/navbar/msg.svg" />}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const router = useRouter();

  const handleSignOut = async () => {
    const auth = getAuth(app);
    try {
      deleteCookie('jwtToken');
      router.push('/login');

    } catch (error) {
      //@ts-ignore
      alert(error.message);
    }
  };

  return (
    <Flex
      //bg={'red'}
      //zIndex={'999'}
      ml={{ base: 0, md: 'auto' }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      //gap={52}
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

      <ConnectButton />
            
      <HStack spacing={{ base: '3', md: '6' }}
      //bg={'blue'}
      >
        <InputGroup display={{base: 'none', md: 'inherit'}}>
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
}
  
const Layout: React.FC<LayoutProps> = ({ children }) => {
const { isOpen, onOpen, onClose } = useDisclosure();

return (
    <Box minH="100vh" bg={`url('/bg/image.svg'), rgba(0, 0, 10, 0.9) -143.625px 0px / 119.948% 101.82% no-repeat`} bgSize={'cover'} bgPos={'center'} mixBlendMode={'inherit'}>
    <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
    <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
    >
        <DrawerContent>
        <SidebarContent onClose={onClose} />
        </DrawerContent>
    </Drawer>
    {/* mobilenav */}
    <MobileNav onOpen={onOpen} />
    <Box ml={{ base: 0, md: 60 }} p="4" bg={'linear-gradient(180deg, rgba(119, 119, 119, 0.12) 0%, rgba(119, 119, 119, 0.00) 100%)'} backdropFilter={'ter: blur(8.149999618530273px)'}>
        {/* Content */}
        {children}
    </Box>
    </Box>
);
}

export default Layout;