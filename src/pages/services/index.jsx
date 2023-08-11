import { Box, Flex, Image, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { useStyles } from "./styles";
import Ser from "../Home/Services";

const Services = () => {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const isMobile2 = useMediaQuery("(max-width: 800px)");
  const { classes } = useStyles();
  const theme = useMantineTheme();
  let tools = [
    "angular.png",
    "aspnet.png",
    "djnago.png",
    "express.png",
    "microsoftsql.png",
    "node.png",
    "python.png",
    "react.png",
    "reactNative.png",
    "sel.jpg",
    "unity.png",
  ];
  return (
    <Box>
      <Box className={classes.top}>
        <Title className={classes.title1}>Services</Title>
      </Box>
      <Ser />
      <Box p="50px">
        <Flex className={classes.title3}>
          <Title align="center">Our</Title>
          <Title color={theme.colors.cyan}>Expertise</Title>
        </Flex>
        <Text color="gray" align="center" fz={"xl"}>
          TechBridge has experties on following tools and technologies
        </Text>
        <Flex
          wrap={"wrap"}
          gap={10}
          justify={"center"}
          p={isMobile ? "10px" : "100px"}
        >
          {tools.map((item, ind) => (
            <Image
              key={ind}
              src={new URL(`../../assets/${item}`, import.meta.url).href}
              fit="fill"
              width={"200px"}
              h={200}
              alt={item}
              style={{
                margin: "auto",
                display: "flex",
                alignItems: "center",
              }}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Services;
