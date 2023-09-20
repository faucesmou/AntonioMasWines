import {
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
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData2, setFormData2] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    asunto: "",
    mensaje: "",
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
    if (formData2.nombre.trim() === "") {
      validationErrors.nombre = "El Nombre es requerido";
    }
    if (formData2.apellido.trim() === "") {
      validationErrors.apellido = "El Apellido es requerido";
    }
    if (formData2.correo.trim() === "") {
      validationErrors.correo = "El Email es requerido";
    }
    if (!isValidEmail(formData2.correo) && formData2.correo.trim() != "" ) {
      validationErrors.correo = "Formato de Email inválido";
    }
    if (formData2.asunto.trim() === "") {
      validationErrors.asunto = "El asunto es requerido";
    } 
    if (formData2.mensaje.trim() === "") {
      validationErrors.mensaje = "El mensaje es requerido";
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
      const response = await axios.post('https://amw.createch.com.ar/api/submit-form', formData2);
      console.log("acá van los datos del formulario: ----->");
      console.log(formData2);
      console.log(response.data);
      setErrors({});
      setFormSubmitted(true);
      setFormData2({
        nombre: "",
        apellido: "",
        correo: "",
        asunto: "",
        mensaje: "",
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  
  }else {
    setErrors(validationErrors);
    console.log("errores de validación: " + JSON.stringify(validationErrors));
    setFormSubmitted(false);
  }
}


  return (
    <Flex direction="column" gap={8} bg="bgLight" pt={10} color="black">
      <Stack direction="column" align="center" gap={3}>
        <Heading
          fontStyle="italic"
          fontWeight={400}
          fontSize={{ base: "22px", lg: "45px" }}
          lineHeight="61px"
          width={{ base: "100%", lg: "60%" }}
          mx={{ base: "10px", lg: 0 }}
          textAlign="center"
          paddingX={{ base: "13px", lg: "0px" }}
        >
          ‘’El entorno es tan importante como la altura o el suelo a la hora de
          definir el concepto de terroir’’
        </Heading>
        <Text
          as="h3"
          fontWeight={600}
          fontFamily="Poppins"
          fontSize="24px"
          width="fit-content"
          borderTop={"2px solid"}
          borderTopColor="bgBlack"
          borderTopWidth="1px"
          padding={1}
          letterSpacing="0.01em"
          lineHeight="36px"
        >
          Antonio Más
        </Text>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={5}
        mr={{ base: 0, lg: 10 }}
      >
        <Box>
          <AspectRatio height="100%" ratio={16 / 9} filter="saturate(0)">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26655.343831820188!2d-69.11999833214978!3d-33.37320731212574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1685554929468!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </AspectRatio>
        </Box>
        <Flex direction="column" gap={3} mx={{ base: "10px", lg: 0 }}>
          <Stack
            direction="column"
            spacing={2}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text as="h4" fontWeight="bold">
              Situado en el corazon del Valle de Uco
            </Text>
            <Text fontWeight={400}>
              Ruta 88 interseccion callejon Campanero, Tupungato, Valle de Uco,
              Argentina. Latitud-33 26 Longitud -69 40
            </Text>
          </Stack>

          <Heading
            mx={{ base: "10px", lg: 0 }}
            fontStyle="italic"
            fontWeight={400}
            fontSize="56px"
          >
            Contacto
          </Heading>
          <Box mb={{ base: 0, lg: 4 }}>
            <form onSubmit={(e) => e.preventDefault()}>
              <Stack
                align="center"
                direction="column"
                spacing={3}
                width={{ base: "95%", lg: "70%" }}
                mb={{ base: "20px", lg: 0 }}
                mx={{ base: "10px", lg: 0 }}
              >
                <Input
                  borderRadius="10px"
                  color="black"
                  borderColor="rgba(0,0,0)"
                  variant="outline"
                  placeholder="*Nombre"
                  _placeholder={{ opacity: 0.4, color: "inherit" }}
                  _hover={{ borderColor: "black" }}
                  value={formData2.nombre}
                  onChange={(event) =>
                    setFormData2((prevData) => ({
                      ...prevData,
                      nombre: event.target.value, // Actualiza el campo "nombre" en formData2
                    }))
                  }
                />
                {errors.nombre && <span>{errors.nombre}</span>}
                <Input
                  borderRadius="10px"
                  color="black"
                  borderColor="rgba(0,0,0)"
                  placeholder="*Apellido"
                  _placeholder={{ opacity: 0.4, color: "inherit" }}
                  _hover={{ borderColor: "black" }}
                  value={formData2.apellido}
                  onChange={(event) =>
                    setFormData2((prevData) => ({
                      ...prevData,
                      apellido: event.target.value, // Actualiza el campo "nombre" en formData2
                    }))
                  }
                />
                {errors.apellido && <span>{errors.apellido}</span>}
                <Input
                  borderRadius={"10px"}
                  color="black"
                  borderColor="rgba(0,0,0)"
                  placeholder="*Correo"
                  _placeholder={{ opacity: 0.4, color: "inherit" }}
                  _hover={{ borderColor: "black" }}
                  value={formData2.correo}
                  onChange={(event) =>
                    setFormData2((prevData) => ({
                      ...prevData,
                      correo: event.target.value, // Actualiza el campo "nombre" en formData2
                    }))
                  }
                />
                {errors.correo && <span>{errors.correo}</span>}
                <Input
                  borderRadius={"10px"}
                  color="black"
                  borderColor="rgba(0,0,0)"
                  placeholder="*Asunto"
                  _placeholder={{ opacity: 0.4, color: "inherit" }}
                  _hover={{ borderColor: "black" }}
                  value={formData2.asunto}
                  onChange={(event) =>
                    setFormData2((prevData) => ({
                      ...prevData,
                      asunto: event.target.value, // Actualiza el campo "nombre" en formData2
                    }))
                  }
                />
                {errors.asunto && <span>{errors.asunto}</span>}
                <Textarea
                  borderRadius="10px"
                  _placeholder={{ opacity: 0.4, color: "inherit" }}
                  placeholder="*Mensaje"
                  borderColor="rgba(0,0,0)"
                  _hover={{ borderColor: "black" }}
                  value={formData2.mensaje}
                  onChange={(event) =>
                    setFormData2((prevData) => ({
                      ...prevData,
                      mensaje: event.target.value, // Actualiza el campo "nombre" en formData2
                    }))
                  }
                />
                {errors.mensaje && <span>{errors.mensaje}</span>}
                {formSubmitted && (
            <span><h2>Datos enviados con éxito!</h2></span>
          )}
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
                  Enviar
                </Button>
              </Stack>
            </form>
          </Box>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
export default Contact;
