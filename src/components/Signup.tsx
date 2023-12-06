import NextLink from 'next/link';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  Link,
  Center,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

export default function SignupCard() {
  return (
    <Flex mt={{ base: 6, md: 10 }} align={'center'} justify={'center'}>
      <Stack
        w={{ base: '90%', md: '554px' }}
        spacing={5}
        p={{ base: 4, md: 0 }}
      >
        <Stack align={'center'}>
          <Text
            color={'white'}
            fontSize={{ base: '24px', md: '32px' }}
            fontWeight={400}
            textAlign={'center'}
            style={{ wordWrap: 'break-word' }}
          >
            Welcome to Strive
          </Text>

          {/* <Center pt={5} w={'full'}>
            <Button
                borderRadius={'10px'}
                bg={'var(--White, #FFF)'}
                w={{ base: 'auto', md: 'full' }}
                h={{ base: '50px', md: '60px' }}
                variant={'outline'}
                leftIcon={<FcGoogle />}
                fontSize={{ base: '16px', md: '20px' }}
                fontWeight={400}
                transition="transform 0.1s ease-out"
                _hover={{
                transform: 'scale(1.05)',
                }}
            >
                <Center color={'#02001F'} fontStyle={'normal'}>
                Continue with Google
                </Center>
            </Button>
          </Center>

          <Flex
            pt={5}
            w={'full'}
            align={'center'}
            _before={{
                content: '""',
                borderBottom: '1px solid',
                borderColor: '#FFF',
                flexGrow: 1,
                mr: {base: 3, md: 4},
            }}
            _after={{
                content: '""',
                borderBottom: '1px solid',
                borderColor: '#FFF',
                flexGrow: 1,
                ml: {base: 3, md: 4},
            }}>
            <Text fontSize={'16px'} fontWeight={400} fontStyle={'normal'}>or register with your email</Text>
          </Flex>     */}
        </Stack>

        <Box>
          <Stack spacing={4}>
            <Stack spacing={6} direction={['column', 'row']}>
              <FormControl id="firstName" isRequired>
                <FormLabel
                  fontSize={{ base: '16px', md: '18px' }}
                  fontWeight={400}
                  fontStyle={'normal'}
                >
                  First Name
                </FormLabel>
                <Input
                  border={'1px solid #575757'}
                  borderRadius={'10px'}
                  h={{ base: '36px', md: '44px' }}
                  fontSize={{ base: '18px', md: '20px' }}
                  fontWeight={400}
                  fontStyle={'normal'}
                  type="text"
                />
              </FormControl>
              <FormControl id="lastName" isRequired>
                <FormLabel
                  fontSize={{ base: '16px', md: '18px' }}
                  fontWeight={400}
                  fontStyle={'normal'}
                >
                  Last Name
                </FormLabel>
                <Input
                  border={'1px solid #575757'}
                  borderRadius={'10px'}
                  h={{ base: '36px', md: '44px' }}
                  fontSize={{ base: '18px', md: '20px' }}
                  fontWeight={400}
                  fontStyle={'normal'}
                  type="text"
                />
              </FormControl>
            </Stack>

            <FormControl id="email" isRequired>
              <FormLabel
                fontSize={{ base: '16px', md: '18px' }}
                fontWeight={400}
                fontStyle={'normal'}
              >
                Email address
              </FormLabel>
              <Input
                border={'1px solid #575757'}
                borderRadius={'10px'}
                h={{ base: '36px', md: '44px' }}
                fontSize={{ base: '18px', md: '20px' }}
                fontWeight={400}
                fontStyle={'normal'}
                type="email"
              />
            </FormControl>

            <FormControl id="username" isRequired>
              <FormLabel
                fontSize={{ base: '16px', md: '18px' }}
                fontWeight={400}
                fontStyle={'normal'}
              >
                Username
              </FormLabel>
              <Input
                border={'1px solid #575757'}
                borderRadius={'10px'}
                h={{ base: '36px', md: '44px' }}
                fontSize={{ base: '18px', md: '20px' }}
                fontWeight={400}
                fontStyle={'normal'}
                type="username"
              />
            </FormControl>

            <Stack spacing={6} direction={['column', 'row']}>
              <FormControl id="password" isRequired>
                <FormLabel
                  fontSize={{ base: '16px', md: '18px' }}
                  fontWeight={400}
                  fontStyle={'normal'}
                >
                  Password
                </FormLabel>
                <Input
                  border={'1px solid #575757'}
                  borderRadius={'10px'}
                  h={{ base: '36px', md: '44px' }}
                  fontSize={{ base: '18px', md: '20px' }}
                  fontWeight={400}
                  fontStyle={'normal'}
                  type="password"
                />
              </FormControl>
              <FormControl id="confirmPassword" isRequired>
                <FormLabel
                  fontSize={{ base: '16px', md: '18px' }}
                  fontWeight={400}
                  fontStyle={'normal'}
                >
                  Confirm Password
                </FormLabel>
                <Input
                  border={'1px solid #575757'}
                  borderRadius={'10px'}
                  h={{ base: '36px', md: '44px' }}
                  fontSize={{ base: '18px', md: '20px' }}
                  fontWeight={400}
                  fontStyle={'normal'}
                  type="password"
                />
              </FormControl>
            </Stack>

            <Stack
              pt={6}
              spacing={6}
              direction={['column', 'row']}
              align={'center'}
              justify={'center'}
            >
              <Button
                loadingText="Submitting"
                h={{ base: '36px', md: '44px' }}
                w={{ base: 'auto', md: '267px' }}
                borderRadius={'5px'}
                fontSize={{ base: '18px', md: '20px' }}
                fontWeight={400}
                fontStyle={'normal'}
                rightIcon={<FaArrowRight />}
                bg='var(--2, linear-gradient(90deg, #5BB3EB 0.13%, #D467E2 99.88%))'
                color={'white'}
                transition="transform 0.1s ease-out"
                _hover={{
                  transform: 'scale(1.05)',
                }}
              >
                Continue as a user
              </Button>
              <Button
                loadingText="Submitting"
                h={{ base: '36px', md: '44px' }}
                w={{ base: 'auto', md: '267px' }}
                borderRadius={'5px'}
                fontSize={{ base: '18px', md: '20px' }}
                fontWeight={400}
                fontStyle={'normal'}
                rightIcon={<FaArrowRight />}
                border={'1px solid #D467E2'}
                bg={'transparent'}
                transition="transform 0.1s ease-out"
                _hover={{
                  transform: 'scale(1.05)',
                }}
              >
                Continue as a creator
              </Button>
            </Stack>

            <Stack
              pt={4}
              fontSize={{ base: '14px', md: '16px' }}
              fontWeight={400}
              fontStyle={'normal'}
              color={'var(--White, #9E9E9E)'}
            >
              <Text align={'center'}>
                Already have an account?{' '}
                <Link as={NextLink} href="/login" color={'#D467E2'}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
