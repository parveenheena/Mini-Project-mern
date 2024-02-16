import React, { useState } from 'react'
import { Navbar } from './navbar';
import { Button, Heading, Input, InputGroup, InputLeftAddon, Textarea } from '@chakra-ui/react';

export const Newnote = () => {
  const [data, setData] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://notesapp-qdvp.onrender.com/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(response => console.log(response)).catch(err => console.log(err))
  }
  return (
    <><Navbar />
      <Heading as='h2' size='xl' textAlign='center' color='gray.700' mb={"40px"} mt={"50px"}>
        My Notes
      </Heading>
      <div style={{width:"40%", margin:"auto"}}>
        <form onSubmit={handleSubmit}>
          <InputGroup border={"solid 0px gray"}>
            <InputLeftAddon bg={"gray.300"} fontWeight={"bold"}>
              Title
            </InputLeftAddon>
            <Input type='text' required/>
          </InputGroup>
          <Textarea border={"solid 1px gray"} mt={"5px"}
            placeholder='write something here...' onChange={(e) => setData({ ...data, body: e.target.value })}
            size='sm' required
          />
          <Button variant='solid' colorScheme='teal' mt={"15px"}>Add note</Button>
          
        </form>
      </div>
    </>
  )
}




