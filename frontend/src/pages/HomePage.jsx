import { Container, VStack, Text, SimpleGrid} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../component/ProductCard";
export default function HomePage() {
  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products",products);
  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text 
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          textAlign={"center"}
        >
          Current Product
        </Text>

        <SimpleGrid 
          columns={{
            base: 2,
            md: 2,
            lg: 3
          }} spacing={8} w={"full"} 
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>


        {products.length === 0 && (
          <Text
          fontSize='xl' 
          textAlign={"center"} 
          fontWeight={"bold"}
          color='gray.500'
        >
          No Product Available
          <Link to={"/create"}>
            <Text 
              color={"blue.500"} 
              cursor={"pointer"}
              _hover={{textDecoration: "underline"}}
            >
              Create a Product
            </Text>
          </Link>
        </Text>
        )}
        
      </VStack>
    </Container>
  )
}
