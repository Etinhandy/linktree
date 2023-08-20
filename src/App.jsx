import React from "react";
import { Flex, Stack, Text, Icon, Image } from "@chakra-ui/react";
import Avaratr from "./components/Avaratr";
import Tab from "./components/Tab";
import { AiOutlineSlack, AiOutlineGithub } from "react-icons/ai";

const App = () => {
  return (
    <Stack
      w={"100%"}
      minH={"100vh"}
      background={"#FFFFFF"}
      color={"black"}
      p={{base: '1rem', md: '2rem'}}
    >
      <Avaratr />
      <Tab name="Twitter Link" />
      <Tab name="KodeCamp Team" />
      <Tab name="KodeCamp Books" />
      <Tab name="Python Books" />
      <Tab name="Background Check for Coders" />
      <Tab name="Design Books" />

      <Flex justifyContent={"center"} my={"1rem"} alignItems={'center'}>
      <Image
          boxSize="base"
          h={"8"}
          w={'8'}
          objectFit="cover"
          src="/images/slack.png"
          alt="Slack logo"
        />
        <Icon p="4" as={AiOutlineGithub} w="16" h="24" />
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        w={"100%"}
        alignItems={{base: 'flex-start'}}
        justifyContent={{ md: "space-between", lg: "space-between" }}
      >
        <Image
          boxSize="base"
          objectFit="cover"
          src="images/kodecamp logo white 2.png"
          alt="KodeCamp logo"
        />

        <Text>KodeCamp Internship Task</Text>

        <Image
          boxSize="base"
          h={"2rem"}
          objectFit="cover"
          src="images/KodeHauz Logo 1.png"
          alt="KodeHauz logo"
        />
      </Flex>
    </Stack>
  );
};

export default App;
