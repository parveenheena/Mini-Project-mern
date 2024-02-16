import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SiHomeadvisor } from "react-icons/si";
import { HStack, Heading, Text } from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <Link to="/">
      <HStack spacing='10px'><SiHomeadvisor /> <Heading size='sm' >Go to Home </Heading>
      </HStack>
    </Link>
  )
}
