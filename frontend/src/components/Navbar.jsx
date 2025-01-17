import { Container,Flex, Link, Text } from "@chakra-ui/react";
export default function NavBar() {
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base: "column",
                sm: "row"
            }}>
                <Text 
                    fontSize={{base:"22", sm:"28"}}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgClip={"text"}>
                        <Link to={"/"}>Product Store</Link>
                    </Text>
        </Flex>
    </Container>
  )
}
