import Footer from "@/components/Footer";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react";

export default function SignIn() {
  return (
    <>
        <Box minH={'100vh'} bg={`url('/bg/image.svg'), rgba(0, 0, 10, 0.9) -143.625px 0px / 119.948% 101.82% no-repeat`} bgSize={'cover'} bgPos={'center'} mixBlendMode={'inherit'} >
            <Navbar />
            <Login />
            <Footer />
        </Box>
    </>
  )
};