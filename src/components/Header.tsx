import React from 'react'
import { Flex } from '@chakra-ui/react'
import ColorModeSwitcher from './ColorModeSwitcher'

const Header = () => {
  return (
    <Flex justifyContent='flex-end' w='100%'>
        <ColorModeSwitcher />
    </Flex>
  )
}

export default Header