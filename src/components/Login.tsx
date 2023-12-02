import NextLink from 'next/link';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Text,
  Link,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa6';

export default function Login() {
  return (
    <Flex mt={{base: 25, md: 28}} mb={{base: 22, md: 32}} align={'center'} justify={'center'}>
      <Stack
        minW={{ base: '90%', md: '424px' }}
        spacing={8}
        p={{ base: 4, md: 0 }}
      >
        <Stack align={'center'} color={'var(--White, #FFF)'}>
          <Text
            fontSize={{ base: '24px', md: '32px' }}
            fontWeight={400}
            fontStyle={'normal'}
          >
            Login
          </Text>
        </Stack>
        <Box>
          <Stack spacing={6} color={'var(--White, #FFF)'}>
            <FormControl id="email">
              <FormLabel fontSize={{ base: '16px', md: '18px' }} fontWeight={400} fontStyle={'normal'}>
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
            <FormControl id="password">
              <FormLabel fontSize={{ base: '16px', md: '18px' }} fontWeight={400} fontStyle={'normal'}>
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
            <Stack spacing={5}>
              <Stack
                fontSize={{ base: '14px', md: '16px' }}
                fontWeight={400}
                fontStyle={'normal'}
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'start', md: 'start' }}
                justify={{ base: 'space-between', md: 'space-between' }}
              >
                <Checkbox>Remember me</Checkbox>
                <Link as={NextLink} href='/reset' color={'#5BB3EB'}>Forgot password?</Link>
              </Stack>

              <Button
                loadingText="Submitting"
                h={{ base: '36px', md: '44px' }}
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
                Continue
              </Button>


              <Stack fontSize={{ base: '14px', md: '16px' }} fontWeight={400} fontStyle={'normal'} color={'var(--White, #9E9E9E)'}>
                <Text align={{ base: 'center', md: 'center' }}>
                  Don&apos;t have an account?{' '}<Link as={NextLink} href='/signup' color={'#D467E2'}>Signup</Link>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}