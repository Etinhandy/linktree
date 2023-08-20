import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";


const Avaratr = () => {
  return (
    <Flex w={'100%'} direction={'column'} alignItems={'center'}  >
      <Image
        borderRadius="full"
        boxSize="150px"
        src="images/profile__img.png"
        alt="Dan Abramov"
      />
      <Text my={'2rem'}>John Doe</Text>
    </Flex>
  );
};

export default Avaratr;
