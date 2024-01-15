import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, Heading, Icon, IconButton, Image, Input, SimpleGrid, Stack, Text, useDisclosure, Select, useToast, } from "@chakra-ui/react";
import S1 from "../../../../assets/imgs/s1.png";
import P1 from "../../../../assets/imgs/p1.png";
import P2 from "../../../../assets/imgs/p2.png";
import P3 from "../../../../assets/imgs/p3.png";

import A1 from "../../../../assets/imgs/amarada1002.png";
/* import A2 from "../../../../assets/imgs/almaradaCavernett.png"; */
import A2 from "../../../../assets/imgs/AlmaradaCavernetSinFondo.png";


import { FiShoppingCart } from "react-icons/fi";
import { BsArrowUpCircle, BsFileEarmarkArrowDown } from "react-icons/bs";
import Rating from "./rating";
import CustomWineCard from "./custom-wine-card";
import Footer from "../../../../components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useContext, useEffect, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { CartContext } from "../../../../App";
import axios from 'axios';


// SwiperCore.use([Autoplay]);

const ratingItems = [
    { text: "Formato", value: 40 },
    { text: "Calificación", value: 90 },
    { text: "Varietal", value: 70 },
    { text: "Añada", value: 60 },
];




const wineCardData = [
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
    /* {
      image: P3,
      text: "Núcleo3",
      subText: "Malbec (x6)",
      price: 'Sin Stock',
      btnText: "Añadir al carrito",
    }, */
    {
        image: A1,
        text: "Almarada",
        subText: "Malbec (x6)",
        price: "Sin Stock",
        btnText: "Añadir al carrito",
    },
];

const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
});

//FUNCIÓN PARA CONVERTIR STRING A NUMBER CON MONEDA ARGENTINA: 

/* const wineCardDataFormatted = wineCardData.map((item) => {

  const priceWithoutSymbol = item.price.replace(/[^0-9.,]/g, '');
  
  const priceWithDotSeparator = priceWithoutSymbol.replace(',', '.');

  const numericPrice = Number(priceWithDotSeparator);

  return {
    ...item,
    price: numericPrice ,
  };
}); */

/* console.log(wineCardDataFormatted); */



const VineContent = () => {


    const consultaProductos = async () => {
        try {

            const response = await axios.get('https://amw.createch.com.ar/api/productosDisponibles');
            const { success, data } = await response.data;/* json(); */

            if (success) {
                // Acceder a los datos obtenidos
                console.log("este es el DATA del success de consultaProductos: ", data);
                const wineCardData2 = data;
                console.log("este es el wineCardData2 del success de consultaProductos: ", wineCardData2);

                return wineCardData2;
            } else {
                console.error('Error al obtener productos disponibles:', data.message);
                return null;
            }
        } catch (error) {
            console.error('Error en la llamada a la API para obtener productos disponibles:', error);
            return null;
        }
    }

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpenAndScroll = () => {
        onOpen();
        setTimeout(() => {
            const element = document.getElementById("inicio");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        });
    };


    const [ProductosFiltrados, setProductosFiltrados] = useState([]);
    const [filterType, setFilterType] = useState("menor precio");
    const [imagenesCargadas, setImagenesCargadas] = useState([]);

// ASIGNACIÓN DE VALORES DE PRODUCTOS DE BACKEND AL FRONTEND:------------------>

    const filterProducts = async () => {

        const wineCardData5 = await consultaProductos()

        /* console.log('Este es el wineCardData5: -->', wineCardData5); */

        /*  let filteredProducts = [...wineCardData]; */
        /* emparejo la estructura de wineCardData5 a la que necesito para que sea leida correctamente: */

        wineCardData5.forEach(product => {
            product.price = parseFloat(product.price.replace('$', ''));
          });

         let filteredProducts = wineCardData5; 
       /*  let filteredProducts = wineCardData; */ /* actualmente está subido ESTE WINE CAR DATA (ESTÁ FIJO) */


        console.log('estos son los filteredProducts: -->', filteredProducts);
        let pruebaDato = filteredProducts[0].price;
        typeof (pruebaDato)
        console.log('estos son los filteredProducts.price typeof : -->', typeof pruebaDato);
        if (filterType === "menor precio") {
            filteredProducts.sort((a, b) => Number(a.price) - Number(b.price));
        } else if (filterType === "mayor precio") {
            filteredProducts.sort((a, b) => Number(b.price) - Number(a.price));
        }
        else if (filterType === "Más vendidos") {
            filteredProducts.sort((a, b) => Number(b.price) - Number(a.price));
        }
        setProductosFiltrados(filteredProducts)
        
        /*  return filteredProducts; acá se agrega al objeto la propiedad formattedPrice que es la que voy a usar para mostrar en pantalla, aunque el resto de las operaciones sean siempre usando price(en formato number) */
          return filteredProducts.map(product => ({
          ...product,
          formattedPrice: product.price.toLocaleString('es-AR'),
          })); 
    };
  
    useEffect(() => {
        console.log('Ejecutando useEffect con filterType:', filterType);
        filterProducts()
    }, [filterType] )
    //IMÁGENES   ---------------------------------------------------->

    // Función para cargar las imágenes de manera asíncrona
    const cargarImagenes = async () => {
        const imagenes = await Promise.all(
            ProductosFiltrados.map(async ({ image }) => {
                const rutaCompleta = `${image.replace(/'/g, '"')}`;
                /* console.log('Ruta completa:', rutaCompleta); */

                const imagen = await import(rutaCompleta).then((module) => module.default);
                return imagen;
            })
            );
            setImagenesCargadas(imagenes);
        };
        
        useEffect(() => {
        cargarImagenes();
      }, [ProductosFiltrados]);
    
    

    const toast = useToast();

    const { cartState, setCartState } = useContext(CartContext);


    // buscando solución para que se vean las imágenes en el carrito: incompleto: 

   /*  const cargarImagen = async (ruta) => {
        try {
          const imagen = await import(`${ruta}`).then((module) => module.default);
          return imagen;
        } catch (error) {
          console.error(`Error cargando la imagen: ${ruta}`, error);
          return null;
        }
      }; */

// AGREGAR AL CARRITO ----------------------------------------------------->

    const addToCart = (image, text, price, stock, formattedPrice) => {
               
        if(stock < 1){
            toast({
                title: "Momentaneamente Sin Stock.",
                status: "error",
                isClosable: true,
                position: "top",
            });  
            return; 
                }
/* el if de abajo que usa price ==="Sin Stock" es momentáneo. - el definitivo que se terminará usando es el de stock < 1 */
        if(price === "Sin Stock"){
            toast({
                title: "Momentaneamente Sin Stock.",
                status: "error",
                isClosable: true,
                position: "top",
            });  
            return; 
                }

            const foundItem = cartState.filter((item) => item.text === text)[0];
            console.log('Ejecutando useEffect con foundItem:', foundItem);
                 if (foundItem) {
            toast({
                title: "Este Item ya ha sido agregado al Carrito.",
                status: "error",
                isClosable: true,
                position: "top",
            });

            return;
        }
/* 
        const imagenProducto = cargarImagen(image);
        if (!imagenProducto) {
         
           return; 
        } */

        setCartState([...cartState, { image, text, price: Number(price), quantity: 1, formattedPrice, stock }]);
        /* }; */
    
        const updateQuantity = (text) => {
        if (!cartState.length) {
            toast({
                title: "El Carrito está vacío.",
                status: "error",
                isClosable: true,
                position: "top",
            });

            return;
        }
        const foundItem = cartState.filter((item) => item.text === text)[0];
        if (!foundItem) {
            toast({
                title: "Item no encontrado en el Carrito.",
                status: "error",
                isClosable: true,
                position: "top",
            });

            return;
        }
        let newArray = cartState.map((item) =>
            item.text === text ? { ...item, quantity: item.quantity + 1 } : item
        );

        setCartState(newArray);
    };}

    const getQuantity = () => {
        const item = cartState.filter(
            (item) => item.text === "Single Vineyard Malbec 2021"
        )[0];

        if (item) return item.quantity;
        return 0;
    };

    const getCurrentPrice = () => {
        const item = cartState.filter(
            (item) => item.text === "Single Vineyard Malbec 2021"
        )[0];

        if (item) return item.quantity * item.price;
        return 9.0;
    };

    return (
        <Box bg="bgLight" position="relative">
            <div id="inicio"></div>
            <Flex color="bgDark" justify="center" pb={{ base: 0, md: "15px" }}>
                <Flex
                    direction="column"
                    gap={4}
                    width={{ base: "100%", lg: "80%", xl: "60%" }}
                    align="center"
                >
                    <Stack
                        direction="column"
                        gap={{ base: 0, lg: 1 }}
                        align="center"
                        mb={4}
                    >

                        <Heading
                            fontStyle="italic"
                            fontSize={{ base: "44px", md: "50px", lg: "70px", xl: "100px" }}
                            fontWeight={400}
                            lineHeight={{ base: "44px", md: "40%", xl: "117%" }}
                            mt={10}
                        >
                            Nuestros Vinos
                        </Heading>
                        <Text
                            as="h2"
                            fontSize={{ base: "18px", lg: "32px" }}
                            fontWeight={{ base: 600, md: 400 }}
                            lineHeight="48px"
                        ></Text>
                    </Stack>

                    <Flex alignItems="center">

                        <Text marginRight="10px" fontWeight="bold" > Ordenar por: </Text>
                        <Select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            width="200px"
                            fontSize="16px"
                            fontWeight={500}
                            color="bgDark"
                            backgroundColor="rgba(218, 213, 208, 0.975)"
                            variant="outline"
                            alignSelf="center"
                            borderRadius="20px"
                        >
                            <option value="menor precio">Menor Precio</option>
                            <option value="mayor precio">Mayor Precio</option>
                            <option value="Más vendidos">Más vendidos</option>
                            {/* Puedes agregar otros tipos de filtro si lo deseas */}
                        </Select>
                    </Flex>

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
                                {ProductosFiltrados.map(
                                    ({ image, text, subText, price, btnText, stock,  formattedPrice }, i) => (
                                        <CustomWineCard
                                       /* image={image} */  /* ACTUALMENTE ESTÁ SUBIDO ESTE IMAGE */
                                        //NECESITAMOS EL image={imagenesCargadas[i]} DE ABAJO PARA QUE FUNCIONE LA CARGA DE PRODUCTOS DESDE EL BACK(Momentaneamente en desuso por desarrollo, no quitar.):                                 
                                        image={imagenesCargadas[i]} 
                                        key={i}
                                        text={text}
                                        subText={subText}
                                        price={/* formattedPrice */
                                        isNaN(price) ? 'Sin Stock' : price.toLocaleString('es-AR') 
                                        } 
                                        btnText={btnText}
                                        style={{ color: "black" }}
                                        onAddToCart={() => addToCart(image, text, price, stock, formattedPrice)} 
                                        />
                                        
                                        )
                                        )}
                            </SimpleGrid>
                                       
                        </Box>
                    </Flex>

                    <Button
                        bg="rgba(255, 255, 255, 0.5)"
                        border="1px solid"
                        borderColor="rgba(0, 0, 0, 1)"
                        borderRadius="29px"
                        p="26px"
                        fontSize="14px"
                        fontWeight={400}
                        lineHeight="16px"
                        width="100%"
                        maxW="50vw"
                        color="black"
                        _hover={{ backgroundColor: "#fff", transform: "scale(1.1)" }}
                        onClick={handleOpenAndScroll}
                    >
                        {"Cargar más"}
                    </Button>

                </Flex>

            </Flex>
            <Footer />
        </Box>
    );
};
export default VineContent;
