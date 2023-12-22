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
  const [fileSent, setfileSent] = useState(false);
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
  /*                       await axios.get(`https://amw.createch.com.ar/api/statusRequest/${externalReference}`); */
      const response = await axios.post('https://amw.createch.com.ar/api/submit-file', formData);

      console.log('Respuesta del Servidor response.data.success->>:', response.data.success);
      if (response.data.success) {
        console.log('Datos registrados con éxito:', response.data.message);
        // Puedes mostrar un mensaje al usuario indicando que los datos fueron recibidos con éxito
        setfileSent(true)
      } else {
        // La carga de productos falló
        console.error('Error en la carga de productos:', response.data.message);
        setfileSent(false)
      }
    } catch (error) {
      console.error('Error al enviar el archivo:', error);
      
    }
  };

  return (
    <div>
         <Navbar />
      <h1>Sección para subir archivo de Excel con Productos Disponibles</h1>

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
      {fileSent && <p>Archivo enviado exitosamente!! </p>}

      <button onClick={handleFileUpload}>Enviar archivo</button>
      <Footer />
    </div>
  );
};

export default CargaProductos;





