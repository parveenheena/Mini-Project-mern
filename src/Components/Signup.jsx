import { Button, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

export const Signup = ({props}) => {
    const [data,setData] = useState({});
    const {shift,setShift} = props
    console.log(data)
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch("https://notesapp-qdvp.onrender.com/users/register",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json" 
            },
            body: JSON.stringify(data)
        }).then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err))
        setShift(!shift)
    }
  return (
    <Flex justifyContent={"center"} width={"30%"} m={"auto"}>
            <FormControl display={"flex"} flexDirection={"column"}>
            <FormLabel>Username</FormLabel>
                <Input type='text' placeholder='Enter your name' onChange={(e) => setData({ ...data, name: e.target.value })} border={"solid 1px"}/>
                <FormLabel>Email address</FormLabel>
                <Input type='email' placeholder='Enter email' onChange={(e) => setData({ ...data, email: e.target.value })} border={"solid 1px"}/>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='Enter password' onChange={(e) => setData({ ...data, pass: e.target.value })} border={"solid 1px"}/>
                <Button colorScheme='blue' mt={"20px"} type='submit' onClick={handleSubmit}>Signup</Button>
                <Button colorScheme='whatsapp' mt={"20px"} onClick={()=>setShift(!shift)}><Text px={"5px"}>Already registered?</Text>Login</Button>
            </FormControl>
        </Flex>
  )
}
