// SuccessView.js
import React, { useState } from 'react';
import Navbar from "../../components/navbar";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../cargaProductos/cargaProductosCSS.css';

import {Box,Button,Divider,Drawer, Alert, DrawerBody,DrawerCloseButton,DrawerContent,DrawerFooter,DrawerHeader,DrawerOverlay,Flex,HStack,Heading,Icon,IconButton,Image,Input,SimpleGrid,Stack,Text,useDisclosure,Select,useToast,} from "@chakra-ui/react";
import Footer from "../../components/footer";
/* import CustomWineCard from "./custom-wine-card/index"; */

//LA IDEA DE ESTA VISTA ES PODER CARGAR UN ARCHIVO EXCEL QUE SE MANDE AL BACKEND PARA LA CARGA DE PRODUCTOS EN LA BASE DE DATOS. LO QUE SIGUE DEBE MODIFICARSE POR COMPLETO:  

const CargaProductos = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log('Archivo seleccionado:', file);
  };

  const handleFileUpload = async () => {
    try {
      if (!selectedFile) {
        console.error('Debes seleccionar un archivo.');
        return;
      }

      console.log('Enviando archivo al servidor:', selectedFile);

      const formData = new FormData();
      formData.append('archivoExcel', selectedFile);

      const response = await axios.post('https://amw.createch.com.ar/api/submit-file', formData);

      console.log('Respuesta del Servidor:', response.data);
    } catch (error) {
      console.error('Error al enviar el archivo:', error);
    }
  };

  return (
    <div>
         <Navbar />
      <h1>Sección para subir archivo de Excel</h1>

      {/* Área de arrastrar y soltar */}
      <div
        style={{
          border: '2px dashed gray',
          borderRadius: 'md',
          padding: '4px',
          marginBottom: '4px',
        }}
        onDrop={(e) => {
          e.preventDefault();
          setSelectedFile(e.dataTransfer.files[0]);
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <p>Arrastra y suelta el archivo aquí o</p>
        <label htmlFor="fileInput" style={{ cursor: 'pointer', marginTop: '2px' }}>
          Selecciona un archivo
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>

      {/* Mostrar el nombre del archivo seleccionado */}
      {selectedFile && <p>Archivo seleccionado: {selectedFile.name}</p>}

      <button onClick={handleFileUpload}>Enviar archivo</button>
      <Footer />
    </div>
  );
};

export default CargaProductos;






/* const CargaProductos = () => {

    const [responseData, setResponseData] = useState(null);
    const [errors, setErrors] = useState({});

    const handleSubmit = async () => {
     
      try {
        
        const responseServer = await axios.post(`https://amw.createch.com.ar/api/submit-file`);
  
        console.log("Respuesta del Servidor:responseServer--->", responseServer.data);
        setFormSubmitted(true);

      } catch (error) {
        console.error("Error al enviar la información:---> ", error);
        console.error("Este es el response:---> ", responseServer);
        setFormSubmitted(false);
       
      }
    } 
    };
  
      // Función para realizar la solicitud al backend
      const handleSubmit2 = async () => {
        try {
          // Realizar la solicitud al endpoint correspondiente MODIFICAR
          const response = await axios.post(`https://amw.createch.com.ar/api//submit-file`);
  
          // Verificar si la solicitud fue exitosa
          if (response.data.success) {
            // Almacenar los datos en el estado
            console.log('Almacenando los datos en el estado en el backend: todo parece indicar que fue exitoso, response.data:', response.data);
            setFormSubmitted(true);
          } else {
            // Manejar errores si es necesario
            console.error('Error al enviar los datos desde la consulta del frontend:', response.data.error);
            setFormSubmitted(false);
          }
        } catch (error) {
          console.error('Error en el envío a la ruta:', error);
          setFormSubmitted(false);
        }
      };
 */

   


  // Verificar si los datos han sido cargados
/*   if (!responseData) {
    return <p>Consultando sus datos, por favor espere un momento...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="upload-container">
        <h1>Sección para subir archivo de Excel</h1>
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
                  Cargar archivo 
                </Button>
      </div>

      <Footer />

    </div>
  );
};

export default CargaProductos;
 */
   