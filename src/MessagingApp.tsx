import React from 'react'
import { Center } from '@chakra-ui/react'
import DisplayMessages from './components/DisplayMessages'

interface Props {
  user: string
  logout:() => void
}

const MessagingApp = ({ user, logout }: Props): JSX.Element => {
  return (
    <Center>
        <DisplayMessages user={user} logout={logout}/>
    </Center>
  )
}

export default MessagingApp