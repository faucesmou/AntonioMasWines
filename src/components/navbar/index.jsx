import {
  HStack,
  Box,
  Image,
  Icon,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  Text,
  DrawerHeader,
  IconButton,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../assets/imgs/logo.png";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const handleOpenAndScroll = () => {
    onOpen();
    setTimeout(() => {
      const element = document.getElementById("inicio");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }); 
  };

  return (
    <Box
      bg="rgba(30,30,30,0.7)"
      position="sticky"
      top={0}
      left={0}
      width="100%"
      h="100px"
      zIndex={999}
    >
      <HStack
        justify="space-between"
        align="center"
        mx={{ base: "15px", md: "70px" }}
        pt="14px"
        pb="21px"
      >
        <Box display={{ base: "none", md: "block" }}></Box>
        <Link onClick={handleOpenAndScroll} to="/#inicio" >
          <Image widthidth="263px" height="78px" src={Logo} />
        </Link>
        <Box>
          <IconButton
            as={RxHamburgerMenu}
            ref={btnRef}
            onClick={onOpen}
            w="38px"
            h="38px"
            color="bgLight"
            bg="none"
            _hover={{ background: "none" }}
          />
          <Drawer
            zIndex={999}
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent
              bg="rgba(0, 0, 0, 0.8)"
            >
              <DrawerCloseButton
                color="bgLight"
                w="38px"
                h="38px"
                _focus={{
                  color: "bgLight",
                  boxShadow: "none",
                  border: "none",
                  outline: "none",
                }}
              />
              <DrawerHeader></DrawerHeader>

              <DrawerBody mt={5}>
                <Stack
                  direction="column"
                  align="flex-end"
                  fontFamily="Poppins san-serif"
                  fontWeight="300"
                  lineHeight="44px"
                  fontSize="30px"
                  color="bgLight"
                >
                  <Text>
                    <Link onClick={handleOpenAndScroll} to="/singlevineyard#inicio">Inicio</Link>
                  </Text>
                  <Text>
                    <Link onClick={handleOpenAndScroll}  to="/NuestrosVinos#inicio">Nuestros vinos</Link>
                  </Text>
                  <Text>
                    <Link onClick={handleOpenAndScroll}  to="/tiendaOnline#inicio">Tienda Online</Link>
                  </Text>
                  <Text>
                    <Link onClick={handleOpenAndScroll}  to="/beyondthewine#inicio">Enoteca</Link>
                  </Text>
                  <Text>
                    <Link onClick={handleOpenAndScroll}  to="/QuienesSomos#inicio">Quienes somos</Link>
                  </Text>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </HStack>
    </Box>
  );
};
export default Navbar;

//"rgba(30,30,30,0.7)"
