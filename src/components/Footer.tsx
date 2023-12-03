import { Box, Flex, IconButton, Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link'

export default function Footer() {
  return (
    <Box px={{ base: 4, md: 20 }}>
      <Flex h={{ base: 28, md: 28 }} alignItems={'center'} justifyContent={{ base: 'center', md: 'space-between' }}>
        <Box></Box>

        <Flex alignItems={'center'} gap={1}>
          <Link isExternal as={NextLink} href='https://www.instagram.com/strv_network/'>
            <IconButton size={{ base: 'xs', md: 'auto' }} aria-label='Instagram' bg={'transparent'} icon={<Image src="/footer/insta.svg" alt="Instagram" />} _hover={{ bg: 'transparent' }} />
          </Link>  
          <Link isExternal as={NextLink} href='https://www.linkedin.com/company/strivenetwork/'>
            <IconButton size={{ base: 'xs', md: 'auto' }} aria-label='LinkedIn' bg={'transparent'} icon={<Image src="/footer/linkedin.svg" alt="LinkedIn" />} _hover={{ bg: 'transparent' }} />
          </Link>
          <Link isExternal as={NextLink} href='https://twitter.com/StrvNetwork'>
            <IconButton size={{ base: 'xs', md: 'auto' }} aria-label='Twitter' bg={'transparent'} icon={<Image src="/footer/twitter.svg" alt="Twitter" />} _hover={{ bg: 'transparent' }} />
          </Link>
          
        </Flex>
      </Flex>
    </Box>
  );
}
