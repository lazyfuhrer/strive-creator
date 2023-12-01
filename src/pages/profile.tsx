import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { Camera, Verified } from "@/icons/strive";
import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export default function Profile() {
  const cardCount = 12;
  const cardIndices = Array.from({ length: cardCount }, (_, index) => index);
  return (
    <Layout>
      <Flex justify={"space-between"} p={7} pr={12} pl={{ base: 0, md: 2 }}>
        <Flex gap={"17px"}>
          <Box
            bgImage={"/profile/profile.svg"}
            w={"208px"}
            h={"201px"}
            borderRadius={"15px"}
          ></Box>
          <Flex direction={"column"} gap={"12px"} justify={"flex-start"}>
            <Flex
              align={"center"}
              justify={"flex-start"}
              h={"34px"}
              gap={"10px"}
            >
              <Text
                color="var(--White, #FFF)"
                fontSize="24px"
                fontStyle="normal"
                fontWeight={600}
              >
                Andy Ledenov
              </Text>
              <Icon as={Verified} w="27px" h="27px" color={"#22A4F6"} />
            </Flex>

            <Flex align={"center"} justify={"flex-start"} gap={"10px"}>
              <Icon as={Camera} w="24px" h="24px" opacity={"0.7"} />
              <Text
                color="var(--White, #FFF)"
                fontSize="14px"
                fontStyle="normal"
                fontWeight={400}
              >
                Vlogger
              </Text>
            </Flex>

            <Text
              color="var(--White, #FFF)"
              fontSize="14px"
              fontStyle="normal"
              fontWeight={300}
              maxW={"498px"}
            >
              Lorem ipsum dolor sit amet consectetur. Pellentesque iaculis
              consectetur vel nunc facilisi. Quis scelerisque ornare elit amet.
              Lacinia sed in dui eu. Consequat lectus orci purus dictum enim
              maecenas viverra massa.
            </Text>

            <Flex alignItems={"center"} gap={"3.92px"}>
              <Button
                w={["auto", "120px"]}
                h={["auto", "35px"]}
                flexShrink={0}
                borderRadius={"20px"}
                borderBottom={"1px solid rgba(255, 255, 255, 0.08)"}
                bg={
                  "linear-gradient(118deg, rgba(2, 0, 31, 0.16) -47.79%, rgba(255, 255, 255, 0.07) 100%)"
                }
                backdropFilter={"blur(11.5px)"}
                color={"var(--White, #FFF)"}
                fontSize={["auto", "13.72px"]}
                fontWeight={300}
                sx={{ "text-edge": "cap", "leading-trim": "both" }}
                leftIcon={<Image src="/profile/insta-s.svg" alt="insta" />}
                rightIcon={<Image src="/profile/add-s.svg" alt="add" />}
              >
                Connect
              </Button>

              <Button
                w={["auto", "120px"]}
                h={["auto", "35px"]}
                flexShrink={0}
                borderRadius={"20px"}
                borderBottom={"1px solid rgba(255, 255, 255, 0.08)"}
                bg={
                  "linear-gradient(118deg, rgba(2, 0, 31, 0.16) -47.79%, rgba(255, 255, 255, 0.07) 100%)"
                }
                backdropFilter={"blur(11.5px)"}
                color={"var(--White, #FFF)"}
                fontSize={["auto", "13.72px"]}
                fontWeight={300}
                sx={{ "text-edge": "cap", "leading-trim": "both" }}
                leftIcon={<Image src="/profile/twitter.svg" alt="twitter" />}
                rightIcon={<Image src="/profile/add-s.svg" alt="add" />}
              >
                Connect
              </Button>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          maxW={"395px"}
          maxH={"197px"}
          flexShrink={0}
          direction={"column"}
          gap={2}
        >
          <Flex gap={2}>
            <Flex
              p={2}
              pl={3}
              direction={"column"}
              w={"205px"}
              h={"95px"}
              flexShrink={0}
              borderRadius={"5.239px"}
              borderTop={"1.048px solid rgba(255, 255, 255, 0.08)"}
              bg={
                "linear-gradient(118deg, rgba(13, 197, 255, 0.16) -47.79%, rgba(255, 255, 255, 0.07) 100%)"
              }
              backdropFilter={"blur(9.220159530639648px)"}
            >
              <Flex w={"100%"} justify={"space-between"}>
                <Flex direction={"column"} gap={2}>
                  <Text
                    color="var(--White, #FFF)"
                    fontSize="12.573px"
                    fontStyle="normal"
                    fontWeight={300}
                  >
                    Influencer Rank
                  </Text>
                  <Text
                    color="var(--White, #FFF)"
                    fontSize="17.892px"
                    fontStyle="normal"
                    fontWeight={600}
                  >
                    5.7%
                  </Text>
                </Flex>
                <Image src="/profile/up.svg" />
              </Flex>

              <Flex align={"center"} gap={1} mt={2}>
                <Image w={"6.286px"} h={"6.286px"} src="/profile/up-s.svg" />
                <Text
                  color="var(--White, #FFF)"
                  fontSize="10.477px"
                  fontStyle="normal"
                  fontWeight={500}
                >
                  2 Positions{" "}
                </Text>
                <Text
                  color="var(--White, #FFF)"
                  fontSize="10.477px"
                  fontStyle="normal"
                  fontWeight={300}
                >
                  vs previous day
                </Text>
              </Flex>
            </Flex>

            <Flex
              p={2}
              pl={3}
              direction={"column"}
              w={"205px"}
              h={"95px"}
              flexShrink={0}
              borderRadius={"5.239px"}
              borderTop={"1.048px solid rgba(255, 255, 255, 0.08)"}
              bg={
                "linear-gradient(118deg, rgba(13, 197, 255, 0.16) -47.79%, rgba(255, 255, 255, 0.07) 100%)"
              }
              backdropFilter={"blur(9.220159530639648px)"}
            >
              <Flex w={"100%"} justify={"space-between"}>
                <Flex direction={"column"} gap={2}>
                  <Text
                    color="var(--White, #FFF)"
                    fontSize="12.573px"
                    fontStyle="normal"
                    fontWeight={300}
                  >
                    Total Followers
                  </Text>
                  <Text
                    color="var(--White, #FFF)"
                    fontSize="17.892px"
                    fontStyle="normal"
                    fontWeight={600}
                  >
                    5.7%
                  </Text>
                </Flex>
                <Image mt={3} src="/profile/down.svg" />
              </Flex>

              <Flex align={"center"} gap={1} mt={2}>
                <Image w={"6.286px"} h={"6.286px"} src="/profile/down-s.svg" />
                <Text
                  color="var(--White, #FFF)"
                  fontSize="10.477px"
                  fontStyle="normal"
                  fontWeight={500}
                >
                  2 Positions{" "}
                </Text>
                <Text
                  color="var(--White, #FFF)"
                  fontSize="10.477px"
                  fontStyle="normal"
                  fontWeight={300}
                >
                  vs previous day
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex gap={2}>
            <Flex
              p={2}
              pl={3}
              direction={"column"}
              w={"205px"}
              h={"95px"}
              flexShrink={0}
              borderRadius={"5.239px"}
              borderTop={"1.048px solid rgba(255, 255, 255, 0.08)"}
              bg={
                "linear-gradient(118deg, rgba(13, 197, 255, 0.16) -47.79%, rgba(255, 255, 255, 0.07) 100%)"
              }
              backdropFilter={"blur(9.220159530639648px)"}
            >
              <Flex w={"100%"} justify={"space-between"}>
                <Flex direction={"column"} gap={2}>
                  <Text
                    color="var(--White, #FFF)"
                    fontSize="12.573px"
                    fontStyle="normal"
                    fontWeight={300}
                  >
                    Total Views
                  </Text>
                  <Text
                    color="var(--White, #FFF)"
                    fontSize="17.892px"
                    fontStyle="normal"
                    fontWeight={600}
                  >
                    5.7%
                  </Text>
                </Flex>
                <Image src="/profile/up.svg" />
              </Flex>

              <Flex align={"center"} gap={1} mt={2}>
                <Image w={"6.286px"} h={"6.286px"} src="/profile/up-s.svg" />
                <Text
                  color="var(--White, #FFF)"
                  fontSize="10.477px"
                  fontStyle="normal"
                  fontWeight={500}
                >
                  2 Positions{" "}
                </Text>
                <Text
                  color="var(--White, #FFF)"
                  fontSize="10.477px"
                  fontStyle="normal"
                  fontWeight={300}
                >
                  vs previous day
                </Text>
              </Flex>
            </Flex>

            <Flex
              p={2}
              pl={3}
              direction={"column"}
              w={"205px"}
              h={"95px"}
              flexShrink={0}
              borderRadius={"5.239px"}
              borderTop={"1.048px solid rgba(255, 255, 255, 0.08)"}
              bg={
                "linear-gradient(118deg, rgba(13, 197, 255, 0.16) -47.79%, rgba(255, 255, 255, 0.07) 100%)"
              }
              backdropFilter={"blur(9.220159530639648px)"}
            >
              <Flex w={"100%"} justify={"space-between"}>
                <Flex direction={"column"} gap={2}>
                  <Text
                    color="var(--White, #FFF)"
                    fontSize="12.573px"
                    fontStyle="normal"
                    fontWeight={300}
                  >
                    Engagement Rate
                  </Text>
                  <Text
                    color="var(--White, #FFF)"
                    fontSize="17.892px"
                    fontStyle="normal"
                    fontWeight={600}
                  >
                    5.7%
                  </Text>
                </Flex>
                <Image mt={3} src="/profile/down.svg" />
              </Flex>

              <Flex align={"center"} gap={1} mt={2}>
                <Image w={"6.286px"} h={"6.286px"} src="/profile/down-s.svg" />
                <Text
                  color="var(--White, #FFF)"
                  fontSize="10.477px"
                  fontStyle="normal"
                  fontWeight={500}
                >
                  2 Positions{" "}
                </Text>
                <Text
                  color="var(--White, #FFF)"
                  fontSize="10.477px"
                  fontStyle="normal"
                  fontWeight={300}
                >
                  vs previous day
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Divider
        mt={2}
        border={"1px solid rgba(128, 128, 128, 0.30)"}
        bg={
          "linear-gradient(180deg, rgba(119, 119, 119, 0.12) 0%, rgba(119, 119, 119, 0.00) 100%)"
        }
        backdropFilter={"blur(8.149999618530273px)"}
      />

      <Flex
        p={5}
        pl={{ base: 0, md: 2 }}
        direction={"column"}
        alignContent={"center"}
        align={{ base: "center", md: "flex-start" }}
        justify="center"
      >
        <Flex
          w="full"
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "flex-start" }}
          textAlign="center"
          justify={{ base: "center", md: "space-between" }}
          pt={{ base: 0, md: 5 }}
          
        >
          <Text
            sx={{ "text-edge": "cap", "leading-trim": "both" }}
            color="var(--White, #FFF)"
            fontSize={{ base: "24px", md: "27.174px" }}
            fontWeight={500}
            mb={{ base: 4, md: 0 }}
          >
            Recent Projects
          </Text>
          <InputGroup
            w="full"
            maxW={{ base: "full", md: "516px" }}
            h={{ base: "auto", md: "44px" }}
            flexShrink={0}
          >
            <Input
              className={jakarta.className}
              type="text"
              placeholder="Start searching here..."
              _placeholder={{
                color: "#8D8D8D",
                fontSize: "16px",
                fontWeight: 400,
                fontStyle: "normal",
              }}
              bg={"rgba(255, 255, 255, 0.19)"}
              borderRadius={"68px"}
              border={"1px solid #686868"}
              backdropFilter={"blur(2px)"}
            />
            <InputRightElement pointerEvents="none">
              <BsSearch />
            </InputRightElement>
          </InputGroup>
        </Flex>

        <Flex
          mt={8}
          direction="column"
          alignItems={{ base: "center", md: "normal" }}
        >
          <Wrap spacing={4} justify={{ base: "center", md: "normal" }}>
            {cardIndices.map((index) => (
              <WrapItem key={index}>
                <ProjectCard />
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </Flex>
    </Layout>
  );
}