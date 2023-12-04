// SuccessView.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
  
  return (
    <div>
      <h1>Pago Exitoso</h1>
      <p>¡Gracias por tu compra!</p>
      <p>Referencia Externa: {externalReference}</p>
      <p>FormData: {JSON.stringify(formData)}</p>
      <p>Precio Final: {precioFinal}</p>
      <p>FormDataCarrito: {JSON.stringify(formDataCarrito)}</p>
    </div>
  );
};

export default SuccessView;

    /* 
        const { formData, formDataCarrito, precioFinal } = useParams();
        const decodedFormData = JSON.parse(decodeURIComponent(formData));
        const decodedformDataCarrito = JSON.parse(decodeURIComponent(formDataCarrito));
        const decodedPecioFinal = JSON.parse(decodeURIComponent(precioFinal)); */