import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Image, HStack,Heading, Text, IconButton, useToast, ModalCloseButton, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, VStack, Input, Button, ModalOverlay, ModalFooter } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useProductStore } from '../store/product';
import { useState } from 'react';
const ProductCard =({product})=> {
  const toast = useToast(); 
  const {isOpen, onOpen, onClose} = useDisclosure();
  const textColor = useColorModeValue("white", "gray.200");
  const bg = useColorModeValue("gray.800", "gray.700");

  const {deleteProduct} = useProductStore();
  const {updateProduct} = useProductStore();
  const [updatedProduct, setUpdatedProduct] = useState(product);
  
  const handleDeleteProduct = async(pid)=>{
    const {success,message}= await deleteProduct(pid);
    if(!success){
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }};
    const handleUpdateProduct = (pid, updatedProduct)=> async()=>{
        const {success, message} = await updateProduct(pid, updatedProduct);
        onClose();
        if(!success){
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            return;
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 5000,
                isClosable: true,
            });
    }};
return (
    <Box
        shadow={'lg'}
        rounded={'lg'}
        overflow={'hidden'}
        transition={'all 0.3s'}
        _hover={{transform: "translateY(-5px)", shadow:"xl"}}
        bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w={"full"}
            objectFit='cover'></Image>
        <Box p={4}>
            <Heading as='h3'size='md' mb={2}>
                {product.name}
            </Heading>
            <Text fontWeight='bold' fontSize='xl' mb={4} color={textColor}>
                $ {product.price}
            </Text>

            <HStack spacing={2}>
                <IconButton icon={<EditIcon/>} colorScheme='blue'
                    onClick={onOpen}/>
                <IconButton icon={<DeleteIcon/>} onClick={()=>handleDeleteProduct(product._id)} colorScheme='red'/>
            </HStack>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Update Product</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <VStack spacing={4}>
                        <Input
                            placeholder="Product Name"
                            name="name"
                            value={updatedProduct.name}   
                            onChange={(e)=>setUpdatedProduct({...updatedProduct, name:e.target.value})}                    
                        />
                        <Input
                            placeholder="Price"
                            name="price"
                            value={updatedProduct.price}
                            onChange={(e)=>setUpdatedProduct({...updatedProduct, price:e.target.value})}
                        />
                        <Input
                            placeholder="ImageURL"
                            name="image"
                            value={updatedProduct.image}
                            onChange={(e)=>setUpdatedProduct({...updatedProduct, image:e.target.value})}
                        />
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} 
                        onClick={handleUpdateProduct(product._id,updatedProduct)}
                    >
                        Update
                    </Button>
                    <Button variant='ghost' mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>

        </Modal>
    </Box>
    
  )
}
export default ProductCard;