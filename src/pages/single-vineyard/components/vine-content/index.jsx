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
import S1 from "../../../../assets/imgs/s1.png";
import P1 from "../../../../assets/imgs/p1.png";
import P2 from "../../../../assets/imgs/p2.png";
import P3 from "../../../../assets/imgs/p3.png";
import { FiShoppingCart } from "react-icons/fi";
import {
  BsArrowUpCircle,
  BsFileEarmarkArrowDown,
  BsArrowDownCircle,
} from "react-icons/bs";
import Rating from "./rating";
import CustomWineCard from "./custom-wine-card";
import Footer from "../../../../components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useContext, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { CartContext } from "../../../../App";

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
    text: "Single Vineyard ",
    subText: "Malbec (x6)",
    price: "8.000",
    btnText: "Añadir al carrito",
  },
  {
    image: P2,
    text: "Single Vineyard2 ",
    subText: "Chardonay (x6)",
    price: "5.000",
    btnText: "Añadir al carrito",
  },
  {
    image: P3,
    text: "Núcleo2",
    subText: "Malbec (x6)",
    price: "12.000",
    btnText: "Añadir al carrito",
  },
];

const VineContent = () => {
  const toast = useToast();

  const { cartState, setCartState } = useContext(CartContext);

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

  const updateQuantity2 = (text, action) => {
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
      item.text === text
        ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
        : item
    );
    console.log(newArray);
    newArray = newArray.filter((item) => item.quantity > 0);

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

    if (item) return (item.quantity * item.price).toFixed(3);
    return 0.0;
  };

  return (
    <Box bg="bgLight" position="relative">
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
              Single Vineyard
            </Heading>
            <Text
              as="h2"
              fontSize={{ base: "18px", lg: "32px" }}
              fontWeight={{ base: 600, md: 400 }}
              lineHeight="48px"
              mt={10}
            >
              Malbec 2021
            </Text>
          </Stack>
          <Stack
            mx={{ base: "15px", lg: 0 }}
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", lg: "start" }}
          >
            <Image src={S1} width={{ base: "150px", lg: "100%" }} />
            <Stack direction="column" h="100%"  mt={{ base: "10px", lg: "100px" }}/* justify="space-evenly" */>
              <Flex direction="column" gap={2} mt={{ base: "10px", lg: "10px" }} >
                <Stack
                  direction="row"
                  spacing={5}
                  justify={{ base: "space-between", md: "normal" }}
                  fontSize={{ base: "15px", md: "17px" }}
                  fontWeight={600}
                  fontStyle="normal"
                  lineHeight="26px"
                >
                  <HStack>
                    <Icon as={FiShoppingCart} boxSize={6} />
                    <Text
                      width="100px"
                      as="span"
                      fontWeight={{ base: 600, md: "600" }}
                    >
                      $ {getCurrentPrice()}
                    </Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Text
                      as="span"
                      fontWeight={{ base: 600, md: "600" }}
                      userSelect="none"
                    >
                      Caja por 6 botellas
                    </Text>
                    <Box
                      as="span"
                      textDecor="underline"
                      userSelect="none"
                      width="40px"
                    >
                      {getQuantity()}
                    </Box>
                    <Icon
                      as={BsArrowUpCircle}
                      onClick={() =>
                        updateQuantity("Single Vineyard Malbec 2021")
                      }
                      width="26px"
                      height="26px"
                      _hover={{ cursor: "pointer" }}
                    />
                    <Icon
                      as={BsArrowDownCircle}
                      onClick={() =>
                        updateQuantity2(
                          "Single Vineyard Malbec 2021",
                          "decrease"
                        )
                      }
                      width="26px"
                      height="26px"
                      _hover={{ cursor: "pointer" }}
                    />
                  </HStack>
                </Stack>

                <Box>
                  <Button
                    bg="rgba(255, 255, 255, 0.5)"
                    border="1px solid"
                    borderColor="rgba(0, 0, 0, 1)"
                    borderRadius="29px"
                    color="black"
                    p="26px"
                    fontSize="14px"
                    fontWeight={400}
                    lineHeight="16px"
                    onClick={() =>
                      addToCart(S1, "Single Vineyard Malbec 2021", 12)
                    }
                    width={{ base: "100%", sm: "fit-content" }}
                    _hover={{
                      backgroundColor: "#fff",
                      transform: "scale(1.1)",
                    }}
                  >
                    Añadir al carrito
                  </Button>
                </Box>
              </Flex>
              <Flex
                gap={5}
                direction={{ base: "column", lg: "row" }}
                justify={{ base: "normal", lg: "space-between" }}
              >
                <Text width={{ base: "100%", lg: "50%" }}
                 mt={{ base: "10px", lg: 0 }}>
                  Frescos y frutados. Considerando las características de los
                  vinos de altura, buen balance y concentración. El volumen en
                  boca, se percibe notable, pero no excesivo. Elegantes y
                  modernos con una acidez delicada y presente. Desafiantes pero
                  fáciles de tomar.
                </Text>
                <Stack direction="column" gap={2}>
                  {ratingItems.map((item, i) => (
                    <Rating key={i} text={item.text} value={item.value} />
                  ))}
                  <Stack direction="row" gap={1}>
                    <Icon as={BsFileEarmarkArrowDown} boxSize={6} />
                    <Text as="h5" fontWeight={700} fontSize="16px">
                      Ficha técnica
                    </Text>
                  </Stack>
                </Stack>
              </Flex>
            </Stack>
          </Stack>

          <Divider borderColor="bgDark" />

          <Flex
            direction="column"
            gap={8}
            marginTop={{ base: "10px", lg: "45px" }}
            marginBottom={{ base: "10px", lg: "30px" }}
          >
            <Text
              textAlign="center"
              as="h3"
              fontSize="24px"
              lineHeight="36px"
              fontWeight={600}
            >
              Podría interesarte:
            </Text>
            <Box display={{ base: "none", sm: "block" }}>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={{ base: 5, lg: 14 }}
              >
                {wineCardData.map(
                  ({ image, text, subText, price, btnText }, i) => (
                    <CustomWineCard
                      image={image}
                      key={i}
                      onAddToCart={() => addToCart(image, text, price)}
                      text={text}
                      subText={subText}
                      price={price}
                      btnText={btnText}
                    />
                  )
                )}
              </SimpleGrid>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Box
        display={{ base: "block", sm: "none" }}
        pb={8}
        color="bgDark"
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          grabCursor={true}
          loop={true} // Add this line for looping
          autoplay={{
            delay: 10000, //sliding duration
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
          /* style={{ zIndex: 1 }} */
        >
          {wineCardData.map(({ image, text, subText, price, btnText }, i) => (
            <SwiperSlide key={i}>
              <CustomWineCard
                image={image}
                text={text}
                subText={subText}
                price={price}
                btnText={btnText}
                onAddToCart={() => addToCart(image, text, price)}
                /* style={{ zIndex: 2 }} */
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Footer />
    </Box>
  );
};
export default VineContent;
