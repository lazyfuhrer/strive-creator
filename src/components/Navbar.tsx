import {
  Box,
  Flex,
  IconButton,
  Image,
  Link,
} from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Navbar() {
  return (
    <>
      <Box px={{ base: 4, md: 20 }}>
        <Flex h={{ base: 28, md: 28 }} alignItems={'center'} justifyContent={'space-between'}>
          <Link as={NextLink} href='/'>
            <IconButton size={{base: 'xs', md: 'auto'}} aria-label='logo' bg={'transparent'} icon={<Image src="/navbar/logo.svg" alt="logo" />} _hover={{ bg: 'transparent' }} />
          </Link>
          
          <Flex alignItems={'center'}>
          <Link as={NextLink} href='/'>
            <IconButton size={{base: 'xs', md: 'auto'}} aria-label='burger-btn' bg={'transparent'} icon={<Image src="/navbar/burger-btn.svg" alt="hamburger" />} _hover={{ bg: 'transparent' }} />
          </Link>
            
          </Flex>
        </Flex>
      </Box>
    </>
  )
}