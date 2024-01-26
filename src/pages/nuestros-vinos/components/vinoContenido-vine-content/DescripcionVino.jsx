import {
  CSSReset,
  ChakraProvider,
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Input,
  Textarea,
  Button,
  Image,
  useDisclosure,
  AspectRatio,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { CartContext } from "../../../../App";
import axios from "axios";


import P1 from "../../../../assets/imgs/p1.png";
import P2 from "../../../../assets/imgs/p2.png";
import P3 from "../../../../assets/imgs/p3.png";
import S1 from "../../../../assets/imgs/s1.png";
import A1 from "../../../../assets/imgs/amarada1002.png";
import A2 from "../../../../assets/imgs/AlmaradaCavernetSinFondo.png";
import { Power1 } from "gsap/gsap-core";

const wineCardData = [
  {
      image: P1,
      text: "Single Vineyard1",
      subText: "Cabernet (x6)",
      price: "Sin Stock",
      btnText: "Añadir al carrito",
  },
  {
      image: P2,
      text: "Single Vineyard2",
      subText: "Chardonay (x6)",
      price: "Sin Stock",
      btnText: "Añadir al carrito",
  },
  /*  {
     image: P3,
     text: "Núcleo2",
     subText: "Malbec (x6)",
     price: 'Sin Stock',
     btnText: "Añadir al carrito",
   }, */
  {
      image: S1,
      text: "Single Vineyard",
      subText: "Malbec (x6)",
      price: "Sin Stock",
      btnText: "Añadir al carrito",
  },
  {
      image: P1,
      text: "Single Vineyard",
      subText: "Cabernet (x6)",
      price: "Sin Stock",
      btnText: "Añadir al carrito",
  },
  {
      image: P2,
      text: "Single Vineyard",
      subText: "Chardonay (x6)",
      price: "Sin Stock",
      btnText: "Añadir al carrito",
  },
   {
    image: P3,
    text: "Núcleo3",
    subText: "Malbec (x6)",
    price: 'Sin Stock',
    btnText: "Añadir al carrito",
  }, 
  {
      image: A1,
      text: "Almarada",
      subText: "Malbec (x6)",
      price: "Sin Stock",
      btnText: "Añadir al carrito",
  },
];

const wineCardData1 = [
  {
      image: P1,
      text: "Single Vineyard1",
      subText: "Cabernet (x6)",
      price: "Sin Stock",
      btnText: "Añadir al carrito",
  },]

const DescripcionVino = ({ image, text, subText, price, }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartState } = useContext(CartContext);

//Estilos en línea para el formulario paymentForm:
const modalStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999, // Asegura que esté por encima del carrito
  margin: "auto",
  overflowY: "auto",
   maxHeight: "80",
};

  //Estilos en línea para el modal Descripcion Vino:
  const modalContentStyles = {
    backgroundColor: "bgLight",
    padding: "10px",
    /* boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", */
    /* maxWidth: "100%", */ 
    display: "flex",
    flexDirection: "column",
   /*  borderRadius: "30px", */
  };


  /* const cartState2 = wineCardData1.map((item, subText) => {
    let imagen2;
    if (item.text === "Single Vineyard" ) {
      imagen2 = P2;
    } else if (item.text === "Single Vineyard") {
      imagen2 = P1;
    } else if (item.text === "Núcleo3") {
      imagen2 = P3;
    } else if (item.text === "Single Vineyard") {
      imagen2 = S1;
    } else if (item.text === "Almarada") {
      imagen2 = A2;
    }
    return {
      ...item,
      imagen2,
      subText: subText,
    };

  }); */

  //personalización de la barra scroll para evitar que se vea: 
  const customScrollbarStyles = {
    "&::-webkit-scrollbar": {
      width: "0.5em",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "transparent",
      outline: "1px solid transparent",
    },
  };

const estilosModalDescripcion = {
  overflowY: "auto",
  marginTop: "10vh",
  padding: "10px",
  borderRadius: "20px",
  height: "90vh", 
  width: "150vh",
}
  return (
    <div  style={modalStyles} >
      <div  style={modalContentStyles} >
    <Flex
      direction="column"
      gap={8}
      bg="bgLight"
      pt={3}
      pb={5}
      color="black"
      css={customScrollbarStyles}
      style={estilosModalDescripcion}
    >
      <SimpleGrid
        columns={{ base: 1, lg: 0 }}
        spacing={5}
        mr={{ base: 0, lg: 0 }}
      >
        <Flex direction="column" gap={3} mx={{ base: 30, lg: 70 }}>
          <Heading
            align="center"
            direction="column"
            mx={{ base: "2px", lg: 0 }}
            fontStyle="italic"
            fontWeight={100}
            fontSize={{ base: "2vw", lg: "2vw" }}
          >
            Información del vino
          </Heading>
          <Box mb={{ base: 0, lg: 0 }}>

            <Stack
              align="center"
              direction="column"
              spacing={3}
              width={{ base: "95%", lg: "100%" }}
              mb={{ base: "20px", lg: 0 }}
              mx={{ base: "10px", lg: 0 }}
            >
              <Box >
                <br />
                <Stack /* spacing="14px" */>
                   <Stack /* spacing="14px" */ /* key={index} */>
                      <Stack direction="row" mb="13px">
                        <Stack direction="row" fontWeight={400} fontSize="12px">
                          <Image
                            src={image}
                            width="139px"
                            height="195px"
                            objectFit="cover" 
                          />
                          <Flex direction="column" gap={1}>
                            <Text w="70%">{text}</Text>
                            <Flex gap={2}>
                              <Text
                                userSelect={"none"}
                                width="350px"
                              >
                                {subText}
                              </Text>

                            </Flex>
                          </Flex>
                        </Stack>
                        <Text>{price ? price.toLocaleString('es-AR') : 'Precio no disponible'}</Text>
                      </Stack>
                    
                    </Stack>
                
                </Stack>

              </Box>

              <Button
                alignSelf="flex-end"
                color="black"
                type="submit"
                bg="transparent"
                borderRadius="full"
                border="1px solid"
                borderColor="rgba(0,0,0)"
                fontWeight="medium"
                _hover={{ backgroundColor: "white" }}
              /* onClick={handleSubmit} */
              >
                Descargar pdf tu vieja
              </Button>
            </Stack>

          </Box>
        </Flex>
      </SimpleGrid>
    </Flex>
    </div>
    </div>
  );
};
export default DescripcionVino;
