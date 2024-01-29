import { Box, Button, Flex, Image, Stack, Text, useDisclosure, DrawerCloseButton, } from "@chakra-ui/react";
import { ActionButton } from "../../../../../components/button";
import './hover.css';
import { useContext, useState } from "react";
import DescripcionVino from "../DescripcionVino";
import DescripcionVino2 from "../DescripcionVino2";

const CustomWineCard = ({
  onAddToCart,
  image,
  text,
  subText,
  price,
  btnText,
  pdfFileName,
  variedad,
  onMouseEnter,
  onMouseLeave,
  isHovered,
}) => {

  const [singleVineyardHoveredIndex, setSingleVineyardHoveredIndex] = useState(null);
  const [nucleoHoveredIndex, setNucleoHoveredIndex] = useState(null);

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

  

//Estilos en línea para el modal Descripcion Vino:


  const cancelButtonStyles = {
    zIndex: 1001,
    position: 'fixed',
    top: '16%',
    right: '12%',
    fontSize: '30px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: 'black',
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
          width={{ base: "150px", lg: "100%" }}
          objectFit="contain"
          height="cover"
          maxHeight="300px"
          maxWidth="200px" 
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
          <Text>{/* {text} */}</Text>
          <Text>{/* {subText} */}</Text>
        </Stack>
        <Text fontWeight={600} lineHeight="36px">
          {/*  {price} */}
        </Text>
        {isDescripcionVinoOpen && (
          <div>
            <div>
              <DescripcionVino2
                image={image}
                text={text}
                subText={subText}
                price={price}
                pdfFileName={pdfFileName}
                variedad={variedad}
                onClose={handleCloseDescripcionVino}
              />
            </div>


          </div>
        )}
      </Flex>
    </Box>
  );
};
export default CustomWineCard;
