import { Box, Flex, Text, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";
import ServiceCard from "./ServiceCard";
import a1 from "../../assets/a1.png";
import a2 from "../../assets/a2.png";
import a3 from "../../assets/a3.png";
import a4 from "../../assets/a4.png";
import a5 from "../../assets/a5.png";
import a6 from "../../assets/a6.png";

const Services = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const isMobile2 = useMediaQuery("(max-width: 800px)");
  const theme = useMantineTheme();
  let services = [
    {
      image: a1,
      title: "Software Development",
      content:
        "Software developers utilize various programming languages, tools, and methodologies to craft reliable, efficient, and user-friendly applications for diverse industries and purposes. As technology continues to evolve, software development remains at the forefront of innovation, driving progress and shaping the way we interact with digital systems in our daily lives",
    },
    {
      image: a2,
      title: "Network Infrastructure",
      content:
        "Network infrastructure refers to the foundation of interconnected hardware, software, and communication protocols that facilitate data exchange and connectivity within an organization or across the internet.",
    },
    {
      image: a3,
      title: "Data Management",
      content:
        "Data management refers to the process of collecting, storing, organizing, and utilizing data in a structured and secure manner. In today's data-driven world, businesses and organizations generate and accumulate vast amounts of information from various sources",
    },
    {
      image: a4,
      title: "Cyber Security",
      content:
        "Cybersecurity is the practice of protecting computer systems, networks, and data from unauthorized access, attacks, and damage. In an increasingly digitized world, where information is a valuable asset, cybersecurity plays a pivotal role in safeguarding individuals",
    },
    {
      image: a5,
      title: "Gaming Software Development",
      content:
        "Gaming software development is a dynamic and creative process that focuses on designing and creating interactive, entertaining, and immersive video games. Game developers use their expertise in programming, design, and storytelling to bring virtual worlds to life and engage players in captivating experiences.",
    },
    {
      image: a6,
      title: "Blockchain Development",
      content:
        "Blockchain development involves designing and implementing smart contracts, consensus algorithms, and cryptographic techniques to ensure data integrity and trust among network participants.",
    },
  ];
  return (
    <Box p="50px">
      <Flex className={classes.title2}>
        <Title align="center">Our</Title>
        <Title color={theme.colors.cyan}>Services</Title>
      </Flex>
      <Text color="gray" align="center" fz={"xl"}>
        TechBridge providing services worldwide
      </Text>
      <Flex
        wrap={"wrap"}
        gap={isMobile ? "10px" : "80px"}
        justify={"center"}
        p={isMobile ? "20px" : "50px"}
      >
        {services.map((obj, ind) => (
          <ServiceCard obj={obj} key={ind} />
        ))}
      </Flex>
    </Box>
  );
};

export default Services;
