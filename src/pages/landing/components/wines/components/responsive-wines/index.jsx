import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  Image,
  Icon,
} from "@chakra-ui/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import S1 from "../../../../../../assets/imgs/s1.png";
import S2 from "../../../../../../assets/imgs/s2.png";
import S3 from "../../../../../../assets/imgs/s3.png";
import N1 from "../../../../../../assets/imgs/n1.png";
import N2 from "../../../../../../assets/imgs/n2.png";
import N3 from "../../../../../../assets/imgs/n3.png";
import N4 from "../../../../../../assets/imgs/n4.png";
import A1 from "../../../../../../assets/imgs/a1.png";
import A2 from "../../../../../../assets/imgs/a2.png";
import H1 from "../../../../../../assets/imgs/h1.png";
import H2 from "../../../../../../assets/imgs/h2.png";
import H3 from "../../../../../../assets/imgs/h3.png";



/* import almaradaMalbec from "../../../../assets/imgs/mejorImagen/almaradaMalbec.png"; */
import almaradaMalbec from "../../../../../../assets/imgs/mejorImagen/almaradaMalbec.png";
import almaradaCabernet from "../../../../../../assets/imgs/mejorImagen/almaradaCabernet.png";

import "swiper/css/navigation";
import "./res-styles.css";

SwiperCore.use([Navigation]);

const plusIconStyles = {
  boxSize: 12,
  color: "#fff",
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  opacity: 0.5,
};

const bottlesStyles = {
  width: "90px",
  height: "222px",
};

const style = {
  fontStyle: "italic",
  fontWeight: 400,
  lineHeight: "117%",
  letterSpacing: "0.01em",
  color: "#F2EEE3",
};

const ResponsiveWines = () => {
  return (
    <Box bg="#4F4F4F" pb="50px" pl="10px">
      <Box pt={5} pb="29px">
        <Text
          as="h4"
          width="fit-content"
          borderBottom={"2px solid"}
          borderBottomColor="#ffff"
          borderBottomWidth="1px"
          padding={1}
          fontSize="17px"
          fontWeight={600}
          letterSpacing="0.01em"
          lineHeight="26px"
        >
          Nuestros vinos
        </Text>
      </Box>
      <Box>
        <Swiper grabCursor={true} modules={[Navigation]} navigation>
          <SwiperSlide>
            <Flex direction={{ base: "column" }} gap={4}>
              <Heading
                zIndex={2}
                {...style}
                textAlign={{ base: "center" }}
                fontSize={{ base: "60px", md: "50px", lg: "70px", xl: "100px" }}
              >
                Single <br /> Vineyard
              </Heading>

              <HStack flexWrap="wrap" justify="center">
                <Box
                  position="relative"
                  _hover={{ transform: "scale(1.05)" }}
                  transition="all .1s ease-in"
                >
                  <Image
                    mixBlendMode="luminosity"
                    {...bottlesStyles}
                    src={S1}
                  />
                  <Box transition="all .1s ease-in">
                    {/* <Icon as={AiOutlinePlusCircle} {...plusIconStyles} /> */}
                  </Box>
                </Box>
                <Box
                  position="relative"
                  _hover={{ transform: "scale(1.05)" }}
                  transition="all .1s ease-in"
                >
                  <Image
                    mixBlendMode="luminosity"
                    {...bottlesStyles}
                    src={S2}
                  />
                  <Box transition="all .1s ease-in">
                    {/* <Icon as={AiOutlinePlusCircle} {...plusIconStyles} /> */}
                  </Box>
                </Box>
                <Box
                  position="relative"
                  _hover={{ transform: "scale(1.05)" }}
                  transition="all .1s ease-in"
                >
                  <Image
                    mixBlendMode="luminosity"
                    {...bottlesStyles}
                    src={S3}
                  />
                  <Box transition="all .1s ease-in">
                    {/* <Icon as={AiOutlinePlusCircle} {...plusIconStyles} /> */}
                  </Box>
                </Box>
              </HStack>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex direction="column" align="center" mx={5}>
              <Heading
                fontSize={{
                  base: "60px",
                  md: "50px",
                  lg: "70px",
                  xl: "100px",
                }}
                alignSelf="center"
                {...style}
              
              >
                Núcleo
              </Heading>
              <SimpleGrid align="start" gap={0} columns={4}>
                <Box
                  position="relative"
                  _hover={{ transform: "scale(1.05)" }}
                  transition="all .1s ease-in"
                >
                  <Image
                    mixBlendMode="luminosity"
                    {...bottlesStyles}
                    src={N1}
                    style={{
                      filter: 'brightness(110%) contrast(190%)', // Ajusta los valores según tus preferencias
                    }}
                  />
                  <Box transition="all .1s ease-in">
                    {/* <Icon as={AiOutlinePlusCircle} {...plusIconStyles} /> */}
                  </Box>
                </Box>
                <Box
                  position="relative"
                  _hover={{ transform: "scale(1.05)" }}
                  transition="all .1s ease-in"
                >
                  <Image
                    mixBlendMode="luminosity"
                    {...bottlesStyles}
                    src={N2}
                    style={{
                      filter: 'brightness(90%) contrast(190%)', // Ajusta los valores según tus preferencias
                    }}
                  />
                  <Box transition="all .1s ease-in">
                    {/* <Icon as={AiOutlinePlusCircle} {...plusIconStyles} /> */}
                  </Box>
                </Box>
                <Box
                  position="relative"
                  _hover={{ transform: "scale(1.05)" }}
                  transition="all .1s ease-in"
                >
                  <Image
                    mixBlendMode="luminosity"
                    {...bottlesStyles}
                    src={N3}
                    style={{
                      filter: 'brightness(110%) contrast(190%)', // Ajusta los valores según tus preferencias
                    }}
                  />
                  <Box transition="all .1s ease-in">
                    {/* <Icon as={AiOutlinePlusCircle} {...plusIconStyles} /> */}
                  </Box>
                </Box>
                <Box
                  position="relative"
                  _hover={{ transform: "scale(1.05)" }}
                  transition="all .1s ease-in"
                >
                  <Image
                    mixBlendMode="luminosity"
                    {...bottlesStyles}
                    src={N1}
                    style={{
                      filter: 'brightness(110%) contrast(190%)', // Ajusta los valores según tus preferencias
                    }}
                  />
                  <Box transition="all .1s ease-in">
                    {/* <Icon as={AiOutlinePlusCircle} {...plusIconStyles} /> */}
                  </Box>
                </Box>
              </SimpleGrid>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex direction="column" align="center" mx={5}>
              <Heading
                fontSize={{ base: "60px", md: "50px", lg: "70px", xl: "100px" }}
                {...style}
             
              >
                Almarada
              </Heading>

              <SimpleGrid align="start" gap={0} columns={2}>
                <Box
                  position="relative"
                  _hover={{ transform: "scale(1.05)" }}
                  transition="all .1s ease-in"
                >
                  <Image
                    mixBlendMode="luminosity"
                    {...bottlesStyles}
                    src={A1}
                    style={{
                      filter: 'brightness(130%) contrast(180%)', // Ajusta los valores según tus preferencias
                    }}
                  />
                  <Box transition="all .1s ease-in">
                    {/* <Icon as={AiOutlinePlusCircle} {...plusIconStyles} /> */}
                  </Box>
                </Box>
                <Box
                  position="relative"
                  _hover={{ transform: "scale(1.05)" }}
                  transition="all .1s ease-in"
                >
                  <Image
                    mixBlendMode="luminosity"
                    {...bottlesStyles}
                    src={A2}
                    style={{
                      filter: 'brightness(130%) contrast(180%)', // Ajusta los valores según tus preferencias
                    }}
                  />
                  <Box transition="all .1s ease-in">
                    {/* <Icon as={AiOutlinePlusCircle} {...plusIconStyles} /> */}
                  </Box>
                </Box>
              </SimpleGrid>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex direction="column" align="center" mx={5}>
              <Heading
                fontSize={{ base: "60px", md: "50px", lg: "70px", xl: "100px" }}
                {...style}
               
              >
                Historia
              </Heading>

              <SimpleGrid align="start" gap={0} columns={3}>
                <Box
                  position="relative"
                  _hover={{ transform: "scale(1.05)" }}
                  transition="all .1s ease-in"
                >
                  <Image
                    mixBlendMode="luminosity"
                    {...bottlesStyles}
                    src={H1}
                    style={{
                      filter: 'brightness(110%) contrast(190%)', // Ajusta los valores según tus preferencias
                    }}
                  />
                  <Box transition="all .1s ease-in">
                    {/* <Icon as={AiOutlinePlusCircle} {...plusIconStyles} /> */}
                  </Box>
                </Box>
                <Box
                  position="relative"
                  _hover={{ transform: "scale(1.05)" }}
                  transition="all .1s ease-in"
                >
                  <Image
                    mixBlendMode="luminosity"
                    {...bottlesStyles}
                    src={H2}
                    style={{
                      filter: 'brightness(110%) contrast(190%)', // Ajusta los valores según tus preferencias
                    }}
                  />
                  <Box transition="all .1s ease-in">
                    {/* <Icon as={AiOutlinePlusCircle} {...plusIconStyles} /> */}
                  </Box>
                </Box>
                <Box
                  position="relative"
                  _hover={{ transform: "scale(1.05)" }}
                  transition="all .1s ease-in"
                >
                  <Image
                    mixBlendMode="luminosity"
                    {...bottlesStyles}
                    src={H3}
                    style={{
                      filter: 'brightness(110%) contrast(190%)', // Ajusta los valores según tus preferencias
                    }}
                  />
                  <Box transition="all .1s ease-in" >
                    {/* <Icon as={AiOutlinePlusCircle} {...plusIconStyles} /> */}
                  </Box>
                </Box>
              </SimpleGrid>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};
export default ResponsiveWines;

