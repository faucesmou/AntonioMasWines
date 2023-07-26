import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { ActionButton } from "../../../../../components/button";

const CustomWineCard = ({
  onAddToCart,
  image,
  text,
  subText,
  price,
  btnText,
}) => {
  return (
    <Box>
      <Flex direction="column" gap={3} align="center">
        <Image
          src={image}
          width={{ base: "150px", lg: "100%" }}
          objectFit="cover"
          height="fit-content"
        />
        <Stack
          direction="column"
          gap={1}
          fontSize="24px"
          fontWeight={400}
          lineHeight="36px"
          align="center"
        >
          <Text>{text}</Text>
          <Text>{subText}</Text>
        </Stack>
        <Text fontWeight={600} lineHeight="36px">
          $ {price}
        </Text>
      </Flex>
    </Box>
  );
};
export default CustomWineCard;
