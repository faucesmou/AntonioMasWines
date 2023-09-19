import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Box, Heading, Icon, Image, Text, Button, Input, AspectRatio, SimpleGrid, Stack, useDisclosure} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { AiOutlinePlusCircle } from "react-icons/ai";
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
import { useLayoutEffect } from "react";

import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";



// mixBlendMode="luminosity"  {...bottlesStyles}
const style = {
  fontStyle: "italic",
  fontWeight: 400,
  lineHeight: "117%",
  letterSpacing: "0.01em",
  color: "#F2EEE3",
};
const plusIconStyles = {
  boxSize: 12,
  color: "#fff",
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const bottlesStyles = {
  width: "202px",
  height: "499px",
  opacity: 0.5,
};
const stage2Positions = {
  1: { left: "529px", top: "346px" },
  2: { left: "672px", top: "346px" },
  3: { left: "825px", top: "346px" },
  4: { left: "978px", top: "346px" },
};

const stage2TopPositions = {
  1: { left: "-97px", top: "100px", opacity: 0 },
  2: { left: "45px", top: "100px", opacity: 0 },
  3: { left: "199px", top: "100px", opacity: 0 },
};

const LargeScreensWines = () => {
  const initialRender = useRef(true);
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    animateShowArrow();
  }, []);

  useLayoutEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;

      return;
    }
    startAnimation();
  }, [currentStage]);

  function animateShowArrow() {
    gsap.to(".showArrow2", {
      duration: 0.5,
      left: "+=40",
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });
    gsap.to(".showArrow3", {
      duration: 0.5,
      left: "+=70",
      yoyo: true,
      repeat: -1,
      ease: "Power1.easeInOut",
    });
  }
  function killtweensAndDisplayNone() {
    gsap.killTweensOf(".showArrow2");
    gsap.set(".showArrow2", { display: "none" });
  }
  function startAnimation() {
    if (currentStage === 0) {
      return;
    }

    if (currentStage === 1) {
      AnimateStageOne();
    } else if (currentStage === 2) {
      AnimateStageTwo();
    } else if (currentStage === 3) {
      AnimateStageThree();
    } else if (currentStage === 4) {
      FinalStageFourAnimation();
    }
  }
  function AnimateStageOne() {
    let moveSBottlesArray = [];

    function overlapSBottlesAnimation() {
      const tl = gsap.timeline();

      tl.fromTo(
        ".n1Box",
        { opacity: 0, ...stage2Positions[1] },
        {
          duration: 2,
          ...stage2Positions[1],
          opacity: 1,
          mixBlendMode: "luminosity",
          ease: "Sine.easeout",
        },
        "<"
      )

        .fromTo(
          ".n2Box",
          { opacity: 0, ...stage2Positions[2] },
          {
            duration: 2,
            ...stage2Positions[2],
            opacity: 1,
            mixBlendMode: "luminosity",
            ease: "Sine.easeOut",
          },
          "<"
        )
        .fromTo(
          ".n3Box",
          { opacity: 0, ...stage2Positions[3] },
          {
            duration: 2,
            ...stage2Positions[3],
            opacity: 1,
            mixBlendMode: "luminosity",
            ease: "Sine.easeOut",
          },
          "<"
        )

        .fromTo(
          ".n4Box",
          { opacity: 0, ...stage2Positions[4] },
          {
            duration: 2,
            ...stage2Positions[4],
            opacity: 1,
            mixBlendMode: "luminosity",
            ease: "Sine.easeOut",
          },
          "<"
        );

      return tl;
    }

    function moveSBottles() {
      moveSBottlesArray.push(
        gsap
          .timeline()
          .to(
            ".s1Box",
            {
              ...stage2Positions[1],
              duration: 1.5,
              ease: "Sine.easeOut",
            },
            "<"
          )

          .to(
            ".s2Box",
            {
              ...stage2Positions[2],
              duration: 1.5,
              ease: "Sine.easeOut",
            },
            "<"
          )

          .to(
            ".s3Box",
            {
              ...stage2Positions[3],
              duration: 1.5,
              ease: "Sine.easeOut",
            },
            "<"
          )
      );

      return moveSBottlesArray;
    }
    function hideMovedSBottlesFunction() {
      return gsap
        .timeline()
        .to(
          ".s1Box",
          {
            delay: 0.2,
            duration: 0.4,
            opacity: 0,
            mixBlendMode: "luminosity",
            ease: "Sine.easeOut",
          },
          "<"
        )
        .to(
          ".s2Box",
          {
            duration: 0.4,
            opacity: 0,
            ease: "Sine.easeOut",
            mixBlendMode: "luminosity",
          },
          "<"
        )
        .to(
          ".s3Box",
          {
            duration: 0.4,
            opacity: 0,
            ease: "Sine.easeOut",
            mixBlendMode: "luminosity",
          },
          "<"
        );
    }

    function hideNBottles() {
      return gsap.timeline().set([".n1Box", ".n2Box", ".n3Box", ".n4Box"], {
        opacity: 0,
        duration: 0.5,
        ease: "Sine.easeOut",
      });
    }
    function showStage2TopBottles() {
      return gsap
        .timeline()
        .fromTo(
          ".s1TopBox",
          { opacity: 0 },
          {
            duration: 1,
            mixBlendMode: "luminosity",
            opacity: 0.5,
            ease: "Sine.out",
          }
        )
        .fromTo(
          ".s2TopBox",
          { opacity: 0 },
          {
            duration: 1,
            mixBlendMode: "luminosity",
            opacity: 0.5,
            ease: "Sine.out",
          },
          "<"
        )
        .fromTo(
          ".s3TopBox",
          { opacity: 0 },
          {
            duration: 1,
            mixBlendMode: "luminosity",
            opacity: 0.5,
            ease: "Sine.out",
          },
          "<"
        );
    }
    gsap
      .timeline()
      .to(".singleVineyard", {
        left: "-700px",
        duration: 1,
        ease: "Sine.out",
      })
      .add(moveSBottles(), "<")
      .to(
        ".almarada",
        {
          left: "793px",
          top: "214px",
          duration: 1.5,
          ease: "Sine.out",
        },
        "<"
      )
      .to(
        ".nucleo",
        { left: "238px", top: "652px", duration: 1.5, ease: "Sine.out" },
        "<"
      )
      .add(hideNBottles(), "<")
      .add(overlapSBottlesAnimation(), "<")
      .add(showStage2TopBottles(), "<")
      .add(hideMovedSBottlesFunction(), ">")
      .to(
        ".a1Box",
        { left: "1214px", top: "100px", duration: 1.5, ease: "Sine.easeOut" },
        "<"
      )
      .to(
        ".a2Box",
        { left: "1356px", top: "100px", duration: 1.5, ease: "Sine.easeOut" },
        "<"
      )
      .to(
        ".historia",
        { left: "1417px", top: "652px", duration: 1.5, ease: "Sine.easeOut" },
        "<"
      );
  }

  function AnimateStageTwo() {
    let hideTopBottlesArray = [];
    let moveNBoxesReplicaArray = [];
    let hideNBottlesAndShowThemArray = [];
    let showHBottlesArray = [];

    function showHBottles() {
      showHBottlesArray.push(
        gsap
          .timeline()
          .to(
            ".h1Box",
            {
              left: "1296px",
              top: "346px",
              duration: 1.5,
              ease: "Sine.easeOut",
            },
            "<"
          )
          .to(
            ".h2Box",
            {
              left: "1445px",
              top: "346px",
              duration: 1.5,
              ease: "Sine.easeOut",
            },
            "<"
          )
          .to(
            ".h3Box",
            {
              left: "1594px",
              top: "346px",
              duration: 1.5,
              ease: "Sine.easeOut",
            },
            ""
          )
      );
      return showHBottles;
    }

    function hideNBottlesAndShowThem() {
      hideNBottlesAndShowThemArray.push(
        gsap
          .timeline()
          .to([".n1Box", ".n2Box", ".n3Box", ".n4Box"], {
            opacity: 0,
            duration: 0.5,
            ease: "Sine.easeOut",
          })
          .fromTo(
            ".n1Box",
            { left: "51px", top: "346px", opacity: 0 },
            {
              left: "51px",
              top: "346px",
              opacity: 1,
              duration: 2.5,
              ease: "Sine.easeOut",
            },
            "<"
          )
          .fromTo(
            ".n2Box",
            { left: "194px", top: "346px", opacity: 0 },
            {
              left: "194px",
              top: "346px",
              opacity: 1,
              duration: 2.5,
              ease: "Sine.easeOut",
            },
            "<"
          )
          .fromTo(
            ".n3Box",
            { left: "347px", top: "346px", opacity: 0 },
            {
              left: "347px",
              top: "346px",
              opacity: 1,
              duration: 2.5,
              ease: "Sine.easeOut",
            },
            "<"
          )
          .fromTo(
            ".n4Box",
            { left: "500px", top: "346px", opacity: 0 },
            {
              left: "500px",
              top: "346px",
              opacity: 1,
              duration: 2.5,
              ease: "Sine.easeOut",
            },
            "<"
          )
      );
    }

    function moveNBoxesReplica() {
      moveNBoxesReplicaArray.push(
        gsap
          .timeline()
          .fromTo(
            ".n1BoxReplica",
            {
              display: "none",
              left: "529px",
              top: "346px",
            },
            {
              display: "block",
              left: "736px",
              top: "100px",
              duration: 1.5,
              ease: "Sine.easeOut",
            },
            "<"
          )
          .fromTo(
            ".n2BoxReplica",
            {
              display: "none",
              left: "672px",
              top: "346px",
            },
            {
              display: "block",
              left: "878px",
              top: "100px",
              duration: 1.5,
              ease: "Sine.easeOut",
            },
            "<"
          )
          .to(
            [".n1BoxReplica", ".n2BoxReplica"],
            {
              opacity: 0,
              duration: 1,
              ease: "Sine.easeOut",
              mixBlendMode: "luminosity",
            },
            ">"
          )
          .fromTo(
            ".a1Box",
            {
              opacity: 0,
              left: "736px",
              top: "100px",
            },
            {
              opacity: 1,
              left: "736px",
              top: "100px",
              duration: 1.5,
              ease: "Sine.easeOut",
            },
            "+0.5"
          )
          .fromTo(
            ".a2Box",
            {
              opacity: 0,
              left: "878px",
              top: "100px",
            },
            {
              opacity: 1,
              left: "878px",
              top: "100px",
              duration: 1.5,
              ease: "Sine.easeOut",
            },
            "<"
          )
      );
      return moveNBoxesReplicaArray;
    }
    function hideTopSBottles() {
      hideTopBottlesArray.push(
        gsap
          .timeline()
          .set(
            ".s1TopBox",
            { opacity: 0, duration: 0.5, ease: "Sine.easeOut" },
            "<"
          )
          .set(
            ".s2TopBox",
            { opacity: 0, duration: 0.5, ease: "Sine.easeOut" },
            "<"
          )
          .set(
            ".s3TopBox",
            { opacity: 0, duration: 0.5, ease: "Sine.easeOut" },
            "<"
          )
      );
    }
    gsap
      .timeline()
      .to(".almarada", {
        left: "315px",
        top: "214px",
        duration: 1.5,
        ease: "Sine.easeOut",
      })
      .to(
        ".nucleo",
        { left: "-240px", top: "652px", duration: 1.5, ease: "Sine.easeOut" },
        "<"
      )
      .to(
        ".historia",
        { left: "939px", top: "652px", duration: 1.5, ease: "Sine.easeOut" },
        "<"
      )
      .add(showHBottles(), "<")
      .add(hideTopSBottles(), "<")
      .add(hideNBottlesAndShowThem(), "<")
      .add(moveNBoxesReplica(), "<")
      .fromTo(
        ".n1BoxReplicaCross",
        { left: "-500px", top: "-300", opacity: 0, display: "none" },
        {
          display: "block",
          left: "2500px",
          top: "900px",
          opacity: 1,
          duration: 3,
          ease: "Sine.easeOut",
          mixBlendMode: "luminosity",
        },
        "<"
      );
  }

  function AnimateStageThree() {
    let hideNBottlesStage3Array = [];
    let showABottlesStage3Array = [];
    let showFinalHBottlesArray = [];
    let bringHBottlesToViewArray = [];

    function bringHBottlesToView() {
      gsap.timeline().fromTo(
        ".h1Box",
        { left: "529px", top: "346px", opacity: 0 },
        {
          left: "529px",
          top: "346px",
          opacity: 1,
          duration: 1.5,
          ease: "Sine.easeOut",
        },
        "<"
      );
      gsap.timeline().fromTo(
        ".h2Box",
        { left: "671px", top: "346px", opacity: 0 },
        {
          left: "671px",
          top: "346px",
          opacity: 1,
          duration: 1.5,
          ease: "Sine.easeOut",
        },
        "<"
      );
      gsap.timeline().fromTo(
        ".h3Box",
        { left: "814px", top: "346px", opacity: 0 },
        {
          left: "814px",
          top: "346px",
          opacity: 1,
          duration: 1.5,
          ease: "Sine.easeOut",
        },
        "<"
      );
      return bringHBottlesToViewArray;
    }
    function showFinalHBottles() {
      showFinalHBottlesArray.push(
        gsap
          .timeline()
          .fromTo(
            ".a1BoxReplica",
            { top: "100px", left: "736px", display: "block", opacity: 0.6 },
            {
              opacity: 1,
              top: "346px",
              left: "529px",
              mixBlendMode: "luminosity",
              duration: 1.5,
              ease: "Sine.easeOut",
            }
          )
          .fromTo(
            ".a2BoxReplica",
            { top: "100px", left: "878px", display: "block", opacity: 0.6 },
            {
              opacity: 1,

              top: "346px",
              left: "671px",
              mixBlendMode: "luminosity",
              duration: 1.5,
              ease: "Sine.easeOut",
            },
            "<"
          )
          .to(
            [".h1Box", ".h2Box", ".h2Box"],
            { opacity: 0, duration: 1, ease: "Sine.easeOut" },
            "<"
          )
          .to(
            [".a1BoxReplica", ".a2BoxReplica"],
            {
              opacity: 0,
              duration: 0.5,
              ease: "Sine.easeOut",
            },
            ">"
          )
      );

      return showFinalHBottlesArray;
    }

    function showABottlesStage3() {
      showABottlesStage3Array.push(
        gsap
          .timeline()
          .fromTo(
            ".a1Box",
            { top: "100px", left: "-56px", opacity: 0 },
            {
              top: "100px",
              left: "-56px",
              opacity: 1,
              duration: 0.5,
              ease: "Sine.easeOut",
            },
            "<"
          )
          .fromTo(
            ".a2Box",
            { top: "100px", left: "86px", opacity: 0 },
            {
              top: "100px",
              left: "86px",
              opacity: 1,
              duration: 0.5,
              ease: "Sine.easeOut",
            },
            "<"
          )
      );

      return showABottlesStage3Array;
    }

    function hideNBottlesStage3() {
      hideNBottlesStage3Array.push(
        gsap.timeline().to([".n1Box", ".n2Box", ".n3Box", ".n4Box"], {
          opacity: 0,
          duration: 0.5,
          ease: "Sine.easeOut",
        })
      );
      return hideNBottlesStage3Array;
    }

    const tl = gsap.timeline();
    tl.to(".almarada", {
      left: "-500px",
      top: "214px",
      duration: 1.5,
      ease: "Sine.easeOut",
    })
      .to(
        ".nucleo",
        {
          top: "652px",
          left: "-500px",
          duration: 1.5,
          ease: "Sine.easeOut",
        },
        "<"
      )
      .add(hideNBottlesStage3(), "<")
      .to(
        ".historia",
        { left: "172px", top: "652px", duration: 1.5, ease: "Sine.easeOut" },
        "<"
      )
      .add(showABottlesStage3(), "<")
      .add(showFinalHBottles(), "<")

      .add(bringHBottlesToView(), "<")
      .fromTo(
        ".action-btn",
        { opacity: 0, left: "663px", top: "404px" },
        {
          delay: 0.5,
          opacity: 1,
          duration: 1,
          left: "663px",
          top: "404px",
          ease: "Sine.easeOut",
        },
        "<"
      );

    return tl;
  }

  function FinalStageFourAnimation() {
    killtweensAndDisplayNone();
    function showNucleoBottlesFinalStage() {
      return gsap
        .timeline()
        .fromTo(
          ".n1Box",
          { left: "901px", top: "336px", opacity: 0 },
          {
            left: "901px",
            top: "336px",
            opacity: 1,
            duration: 2,
            ease: "Sine.easeOut",
          }
        )
        .fromTo(
          ".n2Box",
          { left: "1043px", top: "336px", opacity: 0 },
          {
            left: "1044px",
            top: "336px",
            opacity: 1,
            duration: 2,
            ease: "Sine.easeOut",
          },
          "<"
        )
        .fromTo(
          ".n3Box",
          { left: "1197px", top: "336px", opacity: 0 },
          {
            left: "1197px",
            top: "336px",
            opacity: 1,
            duration: 2,
            ease: "Sine.easeOut",
          },
          "<"
        )
        .fromTo(
          ".n4Box",
          { left: "1338px", top: "336px", opacity: 0 },
          {
            left: "1338px",
            top: "336px",
            opacity: 1,
            duration: 2,
            ease: "Sine.easeOut",
          },
          "<"
        );
    }
    function moveTwoHBottlesToAnimationStart() {
      return gsap
        .timeline()
        .to(".h1Box", { opacity: 0, duration: 0.5, ease: "Sine.easeOut" }, "<")
        .to(".h2Box", {
          top: "100px",
          left: "395px",
          duration: 1,
          ease: "Sine.easeOut",
        })
        .to(
          ".h3Box",
          { top: "100px", left: "536px", duration: 1, ease: "Sine.easeOut" },
          "<"
        );
    }
    function hideAndShowSBottles() {
      return gsap
        .timeline()
        .to([".h2Box", ".h3Box", ".a1Box"], {
          delay: "0.2",
          opacity: 0,
          duration: 0.2,
          ease: "Sine.easeOut",
        })
        .fromTo(
          ".s1Box",
          {
            left: "395px",
            top: "100px",
            opacity: 0,
          },
          {
            left: "395px",
            top: "100px",
            opacity: 1,
            duration: 1,
            ease: "Sine.easeOut",
          },
          "-=0.5"
        )
        .fromTo(
          ".s2Box",
          {
            left: "536px",
            top: "100px",
            opacity: 0,
          },
          {
            left: "536px",
            top: "100px",
            opacity: 1,
            duration: 1,
            ease: "Sine.easeOut",
          },
          "<"
        )
        .fromTo(
          ".s3Box",
          { left: "690px", top: "100px", opacity: 0 },
          {
            left: "690",
            top: "100px",
            opacity: 1,
            duration: 1,
            ease: "Sine.easeOut",
          },
          "<"
        );
    }
    gsap
      .timeline()
      .fromTo(
        ".a1Box",
        { left: "-56px", top: "100px" },
        {
          top: "100px",
          left: "690px",
          duration: 1.5,
          ease: "Sine.easeOut",
        }
      )
      .to(
        ".a2Box",
        {
          opacity: 0,
          duration: 0.5,
          ease: "Sine.easeOut",
        },
        "<"
      )
      .to(
        ".action-btn",
        { opacity: 0, duration: 0.5, ease: "Sine.easeOut" },
        "<"
      )

      .to(
        ".almarada",
        { left: "1165px", top: "214px", duration: 1.5, ease: "Sine.easeOut" },
        "<"
      )
      .fromTo(
        ".singleVineyard",
        {
          left: "90px",
          top: "214px",
          opacity: 0,
        },
        {
          left: "90px",
          top: "214px",
          opacity: 1,
          duration: 1.5,
          ease: "Sine.easeOut",
        },
        "-=0.5"
      )
      .to(
        ".nucleo",
        { left: "610px", top: "652px", duration: 1.5, ease: "Sine.easeOut" },
        "<"
      )
      .to(
        ".historia",
        { left: "1789px", top: "652px", duration: 1.5, ease: "Sine.easeOut" },
        "<"
      )
      .add(".h2Box", moveTwoHBottlesToAnimationStart(), "-=0.5")
      .add(hideAndShowSBottles(), "<")
      .add(showNucleoBottlesFinalStage(), "<");

    setCurrentStage(0);
  }

  const handleMouseEnter = (e, item) => {
    document.querySelector(`.${item}Box`).style.mixBlendMode = "normal";
    document.querySelector(`.${item}Box`).style.zIndex = 999;
    gsap.to(`.${item}Box`, { duration: 0.5, transform: "scale(1.1)" });
    // document.querySelector().style.transform = "scale(1.1)";
    document.querySelector(`.${item}Image`).style.opacity = 1;
    document.querySelector(`.${item}Icon`).style.display = "block";
  };
  const handleMouseLeave = (e, item) => {
    document.querySelector(`.${item}Box`).style.mixBlendMode = "luminosity";
    document.querySelector(`.${item}Box`).style.zIndex = 0;
    gsap.to(`.${item}Box`, { duration: 0.5, transform: "scale(1)" });
    // document.querySelector(`.${item}Box`).style.transform = "scale(1)";
    document.querySelector(`.${item}Image`).style.opacity = 0.5;
    document.querySelector(`.${item}Icon`).style.display = "none";
  };
  
  const { isOpen, onOpen } = useDisclosure();
  const handleOpenAndScroll = () => {
    onOpen();
    setTimeout(() => {
      const element = document.getElementById("inicio");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); 
  };
  return (
    <Box
      userSelect="none"
      overflow="hidden"
      overflowY="hidden"
      onClick={() => setCurrentStage(currentStage + 1)}
    >
      <Box
        bg="#4F4F4F"
        pb="50px"
        pl="90px"
        position="relative"
        height="884px"
        width="2976px"
        overflowX="hidden"
        overflowY="hidden"
      >
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
            color="bgLight"
          >
            Nuestros vinos
          </Text>
        </Box>
        {/* <Icon
          as={HiOutlineArrowLongRight}
          position="absolute"
          fontSize="60px"
          top="50%"
          left="1300px"
          color="bgLight"
          className="showArrow2"
          zIndex={999}
        />
        <Icon
          as={HiOutlineArrowLongLeft}
          position="absolute"
          fontSize="60px"
          top="50%"
          left="50px"
          color="bgLight"
          className="showArrow3"
          zIndex={999}
        /> */}
        <Heading
          className="singleVineyard"
          left="90px"
          zIndex={200}
          top="214px"
          position="absolute"
          {...style}
          fontSize={{ base: "60px", md: "50px", lg: "70px", xl: "100px" }}
        >
          Single <br /> Vineyard
        </Heading>
        <Box
          position="absolute"
          mixBlendMode="luminosity"
          left="394px"
          top="100px"
          className="s1Box"
        >
          <Box
            transition="all .2s ease-in"
            position="relative"
            _hover={{ zIndex: 1000 }}
            onMouseOver={(e) => handleMouseEnter(e, "s1")}
            onMouseOut={(e) => handleMouseLeave(e, "s1")}
          >
            <Image className="s1Image" {...bottlesStyles} src={S1} />
            <Box className="s1Icon" transition="all .1s ease-in" display="none">
              <Icon as={AiOutlinePlusCircle} {...plusIconStyles} />
            </Box>
          </Box>
        </Box>
        <Box
          position="absolute"
          left="536px"
          mixBlendMode="luminosity"
          top="100px"
          className="s2Box"
        >
          <Box
            position="relative"
            onMouseOver={(e) => handleMouseEnter(e, "s2")}
            onMouseOut={(e) => handleMouseLeave(e, "s2")}
            transition="all .2s ease-in"
          >
            <Image
              className="s2Image"
              {...bottlesStyles}
              opacity={1}
              src={S2}
            />
            <Box className="s2Icon" display="none" transition="all .1s ease-in">
              <Icon as={AiOutlinePlusCircle} {...plusIconStyles} />
            </Box>
          </Box>
        </Box>
        <Box
          position="absolute"
          mixBlendMode="luminosity"
          left="690px"
          top="100px"
          className="s3Box"
        >
          <Box
            position="relative"
            onMouseOver={(e) => handleMouseEnter(e, "s3")}
            onMouseOut={(e) => handleMouseLeave(e, "s3")}
            transition="all .2s ease-in"
          >
            <Image
              className="s3Image"
              {...bottlesStyles}
              opacity={1}
              src={S3}
            />
            <Box
              className="s3Icon"
              zIndex={300}
              display="none"
              transition="all .1s ease-in"
            >
              <Icon as={AiOutlinePlusCircle} {...plusIconStyles} />
            </Box>
          </Box>
        </Box>
        {/* Top s1 bottles replica */}
        <Box
          position="absolute"
          {...stage2TopPositions[1]}
          className="s1TopBox"
        >
          <Box>
            <Image
              mixBlendMode="luminosity"
              {...bottlesStyles}
              opacity={0.5}
              src={S1}
            />
          </Box>
        </Box>
        <Box
          position="absolute"
          {...stage2TopPositions[2]}
          className="s2TopBox"
        >
          <Box>
            <Image
              mixBlendMode="luminosity"
              {...bottlesStyles}
              opacity={0.5}
              src={S2}
            />
          </Box>
        </Box>
        {/* End Top s1 bottles replica */}
        <Box
          position="absolute"
          {...stage2TopPositions[3]}
          className="s3TopBox"
        >
          <Box position="relative" transition="all .1s ease-in">
            <Image
              mixBlendMode="luminosity"
              {...bottlesStyles}
              opacity={1}
              src={S3}
            />
            <Box display="none" transition="all .1s ease-in">
              <Icon as={AiOutlinePlusCircle} {...plusIconStyles} />
            </Box>
          </Box>
        </Box>

        <Heading
          position="absolute"
          className="nucleo"
          top="662px"
          left="610px"
          fontSize={{
            base: "60px",
            md: "50px",
            lg: "70px",
            xl: "100px",
          }}
          alignSelf="flex-end"
          {...style}
          opacity={0.5}
        >
          Núcleo
        </Heading>

        <Heading
          fontSize={{ base: "60px", md: "50px", lg: "70px", xl: "100px" }}
          {...style}
          opacity={0.5}
          className="almarada"
          left="1165px"
          top="214px"
          position="absolute"
        >
          Almarada
        </Heading>
        <Box
          position="absolute"
          left="901px"
          top="336px"
          className="n1Box"
          mixBlendMode="luminosity"
        >
          <Box
            position="relative"
            transition="all .2s ease-in"
            onMouseOver={(e) => handleMouseEnter(e, "n1")}
            onMouseOut={(e) => handleMouseLeave(e, "n1")}
          >
            <Image
              className="n1Image"
              {...bottlesStyles}
              opacity={0.5}
              src={N1}
            />
            <Box className="n1Icon" display="none" transition="all .1s ease-in">
              <Icon as={AiOutlinePlusCircle} {...plusIconStyles} />
            </Box>
          </Box>
        </Box>
        <Box
          position="absolute"
          left="1044px"
          top="336px"
          className="n2Box"
          mixBlendMode="luminosity"
        >
          <Box
            position="relative"
            transition="all .2s ease-in"
            onMouseOver={(e) => handleMouseEnter(e, "n2")}
            onMouseOut={(e) => handleMouseLeave(e, "n2")}
          >
            <Image className="n2Image" {...bottlesStyles} src={N2} />
            <Box className="n2Icon" display="none" transition="all .1s ease-in">
              <Icon as={AiOutlinePlusCircle} {...plusIconStyles} />
            </Box>
          </Box>
        </Box>
        {/* N2 Boxes replica to move to almarada positions */}
        <Box position="absolute" display="none" className="n1BoxReplicaCross">
          <Box position="relative">
            <Image
              mixBlendMode="luminosity"
              {...bottlesStyles}
              opacity={0.5}
              src={N1}
            />
          </Box>
        </Box>
        <Box position="absolute" display="none" className="n1BoxReplica">
          <Box position="relative">
            <Image
              mixBlendMode="luminosity"
              {...bottlesStyles}
              opacity={0.5}
              src={N1}
            />
          </Box>
        </Box>
        <Box position="absolute" display="none" className="n2BoxReplica">
          <Box position="relative">
            <Image mixBlendMode="luminosity" {...bottlesStyles} src={N2} />
          </Box>
        </Box>
        {/* End of n2 Boxes replica to move to almarada positions */}
        <Box
          position="absolute"
          left="1197px"
          top="336px"
          className="n3Box"
          mixBlendMode="luminosity"
        >
          <Box
            position="relative"
            transition="all .2s ease-in"
            onMouseOver={(e) => handleMouseEnter(e, "n3")}
            onMouseOut={(e) => handleMouseLeave(e, "n3")}
          >
            <Image className="n3Image" {...bottlesStyles} src={N3} />
            <Box className="n3Icon" display="none" transition="all .2s ease-in">
              <Icon as={AiOutlinePlusCircle} {...plusIconStyles} />
            </Box>
          </Box>
        </Box>
        <Box
          position="absolute"
          left="1338px"
          top="336px"
          className="n4Box"
          mixBlendMode="luminosity"
        >
          <Box
            position="relative"
            onMouseOver={(e) => handleMouseEnter(e, "n4")}
            onMouseOut={(e) => handleMouseLeave(e, "n4")}
            transition="all .2s ease-in"
          >
            <Image
              className="n4Image"
              {...bottlesStyles}
              width="180px"
              src={N4}
            />
            <Box className="n4Icon" display="none" transition="all .1s ease-in">
              <Icon as={AiOutlinePlusCircle} {...plusIconStyles} left="60%" />
            </Box>
          </Box>
        </Box>

        <Box
          position="absolute"
          left="1586px"
          top="100px"
          className="a1Box"
          mixBlendMode="luminosity"
        >
          <Box
            position="relative"
            onMouseOver={(e) => handleMouseEnter(e, "a1")}
            onMouseOut={(e) => handleMouseLeave(e, "a1")}
            transition="all .2s ease-in"
          >
            <Image
              className="a1Image"
              {...bottlesStyles}
              width="180px"
              src={A1}
            />
            <Box className="a1Icon" display="none" transition="all .1s ease-in">
              <Icon as={AiOutlinePlusCircle} {...plusIconStyles} left="60%" />
            </Box>
          </Box>
        </Box>
        <Box
          position="absolute"
          left="1734px"
          top="100px"
          className="a2Box"
          mixBlendMode="luminosity"
        >
          <Box
            position="relative"
            onMouseOver={(e) => handleMouseEnter(e, "a2")}
            onMouseOut={(e) => handleMouseLeave(e, "a2")}
            transition="all .2s ease-in"
          >
            <Image
              className="a2Image"
              {...bottlesStyles}
              width="180px"
              src={A2}
            />
            <Box className="a2Icon" display="none" transition="all .1s ease-in">
              <Icon as={AiOutlinePlusCircle} {...plusIconStyles} left="60%" />
            </Box>
          </Box>
        </Box>

        {/* A Boxes Replica to move in final stage */}
        <Box position="absolute" display="none" className="a1BoxReplica">
          <Box>
            <Image
              mixBlendMode="luminosity"
              {...bottlesStyles}
              width="180px"
              src={A1}
            />
          </Box>
        </Box>
        <Box position="absolute" display="none" className="a2BoxReplica">
          <Box>
            <Image
              mixBlendMode="luminosity"
              {...bottlesStyles}
              width="180px"
              src={A2}
            />
          </Box>
        </Box>
        {/* End of A boxes replica to move in final stage */}
        <Heading
          fontSize={{ base: "60px", md: "50px", lg: "70px", xl: "100px" }}
          {...style}
          opacity={0.5}
          left="1789px"
          top="652px"
          position="absolute"
          className="historia"
        >
          Historia
        </Heading>
        {/* Historia wines */}
        <Box
          position="absolute"
          left="1594px"
          top="346px"
          className="h1Box"
          mixBlendMode="luminosity"
        >
          <Box
            position="relative"
            onMouseOver={(e) => handleMouseEnter(e, "h1")}
            onMouseOut={(e) => handleMouseLeave(e, "h1")}
            transition="all .2s ease-in"
          >
            <Image
              className="h1Image"
              {...bottlesStyles}
              width="180px"
              src={H1}
            />
            <Box className="h1Icon" display="none" transition="all .1s ease-in">
              <Icon as={AiOutlinePlusCircle} {...plusIconStyles} left="60%" />
            </Box>
          </Box>
        </Box>
        <Box
          position="absolute"
          left="1594px"
          top="346px"
          className="h2Box"
          mixBlendMode="luminosity"
        >
          <Box
            position="relative"
            onMouseOver={(e) => handleMouseEnter(e, "h2")}
            onMouseOut={(e) => handleMouseLeave(e, "h2")}
            transition="all .2s ease-in"
          >
            <Image
              className="h2Image"
              {...bottlesStyles}
              width="180px"
              src={H2}
            />
            <Box className="h2Icon" display="none" transition="all .1s ease-in">
              <Icon as={AiOutlinePlusCircle} {...plusIconStyles} left="60%" />
            </Box>
          </Box>
        </Box>
        <Box
          position="absolute"
          left="1594px"
          top="346px"
          className="h3Box"
          mixBlendMode="luminosity"
        >
          <Box
            position="relative"
            onMouseOver={(e) => handleMouseEnter(e, "h3")}
            onMouseOut={(e) => handleMouseLeave(e, "h3")}
            transition="all .2s ease-in"
          >
            <Image
              className="h3Image"
              {...bottlesStyles}
              width="180px"
              src={H3}
            />
            <Box className="h3Icon" display="none" transition="all .1s ease-in">
              <Icon as={AiOutlinePlusCircle} {...plusIconStyles} left="60%" />
            </Box>
          </Box>
        </Box>
        {/* Historia wines End */}
        <Box
          position="absolute"
          className="action-btn"
          top="466px"
          left="2590px"
        >
             <Button
            as={Link} 
            to="/tiendaOnline#inicio"
            bg="black"
            color="white"
            border="1px solid"
            borderColor="rgba(0, 0, 0, 1)"
            borderRadius="29px"
            p="26px"
            fontSize="14px"
            fontWeight={400}
            lineHeight="16px"
            cursor="pointer"
            transition="background-color 0.3s"
            _hover={{ backgroundColor: "black", transform: "scale(1.1)" }} 
            width="fit-content"
            onClick={handleOpenAndScroll}
          >
            Ver todos los vinos
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default LargeScreensWines;
