import {
	Avatar,
	Card,
	CardFooter,
	CardHeader,
	Flex,
	HStack,
	Icon,
	Image,
	Text,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";


const SimpleCard = ({ img, imgUrl, comment }) => {
	return (
		<Card
			borderRadius="xl"
			bg="bgLight"
			border="1px solid rgba(255,255,255,.5)"
			color="bgDark"
		>
			<CardHeader p={0} m={0}>
				<Image borderRadius="xl" src={imgUrl || img} objectFit="cover" width="100%" height="18rem"/>
			</CardHeader>
			<CardFooter display="flex" flexDirection="column" gap={2}>
				<Text fontSize="1rem">{comment}</Text>
				<HStack justify="space-between">
					<Flex align="center" gap={2}>
						<Avatar
							size="sm"
							
							name="Test User Test"
							src="https://scontent.cdninstagram.com/v/t51.29350-15/117532617_1789270934544619_5007069695905462138_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Es7Lyl6RgI8AX-qdLay&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfBJZeyTfaqsZWQZMRm0wQgVwxipPcTrCAKm3kM298d14g&oe=6516AD99"
							bg="bgDark"
						/>
						<Text fontSize="1rem">@Antonio Más </Text>
					</Flex>
					<Icon as={BsInstagram} boxSize={6} />
				</HStack>
			</CardFooter>
		</Card>
	);
};
export default SimpleCard;
