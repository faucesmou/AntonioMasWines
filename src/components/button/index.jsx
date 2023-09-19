import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CustomButton = ({ text }) => {
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
  return (
    <Box display={{ base: "flex", md: "block" }} justifyContent="center">
      <Button
        as={Link}
        to="/tiendaOnline#inicio"
        border="1px solid rgba(255,255,255,.5)"
        bg="transparent"
        w={{ base: "fit-content", md: "100%" }}
        py={{ base: 7, md: 8 }}
        borderRadius="50px"
        color="#ffff"
        _hover={{ bg: "#3333" }}
        fontWeight={400}
        onClick={handleOpenAndScroll}
      >
        {text}
      </Button>
    </Box>
  );
};

export const ActionButton = ({
  text,
  bg = "rgba(255, 255, 255, 0.5)",
  width = "fit-content",
}) => {
  return (
    <Box>
      <Button
        bg={bg}
        border="1px solid"
        borderColor="rgba(0, 0, 0, 1)"
        borderRadius="29px"
        p="26px"
        fontSize="14px"
        fontWeight={400}
        lineHeight="16px"
        width={width}
        _hover={{ backgroundColor: "#fff", transform: "scale(1.1)" }}
      >
        {text}
      </Button>
    </Box>
  );
};

export default CustomButton;
