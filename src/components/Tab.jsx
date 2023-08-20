import { Flex, Link } from '@chakra-ui/react'
import { LayoutGroup } from 'framer-motion'
import React from 'react'

const Tab = (props) => {
    console.log(props);
  return (
    <Flex w={'100'} h={'3rem'} bg={'blackAlpha.300'} justifyContent={'center'} alignItems={'center'} borderRadius={'base<z'} p={'1rem'}>
        <Link>{props.name}</Link>
    </Flex>
  )
}

export default Tab