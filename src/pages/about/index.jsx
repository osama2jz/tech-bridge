import { Box, Flex, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { useStyles } from "./styles";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import TeamCard from "./TeamCard";

const About = () => {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const isMobile2 = useMediaQuery("(max-width: 800px)");
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const team = [
    { name: "Michle Devid", role: "Software Developer", img: team1 },
    { name: "Alae Watson", role: "Project Manager", img: team2 },
    { name: "Jolie Roi", role: "Software Tester", img: team3 },
  ];
  return (
    <Box>
      <Box className={classes.top}>
        <Title className={classes.title1}>About Us</Title>
      </Box>
      <Flex
        direction={isMobile ? "column" : "row"}
        justify={"space-evenly"}
        p={isMobile2 ? "20px" : "50px"}
        align={"center"}
        gap={isMobile2 ? "20px" : ""}
      >
        <img src={about1} height="100%" width={isMobile ? "100%" : ""} />
        <Stack w={isMobile ? "100%" : "40%"}>
          <Title className={classes.title2}>
            About <Title color={theme.colors.cyan}>Us</Title>
          </Title>
          <Text align="justify">
            At our core, we believe that technology should be a tool that
            empowers businesses to succeed. That’s why we work closely with our
            clients to understand their unique needs and develop customized
            solutions that meet their specific requirements. Whether you need
            help with tech executive advise, executive coaching, software
            development, data management, data analytics, network
            infrastructure, cloud computing, or cybersecurity, we have the
            expertise to deliver results.
          </Text>
        </Stack>
      </Flex>
      <Flex
        direction={isMobile ? "column" : "row"}
        justify={"space-evenly"}
        p={isMobile2 ? "20px" : "50px"}
        align={"center"}
        gap={isMobile2 ? "20px" : ""}
      >
        <Stack w={isMobile ? "100%" : "40%"}>
          <Title className={classes.title4} order={isMobile ? 2 : 1}>
            We are committed to providing exceptional{" "}
            <Text span color={theme.colors.cyan}>
              service and support
            </Text>
          </Title>
          <Text align="justify">
            At our ICT consulting company, we are committed to providing
            exceptional service and support to our clients. We believe that
            building strong relationships with our clients is the key to our
            success, and we strive to exceed their expectations at every
            opportunity.
            <br />
            <br />
            Thank you for considering our ICT consulting company for your
            technology needs. We look forward to the opportunity to work with
            you and help your business thrive in the digital age.
          </Text>
        </Stack>
        <img src={about2} height="100%" />
      </Flex>
      {/* <Box p="50px">
        <Flex className={classes.title3}>
          <Title align="center">Our</Title>
          <Title color={theme.colors.cyan}>Team</Title>
        </Flex>
        <Text color="gray" align="center" fz={"xl"}>
          Meet our Great and Talented Team
        </Text>
        <Flex
          wrap={"wrap"}
          gap={isMobile ? "10px" : "80px"}
          justify={"center"}
          p={isMobile ? "0px" : "50px"}
          className={classes.team}
        >
          {team.map((obj, ind) => (
            <TeamCard obj={obj} key={ind} />
          ))}
        </Flex>
      </Box> */}
    </Box>
  );
};

export default About;
