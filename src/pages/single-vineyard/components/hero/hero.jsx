import { Box, Image } from "@chakra-ui/react";
import HeroImg from "../../../../assets/imgs/single-vine-img.png";

const HeroSection = () => {
  return (
    <Box height={{ base: "40vh", md: "70vh" }} bg="bgLight">
      <div id="inicio"></div>
      <Image
        src={HeroImg}
        width="100%"
        height="100%"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      />
    </Box>
  );
};
export default HeroSection;
