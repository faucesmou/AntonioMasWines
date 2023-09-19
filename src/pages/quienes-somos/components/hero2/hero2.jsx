import { Box, Image } from "@chakra-ui/react";
import HeroImg from "../../../../assets/imgs/historias/granpaGrande.png";

const HeroSection2 = () => {
  return (
    <Box height={{ base: "40vh", md: "80vh" }} bg="bgLight">
      <div id="inicio"></div>
      <Image
        src={HeroImg}
        width="100%"
        height="100%"
        objectFit="cover"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      />
    </Box>
  );
};
export default HeroSection2;
