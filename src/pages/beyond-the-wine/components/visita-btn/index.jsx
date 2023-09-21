import { Box, Avatar, Link, Flex } from "@chakra-ui/react";
import CustomButton from "../../../../components/button";
import { AiFillYoutube } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const VisitaBtn = () => {
  const youtubeURL = "https://www.youtube.com";
  return (
    <Box px={10} bg="bgDark" py={10}>
     <Link href={youtubeURL} isExternal>
        <Flex
          bg="rgba(0, 0, 0, 0.5)"
          border="1px solid rgba(255,255,255,.5)"
          w={{ base: "fit-content", md: "100%" }}
          py={{ base: 9, md: 3 }}
          p={3}
          borderRadius="50px"
          color="white"
         /*  _hover={{ bg: "black", transform: "scale(1.1)" }} */
          alignItems="center" 
          justifyContent={"center"}
        >
          <span>Visitá nuestro canal de YouTube</span>
          <Avatar
            bg="bgLight"
            icon={<BsYoutube fontSize="1.5rem" color="black" />}
            ml={2} // Margen a la izquierda para separar el icono del texto
          />
        </Flex>
      </Link>
  </Box>)
  
};
export default VisitaBtn;
