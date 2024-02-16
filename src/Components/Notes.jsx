import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from './navbar'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Grid, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'

export const Notes = () => {
    const [notes, setNotes] = useState([])
    const navigate = useNavigate()
    const handleDelete = (id) => {
        fetch(`https://notesapp-qdvp.onrender.com/notes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => res.json()).then(data => console.log(data))
        setNotes(notes.filter(item => item._id != id))
    }

    useEffect(() => {
        fetch("https://notesapp-qdvp.onrender.com/notes", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json()).then(data => setNotes(data.notes)).catch(err => console.log(err))
    }, [])
    return (
        <>
          <Navbar />
            <div>
                <Heading as='h2' size='xl' textAlign='center' color='gray.700' mb={"10px"} mt={"50px"}>
                    My Notes
                </Heading>
                <Heading as='h2' size='md' textAlign='center' color='gray.700' mb={"50px"}>
                <button onClick={() => navigate("/newnote")} >Add new note 📝</button>
                </Heading>
                <SimpleGrid columns={[2, null, 3]} spacing='40px'>
                {
                    notes.map(item => {
                        return (
                            <Card maxW='sm' margin={"40px"}>
                                <CardBody>
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>Title   : {item.title}</Heading>
                                        <Text>
                                            {item.body}
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Button variant='solid' colorScheme='teal' onClick={() => handleDelete(item._id)}>
                                            Delete note
                                        </Button>
                                        <Button variant='outline' colorScheme='teal' onClick={() => navigate(`/notes/${item._id}`)}>
                                            Edit note
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        )
                    })
                }
                </SimpleGrid>
            </div>
        </>
    )
}

