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
  Icon,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
  useDisclosure,
  Heading,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import PaymentForm from "./PaymentForm";
import { CartContext } from "../../App";

import P1 from "../../assets/imgs/p1.png"; 
import P2 from "../../assets/imgs/p2.png"; 
import P3 from "../../assets/imgs/p3.png"; 
import S1 from "../../assets/imgs/s1.png"; 
import A1 from "../../assets/imgs/amarada1002.png"; 
import A2 from "../../assets/imgs/AlmaradaCavernetSinFondo.png"; 


const StickyCart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //código para desplegar el primer formulario de compra:
  const [isPaymentFormOpen, setIsPaymentFormOpen] = useState(false);
  const [imagenesCargadas, setImagenesCargadas] = useState([]);





  const handleOpenPaymentForm = () => {
    onClose();
    setIsPaymentFormOpen(true);
  };

  const handleClosePaymentForm = () => {
    setIsPaymentFormOpen(false);
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
  //Estilos en línea para el modal:
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

  const { cartState, setCartState } = useContext(CartContext);



   //IMÁGENES   ---------------------------------------------------->

    // Función para cargar las imágenes de manera asíncrona
    const cargarImagenes = async () => {
      const imagenes = await Promise.all(
          cartState.map(async ({ image }) => {
              const rutaCompleta = `${image.replace(/'/g, '"')}`;
               /* console.log('Ruta completa:', rutaCompleta);   */

              const imagen3 = await import(rutaCompleta).then((module) => module.default);
              return imagen3;
          })
          );
          setImagenesCargadas(imagenes);
         
          /* esta funcion NO FUNCIONA */
      };
      
      useEffect(() => {
      cargarImagenes();
    }, [cartState]);

    //>>>><>----------------------------------------------------------------->

  const updateQuantity = (action, txt) => {
    if (action === "increase") {
      let newArray = cartState.map((item) => {
        return item.text === txt
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      setCartState(newArray);
    } else if (action === "decrease") {
      console.log(cartState);
      console.log(P2); 
      let newArray = cartState.map((item) => {
        if (item.text === txt) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      console.log('este es el newArray:', newArray);

      newArray = newArray.filter((item) => item.quantity > 0);

      setCartState(newArray);
    }
  };

  const getTotalAmount = () => {
   /*  console.log('ejecutando el getTotalAmount. Este es el cartState:', cartState ); */
   
    return cartState
      .reduce((acc, item) => acc + /* parseFloat */Number(item.price) * item.quantity, 0)
     /*  .toFixed(2) */;
  };
/* HAY UN PROBLEMA CON EL SUB TEXT: NO SE RECIBEN CORRECTAMENTE DESDE EL CART CONTEXT REVISAR LOS SUBTEXT:  */
  const cartState2 = cartState.map((item, subText) => {
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

          /*   const rutaTransformada = item.image ? `/src/${item.image.replace(/^(\.\.\/){4}/, '')}` : ''; */
            /* console.log('esta es la rutaTransformada: ', rutaTransformada); */
          // Crea un nuevo objeto con imagen2 y las demás propiedades
   return {
     ...item,
     imagen2,
     subText: subText,
    };
   
       });
     

  const updatedCartState = cartState.map((item) => ({
    ...item,
    notaPedido: "", // O inicializa con algún valor predeterminado si es necesario
  }));

  const handleSubmit = async () => {
    try {
      const cartArray = Object.values(cartState);
      const response = await axios.post(
        "https://amw.createch.com.ar/api/submit-carritoCompras",
        cartArray /*(esta variable enviaría la data de la compra) */
      );
      console.log(cartArray);
      const paymentUrl = response.data.data.url;
      // Redirige al usuario a la página de pago de Mobbex con la URL de checkout
      window.location.href = paymentUrl;
    } catch (error) {
      console.error("Error al activar el controlador: ", error);
    }
  };

  return (
    <Box>
      <Box
        top="50%"
        position="fixed"
        right={0}
        transform="translate(0, -50%)"
        w="64px"
        h="78px"
        bg="#400022"
        zIndex={isOpen ? 999 : 10000}
        p={5}
        borderTopLeftRadius="12px"
        borderBottomLeftRadius="12px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={onOpen}
      >
        <Flex direction="column" align="center">
          <Icon
            as={RiShoppingCartLine}
            w="33px"
            h="33px"
            _hover={{ cursor: "pointer" }}
          />
          <Text>{cartState.length}</Text>
        </Flex>
      </Box>
      <Box zIndex={130000}>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg={"rgba(255, 255, 255, 0.9)"} color="bgDark">
            <DrawerCloseButton
              width="50px"
              height="47.31"
              sx={{
                _focus: {
                  boxShadow: "none",
                },
              }}
            />
            <br />
            <DrawerHeader
              sx={{
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: 24,
              }}
              mt="5px"
            >
              Carrito
            </DrawerHeader>

            <DrawerBody
              mt="21px"
              userSelect={"none"}
              sx={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <Stack spacing="24px">
                {cartState2.map((item, index, imagen2) => (
                  
                  <Stack spacing="24px" key={index}>
                    <Stack direction="row" mb="13px">
                      <Stack direction="row" fontWeight={600} fontSize="17px">
                        <Image

                        /* ARREGLAR ESTA IMAGENNN: LA RUTA----------------> */


                           /* src={item.image ? `/src/${item.image.replace(/^(\.\.\/){4}/, '')}` : ""} */
                           src={item.imagen2} 
                           /* image={imagenesCargadas[item]}  */
                         /*   image={item.imagen2}  */ 
                          /* alt={Imagen} */
                          width="39px"
                          height="95px"
                          objectFit="cover"
                        />
                        <Flex direction="column" gap={1}>
                          <Text w="70%">{item.text}</Text>
                          <Flex gap={2}>
                            <Text
                              textDecoration="underline"
                              userSelect={"none"}
                              width="30px"
                            >
                              {item.quantity}
                            </Text>
                            <Icon
                              as={BsArrowUpCircle}
                              onClick={() =>
                                updateQuantity("increase", item.text)
                              }
                              width="26px"
                              height="26px"
                              _hover={{ cursor: "pointer" }}
                            />
                            <Icon
                              as={BsArrowDownCircle}
                              onClick={() =>
                                updateQuantity("decrease", item.text)
                              }
                              width="26px"
                              height="26px"
                              _hover={{ cursor: "pointer" }}
                            />
                          </Flex>
                        </Flex>
                      </Stack>
                      <Text>{(item.price * item.quantity).toLocaleString('es-AR')/* .toFixed(2) */}</Text>
                    </Stack>
                    <Divider bg="bgDark" />
                  </Stack>
                ))}
              </Stack>
            </DrawerBody>

            <DrawerFooter>
              <Stack direction="column" gap={3} w="100%">
                <Flex justify="space-between" fontWeight={600} fontSize="17px">
                  <Text>Subtotal</Text>
                  <Text>AR${getTotalAmount().toLocaleString('es-AR')}</Text>
                </Flex>
                <Input
                  variant="flushed"
                  borderBottomColor="bgDark"
                  _placeholder={{
                    fontWeight: 300,
                    fontSize: "15px",
                    color: "bgDark",
                  }}
                  placeholder="Nota sobre el pedido"
                  value={cartState.notaPedido}
                  onChange={(event) =>
                    setCartState((prevCartState) =>
                      prevCartState.map((item) => ({
                        ...item,
                        notaPedido: event.target.value,
                      }))
                    )
                  }
                />
                { cartState.length > 0? (
                <Button
                  fontSize="15px"
                  border=" 1px solid #4F4F4F"
                  borderRadius="43px"
                  background="rgba(0, 0, 0, 0.5)"
                  fontWeight={400}
                  width="100%"
                  color="#ffff"
                  height="55px"
                  onClick={handleOpenPaymentForm}
                  >
                  Comprar
                </Button> ) : ( <span> Agrega al menos un artículo al carrito antes de comprar.</span>)}

              </Stack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
      {/* Mostrar el formulario de pago si isPaymentFormOpen es true */}
      {isPaymentFormOpen && (
        <div style={modalStyles}>
          <div style={modalContentStyles}>
            <PaymentForm />
            <div
              style={{ maxHeight: "60vh", overflowY: "auto", marginTop: "2vh" }}
            >
              {/* Botón "Cancelar Compra":*/}
              <Button
                style={cancelButtonStyles}
                onClick={handleClosePaymentForm}
              >
                Cancelar Compra
              </Button>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
};
export default StickyCart;
