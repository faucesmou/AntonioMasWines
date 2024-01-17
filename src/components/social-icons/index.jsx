import { Avatar, Flex } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

const icons = [
  { 
    name: "instagram", icon: <BsInstagram fontSize="1.5rem" color="black" />,
    url: "https://www.instagram.com/antoniomaswines?igsh=ZDFjYmx3cmJrN2gy", 
},
  {
    name: "linkendIn",
    icon: <GrLinkedinOption fontSize="1.5rem" color="black" />,
    url: "https://www.instagram.com/antoniomaswines?igsh=ZDFjYmx3cmJrN2gy",
  },
  { 
    name: "twitter", icon: <BsTwitter fontSize="1.5rem" color="black" />,
    url: "https://x.com/fincapropia?t=hxK_bgNiqwTh_g8AzmyarQ&s=08"},
  { name: "youtube", icon: <AiFillYoutube fontSize="1.5rem" color="black" />,
    url: "https://www.youtube.com/watch?v=MYcGs4PRGu8&ab_channel=WineTalkswithPaulK" },
];

const SocialIcon = ({ icon, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Avatar bg="bgLight" icon={icon} />
    </a>
  )
};

const DefaultIcons = () => {
  return (
    <Flex gap={2}>
      {icons.map((icon, i) => (
        <SocialIcon key={i} icon={icon.icon} color={icon.color} url={icon.url}/>
      ))}
    </Flex>
  );
};
export default DefaultIcons;
