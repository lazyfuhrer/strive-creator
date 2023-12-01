import { Calender, Comment, Like } from "@/icons/strive";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";

export default function TrendingProjectCard() {  
  return (
    <Box w={'279px'} h={'299px'} backdropFilter={'blur(9.220159530639648px)'} borderRadius={'5.239px 5.239px 0px 0px'} borderTop={'1.048px solid rgba(255, 255, 255, 0.08)'} bg={'linear-gradient(118deg, rgba(13, 197, 255, 0.16) -47.79%, rgba(255, 255, 255, 0.07) 100%)'}>
        <Box w={'279px'} h={'178px'} borderRadius={'5px 5px 0px 0px'} bg={'url(/explore/project.svg), lightgray 50% / cover no-repeat'} flexShrink={0}></Box>
        <Box p={3}>
            <Text color="gba(255, 255, 255, 0.87)" fontSize="16px" fontStyle="normal" fontWeight={600}>Name of project</Text>
            <Text mt={1} w={'253px'} color="gba(255, 255, 255, 0.87)" fontSize="10px" fontStyle="normal" fontWeight={300}>
                Lorem ipsum dolor sit amet consectetur. Pellentesque iaculis consectetur vel nunc facilisi. Quis scelerisque ornare elit amet.
            </Text>
            <Flex justify={'space-between'}>
                <Flex align={'center'} justify={'flex-start'} h={'34px'} gap={'5px'}>
                    <Icon as={Calender} w="12px" h="12px" color={'#FFFFFF4D'} />
                    <Text color="rgba(255, 255, 255, 0.64)" fontSize="10px" fontStyle="normal" fontWeight={300}>25-11-2023</Text>
                </Flex>

                <Flex align={'center'} justify={'flex-start'} h={'34px'} gap={'10px'}>
                    <Flex gap={1}>
                        <Icon as={Comment} w="14px" h="14px" />
                        <Text color="rgba(255, 255, 255, 0.64)" fontSize="10px" fontStyle="normal" fontWeight={300}>23</Text>
                    </Flex>

                    <Flex gap={1}>
                        <Icon as={Like} w="14px" h="14px" color={'#E34848'} />
                        <Text color="rgba(255, 255, 255, 0.64)" fontSize="10px" fontStyle="normal" fontWeight={300}>23</Text>
                    </Flex>
                </Flex>
            </Flex>
            
        </Box>
    </Box>
  )
};