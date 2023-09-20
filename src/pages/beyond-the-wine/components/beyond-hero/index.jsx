import { Box, Heading, Image, Text } from "@chakra-ui/react";
import BeyondHeroImg from "../../../../assets/imgs/beyondHero.png";
import Player from "griffith";

const duration = 182;

const sources = {
  hd: {
    play_url: "https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4",
  },
  sd: {
    play_url: "https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4",
  },
};

const props = {
  id: "zhihu2018",
  title: "zhihu2018",
  hiddenTime: true,
  initialObjectFit: "cover",
  cover: BeyondHeroImg,
  duration,
  sources,
  src: "https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4",
};
const BeyondHero = () => {
  return (
    <Box
      width="100%"
      position="relative"
      height={{ base: "40vh", lg: "70vh" }}
      bg="bgDark"
    >
      <div id="inicio"></div>
      <Box height="100%">
        <Player {...props} />
      </Box>

      <Box
        position="absolute"
        bottom={{ base: "10%", md: "25%" }}
        left={{ base: "8%", md: "5%" }}
        fontStyle="italic"
        fontWeight={400}
        lineHeight={{ base: "51px", xl: "70px" }}
        letterSpacing="0.01em"
        // width={{ base: "200px", lg: "500px" }}
      >
        <Heading fontSize={{ base: "44px", md: "60px", xl: "100px" }}>
          Historias más
        </Heading>
        <Heading
          fontSize={{ base: "44px", md: "60px", xl: "100px" }}
          textAlign="end"
        >
          allá del VINO
        </Heading>
      </Box>
    </Box>
  );
};

export default BeyondHero;


