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
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '@/firebase-config';

export default function SignupCard() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (fieldName: keyof typeof user, value: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      [fieldName]: value,
    }));
  };  

  const handleSignUp = async () => {
    const auth = getAuth(app);
    // Check if any required field is empty
    const requiredFields: Array<keyof typeof user> = ['firstName', 'lastName', 'email', 'username', 'password', 'confirmPassword'];
  
    for (const field of requiredFields) {
      if (!user[field]) {
        alert(`Please fill in the all the fields`);
        // You may want to display an error message or handle this case accordingly
        return;
      }
    }
  
    // Check if password and confirmPassword match
    if (user.password !== user.confirmPassword) {
      alert('Password and Confirm Password do not match');
      // You may want to display an error message or handle this case accordingly
      return;
    }
  
    // Continue with sign-up logic if all fields are filled and passwords match
    console.log('Signing up with:', user);
  
    // Call your sign-up function here
    // Example: signUpUser(user.email, user.password);
    /*try {
      const userCredential = await createUserWithEmailAndPassword( auth, user.email, user.password );
      
      // Signed up 
      const signedUpUser = userCredential.user;
      console.log("User signed up:", signedUpUser.uid);
      
      // Additional logic if needed...
  
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      return;
      // Handle the error as needed...
    }*/
  };  

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
                  value={user.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
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
                  value={user.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
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
                value={user.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
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
                value={user.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
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
                  value={user.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
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
                  value={user.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
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
                onClick={handleSignUp}
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
                onClick={handleSignUp}
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
