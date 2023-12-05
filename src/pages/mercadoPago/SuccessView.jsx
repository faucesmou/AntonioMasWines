// SuccessView.js
import React, { useState, useEffect } from 'react';
import Navbar from "../../components/navbar";
import axios from 'axios';
import { useParams } from 'react-router-dom';

import {Box,Button,Divider,Drawer,DrawerBody,DrawerCloseButton,DrawerContent,DrawerFooter,DrawerHeader,DrawerOverlay,Flex,HStack,Heading,Icon,IconButton,Image,Input,SimpleGrid,Stack,Text,useDisclosure,Select,useToast,} from "@chakra-ui/react";
import Footer from "../../components/footer";
import CustomWineCard from "./custom-wine-card/index";


const SuccessView = () => {

   /*  const externalReference = window.location.pathname.split('/').pop(); */
    const { externalReference } = useParams();
    console.log('este es el external Reference: ', externalReference );
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
      // Función para realizar la solicitud al backend
      const fetchData = async () => {
        try {
          // Realizar la solicitud al endpoint correspondiente
          const response = await axios.get(`https://amw.createch.com.ar/api/statusRequest/${externalReference}`);
  
          // Verificar si la solicitud fue exitosa
          if (response.data.success) {
            // Almacenar los datos en el estado
            setResponseData(response.data);
            console.error('Almacenando los datos en el estado en el frontend:', response.data);
          } else {
            // Manejar errores si es necesario
            console.error('Error al obtener los datos desde la consulta del frontend:', response.data.error);
          }
        } catch (error) {
          console.error('Error en la solicitud a la api/statusRequest:', error);
        }
      };

        // Llamar a la función de solicitud al cargar el componente
    fetchData();
  }, [externalReference]);

  // Verificar si los datos han sido cargados
  if (!responseData) {
    return <p>Consultando sus datos, por favor espere un momento...</p>;
  }

  // Desestructurar los datos del estado
  const { formData, precioFinal, formDataCarrito } = responseData;
  const { nombreApellido, email, celular, cp, calle } = formData;
  console.log('nombreApellido:', nombreApellido, 'email:', email, 'celular:', celular, 'cp:', cp, 'calle:', calle,);

  return (
    <div>
      <Navbar />
      <h1>Pago Exitoso</h1>
      <p>¡Gracias por tu compra {JSON.stringify(nombreApellido)}!</p>
      <p>Referencia Externa: {externalReference}</p>
      <p>datos del comprador: </p>
      <p>Nombre y Apellido: {JSON.stringify(nombreApellido)}</p>
      <p>email: {JSON.stringify(email)}</p>
      <p>celular: {JSON.stringify(celular)}</p>
      <p>calle: {JSON.stringify(calle)}</p>
      <p>detalle de la compra: </p>
      <p>nombreApellidoa: {JSON.stringify(formData)}</p>
      <p>detalle de tu compra: </p>
      {formDataCarrito.map((producto) => (
      <div key={producto.compraCarritoId} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
        <img src={producto.image} alt={producto.text} style={{ maxWidth: '100px', maxHeight: '100px' }} />
        <p>Nombre: {producto.text}</p>
        <p>Precio: {producto.price}</p>
        <p>Cantidad: {producto.quantity}</p>
      </div>
    ))}
      <p>Precio Final: {precioFinal}</p>
      <Box bg="bgLight" position="relative">
       <div id="inicio"></div>
       <Divider borderColor="bgDark" />

       <Flex
            direction="column"
            gap={8}
            marginTop={{ base: "10px", lg: "45px" }}
            marginBottom={{ base: "10px", lg: "30px" }}>
            <Box display={{ base: "10px", lg: "30px" }}> {/* El responsive para pantallas pequeñas */}
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={{ base: 5, lg: 14 }}
              >
                {formDataCarrito.map(
                  (producto, i) => (
                    <CustomWineCard
                    image={producto.image}
                    key={i}
                    text={producto.text}
                    price={producto.price}
                    quantity={producto.quantity}
                    style={{ color: "black" }}
                    />
                  )
                )}
              </SimpleGrid>
            </Box>
          </Flex>

      </Box>
      <Footer />
      
    </div>
  );
};

export default SuccessView;

    /* 
        const { formData, formDataCarrito, precioFinal } = useParams();
        const decodedFormData = JSON.parse(decodeURIComponent(formData));
        const decodedformDataCarrito = JSON.parse(decodeURIComponent(formDataCarrito));
        const decodedPecioFinal = JSON.parse(decodeURIComponent(precioFinal)); */