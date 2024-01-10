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

import nuestraHistoria1 from "../../../../assets/imgs/historias/nuestraHistoria1.jpg";


// swipper css for effects fade to be precise
import "swiper/css/effect-fade";
import "swiper/css/navigation"; // import required modules\
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay, Navigation } from "swiper";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

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
    <Box bg="bgDark" display={{ base: "none", md: "none", lg: "block" }}>
      <SimpleGrid columns={{ base: 1, lg: 1 }} gap={3} pb={{ base: 20, md: 0 }}>
        <Box
          mb={{ base: 150, md: 170 }}
          mt={{ base: 50, md: 0 }}
          height={{ base: "350px", md: "550px" }}
        >
          <Flex
            direction="column"
            gap={8}
            bg="black"
            pt={19}
            pb={19}
            color="black"
            alignItems="center"
            align="center"
          >
            <Stack direction="column" align="center" gap={5}>
              <Heading
                fontStyle="italic"
                fontWeight={400}
                color="white"
                fontSize={{ base: "44px", md: "50px", lg: "70px", xl: "70px" }}
                lineHeight="1.3"
                width={{ base: "100%", lg: "100%" }}
                mx={{ base: "10px", lg: 0 }}
                textAlign="center"
                mt={7}
                mb={0}
                paddingX={{ base: "13px", lg: "0px" }}
              >
                Nuestra Historia
              </Heading>
            </Stack>
          </Flex>
          <SimpleGrid columns={1} spacing={10}>
            <Box mt="10px" h={{ base: "100vh" }} overflow="hidden">
              <Swiper
                spaceBetween={10}
                modules={[Navigation]}
                grabCursor={true}
                slidesPerView={1}
                /*   navigation */ //estas son las flechas
              >
                {/* Primer Slide de imágenes y texto: -------------------------->*/}
                <SwiperSlide>
                  <Flex
                    direction="row" // Alinea los elementos en una fila horizontal
                    justifyContent="flex-start" // Alinea los elementos a la izquierda
                    align="center"
                    h={{ base: "150vh" }}
                    position="relative"
                  >
                    <Box
                      position="absolute"
                      zIndex={20}
                      left={{ base: "210px", md: "110px", lg: "210px" }} /* esto se puede usar para hacer responsive cada propiedad en toda la línea temporal */
                      /* left="210px" */
                      right="0px"
                      top="20px"
                    >
                      <Image
                        src={nuestraHistoria1}
                        alt="Imagen 1"
                        width="35%"
                        objectFit="cover"
                      />
                    </Box>
                    <Box
                      position="absolute"
                      zIndex={30}
                      left="120px"
                      right="0"
                      top="260px"
                      width="30%"
                      
                    >
                      <Text fontSize="25px" color="white">
                        1968
                      </Text>
                    </Box>
                    <Box
                      position="absolute"
                      zIndex={30}
                      left="120px"
                      right="0"
                      top="300px"
                      width="30%"
                      
                    >
                      <Text fontSize="18px" color="white">
                      Antonio Más viajó a la Patagonia y transformó el proceso de vinificación en los años siguientes. Puso los cimientos del actual terroir patagónico, ya que comenzó a estudiar las variedades de vino y vinificar las variedades rojas y blancas por separado.
                      </Text>
                    </Box>
                    <Box
                      position="absolute"
                      zIndex={24}
                      left="640px"
                      right="0px"
                      top="70px"
                      width="65%"
                      height="auto"
                      display="flex"
                      alignItems="center"
                    >
                      
                      <Image
                        src={nuestraHistoria1}
                        alt="Imagen 2"
                        width="50%"
                      /*   height="100%" */
                        objectFit="cover"
                      />
                    </Box>
                    <Box
                      position="absolute"
                      zIndex={30}
                      left="540px"
                      right="0"
                      top="320px"
                      width="30%"
                      
                    >
                      <Text fontSize="25px" color="white">
                        1992
                      </Text>
                    </Box>
                    <Box
                      position="absolute"
                      zIndex={30}
                      left="540px"
                      right="0"
                      top="370px"
                      width="30%"
                      
                    >
                      <Text fontSize="18px" color="white">
                      Fundó la primera bodega boutique argentina: Finca La Anita, donde se inspiró en el concepto de Château francés: viñedos de gran pureza genética y variedad, identificando clones de cada variedad, y cultivando uvas.
                      </Text>
                    </Box>
                    <Box
                      position="absolute"
                      zIndex={30}
                      left="640px"
                      right="0"
                      top="20px"
                      width="30%"
                      
                    >
                      <Text fontSize="25px" color="white"> 
                        2010
                      </Text>
                    </Box>
                    <Box
                      position="absolute"
                      zIndex={26}
                      left="1110px"
                      right="0"
                      top="140px"
                      width="70%"
                      overflow="hidden"
                    >
                      <Image
                        src={nuestraHistoria1}
                        alt="Imagen 3"
                        width="50%"
                        objectFit="cover"
                      />
                    </Box>
                    <Box
                      position="absolute"
                      zIndex={30}
                      left="1110px"
                      right="0"
                      top="0px"
                      width="30%"
                      
                    >
                      <Text fontSize="18px" color="white">
                      Lanzó al mercado Finca Propia: El primer emprendimiento argentino que permitió al consumidor de vino comprar su propia parcela de viñedo y producir su propio vino liderado por Antonio.
                      </Text>
                    </Box>
                  </Flex>
                </SwiperSlide>

                {/* Segundo Slide de imágenes y texto: ------------------------->*/}

                <SwiperSlide>
                  <Flex
                    direction="row" // Alinea los elementos en una fila horizontal
                    justifyContent="flex-start" // Alinea los elementos a la izquierda
                    align="center"
                    h={{ base: "150vh" }}
                    position="relative"
                  >
                    <Box
                      position="absolute"
                      zIndex={20}
                      left="240px"
                      right="0px"
                      top="20px"
                    >
                      <Image
                        src={nuestraHistoria1}
                        alt="Imagen 1"
                        width="35%"
                        objectFit="cover"
                      />
                    </Box>
                    <Box
                      position="absolute"
                      zIndex={30}
                      left="240px"
                      right="0"
                      top="300px"
                      width="30%"
                      
                    >
                      <Text fontSize="25px" color="white">
                        2012
                      </Text>
                    </Box>
                    <Box
                      position="absolute"
                      zIndex={30}
                      left="240px"
                      right="0"
                      top="340px"
                      width="30%"
                      
                    >
                      <Text fontSize="18px" color="white">
                      Formó parte de un proyecto de investigación junto con la UNIVERSIDAD JUAN AGUSTÍN MAZA, INTA  y FINCA PROPIA sobre «La influencia de las especies aromáticas en Malbec, Cabernet Sauvignon y Chardonnay Aromas».
                      </Text>
                    </Box>
                    <Box
                      position="absolute"
                      zIndex={24}
                      left="660px"
                      right="0px"
                      top="70px"
                      width="65%"
                      height="auto"
                      display="flex"
                      alignItems="center"
                    >
                      
                      <Image
                        src={nuestraHistoria1}
                        alt="Imagen 2"
                        width="50%"
                      /*   height="100%" */
                        objectFit="cover"
                      />
                    </Box>
                    
                    <Box
                      position="absolute"
                      zIndex={30}
                      left="660px"
                      right="0"
                      top="380px"
                      width="30%"
                      
                    >
                      <Text fontSize="18px" color="white">
                     Con su hijo Santiago Mas, diseñaron un producto para que el consumidor de vinos pudiera disfrutar de todo lo lindo que rodea la vitivinicultura.
                      </Text>
                    </Box>
                    <Box
                      position="absolute"
                      zIndex={30}
                      left="660px"
                      right="0"
                      top="20px"
                      width="30%"
                      
                    >
                      <Text fontSize="25px" color="white"> 
                        2020
                      </Text>
                    </Box>
                    <Box
                      position="absolute"
                      zIndex={26}
                      left="1130px"
                      right="0"
                      top="130px"
                      width="70%"
                      overflow="hidden"
                    >
                      <Image
                        src={nuestraHistoria1}
                        alt="Imagen 3"
                        width="50%"
                        objectFit="cover"
                      />
                    </Box>
                    <Box
                      position="absolute"
                      zIndex={30}
                      left="1130px"
                      right="0"
                      top="0px"
                      width="30%"
                      
                    >
                      <Text fontSize="18px" color="white">
                      Antonio Mas ha tenido una enorme influencia en la vitivinicultura Argentina en los últimos 27 años años. Se destaca por conocer como pocos los secretos del viñedo.
                      </Text>
                    </Box>
                  </Flex>
                </SwiperSlide>
              </Swiper>
            </Box>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
export default Home;
