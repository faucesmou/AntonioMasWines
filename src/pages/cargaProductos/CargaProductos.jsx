// SuccessView.js
import React, { useState, useEffect } from 'react';
import Navbar from "../../components/navbar";
import GrapesSection from "../../components/grapes/index";
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
  const [fileNotSent, setfileNotSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    // Después de que se activa el useEffect por el formulario enviado con éxito, configuramos un temporizador para desactivar el mensaje después de 5 segundos.
    if (fileSent || fileNotSent) {
      const timer = setTimeout(() => {
        setfileSent(false);
        setfileNotSent(false);
      }, 5000); // 
      return () => clearTimeout(timer);
    }
  }, [fileSent, fileNotSent]);


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

      console.log('Respuesta del Servidor response.data->>', response.data);
      console.log('Respuesta del Servidor response.data.success->>:', response.data.success);
      if (response.data.success) {
        console.log('Datos registrados con éxito:', response.data.message);
        setfileSent(true)
      } else {
        console.error('Error en la carga de productos:', response.data.message);
        setfileSent(false);
        setfileNotSent(true);
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error al enviar el archivo:--> error: ', error);
        setfileSent(false);
        setfileNotSent(true);
        setErrorMessage(error.message);
    }
  };

  return (
    
    <div className="container">
       <Navbar />
      <h1 className="title">Sección para subir archivo de Excel con Productos Disponibles</h1>

      {/* Área de arrastrar y soltar */}
      <div
        className="dropArea"
        onDrop={(e) => {
          e.preventDefault();
          setSelectedFile(e.dataTransfer.files[0]);
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <p>Arrastra y suelta el archivo aquí o</p>
        <label htmlFor="fileInput">Selecciona un archivo.</label>
        <input
          type="file"
          id="fileInput"
          className="fileInput"
          onChange={handleFileChange}
        />
      </div>

      {/* Mostrar el nombre del archivo seleccionado */}
      {selectedFile && <p className="fileUploadedMessage">Archivo seleccionado: {selectedFile.name}</p>}
      {fileSent && <p className="successMessage">Archivo enviado exitosamente!! </p>}
      {fileNotSent && <p className="errorMessage">Error al enviar el archivo: {errorMessage}</p>}

      <button className="button" onClick={handleFileUpload}>Enviar archivo</button>
      <GrapesSection />
    </div>
  );


  /* return (
    <div>
         <Navbar />
      <h1
      style={{
        padding: '10px',
        marginBottom: '14px',
        marginTop: '14px',
        marginLeft: '100px',
        marginRight: '100px'
      }}
      >Sección para subir archivo de Excel con Productos Disponibles</h1>

     
      <div
        style={{
          border: '2px dashed gray',
          borderRadius: 'md',
          padding: '50px',
          marginBottom: '14px',
          marginTop: '14px',
          marginLeft: '100px',
          marginRight: '400px'
        }}
        onDrop={(e) => {
          e.preventDefault();
          setSelectedFile(e.dataTransfer.files[0]);
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <p>Arrastra y suelta el archivo aquí o</p>
        <label htmlFor="fileInput" style={{ cursor: 'pointer', marginTop: '10px' }}>
          Selecciona un archivo
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>

 
      {selectedFile && <p>Archivo seleccionado: {selectedFile.name}</p>}
      {fileSent && <p>Archivo enviado exitosamente!! </p>}

      <button  style={{
        padding: '10px',
        marginBottom: '14px',
        marginTop: '14px',
        marginLeft: '100px',
        marginRight: '100px'
      }} onClick={handleFileUpload}>Enviar archivo</button>
      <GrapesSection />
    </div>
  ); */
};

export default CargaProductos;



