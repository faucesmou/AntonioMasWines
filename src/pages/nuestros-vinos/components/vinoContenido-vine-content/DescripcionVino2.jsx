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
  Image,
  useDisclosure,
  AspectRatio,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { CartContext } from "../../../../App";
import axios from "axios";


import P1 from "../../../../assets/imgs/p1.png";
import P2 from "../../../../assets/imgs/p2.png";
import P3 from "../../../../assets/imgs/p3.png";
import S1 from "../../../../assets/imgs/s1.png";
import A1 from "../../../../assets/imgs/amarada1002.png";
import A2 from "../../../../assets/imgs/AlmaradaCavernetSinFondo.png";
import { Power1 } from "gsap/gsap-core";
import SVMalbec from "../../../../assets/pdf/SVMalbec.pdf"
import SVCSauvignon from "../../../../assets/pdf/SVCSauvignon.pdf"
import SVChardonnay from "../../../../assets/pdf/SVChardonnay.pdf"
import Almamalbec from "../../../../assets/pdf/Almamalbec.pdf"
import Almacabernet from "../../../../assets/pdf/Almacabernet.pdf"
import Historiamalbec from "../../../../assets/pdf/Historiamalbec.pdf"
import Historiacabernet from "../../../../assets/pdf/Historiacabernet.pdf"
import Nublend from "../../../../assets/pdf/Nublend.pdf"
import Nucabernet from "../../../../assets/pdf/Nucabernet.pdf"
import Numalbec from "../../../../assets/pdf/Numalbec.pdf"
import Extrabrut from "../../../../assets/pdf/Extrabrut.pdf"
import "./VineContent2.css"


const wineCardData = [
  {
    image: P1,
    text: "Single Vineyard1",
    subText: "Cabernet (x6)",
    price: "Sin Stock",
    btnText: "Añadir al carrito",
  },
  {
    image: P2,
    text: "Single Vineyard2",
    subText: "Chardonay (x6)",
    price: "Sin Stock",
    btnText: "Añadir al carrito",
  },
  /*  {
     image: P3,
     text: "Núcleo2",
     subText: "Malbec (x6)",
     price: 'Sin Stock',
     btnText: "Añadir al carrito",
   }, */
  {
    image: S1,
    text: "Single Vineyard",
    subText: "Malbec (x6)",
    price: "Sin Stock",
    btnText: "Añadir al carrito",
  },
  {
    image: P1,
    text: "Single Vineyard",
    subText: "Cabernet (x6)",
    price: "Sin Stock",
    btnText: "Añadir al carrito",
  },
  {
    image: P2,
    text: "Single Vineyard",
    subText: "Chardonay (x6)",
    price: "Sin Stock",
    btnText: "Añadir al carrito",
  },
  {
    image: P3,
    text: "Núcleo3",
    subText: "Malbec (x6)",
    price: 'Sin Stock',
    btnText: "Añadir al carrito",
  },
  {
    image: A1,
    text: "Almarada",
    subText: "Malbec (x6)",
    price: "Sin Stock",
    btnText: "Añadir al carrito",
  },
];

const wineCardData1 = [
  {
    image: P1,
    text: "Single Vineyard1",
    subText: "Cabernet (x6)",
    price: "Sin Stock",
    btnText: "Añadir al carrito",
  },]

const DescripcionVino2 = ({ image, text, subText, price, pdfFileName, onClose, variedad }) => {

/*   const { cartState } = useContext(CartContext); */


  /* const cartState2 = wineCardData1.map((item, subText) => {
    let imagen2;
    if (item.text === "Single Vineyard" ) {
      imagen2 = P2;
    } else if (item.text === "Single Vineyard") {
      imagen2 = P1;
    } else if (item.text === "Núcleo3") {
      imagen2 = P3;
    } else if (item.text === "Single Vineyard") {
      imagen2 = S1;
    } else if (item.text === "Almarada") {
      imagen2 = A2;
    }
    return {
      ...item,
      imagen2,
      subText: subText,
    };

  }); */

    let archivoPdf;

    if (text === "Almarada Malbec" && variedad === "malbec") {
        archivoPdf = Almamalbec; 
      } else if (text === "Almarada Cabernet" && variedad === "cabernet" ) {
        archivoPdf = Almacabernet; 
      } else if (text === "Single Vineyard Malbec" && variedad === "malbec" ) {
        archivoPdf = SVMalbec; 
      } else if (text === "Single Vineyard Cabernet" && variedad === "cabernet" ) {
        archivoPdf = SVCSauvignon; 
      } else if (text === "Single Vineyard Chardonay" && variedad === "chardonay" ) {
        archivoPdf = SVChardonnay; 
      } else if (text === "Núcleo Blend" && variedad === "blend"){
        archivoPdf = Nublend;
      } else if (text === "Núcleo Malbec" && variedad === "malbec"){
        archivoPdf = Numalbec;
      } else if (text === "Núcleo Cabernet" && variedad === "cabernet"){
        archivoPdf = Nucabernet;
      } else if (text === "Historia Malbec" && variedad === "malbec"){
        archivoPdf = Historiamalbec;
      } else if (text === "Historia Cabernet" && variedad === "cabernet"){
        archivoPdf = Historiacabernet;
      } else if (text === "Historia Blend" && variedad === "blend"){
        archivoPdf = Historiacabernet;
      } else if (text === "Extra Brut" && variedad === "extra brut"){
        archivoPdf = Extrabrut   
      }

  const handleDownloadPDF = () => {
    console.log('Entrando a handleDownloadPDF');
    console.log('pdfFileName:', pdfFileName);
    const pdfPath = archivoPdf; /* `../../../../assets/pdf/${pdfFileName}`; */
    console.log('pdfPath:', pdfPath);
    const link = document.createElement('a');
    link.href = pdfPath;
    console.log('link.href:', archivoPdf);
    link.download = pdfFileName;
    console.log('Antes de añadir el enlace al cuerpo del documento');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="contenedor-principal-descripcionVino" >
      
      <button className="close-button" onClick={onClose}>
        &#10006;
      </button>
      <div className="custom-modal-descripcionVino" >

        <div className="info-container-descripcionVino">
          <h1 className="info-heading-descripcionVino">Información del vino</h1>
          <div className="wine-info-descripcionVino">

            <div className="wine-card-descripcionVino" /* key={index} */>
              <div className="image-container-descripcionVino">
                <img src={image} alt={text} />
              </div>
              <div className="text-container-descripcionVino">
                <div className="wine-text-descripcionVino">{text}</div>
                <div className="subText">{subText}</div>
                <div className="wine-price-descripcionVino">AR${price ? price.toLocaleString('es-AR') : 'Precio no disponible'}</div>
              </div>
            </div>

          </div>
        </div>
        <div className="button-container">
      
          <button
            className="descargarFicha-button"
            onClick={handleDownloadPDF}
            type="submit"
          >
            Descargar Ficha Técnica
          </button>

        </div>
      </div>

    </div>
  );
};
export default DescripcionVino2;
