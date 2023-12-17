import { Calendar, Dashboard, Message } from "@/icons/strive";
import { Box, BoxProps, CloseButton, Flex, IconButton, Image } from "@chakra-ui/react";
import NavItem from "./NavItem";

const LinkItems: Array<LinkItemProps> = [
    { name: 'Dashboard', icon: Dashboard },
    { name: 'Messages', icon: Message },
    { name: 'Calender', icon: Calendar },
]

interface SidebarProps extends BoxProps {
    onClose: () => void
}

  interface LinkItemProps {
    name: string
    icon: any
}  

export default function Sidebar({ onClose, ...rest }: SidebarProps) {
    return (
        <Box
          bg={{base: 'rgba(0, 0, 10, 0.9)', md: 'initial'}}
          zIndex={'99'}
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
};