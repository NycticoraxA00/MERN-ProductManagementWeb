import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button, Container,Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = ()=> {
    const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Container 
        maxW={"1140px"} 
        px={4}
    >
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base: "column",
                sm: "row"
            }}
        >
            <Text 
                fontSize={{base:"22", sm:"28"}}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgClip={"text"}
                color={"#0693E3"}
            >
                <Link to={"/"}>Product Store</Link>
                
            </Text>
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"http://localhost:5173/create/"}>
                    <Button  bg={"gray"}>
                        <PlusSquareIcon fontSize={20} color={"white"}/>
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon/> : <IoSunny/>}
                </Button>
                
            </HStack>
        </Flex>
    </Container>
  )
}
export default Navbar;