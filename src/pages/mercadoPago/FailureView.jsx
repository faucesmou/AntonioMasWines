// FailureView.jsx
import React, { useState, useEffect } from 'react';
import Navbar from "../../components/navbar";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../mercadoPago/successView.css';

import {Box,Button,Divider,Drawer,DrawerBody,DrawerCloseButton,DrawerContent,DrawerFooter,DrawerHeader,DrawerOverlay,Flex,HStack,Heading,Icon,IconButton,Image,Input,SimpleGrid,Stack,Text,useDisclosure,Select,useToast,} from "@chakra-ui/react";
import Footer from "../../components/footer";
import CustomWineCard from "./custom-wine-card/index";

import P1 from "../../assets/imgs/p1.png"; 
import P2 from "../../assets/imgs/p2.png"; 
import P3 from "../../assets/imgs/p3.png"; 
import S1 from "../../assets/imgs/s1.png"; 
import A1 from "../../assets/imgs/amarada1002.png"; 
import A2 from "../../assets/imgs/AlmaradaCavernetSinFondo.png";

const FailureView = () => {

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
  const { formData, precioFinal, formDataCarrito, mensajeEstadoCompra } = responseData;
  const { nombreApellido, email, celular, cp, calle } = formData;
  console.log('nombreApellido:', nombreApellido, 'email:', email, 'celular:', celular, 'cp:', cp, 'calle:', calle,);

  console.log('formDataCarrito es este------->>>> :', formDataCarrito);

  const getTotalAmount = (formDataCarrito) => {
    return formDataCarrito.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0)
     ;
  };

  const formDataCarrito2 = formDataCarrito.map((item) => {
    let imagen2;

    if (item.text === "Single Vineyard" /* && item.subText === "Chardonay (x6)" */) {
        imagen2 = P2; 
      } else if (item.text === "Single Vineyard") {
        imagen2 = P1; 
      } else if (item.text === "Núcleo3"){
        imagen2 = P3;
      } else if (item.text === "Single Vineyard"){
        imagen2 = S1;
      } else if (item.text === "Almarada"){
        imagen2 = A2;   
      }

   return {
     ...item,
     imagen2,
    };

       });

       console.log('formDataCarrito2 es este------->>>> :', formDataCarrito2);

  return (
    <div>
      <Navbar />
      <div className="success-container">
        <h1>Su compra no pudo ser procesada</h1>
        <p>Referencia Externa: {externalReference}</p>

        <div className="buyer-info">
          <p>Datos del comprador: </p>
          <p>Nombre y Apellido: {JSON.stringify(nombreApellido)}</p>
          <p>email: {JSON.stringify(email)}</p>
          <p>celular: {JSON.stringify(celular)}</p>
          <p>calle: {JSON.stringify(calle)}</p>
        </div>

        <div className="purchase-details">
          <p>Detalle de la compra: </p>
          {formDataCarrito2.map((producto) => (
           <div key={producto.compraCarritoId} className="product-item">
               <img src={producto.imagen2} alt={producto.text} />
              <div className="product-details">
                <p>Nombre: {producto.text}</p>
                <p>Precio: {producto.price}</p>
                <p>Cantidad: {producto.quantity}</p>
              </div>
            </div>
          ))}
          <p>Precio Final: AR${getTotalAmount(formDataCarrito).toLocaleString('es-AR')}</p>
        </div>

      </div>

      <Footer />

    </div>
  );
};

export default FailureView;
