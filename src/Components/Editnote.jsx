import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Navbar } from './navbar'
import { Button, Heading, Input, InputGroup, InputLeftAddon, Textarea } from '@chakra-ui/react';

export const Editnote = () => {
    const [data, setData] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()
    
    useEffect(()=>{
        fetch(`https://notesapp-qdvp.onrender.com/notes/${id}`,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => res.json()).then(response => {
            setData(response.notes[0])
        }).catch(err => console.log(err))
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://notesapp-qdvp.onrender.com/notes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(response => {
            console.log(response)
            navigate("/notes")
        }).catch(err => console.log(err))
        navigate("/notes")
    }
    return (
        <>
            <Navbar />
            <Heading as='h2' size='xl' textAlign='center' color='gray.700' mb={"40px"} mt={"50px"}>
        My Notes
      </Heading>
      <div style={{width:"40%", margin:"auto"}}>
        <form onSubmit={handleSubmit}>
          <InputGroup border={"solid 0px gray"}>
            <InputLeftAddon bg={"gray.300"} fontWeight={"bold"}>
              Title
            </InputLeftAddon>
            <Input type='text' required value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })}/>
          </InputGroup>
          <Textarea border={"solid 1px gray"} mt={"5px"}
            placeholder='write something here...' onChange={(e) => setData({ ...data, body: e.target.value })}
            size='sm' required value={data.body}
          />
          <Button variant='solid' colorScheme='teal' mt={"15px"} type='submit'>Save changes</Button>
        </form>
      </div>
        </>
    )
}

