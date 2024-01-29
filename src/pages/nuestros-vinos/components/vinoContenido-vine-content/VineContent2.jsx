import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
  useToast,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import S1 from "../../../../assets/imgs/s1.png";
import A100 from "../../../../assets/imgs/almaradaSinFondoNuevo.png";
import A111 from "../../../../assets/imgs/a1.png";
import S2 from "../../../../assets/imgs/s2.png";
import S3 from "../../../../assets/imgs/s3.png";
import N1 from "../../../../assets/imgs/n1.png";
import singleVineyardMalbec from "../../../../assets/imgs/mejorImagen/singleVineyardMalbec.png";
import singleVineyardCabernet from "../../../../assets/imgs/mejorImagen/singleVineyardCabernet.png";
import singleVineyardChardonay from "../../../../assets/imgs/mejorImagen/singleVineyardChardonay22.png";
import almaradaMalbec from "../../../../assets/imgs/mejorImagen/almaradaMalbec.png";
import almaradaCabernet from "../../../../assets/imgs/mejorImagen/almaradaCabernet.png";
import Nmalbec from "../../../../assets/imgs/mejorImagen/nucleoMalbec.png";
import nucleoCabernet from "../../../../assets/imgs/mejorImagen/nucleoCabernet3.png";
import historiaMalbec from "../../../../assets/imgs/mejorImagen/historiaMalbec.png";
import historiacabernet from "../../../../assets/imgs/mejorImagen/historiaCabernet.png";
import historiaBlend from "../../../../assets/imgs/mejorImagen/historiaBlend5.png";
import extraBrut from "../../../../assets/imgs/mejorImagen/extraBrut.png";
import N2 from "../../../../assets/imgs/n2.png";
import N3 from "../../../../assets/imgs/n3.png";
import N4 from "../../../../assets/imgs/n4.png";
import A1 from "../../../../assets/imgs/a1.png";
import A2 from "../../../../assets/imgs/a2.png";
import H1 from "../../../../assets/imgs/h1.png";
import H2 from "../../../../assets/imgs/h2.png";
import H3 from "../../../../assets/imgs/h3.png";
import E1 from "../../../../assets/imgs/Elisir.png";
import imagenBoton from "../../../../assets/imgs/action-btn.png";
import PaymentForm from "../../../../components/sticky-cart/PaymentForm";
import "./VineContent2.css"

import { FiShoppingCart } from "react-icons/fi";
import { BsArrowUpCircle, BsFileEarmarkArrowDown } from "react-icons/bs";
import Rating from "./rating";
import CustomWineCard from "./custom-wine-card";
import Footer from "../../../../components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
/* import { Autoplay } from "swiper"; */
import SwiperCore, { Autoplay } from 'swiper';
import { useContext, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { CartContext } from "../../../../App";


const ratingItems = [
  { text: "Formato", value: 40 },
  { text: "Calificación", value: 90 },
  { text: "Varietal", value: 70 },
  { text: "Añada", value: 60 },
];

const singleVineyard = [
  {
    image: singleVineyardMalbec,
    text: "Single Vineyard Malbec",
    subText:`TIEMPO: Barricas de poro medio fino y tostado medio por períodos de 6 meses.\n\nVISTA: Rojo con tonos violaceos, límpido, brillante y profundo.\n\nNARIZ: Intensa, frutal. Característica de la variedad. Persistente en el tiempo.\n\nBOCA: Gran complejidad, con equilibrio de acidez. Taninos suaves y dulces. Gran persistencia en boca.`,
    price: "-------",
    btnText: "Añadir al carrito",
    variedad: "malbec",
    pdfFileName: "Single Vineyard Malbec",
  },
  {
    image: singleVineyardCabernet,
    text: "Single Vineyard Cabernet",
    subText: `TIEMPO: Barricas grand chau de poro fino y moderadamente fino por un período de 3 meses.\n\nVISTA: Rojo limpido y brillante.\n\nNARIZ: Intensa, frutal y especiada típica de la variedad.\n\nBOCA: Gran equilibrio, acidez en concordancia con taninos dulces. Intenso. Gran persistencia.`,
    price: "-------",
    btnText: "Añadir al carrito",
    variedad: "cabernet",
    pdfFileName: "Single Vineyard Cabernet",
  },
  {
    image: singleVineyardChardonay,
    text: "Single Vineyard Chardonay",
    subText: `TIEMPO: Barricas de origen americano tostado medio plus y poro fino.\n\nVISTA: Límpido, verde con reflejos amarillos.\n\nNARIZ: Frutal. Compleja. Con predominio de frutos cítricos. Dejo de banana.\n\nBOCA: Excelente acidez, complejidad, redondez y persistencia en boca.`,
    price: "-------",
    btnText: "Añadir al carrito",
    variedad: "chardonay",
    pdfFileName: "Single Vineyard Chardonay",
  },
  // ... Otros vinos Malbec
];

const nucleoData = [
  {
    image: Nmalbec,
    text: "Núcleo Malbec",
    subText: `TIEMPO: 6 meses 50% barrica de roble francés. 6 meses 50% barrica de roble americano.\n\nVISTA: Rojos con tonos violáceos, límpido, brillante y profundo.\n\nNARIZ: Frutal. Característica de la variedad.  De gran intensidad y equilibrada con la madera. Persistente en el tiempo.\n\nBOCA: Gran complejidad, agradable ataque, con equilibrio de acidez. Taninos suaves y dulces. Gran persistencia.`,
    price: "-------",
    btnText: "Añadir al carrito",
    variedad: "malbec",
    pdfFileName: "Numalbec",
  },
    {
    image: nucleoCabernet,
    text: "Núcleo Cabernet",
    subText: `TIEMPO: 6 meses barrica roble francés.\n\nVISTA: Rojo límpido, brillante y profundo.\n\nNARIZ: Intensa, frutal y especiada típica de la variedad. Equilibrada y en armonía con el roble. Persistente en el tiempo.\n\nBOCA: Gran equilibrio, acidez en corcondancia con taninos dulces. Intenso. Gran persistencia.`,
    price: "-------",
    btnText: "Añadir al carrito",
    variedad: "cabernet",
    pdfFileName: "Nucabernet",
  },
 /*  {
    image: N2,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  }, */
  {
    image: nucleoCabernet,
    text: "Núcleo Blend",
    subText: `TIEMPO: El cabernet pasa durante 6 meses por barricas de roble francés. El malbec pasa durante 6 meses por barricas de origen americano y francés.\n\nVISTA: Rojo límpido, brillante y profundo.\n\nNARIZ: Frutal especiada, de gran intensidad y equilibrada con la madera. Persistente en el tiempo.\n\nBOCA: Gran complejidad, con equilibrio de acidez. Taninos suaves y dulces. Gran persistencia.`,
    price: "-------",
    btnText: "Añadir al carrito",
    variedad: "blend",
    pdfFileName: "nublend",
  },
];

const almaradaData = [
  {
    image: almaradaMalbec,
    text: "Almarada Malbec",
    subText: `TIEMPO: 6 meses en barrica usada para perseverar la frescura de la fruta y la pureza del terroir.\n\nVISTA: Rojo con tonos violaceos, límpido, brillante y profundo.\n\nNARIZ: Aromas intensos de ciruela.\n\nBOCA: Se combinan los amables taninos con sabores de arándanos secos y chocolate con cáscara de naranja. Gran balance y complejidad.`,
    price: "-------",
    btnText: "Añadir al carrito",
    variedad: "malbec",
    pdfFileName: "Almarada Malbec",
  },
  {
    image: almaradaCabernet,
    text: "Almarada Cabernet",
    subText: `TIEMPO: 6 meses en barrica usada para perseverar la frescura de la fruta y la pureza del terroir.\n\nVISTA: Rojo con tonos violaceos, límpido, brillante y profundo.\n\nNARIZ: Aromas intensos, frutales y con presencia de pirazina que son típicos del carácter varietal.\n\nBOCA: Persistente en la boca. Gran balance, con taninos amables en la armonía con la acidez. Gran persistencia.`,
    price: "-------",
    btnText: "Añadir al carrito",
    variedad: "cabernet",
    pdfFileName: "Almarada Cabernet",
  },

];

const historiaData = [
  {
    image: historiaMalbec,
    text: "Historia Malbec",
    subText: `TIEMPO: 12 meses en barricas Roll Fermentor.\n\nVISTA: Viláceo, profundo. Límpido.\n\nNARIZ: Intensamente frutal, de gran persistencia. Tipicidad varietal absoluta. Agradable y gran complejidad del aporte de la madera.\n\nBOCA: Taninos dulces, persistentes, intensos y equilibrados con una excelente acidez.`,
    price: "-------",
    btnText: "Añadir al carrito",
    variedad: "malbec",
    pdfFileName: "Historia Malbec",
  },
  {
    image: historiacabernet,
    text: "Historia Cabernet",
    subText: `TIEMPO: 12 meses en barrica Roll Fermentor.\n\nVISTA: Rojo, profundo. Límpido.\n\nNARIZ: Característica de la variedad, compleja, con predominancia de frutos rojos y pirasinas. Agradable y gran complejidad del aporte de la madera.\n\nBOCA: Taninos dulces e intensos, equilibrados con la acidez.`,
    price: "-------",
    btnText: "Añadir al carrito",
    variedad: "cabernet",
    pdfFileName: "Historia Cabernet",
  },
  {
    image: historiaBlend,
    text: "Historia Blend",
    subText: `TIEMPO: 6 meses en barrica usada para perseverar la frescura de la fruta y la pureza del terroir.\n\nVISTA: De excelente tonalidad  ,voluptuoso, elegante ,logra un equilibrio en el potencial de cada uno de los atributos de ambas variedades cultivadas en La Arboleda, Tupungato.NARIZ: Aromas intensos de ciruela.\n\nBOCA: Se combinan los amables taninos con sabores de arándanos secos y chocolate con cáscara de naranja. Gran balance y complejidad.\n\nBOCA: De muy buena acidez, que caracteriza al terroir donde se producen las uvas, afrutado, con agradable ataque en boca y gran persistencia en la misma.\n\nMARIDAJE: Carnes rojas o de caza.`,
    price: "-------",
    btnText: "Añadir al carrito",
    variedad: "blend",
    pdfFileName: "Historia Blend",
  },

];
const espumanteData = [
  {
    image: extraBrut,
    text: "Extra Brut",
    subText: `TIEMPO: 12 meses en barrica Roll Fermentor.\n\nVISTA: De color amarillo verdoso, se muestra límpido y con burbuja extremadamente fina.\n\nNARIZ: Regala intensos aromas a durazno blanco, damascos y hasta notas tropicales como maracuyá.\n\nBOCA: Excelente ataque en boca, es un vino vibrante con gran frescura. Se encuentran sabores frutales acompañados  por toques de manteca y pan brioche, gracias al contacto con levaduras.\n\nMARIDAJE: Ensaladas cítricas, pescados y frutos de mar.`,
    price: "-------",
    btnText: "Añadir al carrito",
    variedad: "extra brut",
    pdfFileName: "Extra Brut",
  },
];

const VineContent2 = () => {

  SwiperCore.use([Autoplay]);
const [isSmallScreen] = useMediaQuery('(max-width: 300px)');
const [isSmallScreen2] = useMediaQuery('(max-width: 300px)');

  const toast = useToast();

  //código para desplegar el primer formulario de compra:
  const [isDescripcionVinoOpen, setIsDescripcionVinoOpen] = useState(false);
  /* 
    const { cartState, setCartState } = useContext(CartContext); */

  /* hovers para que las botellas se agranden  */
  const [singleVineyardHoveredIndex, setSingleVineyardHoveredIndex] = useState(null);
  const [nucleoHoveredIndex, setNucleoHoveredIndex] = useState(null);
  const [almaradaHoveredIndex, setAlmaradaHoveredIndex] = useState(null);
  const [historiaHoveredIndex, setHistoriaHoveredIndex] = useState(null);
  const [espumanteHoveredIndex, setEspumanteHoveredIndex] = useState(null);


  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenAndScroll = () => {
    onOpen();
    setTimeout(() => {
      const element = document.getElementById("inicio");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Espera 100ms antes de desplazarte
  };

  //funciones para activar el Modal de descripción: 

  const handleOpenDescripcionVino = () => {
    setIsDescripcionVinoOpen(true);
    onOpen();
  };

  const handleCloseDescripcionVino = () => {
    setIsDescripcionVinoOpen(false);
  };

  //Estilos en línea para el formulario paymentForm:
  const modalStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999, // Asegura que esté por encima del carrito
    margin: "auto",
    overflowY: "auto",

    /*  maxHeight: "80", */
  };
  //Estilos en línea para el modal Descripcion Vino:
  const modalContentStyles = {
    backgroundColor: "bgLight",
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    maxWidth: "100%", // Cambia el ancho según tus necesidades
    display: "flex",
    flexDirection: "column",
    borderRadius: "30px",
  };

  const cancelButtonStyles = {
    fontSize: "14px" /* Reduce el tamaño de fuente */,
    padding:
      "10px 20px" /* Ajusta el espaciado interior para achicar el botón */,
    border: "1px solid #4F4F4F",
    borderRadius:
      "30px" /* Ajusta el radio del borde para hacerlo más pequeño */,
    background: "rgba(0, 0, 0, 0.5)",
    fontWeight: 200,
    width: "auto",
    color: "#ffff",
    height: "40%" /* Reduce la altura del botón */,
    margin: "auto" /* Centra el botón horizontalmente */,
    display: "flex",
    alignItems: "center",
  };

  return (
    <div className="black-bg">
    <div id="inicio"></div>

    {/* Cambiar el fondo de toda la página */}
    <div className="flex-container bgDark justify-center align-center pb-15 titulo-playfair">
      <div className="content-container stack-container">
        < h1 /* className="white-text italic-heading align-center" */className="main-title">
          Nuestros Vinos
        </h1>
      </div>
    </div>

    {/* Contenedor para los primeros 2 grupos de vinos horizontalmente */}
    <div className="flex-container bgDark justify-center flex-wrap pb-15">
      {/* Contenedor para vinos Single Vineyard */}
      <div className="content-container product-container">
        <h2 className="white-text product-title">
          Single Vineyard
        </h2>
        <hr className="divider" />
          {/* ... Código existente */}
          {/* Verifica si estás en una pantalla pequeña antes de decidir usar el Swiper */}
          {isSmallScreen ? (
            <div className="flex-container">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
            >
              
              {singleVineyard.map(({ image, text, subText, price, btnText, pdfFileName, variedad }, i) => (
                <SwiperSlide key={i}>
                  <CustomWineCard
                    image={image}
                    key={i}
                    text={text}
                    subText={subText}
                    price={price}
                    pdfFileName={pdfFileName}
                    variedad={variedad}
                    onAddToCart={() => { }}
                    onMouseEnter={() => setSingleVineyardHoveredIndex(i)}
                    onMouseLeave={() => setSingleVineyardHoveredIndex(null)}
                    isHovered={singleVineyardHoveredIndex === i}
                  />
                </SwiperSlide>
              ))}
            
            </Swiper>
            </div>
          ) : (
            // Si no estás en una pantalla pequeña, renderiza la lista estándar
            <div className="flex-container">
              {singleVineyard.map(({ image, text, subText, price, btnText, pdfFileName, variedad }, i) => (
                <div className="wine-card" key={i}>
                  <CustomWineCard
                    image={image}
                    key={i}
                    text={text}
                    subText={subText}
                    price={price}
                    pdfFileName={pdfFileName}
                    variedad={variedad}
                    onAddToCart={() => { }}
                    onMouseEnter={() => setSingleVineyardHoveredIndex(i)}
                    onMouseLeave={() => setSingleVineyardHoveredIndex(null)}
                    isHovered={singleVineyardHoveredIndex === i}
                  />
                </div>
              ))}
            </div>
          )}
    
    


        {/* <div className="flex-container">
          {singleVineyard.map(({ image, text, subText, price, btnText, pdfFileName, variedad }, i) => (
            <div className="wine-card" key={i}>
              <CustomWineCard
                image={image}
                key={i}
                text={text}
                subText={subText}
                price={price}
                pdfFileName={pdfFileName}
                variedad={variedad}
                onAddToCart={() => { }}
                onMouseEnter={() => setSingleVineyardHoveredIndex(i)}
                onMouseLeave={() => setSingleVineyardHoveredIndex(null)}
                isHovered={singleVineyardHoveredIndex === i}
              />
            </div>
          ))}
        </div> */}
      </div>

      {/* Contenedor para vinos Núcleo */}
      <div className="content-container product-container">
        <h2 className="white-text  product-title">
          Núcleo
        </h2>
        <hr className="divider" />
         {/* Verifica si estás en una pantalla pequeña antes de decidir usar el Swiper */}
         {isSmallScreen2 ? (
            <div className="flex-container">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
            >
              
              {nucleoData.map(({ image, text, subText, price, btnText, pdfFileName, variedad }, i) => (
                <SwiperSlide key={i}>
                  <CustomWineCard
                    image={image}
                    key={i}
                    text={text}
                    subText={subText}
                    price={price}
                    pdfFileName={pdfFileName}
                    variedad={variedad}
                    onAddToCart={() => { }}
                    onMouseEnter={() => setSingleVineyardHoveredIndex(i)}
                    onMouseLeave={() => setSingleVineyardHoveredIndex(null)}
                    isHovered={singleVineyardHoveredIndex === i}
                  />
                </SwiperSlide>
              ))}
            
            </Swiper>
            </div>
          ) : (
            // Si no estás en una pantalla pequeña, renderiza la lista estándar
            <div className="flex-container">
              {nucleoData.map(({ image, text, subText, price, btnText, pdfFileName, variedad }, i) => (
                <div className="wine-card" key={i}>
                  <CustomWineCard
                    image={image}
                    key={i}
                    text={text}
                    subText={subText}
                    price={price}
                    pdfFileName={pdfFileName}
                    variedad={variedad}
                    onAddToCart={() => { }}
                    onMouseEnter={() => setSingleVineyardHoveredIndex(i)}
                    onMouseLeave={() => setSingleVineyardHoveredIndex(null)}
                    isHovered={singleVineyardHoveredIndex === i}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

       {/* Contenedor para vinos Single Vineyard y Núcleo */}
    <div className="flex-container bgDark justify-center flex-wrap pb-15">
      {/* Contenedor para vinos Single Vineyard */}
      <div className="content-container product-container">
        <h2 className="white-text  product-title">
          Almarada
        </h2>
        <hr className="divider" />
{/* Verifica si estás en una pantalla pequeña antes de decidir usar el Swiper */}
{isSmallScreen2 ? (
            <div className="flex-container">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
            >
              
              {almaradaData.map(({ image, text, subText, price, btnText, pdfFileName, variedad }, i) => (
                <SwiperSlide key={i}>
                  <CustomWineCard
                    image={image}
                    key={i}
                    text={text}
                    subText={subText}
                    price={price}
                    pdfFileName={pdfFileName}
                    variedad={variedad}
                    onAddToCart={() => { }}
                    onMouseEnter={() => setSingleVineyardHoveredIndex(i)}
                    onMouseLeave={() => setSingleVineyardHoveredIndex(null)}
                    isHovered={singleVineyardHoveredIndex === i}
                  />
                </SwiperSlide>
              ))}
            
            </Swiper>
            </div>
          ) : (
            // Si no estás en una pantalla pequeña, renderiza la lista estándar
            <div className="flex-container">
              {almaradaData.map(({ image, text, subText, price, btnText, pdfFileName, variedad }, i) => (
                <div className="wine-card" key={i}>
                  <CustomWineCard
                    image={image}
                    key={i}
                    text={text}
                    subText={subText}
                    price={price}
                    pdfFileName={pdfFileName}
                    variedad={variedad}
                    onAddToCart={() => { }}
                    onMouseEnter={() => setSingleVineyardHoveredIndex(i)}
                    onMouseLeave={() => setSingleVineyardHoveredIndex(null)}
                    isHovered={singleVineyardHoveredIndex === i}
                  />
                </div>
              ))}
            </div>
          )}




        {/* ... Código existente */}
        {/* <div className="flex-container">
          {almaradaData.map(({ image, text, subText, price, btnText, variedad, pdfFileName }, i) => (
            <div className="wine-card" key={i}>
              <CustomWineCard
                image={image}
                key={i}
                text={text}
                subText={subText}
                price={price}
                pdfFileName={pdfFileName}
                variedad={variedad}
                onAddToCart={() => { }}
                onMouseEnter={() => setSingleVineyardHoveredIndex(i)}
                onMouseLeave={() => setSingleVineyardHoveredIndex(null)}
                isHovered={singleVineyardHoveredIndex === i}
              />
            </div>
          ))}
        </div> */}
      </div>

      {/* Contenedor para vinos Núcleo */}
      <div className="content-container product-container">
        <h2 className="white-text product-title">
          Historia
        </h2>
        <hr className="divider" />

        {isSmallScreen2 ? (
            <div className="flex-container">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
            >
              
              {historiaData.map(({ image, text, subText, price, btnText, pdfFileName, variedad }, i) => (
                <SwiperSlide key={i}>
                  <CustomWineCard
                    image={image}
                    key={i}
                    text={text}
                    subText={subText}
                    price={price}
                    pdfFileName={pdfFileName}
                    variedad={variedad}
                    onAddToCart={() => { }}
                    onMouseEnter={() => setSingleVineyardHoveredIndex(i)}
                    onMouseLeave={() => setSingleVineyardHoveredIndex(null)}
                    isHovered={singleVineyardHoveredIndex === i}
                  />
                </SwiperSlide>
              ))}
            
            </Swiper>
            </div>
          ) : (
            // Si no estás en una pantalla pequeña, renderiza la lista estándar
            <div className="flex-container">
              {historiaData.map(({ image, text, subText, price, btnText, pdfFileName, variedad }, i) => (
                <div className="wine-card" key={i}>
                  <CustomWineCard
                    image={image}
                    key={i}
                    text={text}
                    subText={subText}
                    price={price}
                    pdfFileName={pdfFileName}
                    variedad={variedad}
                    onAddToCart={() => { }}
                    onMouseEnter={() => setSingleVineyardHoveredIndex(i)}
                    onMouseLeave={() => setSingleVineyardHoveredIndex(null)}
                    isHovered={singleVineyardHoveredIndex === i}
                  />
                </div>
              ))}
            </div>
          )}





        {/* ... Código existente */}
        {/* <div className="flex-container">
          {historiaData.map(({ image, text, subText, price, btnText, variedad, pdfFileName }, i) => (
            <div className="wine-card" key={i}>
              <CustomWineCard
                image={image}
                key={i}
                text={text}
                subText={subText}
                price={price}
                pdfFileName={pdfFileName}
                variedad={variedad}
                onAddToCart={() => { }}
                onMouseEnter={() => setNucleoHoveredIndex(i)}
                onMouseLeave={() => setNucleoHoveredIndex(null)}
                isHovered={nucleoHoveredIndex === i}
              />
            </div>
          ))}
        </div> */}
      </div>
      </div>

      {/* Contenedor para los primeros 2 grupos de vinos horizontalmente */}
    <div className="flex-container bgDark justify-center flex-wrap pb-15">
      {/* Contenedor para vinos Single Vineyard */}
      <div className="content-container product-container">
        <h2 className="white-text product-title">
          Espumantes
        </h2>
        <hr className="divider" />
        {/* ... Código existente */}
        <div className="flex-container">
          {espumanteData.map(({ image, text, subText, price, btnText, variedad, pdfFileName }, i) => (
            <div className="wine-card-espumante" key={i} style={{marginTop: '20px'}} >
              
              <CustomWineCard
                image={image}
                key={i}
                text={text}
                subText={subText}
                price={price}
                pdfFileName={pdfFileName}
                variedad={variedad}
                onAddToCart={() => { }}
                onMouseEnter={() => setSingleVineyardHoveredIndex(i)}
                onMouseLeave={() => setSingleVineyardHoveredIndex(null)}
                isHovered={singleVineyardHoveredIndex === i}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contenedor para vinos Núcleo */}
      <div className="content-container product-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       
      <Box display={{ base: "10px", lg: "30px" }}>            
            <Button
            as={Link} 
            to="/tiendaOnline#inicio" 
            bg="rgba(255, 255, 255, 0.5)"
            border="1px solid"
            borderColor="rgb(195, 190, 190)"
            borderRadius="29px"
            p="26px"
            fontcolor="white"
            fontSize="16px"
            fontWeight={400}
            lineHeight="16px"
            width="150%"
            maxW="25vw"
            bgColor="black"
            _hover={{ backgroundColor: "rgba(67, 62, 62, 0.843)", transform: "scale(1.1)" }}
            my={{ base: 5, md: 0 }} // Ajusta el espacio vertical en el responsive pequeño
            px={{ base: 20, md: 15 }} // Ajusta el espacio horizontal en el responsive pequeño
            onClick={handleOpenAndScroll} 
          >
            {"Ver tienda Online"}
          </Button>
            </Box >
       
      </div>
      </div>
      {/* Agrega más contenedores según sea necesario */}

      <Footer />
    </div>
    
  

  );


};
export default VineContent2;
