import {
  Box,
  Flex,
  IconButton,
  Image,
} from '@chakra-ui/react'

export default function Navbar() {
  return (
    <>
      <Box px={{ base: 4, md: 20 }}>
        <Flex h={{ base: 28, md: 28 }} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton size={{base: 'xs', md: 'auto'}} aria-label='logo' bg={'transparent'} icon={<Image src="/navbar/logo.svg" alt="logo" />} _hover={{ bg: 'transparent' }} />

          <Flex alignItems={'center'}>
            <IconButton size={{base: 'xs', md: 'auto'}} aria-label='burger-btn' bg={'transparent'} icon={<Image src="/navbar/burger-btn.svg" alt="hamburger" />} _hover={{ bg: 'transparent' }} />
          </Flex>
        </Flex>
      </Box>
    </>
  )
}