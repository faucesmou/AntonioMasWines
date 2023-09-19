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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import S1 from "../../../../assets/imgs/s1.png";
import S2 from "../../../../assets/imgs/s2.png";
import S3 from "../../../../assets/imgs/s3.png";
import N1 from "../../../../assets/imgs/n1.png";
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

/* import P2 from "../../../../assets/imgs/p2.png";
import P3 from "../../../../assets/imgs/p3.png";
import n12 from "../../../../assets/imgs/n12.png";
import n13 from "../../../../assets/imgs/nCS12.png";
import a2 from "../../../../assets/imgs/A22.png";
import a1 from "../../../../assets/imgs/almaradaRojo.png";
import H2 from "../../../../assets/imgs/Hcs2.png";
import H3 from "../../../../assets/imgs/Hcs3.png";
import H1 from "../../../../assets/imgs/Hcs1.png"; */

/* ------------------------------------- otras imágenes */
import { FiShoppingCart } from "react-icons/fi";
import { BsArrowUpCircle, BsFileEarmarkArrowDown } from "react-icons/bs";
import Rating from "./rating";
import CustomWineCard from "./custom-wine-card";
import Footer from "../../../../components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useContext, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { CartContext } from "../../../../App";

// SwiperCore.use([Autoplay]);

/* const { isOpen, onOpen } = useDisclosure(); */

/*   const handleOpenAndScroll = () => {
    onOpen();
    setTimeout(() => {
      const element = document.getElementById("inicio");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Espera 100ms antes de desplazarte
  }; */

const ratingItems = [
  { text: "Formato", value: 40 },
  { text: "Calificación", value: 90 },
  { text: "Varietal", value: 70 },
  { text: "Añada", value: 60 },
];

const singleVineyard = [
  {
    image: S1,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },
  {
    image: S2,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },
  {
    image: S3,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },
  // ... Otros vinos Malbec
];

const nucleoData = [
  {
    image: N1,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },
  {
    image: N2,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },
  {
    image: N3,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },
];

const almaradaData = [
  {
    image: A1,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },
  {
    image: A2,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },

  // ... Otros vinos Malbec
];

const historiaData = [
  {
    image: H1,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },
  {
    image: H2,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },
  {
    image: H3,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },
  // ... Otros vinos Malbec
];
const espumanteData = [
  {
    image: E1,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },
];

const VineContent = () => {
  const toast = useToast();

  const { cartState, setCartState } = useContext(CartContext);

  /* hovers para que las botellas se agranden  */
  const [singleVineyardHoveredIndex, setSingleVineyardHoveredIndex] = useState(null);
  const [nucleoHoveredIndex, setNucleoHoveredIndex] = useState(null);
  const [almaradaHoveredIndex, setAlmaradaHoveredIndex] = useState(null);
  const [historiaHoveredIndex, setHistoriaHoveredIndex] = useState(null);
  const [espumanteHoveredIndex, setEspumanteHoveredIndex] = useState(null);

  const { isOpen, onOpen } = useDisclosure(); 
  const handleOpenAndScroll = () => {
    onOpen();
    setTimeout(() => {
      const element = document.getElementById("inicio");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Espera 100ms antes de desplazarte
  }; 



  const addToCart = (image, text, price) => {
    const foundItem = cartState.filter((item) => item.text === text)[0];

    if (foundItem) {
      toast({
        title: "Item already added to cart",
        status: "error",
        isClosable: true,
        position: "top",
      });

      return;
    }
    setCartState([...cartState, { image, text, price, quantity: 1 }]);
  };
  const updateQuantity = (text) => {
    if (!cartState.length) {
      toast({
        title: "Cart is empty!!",
        status: "error",
        isClosable: true,
        position: "top",
      });

      return;
    }
    const foundItem = cartState.filter((item) => item.text === text)[0];
    if (!foundItem) {
      toast({
        title: "Item not found in cart!!",
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
  };

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
    <Box bg="black" position="relative">
      <div id="inicio"></div>
      {/* Acá cambiás el fondo de toda la página */}
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
              color="white" /* color título grande */
              fontSize={{ base: "44px", md: "50px", lg: "70px", xl: "100px" }}
              fontWeight={400}
              lineHeight={{ base: "44px", md: "40%", xl: "117%" }}
              mt={10}
            >
              Nuestros Vinos
            </Heading>
          </Stack>
        </Flex>
      </Flex>

      {/* Contenedor para vinos Malbec y Chardonnay */}
      <Flex
        color="bgDark"
        justify="center"
        flexDirection={{ base: "column", md: "row" }} // Alineación vertical en columna para dispositivos pequeños y horizontal en fila para dispositivos medianos y grandes
        pb={{ base: 0, md: "15px" }}
      >
        {/* Contenedor de Malbec */}
        <Flex
          direction="column"
          gap={4}
          width={{ base: "100%", md: "50%", xl: "40%" }} // Ancho del contenedor para dispositivos pequeños, medianos y grandes respectivamente
          align="center"
          // Ajustamos los márgenes para separar el contenedor de "Malbec" del centro
          marginRight={{ base: "10px", md: "20px", lg: "15px" }}
          mt={10} // Espacio arriba del título
        >
          <Heading
            fontStyle="italic"
            color="white"
            fontSize={{ base: "30px", md: "40px", lg: "50px", xl: "60px" }}
            fontWeight={400}
            lineHeight={{ base: "30px", md: "40px", lg: "50px", xl: "60px" }}
          >
            SingleVineyard
          </Heading>
          <Divider borderColor="white" w="100%" my={2} />
          {/* ... Código existente */}
          <Flex
            direction="column"
            gap={8}
            marginTop={{ base: "10px", lg: "45px" }}
            marginBottom={{ base: "10px", lg: "30px" }}
          >
            <Box display={{ base: "10px", lg: "30px" }}> {/* base y lg son los responsive para grande y mobile */}
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={{ base: 5, lg: 14 }}
              >
                {singleVineyard.map(
                  ({ image, text, subText, price, btnText }, i) => (
                    <CustomWineCard
                      image={image}
                      key={i}
                      onAddToCart={() => {}}
                      text={text}
                      subText={subText}
                      price={price}
                      btnText={btnText}
                      onMouseEnter={() => setSingleVineyardHoveredIndex(i)}
                      onMouseLeave={() => setSingleVineyardHoveredIndex(null)}
                      isHovered={singleVineyardHoveredIndex === i}
                    >
                      {/* -------------------------> ACÁ HAY UN PROBLEMA PARA AJUSTAR LAS IMAGENES, AL USAR STYLE NO SE CARGAN <img
            className="photo"
            src={image}
            style={{ maxWidth: "202px", maxHeight: "499px" }}
          /> */}
                    </CustomWineCard>
                  )
                )}
              </SimpleGrid>
            </Box>
          </Flex>
        </Flex>

        {/* Contenedor de Chardonnay */}
        <Flex
          direction="column"
          gap={4}
          width={{ base: "100%", md: "50%", xl: "40%" }} // Ancho del contenedor para dispositivos pequeños, medianos y grandes respectivamente
          align="center"
          // Ajustamos los márgenes para separar el contenedor de "Chardonnay" del centro
          marginLeft={{ base: "10px", md: "20px", lg: "15px" }}
          mt={10} // Espacio arriba del título
        >
          <Heading
            fontStyle="italic"
            color="white"
            fontSize={{ base: "30px", md: "40px", lg: "50px", xl: "60px" }}
            fontWeight={400}
            lineHeight={{ base: "30px", md: "40px", lg: "50px", xl: "60px" }}
          >
            Núcleo
          </Heading>
          <Divider borderColor="white" w="100%" my={2} />
          {/* ... Código existente */}
          <Flex
            direction="column"
            gap={8}
            marginTop={{ base: "10px", lg: "45px" }}
            marginBottom={{ base: "10px", lg: "30px" }}
          >
            <Box display={{ base: "10px", lg: "30px" }}>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={{ base: 5, lg: 14 }}
              >
                {nucleoData.map(
                  ({ image, text, subText, price, btnText }, i) => (
                    <CustomWineCard
                      image={image}
                      key={i}
                      onAddToCart={() => {}}
                      text={text}
                      subText={subText}
                      price={price}
                      btnText={btnText}
                      onMouseEnter={() => setNucleoHoveredIndex(i)}
                      onMouseLeave={() => setNucleoHoveredIndex(null)}
                      isHovered={nucleoHoveredIndex === i}
                    />
                  )
                )}
              </SimpleGrid>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      {/* Segundo contenedor padre */}
      <Flex
        color="bgDark"
        justify="center"
        flexDirection={{ base: "column", md: "row" }} // Alineación vertical en columna para dispositivos pequeños y horizontal en fila para dispositivos medianos y grandes
        pb={{ base: 0, md: "15px" }}
      >
        <Flex
          direction="column"
          gap={4}
          width={{ base: "100%", md: "50%", xl: "40%" }} // Ancho del contenedor para dispositivos pequeños, medianos y grandes respectivamente
          align="center"
          // Ajustamos los márgenes para separar el contenedor de "Malbec" del centro
          marginRight={{ base: "10px", md: "20px", lg: "15px" }}
          mt={10} // Espacio arriba del título
        >
          <Heading
            fontStyle="italic"
            color="white"
            fontSize={{ base: "30px", md: "40px", lg: "50px", xl: "60px" }}
            fontWeight={400}
            lineHeight={{ base: "30px", md: "40px", lg: "50px", xl: "60px" }}
          >
            Almarada
          </Heading>
          <Divider borderColor="white" w="100%" my={2} />
          <Flex
            direction="column"
            gap={8}
            marginTop={{ base: "10px", lg: "45px" }}
            marginBottom={{ base: "10px", lg: "30px" }}
          >
            <Box display={{ base: "10px", lg: "30px" }}>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={{ base: 5, lg: 14 }}
              >
                {almaradaData.map(
                  ({ image, text, subText, price, btnText }, i) => (
                    <CustomWineCard
                      image={image}
                      key={i}
                      onAddToCart={() => {}}
                      text={text}
                      subText={subText}
                      price={price}
                      btnText={btnText}
                      onMouseEnter={() => setAlmaradaHoveredIndex(i)}
                      onMouseLeave={() => setAlmaradaHoveredIndex(null)}
                      isHovered={almaradaHoveredIndex === i}
                    />
                  )
                )}
              </SimpleGrid>
            </Box>
          </Flex>
        </Flex>

        {/* Contenedor de Malbec */}
        <Flex
          direction="column"
          gap={4}
          width={{ base: "100%", md: "50%", xl: "40%" }} // Ancho del contenedor para dispositivos pequeños, medianos y grandes respectivamente
          align="center"
          // Ajustamos los márgenes para separar el contenedor de "Malbec" del centro
          marginRight={{ base: "10px", md: "20px", lg: "15px" }}
          mt={10} // Espacio arriba del título
        >
          <Heading
            fontStyle="italic"
            color="white"
            fontSize={{ base: "30px", md: "40px", lg: "50px", xl: "60px" }}
            fontWeight={400}
            lineHeight={{ base: "30px", md: "40px", lg: "50px", xl: "60px" }}
          >
            Historia
          </Heading>
          <Divider borderColor="white" w="100%" my={2} />
          {/* ... Código existente */}
          <Flex
            direction="column"
            gap={8}
            marginTop={{ base: "10px", lg: "45px" }}
            marginBottom={{ base: "10px", lg: "30px" }}
          >
            <Box display={{ base: "10px", lg: "30px" }}>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={{ base: 5, lg: 14 }}
              >
                {historiaData.map(
                  ({ image, text, subText, price, btnText }, i) => (
                    <CustomWineCard
                      image={image}
                      key={i}
                      onAddToCart={() => {}}
                      text={text}
                      subText={subText}
                      price={price}
                      btnText={btnText}
                      onMouseEnter={() => setHistoriaHoveredIndex(i)}
                      onMouseLeave={() => setHistoriaHoveredIndex(null)}
                      isHovered={historiaHoveredIndex === i}
                    />
                  )
                )}
              </SimpleGrid>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      {/* Tercer contenedor padre */}
      <Flex
        color="bgDark"
        justify="center"
        flexDirection={{ base: "column", md: "row" }} // Alineación vertical en columna para dispositivos pequeños y horizontal en fila para dispositivos medianos y grandes
        pb={{ base: 0, md: "15px" }}
      >
        <Flex
          direction="column"
          gap={4}
          width={{ base: "100%", md: "50%", xl: "40%" }} // Ancho del contenedor para dispositivos pequeños, medianos y grandes respectivamente
          align="center"
          // Ajustamos los márgenes para separar el contenedor de "Malbec" del centro
          marginRight={{ base: "10px", md: "20px", lg: "15px" }}
          mt={10} // Espacio arriba del título
        >
          <Heading
            fontStyle="italic"
            color="white"
            fontSize={{ base: "30px", md: "40px", lg: "50px", xl: "60px" }}
            fontWeight={400}
            lineHeight={{ base: "30px", md: "40px", lg: "50px", xl: "60px" }}
          >
            Espumantes
          </Heading>
          <Divider borderColor="white" w="100%" my={2} />
          <Flex
            direction="row" // Mostrar los contenedores de imagen en una fila
            justifyContent="center" // Centrar los contenedores horizontalmente
            gap={8} // Espacio entre los contenedores de imagen
            marginTop={{ base: "10px", lg: "45px" }}
            marginBottom={{ base: "10px", lg: "30px" }}
          >
            {espumanteData.map(
              ({ image, text, subText, price, btnText }, i) => (
                <Box display={{ base: "10px", lg: "30px" }}
                key={i}
                maxWidth="300px" // Ajusta el tamaño máximo deseado para cada contenedor de imagen
    >
      <CustomWineCard
        image={image}
        onAddToCart={() => {}}
        text={text}
        subText={subText}
        price={price}
        btnText={btnText}
        onMouseEnter={() => setEspumanteHoveredIndex(i)}
        onMouseLeave={() => setEspumanteHoveredIndex(null)}
        isHovered={espumanteHoveredIndex === i}
      />
    </Box>
              )
            )}
          </Flex>
        </Flex>

        {/* Contenedor del Boton "ver todos los vinos" */}
        <Flex
          direction="column"
          gap={4}
          width={{ base: "100%", md: "50%", xl: "40%" }} // Ancho del contenedor para dispositivos pequeños, medianos y grandes respectivamente
          align="center"
          // Ajustamos los márgenes para separar el contenedor de "Malbec" del centro
          marginRight={{ base: "10px", md: "20px", lg: "15px" }}
          mt={10} // Espacio arriba del título
          mb={10}
        >
          
          {/* ... Código existente */}
          <Flex
            direction="column"
            gap={8}
            marginTop={{ base: "10px", lg: "280px" }}
            marginBottom={{ base: "10px", lg: "30px" }}
            marginLeft={{ base: "10px", md: "20px", lg: "30px" }}
            justifyContent="center"
            alignItems="center"
          >
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
            maxW="50vw"
            bgColor="black"
            _hover={{ backgroundColor: "rgba(67, 62, 62, 0.843)", transform: "scale(1.1)" }}
            my={{ base: 5, md: 0 }} // Ajusta el espacio vertical en el responsive pequeño
            px={{ base: 15, md: 0 }} // Ajusta el espacio horizontal en el responsive pequeño
            onClick={handleOpenAndScroll} 
          >
            {"Ver tienda Online"}
          </Button>
            </Box >
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );

  {
    /* Segunda línea de vinos horizontal: */
  }

  {
    /* -------------------------------------------------- */
  }
};
export default VineContent;
