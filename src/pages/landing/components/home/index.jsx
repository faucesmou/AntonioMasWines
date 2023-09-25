import {
  Box,
  SimpleGrid,
  Image,
  Flex,
  Stack,
  Text,
  Heading,
  Icon,
} from "@chakra-ui/react";
import GrandPa from "../../../../assets/imgs/grandpa.png";
import GrandPa2 from "../../../../assets/imgs/grandpa2.png";
import GrandPa3 from "../../../../assets/imgs/grandpa3.png";
import Titulo from "../../../../assets/imgs/titulo-video.png";
import Poster1 from "../../../../assets/imgs/slide-cover.png";
import Poster2 from "../../../../assets/imgs/page1-banner.png";

// swipper css for effects fade to be precise
import "swiper/css/effect-fade";
import "swiper/css/navigation"; // import required modules\
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay, Navigation } from "swiper";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import HomePlayer from "./components/player";

import { useState } from "react";
SwiperCore.use([Navigation]);

const playerData = [
  {
    id: 12,
    title: "custom title1",
  },
  {
    id: 12,
    title: "custom title1",
    src: "https://www.youtube.com/watch?v=uLpoPVLpG9E",
  },
];

const Home = () => {
  const keepTrackOfInitialRender = useRef(true);
  const keepTrack = useRef(0);
  const [innerwidth, setInnerWidth] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (keepTrackOfInitialRender.current) {
      gsap
        .timeline()

        .add(animateHero());

      keepTrackOfInitialRender.current = false;
    }
  }, []);

  function animateHero() {
    let right = innerwidth < 480 ? "-300px" : "-600px";
    return (
      gsap
        .timeline()
        .to(".titulo-video", {
          right: right,
          duration: 1.5,
          display: "none",
          delay: 1,
          ease: "Sine.easeIn",
        })
        // .set(".next-image", {
        // 	display: "none",
        // });
        .to(
          ".next-image",
          {
            right: "+=400px",
            duration: 1,
            ease: "Sine.easeIn",
          },
          "-=1"
        )
    );
  }

  function prevAnimation() {
    if (keepTrack.current === 1) {
      gsap.killTweensOf(".next-image");
      gsap.to(".next-image", {
        right: "+=400px",
        duration: 1,
        ease: "Sine.easeIn",
      });
    }
    keepTrack.current = 0;
  }

  function bringBack() {
    if (keepTrack.current === 0) {
      gsap.killTweensOf(".next-image");
      gsap.to(".next-image", {
        right: "-=400px",
        duration: 1,
        ease: "Sine.easeIn",
      });
    }
    keepTrack.current = 1;
  }
  return (
    <Box bg="bgDark">
      <div id="inicio"></div>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={5} pb={{ base: 20, md: 0 }}>
        <Box width="100%">
          <Swiper
            slidesPerView={1}
            effect={"fade"}
            autoplay={{
              delay: 4000,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            modules={[EffectFade, Autoplay]}
            loop={true}
          >
            <SwiperSlide>
              <Image
                objectFit="cover"
                width="100%"
                height={{ base: "450px", md: "34.375rem" }}
                src={GrandPa}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                objectFit="cover"
                width="100%"
                height={{ base: "450px", md: "34.375rem" }}
                src={GrandPa2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                objectFit="cover"
                width="100%"
                height={{ base: "450px", md: "34.375rem" }}
                src={GrandPa3}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box mb={{ base: 0, md: 2 }} height={{ base: "350px", md:"34.375rem"  }}>
          <Text
            as="h4"
            width="fit-content"
            borderBottom={"2px solid"}
            borderBottomColor="#ffff"
            borderBottomWidth="1px"
            padding={2}
            ml={2}
            fontSize="17px"
            fontWeight={600}
            letterSpacing="0.01em"
            lineHeight="26px"
            color="bgLight"
          >
            Enoteca
          </Text>
          <Box mt="30px" h={{ base: "60vh", md: "34.375rem" }} overflow="hidden">
            <Swiper
              spaceBetween={10}
              modules={[Navigation]}
              grabCursor={true}
              slidesPerView={1}
              navigation
            >
              <SwiperSlide style={{ zIndex: 2 }}>
                {({ isActive }) => (
                  <Flex
                    w="100%"
                    position="relative"
                    gap={6}
                    pl={{ base: "20px", md: "15px", lg: "20px", xl: "45px" }}
                  >
                    {isActive && prevAnimation()}
                    <Stack
                      direction="column"
                      gap={10}
                      justify="center"
                      align="center"
                      zIndex={999}
                    >
                      <Heading
                        fontSize={{
                          base: "60px",
                          sm: "70px",
                          md: "100px",
                          lg: "100px",
                          xl: "100px",
                        }}
                        fontStyle="italic"
                        color="bgLight"
                        fontWeight="400"
                        lineHeight="117%"
                        position="relative"
                        height="100%"
                      >
                        <Box fontStyle="italic">Historias</Box>
                        <Box textAlign="end" fontStyle="normal" className="mas">
                          más{" "}
                          <Box as="span" fontStyle="italic">
                            allá{" "}
                          </Box>
                        </Box>
                        <Box as="span" className="vino">
                          del VINO
                        </Box>
                      </Heading>
                    </Stack>
                    <Box width="100%">
                      <Image
                        className="titulo-video"
                        position="absolute"
                        right={0}
                        alignSelf="flex-end"
                        height={{ base: "50vh", md: "60vh" }}
                        objectFit="contain"
                        src={Titulo}
                      />
                    </Box>
                  </Flex>
                )}
              </SwiperSlide>
              <SwiperSlide style={{ zIndex: 0 }}>
                {({ isActive }) => (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {isActive && bringBack()}

                    <HomePlayer img={Poster1} {...playerData[0]} />
                  </Box>
                )}
              </SwiperSlide>
              <SwiperSlide>
                <Box>
                  <HomePlayer img={Poster2} {...playerData[1]} />
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
export default Home;
