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
  AspectRatio,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { CartContext } from "../../App";
import axios from "axios";

const PaymentForm = () => {
  const { cartState } = useContext(CartContext);
  const [formData2, setFormData2] = useState({
    nombreApellido: "",
    email: "",
    celular: "",
    cp: "",
    calle: "",
    numero: "",
    manzana: "",
    barrio: "",
    localidad: "",
    provincia: "",
  }); //ver si va la última coma o no.

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const validationErrors = {};
    if (formData2.nombreApellido.trim() === "") {
      validationErrors.nombreApellido = "El Nombre y Apellido es requerido";
    }
    if (formData2.email.trim() === "") {
      validationErrors.email = "El Email es requerido";
    }
    if (formData2.celular.trim() === "") {
      validationErrors.celular = "El Teléfono es requerido";
    } 
    if (formData2.cp.trim() === "") {
      validationErrors.cp = "El Código Postal es requerido";
    }
    if (formData2.calle.trim() === "") {
      validationErrors.calle = "La Calle es requerida";
    }
    if (formData2.numero.trim() === "") {
      validationErrors.numero = "El Número es requerido";
    }
    if (formData2.manzana.trim() === "") {
      validationErrors.manzana = "La Manzana es requerida";
    }
    if (formData2.barrio.trim() === "") {
      validationErrors.barrio = "El Barrio es requerido";
    }
    if (formData2.localidad.trim() === "") {
      validationErrors.localidad = "La Localidad es requerida";
    }
    if (formData2.provincia.trim() === "") {
      validationErrors.provincia = "La Provincia es requerida";
    } if (!isValidEmail(formData2.email) && formData2.email.trim() != "" ) {
      validationErrors.email = "Formato de Email inválido";
    }
    return validationErrors;
  };

  const isValidEmail = (email) => {
    // Lógica de validación de email
    // Usamos una expresión regular para verificar si el email cumple con el patrón estándar.
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
    try {
      
      const dataCompra = {
        cartArray: Object.values(cartState),
        paymentFormData: formData2,
      };
      const response = await axios.post(
        "https://amw.createch.com.ar/api/submit-carritoCompras",
        dataCompra
      );

      console.log("Datos enviados al servidor: requestData--->", dataCompra);

      console.log("Respuesta del Servidor:response.data--->", response.data);

      // Redirección al usuario a la página de pago de Mobbex con la URL de checkout:

      const paymentUrl = response.data.data.url;
      console.log('este es el paymentUrl--->', paymentUrl);
      console.log('este debería ser el url de mercado pago response--->', response)

      window.location.href = response;
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error al enviar el paymentForm:---> ", error);
    }
  } else {
    setErrors(validationErrors);
    console.log("errores de validación: " + JSON.stringify(validationErrors));
    setFormSubmitted(false);
  }
  };
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
  return (
    <Flex
      direction="column"
      gap={8}
      bg="bgLight"
      pt={3}
      pb={5}
      color="black"
      css={customScrollbarStyles} 
      style={{
        overflowY: "auto",
        marginTop: "10vh",
        padding: "10px",
        borderRadius: "20px",
        height: "65vh", // Añade un espacio entre el navbar y el formulario
      }}
    >
      <SimpleGrid
        columns={{ base: 1, lg: 0 }}
        spacing={5}
        mr={{ base: 0, lg: 0 }}
      >
        <Flex direction="column" gap={3} mx={{ base: 10, lg: 40 }}>
          <Heading
            align="center"
            direction="column"
            mx={{ base: "10px", lg: 0 }}
            fontStyle="italic"
            fontWeight={200}
            fontSize={{ base: "5vw", lg: "5vw" }}
          >
            Información para la compra
          </Heading>
          <Box mb={{ base: 0, lg: 0 }}>
            <form 
            onSubmit={(e) => e.preventDefault()}>
              <Stack
                align="center"
                direction="column"
                spacing={3}
                width={{ base: "95%", lg: "100%" }}
                mb={{ base: "20px", lg: 0 }}
                mx={{ base: "10px", lg: 0 }}
              >
                <Input
                  borderRadius="10px"
                  color="black"
                  borderColor="rgba(0,0,0)"
                  /* variant="outline" */
                  placeholder="*Nombre y apellido"
                  _placeholder={{ opacity: 0.4, color: "inherit" }}
                  _hover={{ borderColor: "black" }}
                  value={formData2.nombreApellido}
                  onChange={(event) =>
                    setFormData2((prevData) => ({
                      ...prevData,
                      nombreApellido: event.target.value, // Actualiza el campo "nombre" en formData2
                    }))
                  }
                />
                {errors.nombreApellido && <span>{errors.nombreApellido}</span>}
                <Input
                  borderRadius="10px"
                  color="black"
                  borderColor="rgba(0,0,0)"
                  placeholder="*Email"
                  _placeholder={{ opacity: 0.4, color: "inherit" }}
                  _hover={{ borderColor: "black" }}
                  value={formData2.email}
                  onChange={(event) =>
                    setFormData2((prevData) => ({
                      ...prevData,
                      email: event.target.value, // Actualiza el campo "nombre" en formData2
                    }))
                  }
                />
                {errors.email && <span>{errors.email}</span>}
                <Input
                  borderRadius={"10px"}
                  color="black"
                  borderColor="rgba(0,0,0)"
                  placeholder="*Celular"
                  _placeholder={{ opacity: 0.4, color: "inherit" }}
                  _hover={{ borderColor: "black" }}
                  value={formData2.celular}
                  onChange={(event) =>
                    setFormData2((prevData) => ({
                      ...prevData,
                      celular: event.target.value, // Actualiza el campo "nombre" en formData2
                    }))
                  }
                />
                {errors.celular && <span>{errors.celular}</span>}
                <Flex direction={{ base: "column", lg: "row" }} gap={3}>
                  <Input
                    borderRadius={"10px"}
                    color="black"
                    borderColor="rgba(0,0,0)"
                    placeholder="Código Postal"
                    _placeholder={{ opacity: 0.4, color: "inherit" }}
                    _hover={{ borderColor: "black" }}
                    value={formData2.cp}
                    onChange={(event) =>
                      setFormData2((prevData) => ({
                        ...prevData,
                        cp: event.target.value, // Actualiza el campo "nombre" en formData2
                      }))
                    }
                  />
                  <Input
                    borderRadius={"10px"}
                    color="black"
                    borderColor="rgba(0,0,0)"
                    placeholder="Calle"
                    _placeholder={{ opacity: 0.4, color: "inherit" }}
                    _hover={{ borderColor: "black" }}
                    value={formData2.calle}
                    onChange={(event) =>
                      setFormData2((prevData) => ({
                        ...prevData,
                        calle: event.target.value, // Actualiza el campo "nombre" en formData2
                      }))
                    }
                  />
                     
                  <Input
                    borderRadius={"10px"}
                    color="black"
                    borderColor="rgba(0,0,0)"
                    placeholder="Número"
                    _placeholder={{ opacity: 0.4, color: "inherit" }}
                    _hover={{ borderColor: "black" }}
                    value={formData2.numero}
                    onChange={(event) =>
                      setFormData2((prevData) => ({
                        ...prevData,
                        numero: event.target.value, // Actualiza el campo "nombre" en formData2
                      }))
                    }
                  />
                   
                  <Input
                    borderRadius={"10px"}
                    color="black"
                    borderColor="rgba(0,0,0)"
                    placeholder="Manzana"
                    _placeholder={{ opacity: 0.4, color: "inherit" }}
                    _hover={{ borderColor: "black" }}
                    value={formData2.manzana}
                    onChange={(event) =>
                      setFormData2((prevData) => ({
                        ...prevData,
                        manzana: event.target.value, // Actualiza el campo "nombre" en formData2
                      }))
                    }
                  />
                  
                </Flex>
                <Flex direction={{ base: "column", lg: "row" }} gap={3}>
                  <Input
                    borderRadius={"10px"}
                    color="black"
                    borderColor="rgba(0,0,0)"
                    placeholder="Barrio"
                    _placeholder={{ opacity: 0.4, color: "inherit" }}
                    _hover={{ borderColor: "black" }}
                    value={formData2.barrio}
                    onChange={(event) =>
                      setFormData2((prevData) => ({
                        ...prevData,
                        barrio: event.target.value, // Actualiza el campo "nombre" en formData2
                      }))
                    }
                  />
                  <Input
                    borderRadius={"10px"}
                    color="black"
                    borderColor="rgba(0,0,0)"
                    placeholder="Localidad"
                    _placeholder={{ opacity: 0.4, color: "inherit" }}
                    _hover={{ borderColor: "black" }}
                    value={formData2.localidad}
                    onChange={(event) =>
                      setFormData2((prevData) => ({
                        ...prevData,
                        localidad: event.target.value, // Actualiza el campo "nombre" en formData2
                      }))
                    }
                  />
                  <Input
                    borderRadius={"10px"}
                    color="black"
                    borderColor="rgba(0,0,0)"
                    placeholder="Provincia"
                    _placeholder={{ opacity: 0.4, color: "inherit" }}
                    _hover={{ borderColor: "black" }}
                    value={formData2.provincia}
                    onChange={(event) =>
                      setFormData2((prevData) => ({
                        ...prevData,
                        provincia: event.target.value, // Actualiza el campo "nombre" en formData2
                      }))
                    }
                  />
                </Flex>
                  {errors.cp && <span>{errors.cp}</span>}
                  {errors.calle && <span>{errors.calle}</span>}
                  {errors.numero && <span>{errors.numero}</span>}
                  {errors.manzana && <span>{errors.manzana}</span>}
                  {errors.barrio && <span>{errors.barrio}</span>}
                  {errors.localidad && <span>{errors.localidad}</span>}
                  {errors.provincia && <span>{errors.provincia}</span>}
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
                  onClick={handleSubmit}
                >
                  Continuar con la compra
                </Button>
              </Stack>
            </form>
          </Box>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};
export default PaymentForm;
