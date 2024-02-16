import { Button, Flex, FormControl,FormLabel, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = ({props}) => {
    const [data, setData] = useState({});
    const {shift,setShift} = props
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://notesapp-qdvp.onrender.com/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(response => {localStorage.setItem("token", response["login successful"])
            if(response["login successful"]){
                navigate("/notes")
            }}
        ).catch(err => console.log(err))
    }
    return (
        <Flex justifyContent={"center"} width={"30%"} m={"auto"}>
            <FormControl display={"flex"} flexDirection={"column"}>
                <FormLabel>Email address</FormLabel>
                <Input type='email' placeholder='Enter email' onChange={(e) => setData({ ...data, email: e.target.value })} border={"solid 1px"} />
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='Enter password' onChange={(e) => setData({ ...data, pass: e.target.value })} border={"solid 1px"}/>
                <Button colorScheme='blue' mt={"20px"} type='submit' onClick={handleSubmit}>Login</Button>
                <Button colorScheme='whatsapp' mt={"20px"} onClick={()=>setShift(!shift)}><Text mx={"5px"}>Not registered? </Text> Signup</Button>
            </FormControl>
        </Flex>
    )
}
