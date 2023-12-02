import Layout from "@/components/Layout";
import { Box, Flex } from "@chakra-ui/react";

export default function UserView() {
  return (
    <Layout>
        <Flex direction={'column'}>
            <Flex w={'1162px'} h={'444px'} borderRadius={'10px'} bg={'url(/user-view/cover.svg), lightgray 50% / cover no-repeat'}></Flex>

        </Flex>
    </Layout>
  )
};