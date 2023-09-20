import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Logo from "../../assets/imgs/logo.png";
import DefaultIcons from "../social-icons";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Footer = ({ position = "static" }) => {

  const [formData3, setFormData3] = useState({
    email: ""
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Después de que se activa el useEffect por el formulario enviado con éxito, configuramos un temporizador para desactivar el mensaje después de 5 segundos.
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 5000); // 
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const validationErrors = {};
    if (formData3.email.trim() === "") {
      validationErrors.email = "El Email es requerido";
    }
    if (!isValidEmail(formData3.email) && formData3.email.trim() != "" ) {
      validationErrors.email = "Formato de Email inválido";
    }
    return validationErrors;
  };

  const isValidEmail = (email) => {    
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
    try {
      const response = await axios.post('https://amw.createch.com.ar/api/submit-emailfooter', formData3);
      console.log("acá va el email del footer: ----->");
      console.log(formData3);
      console.log(response.data);
      setFormSubmitted(true);
      setFormData3({
        email: ""
      });
      setErrors({});
    } catch (error) {
      console.error('Error al enviar el email del Footer:', error);
    }}else {
      setErrors(validationErrors);
      console.log("errores de validación: " + JSON.stringify(validationErrors));
      setFormSubmitted(false);
    }
  }
  return (
    <Box
      bg="rgba(30, 30, 30, 0.7)"
      backdropFilter="blur(10px)"
      width="100%"
      position={position}
      sx={position === "absolute" && { bottom: 0, left: 0 }}
      p={8}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        mx={{ base: 3, md: 10 }}
        alignItems="center"
        spacing={5}
      >
        <Flex direction="column" fontSize="17px" color="bgLight" gap={3}>
          <Text as="h4" fontWeight={600} fontSize="20px">
            ¡Sigamos en contacto!
          </Text>
          <InputGroup fontWeight={300}>
            <Input
              variant="flushed"
              placeholder={formSubmitted ? "Email enviado con éxito!" : "Email"}
              borderBottom="2px solid"
              borderBottomColor="bgLight"
              _placeholder={{ fontWeight: 300, color: "bgLight" }}
              value={formData3.email}
              onChange={(event) =>
                setFormData3((prevData) => ({
                  ...prevData,
                  email: event.target.value, // Actualiza el campo "nombre" en formData3
                }))
              }
            />   
            <InputRightElement>
              <Text as="h5"
              onClick={handleSubmit}>Enviar</Text>
            </InputRightElement>
          </InputGroup>
              {errors.email && <span>{errors.email}</span>}      
        </Flex>
        <Stack direction="column" align="flex-end">
          <Image src={Logo} />
        </Stack>
        <Stack
          direction="column"
          gap={2}
          fontSize="17px"
          color="bgLight"
          lineHeight="26px"
          align="center"
        >
          <Text as="span">Nosotros</Text>
          <Text as="span">Enoteca</Text>
          <Text as="span">Nuestros Vinos</Text>
          <Text as="span">Contacto</Text>
        </Stack>
        <Stack align="center">
          <Stack direction="column" gap={2}>
            <Text as="h4" align={{ base: "center", md: "start" }}>
              Redes sociales
            </Text>
            <DefaultIcons />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};
export default Footer;
