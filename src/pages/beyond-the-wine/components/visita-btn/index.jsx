import { Box, Avatar, Link, Flex, useBreakpointValue } from "@chakra-ui/react";
import CustomButton from "../../../../components/button";
import { AiFillYoutube } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const VisitaBtn = () => {

  const youtubeURL = "https://www.youtube.com/watch?v=MYcGs4PRGu8&ab_channel=WineTalkswithPaulK";
  
  const youtubeButtonTextSize = useBreakpointValue({
    base: "12px", // Tamaño de fuente para tamaños base y más pequeños
    md: "15px", // Tamaño de fuente para tamaños md y más grandes
    flexDirection:"column",
    justifyContent: "center"
  });

  const textAlignment = useBreakpointValue({
    base: "center", // Centrado para tamaños base
    md: "center", // Centrado para tamaños md y más grandes
  });
  const margenConImagen = useBreakpointValue({
    base: 1, // Centrado para tamaños base
    md: 4, // Centrado para tamaños md y más grandes
  });


  return (
    <Box px={10} bg="bgDark" py={10} >
     <Link href={youtubeURL} isExternal>
        <Flex
          bg="rgba(0, 0, 0, 0.5)"
          border="1px solid rgba(255,255,255,.5)"
          w={{ base: "fit-content", md: "40%" /*,  md: "center", */ }}
          mx="auto"
          py={{ base: 9, md: 3 }}
          p={2}
          borderRadius="50px"
          color="white"
         /*  _hover={{ bg: "black", transform: "scale(1.1)" }} */
          alignItems="center" 
          justifyContent={"center"}
          fontSize={youtubeButtonTextSize} // Aplicar el tamaño de fuente condicionalmente
          textAlign={textAlignment}
        >
          <span  >Visitá nuestro canal de YouTube</span>
          <Avatar
            bg="bgLight"
            icon={<BsYoutube fontSize="1.5rem" color="black" />}
            ml={margenConImagen} // Margen a la izquierda para separar el icono del texto
          />
        </Flex>
      </Link>
  </Box>)
  
};
export default VisitaBtn;
