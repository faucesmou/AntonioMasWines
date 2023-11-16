import { Box, SimpleGrid } from "@chakra-ui/react";
import SimpleCard from "./components/card/card";
import CustomButton from "../../../../components/button";
import so1 from "../../../../assets/imgs/so1.png";
import so2 from "../../../../assets/imgs/so2.png";
import so3 from "../../../../assets/imgs/so3.png";
import so4 from "../../../../assets/imgs/so4.png";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";


const cards = [
  { id: 1, imgUrl: "https://scontent.cdninstagram.com/v/t51.29350-15/356069541_232687466253016_3639079261488467129_n.heic?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=w5IYz7ZhHnQAX8_Ng91&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfAn5hHx8aL0Ht0lrW6QEjsRWBMtDkp-l4LAJehH1tBLoQ&oe=6516BB00" , comment: "ojota de comentario" },
  { id: 2, imgUrl: "https://scontent.cdninstagram.com/v/t51.2885-15/49858026_2199361650301877_5149760420010630632_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Z_NQYCVSJbQAX8uTNqy&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfDzn9MrpFfd5NKK3hywb5KGwYnEH1DszXZ80xRTbqC8GA&oe=6515ED51", comment: "ojota de comentario"  },
  { id: 3, imgUrl: "https://scontent.cdninstagram.com/v/t51.2885-15/42916886_2261916830716570_8638486878159565897_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=w3LPNDkjQ38AX-VXoUM&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfCeEayWuc6JfgV3eM1PIWz8_qDcAe1sJn2n_QSjoDVCAQ&oe=651742E0", comment: "ojota de comentario"  },
  { id: 4, imgUrl:"https://scontent.cdninstagram.com/v/t51.29350-15/117532617_1789270934544619_5007069695905462138_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Es7Lyl6RgI8AX-qdLay&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfBJZeyTfaqsZWQZMRm0wQgVwxipPcTrCAKm3kM298d14g&oe=6516AD99", comment: "ojota de comentario"  },
];

const cards2 = [
  { id: 1, img: so1 },
  { id: 2, img: so2 },
  { id: 3, img: so3 },
  { id: 4, img: so4 },
];
const Cards = () => {
  
  return (
    <Box pb={6} bg="bgDark">
      <Box mx={{ base: 6, md: 16 }} mb={{ base: 10, md: 3 }}>
        <SimpleGrid mb={10} columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
          {cards2.map(({ img, imgUrl, comment }, i) => (
            <SimpleCard key={i} img={imgUrl || img} comment={comment} />
          ))}
        </SimpleGrid>
        <CustomButton text="Cargar mas" />
      </Box>
    </Box>
  );
};
export default Cards;


/* const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   
    fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=TU_TOKEN_DE_ACCESO")
      .then((response) => response.json())
      .then((data) => {
        // Procesa los datos recibidos y establece el estado
        setPosts(data.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de Instagram:", error);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
        
          <img src={post.images.standard_resolution.url} alt={post.caption.text} />
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed; */
