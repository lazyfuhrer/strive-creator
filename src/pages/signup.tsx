import SignupCard from "@/components/Signup";
import { Box } from "@chakra-ui/react";

export default function SignUp() {
  return (
    <>
        <Box bg={`url('/bg/image.svg'), rgba(0, 0, 10, 0.9) -143.625px 0px / 119.948% 101.82% no-repeat`} bgSize={'cover'} bgPos={'center'} mixBlendMode={'inherit'} >
            <SignupCard />
        </Box>
    </>
  )
};