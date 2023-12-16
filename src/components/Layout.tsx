import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react'
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout ({ children } : any) {  
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={`url('/bg/image.svg'), rgba(0, 0, 10, 0.9) -143.625px 0px / 119.948% 101.82% no-repeat`} bgSize={'cover'} bgPos={'center'} mixBlendMode={'inherit'}>
      <Sidebar onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <Header onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4" bg={'linear-gradient(180deg, rgba(119, 119, 119, 0.12) 0%, rgba(119, 119, 119, 0.00) 100%)'} backdropFilter={'ter: blur(8.149999618530273px)'}>
        {/* Content */}
        {children}
      </Box>
    </Box>
  );
};