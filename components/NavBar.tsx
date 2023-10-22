'use client'
import ButtonwDropdown from "./ButtonwDropdown"
import CustomButtonwState from "./CustomButtonwState"
import NextLink from 'next/link'
import { Image, Text, Flex, Link, ButtonGroup, Avatar } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <>
            <Flex as="nav" width="100%" px="50px" py="20px" justify="space-between" alignItems="center" position="fixed" backgroundColor="white">
                <Flex>
                    <Avatar src='/photo.png' width="30px" height="30px"></Avatar>
                    <Link as={NextLink} href='/' alignSelf={"center"} color='blue'  pl="20px" fontSize="20px" fontWeight="600" style={{ textDecoration: "none" }}>Interview Task</Link>
                </Flex>
                <Link as={NextLink} href='/about' fontWeight="bold" color="blue" style={{ textDecoration: "none" }}>Redirect Link</Link>
                <ButtonGroup alignItems="center">
                    <CustomButtonwState />
                    <ButtonwDropdown />
                </ButtonGroup>
            </Flex>
        </>
    );
};

export default NavBar