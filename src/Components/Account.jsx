import React, { useState } from 'react'
import { Signup } from './Signup'
import { Login } from './Login'
import { Heading } from '@chakra-ui/react'

export const Accounts = () => {
  const [shift,setShift] = useState(true)
  return (
    <>
    <Heading as='h2' size='xl' textAlign='center' color='gray.700' mb={"100px"} mt={"50px"}>
    Welcome to Notes App 📒
  </Heading>
    <div>
      {shift ? <Login props={{shift,setShift}}/> : <Signup props={{shift,setShift}}/>}
    </div>
    </>
  )
}
