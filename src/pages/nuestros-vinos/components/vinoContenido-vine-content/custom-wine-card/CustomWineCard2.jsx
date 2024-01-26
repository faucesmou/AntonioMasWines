import { Box, Button, Flex, Image, Stack, Text, useDisclosure, } from "@chakra-ui/react";
import { ActionButton } from "../../../../../components/button";
import './hover.css'; 
import { useContext, useState } from "react";


import PaymentForm from "../../../../../components/sticky-cart/PaymentForm";
import DescripcionVino from "../DescripcionVino";

const CustomWineCard2 = ({
  onAddToCart,
  image,
  text,
  subText,
  price,
  btnText,
  onMouseEnter,
  onMouseLeave,
  isHovered,
}) => {

  //funciones para activar el Modal de descripción: 
  const [isDescripcionVinoOpen, setIsDescripcionVinoOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenDescripcionVino = () => {
    console.log('se tocó el handleOpenDescripcionVino');
    setIsDescripcionVinoOpen(true);
    onOpen();
  };

  const handleCloseDescripcionVino = () => {
    console.log('se tocó el handleCloseDescripcionVino');
    setIsDescripcionVinoOpen(false);
  };
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
    
        /*  maxHeight: "80", */
      };
      //Estilos en línea para el modal Descripcion Vino:
      const modalContentStyles = {
        backgroundColor: "bgLight",
        padding: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        maxWidth: "100%", // Cambia el ancho según tus necesidades
        display: "flex",
        flexDirection: "column",
        borderRadius: "30px",
      };
    
      const cancelButtonStyles = {
        fontSize: "14px" /* Reduce el tamaño de fuente */,
        padding:
          "10px 20px" /* Ajusta el espaciado interior para achicar el botón */,
        border: "1px solid #4F4F4F",
        borderRadius:
          "30px" /* Ajusta el radio del borde para hacerlo más pequeño */,
        background: "rgba(0, 0, 0, 0.5)",
        fontWeight: 200,
        width: "auto",
        color: "#ffff",
        height: "40%" /* Reduce la altura del botón */,
        margin: "auto" /* Centra el botón horizontalmente */,
        display: "flex",
        alignItems: "center",
      };

  return (
    <Box 
    position="relative"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave} 
  
    >
      <Flex direction="column" gap={3} align="center">
        <Image
          src={image}
          width={{ base: "200px", lg: "80%" }}
          objectFit="cover"
          height="fit-content"
          className={isHovered ? 'hovered-image' : ''}
          transition="transform 0.3s ease-in-out"
          _hover={{ cursor: "pointer" }}
          onClick={handleOpenDescripcionVino}
          
        />
        <Stack
          direction="column"
          gap={1}
          fontSize="24px"
          fontWeight={400}
          lineHeight="36px"
          align="center"
        >
          <Text>{text}</Text>
          <Text>{subText}</Text>
        </Stack>
        <Text fontWeight={600} lineHeight="36px">
          $ {price}
        </Text>
      {isDescripcionVinoOpen && (
        <div style={modalStyles}>
          <div style={modalContentStyles}>
            <DescripcionVino 
            image={image}
            text={text}
            subText={subText}
            price={price}
            />
            <div
              style={{ maxHeight: "60vh", overflowY: "auto", marginTop: "2vh" }}
            >
              <Button
                style={cancelButtonStyles}
                onClick={handleCloseDescripcionVino}
              >
                Cerrar
              </Button>
            </div>
          </div>
        </div>
          )}
      </Flex>
    </Box>
  );
};
export default CustomWineCard2;
