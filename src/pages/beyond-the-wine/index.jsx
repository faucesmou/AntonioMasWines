import Navbar from "./../../components/navbar/index";
import BeyondHero from "./components/beyond-hero";
import Sliders from "./components/sliders";
import VisitaBtn from "./components/visita-btn";


import GrapesSection from "../../components/grapes";
import { Box } from "@chakra-ui/react";

const BeyondTheWine = () => {
	return (
		<Box bg="bgDark" color="bgLight">
			<Navbar />
			<BeyondHero />
			<Sliders />
			<Sliders />
			<VisitaBtn />
			<GrapesSection />
		</Box>
	);
};
export default BeyondTheWine;
