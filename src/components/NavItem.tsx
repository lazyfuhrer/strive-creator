import { Box, Flex, FlexProps, Icon, Image } from "@chakra-ui/react";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ weight: ['300', '400', '500', '600'], subsets: ['latin'] })

interface NavItemProps extends FlexProps {
    icon: any
    children: React.ReactNode
}

export default function NavItem({ icon, children, linkName , ...rest }: NavItemProps & { linkName: string }) {
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
};