import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import home2 from "../../assets/home2.png";
import s1 from "../../assets/s1.svg";
import s2 from "../../assets/s2.svg";
import s3 from "../../assets/s3.svg";
import s4 from "../../assets/s4.svg";
import ServiceCard from "./ServiceCard";
import { useStyles } from "./styles";

import Acheivements from "./Achievements";
import Test from "./Test";
import { useMediaQuery } from "@mantine/hooks";
import Services from "./Services";

const Home = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const isMobile2 = useMediaQuery("(max-width: 800px)");
  const theme = useMantineTheme();

  return (
    <Box>
      <Box className={classes.top}>
        <Stack className={classes.topContent}>
          <Title fz={isMobile2 ? 25 : isMobile ? 30 : 50}>
            Where Vision Meets Execution -
          </Title>
          <Title order={isMobile2 ? 3 : 2}>
            "Transforming Ideas into Digital Reality"
          </Title>
          <Text fz={isMobile2 ? 10 : isMobile ? 12 : 15}>
            EMPOWERING BUSINESSES THROUGH INNOVATIVE TECHNOLOGY SOLUTIONS.
            Transforming Ideas into Reality with Innovative Software Technology
          </Text>
          <Button bg={theme.colors.cyan} style={{ alignSelf: "flex-start" }}>
            Register
          </Button>
        </Stack>
      </Box>
      <Flex
        direction={isMobile ? "column" : "row"}
        justify={"space-evenly"}
        p={isMobile2 ? "20px" : "50px"}
        align={"center"}
        gap={isMobile2 ? "20px" : ""}
      >
        <img src={home2} height="100%" />
        <Stack w={isMobile ? "100%" : "40%"}>
          <Title className={classes.title1}>
            About <Title color={theme.colors.cyan}>TechBridge</Title>
          </Title>
          <Text align="justify">
            We are a team of experienced professionals who specialize in
            providing innovative and effective technology solutions to
            businesses of all sizes. Our mission is to help our clients achieve
            their goals by leveraging the latest advancements in technology.{" "}
            <br />
            <br />
            Our team is made up of experts in their respective fields, including
            software engineers, data scientists, network architects,
            cybersecurity specialists, and project managers. We pride ourselves
            on our ability to work collaboratively with our clients to deliver
            projects on time and within budget.
          </Text>
          <Button bg={theme.colors.cyan} style={{ alignSelf: "flex-start" }}>
            Learn More
          </Button>
        </Stack>
      </Flex>
      <Flex
        gap={isMobile2 ? "20px" : ""}
        direction={isMobile ? "column" : "row"}
        bg="#F5F7FA"
        align={"center"}
        justify={"space-evenly"}
        p={isMobile2 ? "20px" : "40px"}
      >
        <Stack spacing={"4px"}>
          <Text fw={"bold"} fz={18}>
            Where Innovation Meets Execution
          </Text>
          <Text fw={"bold"} color={theme.colors.cyan} fz={22}>
            Your Path to Success in the Digital Era.
          </Text>
          <Text fz={14}>
            Empowering businesses through innovation technology solutions
          </Text>
        </Stack>
        {/* <SimpleGrid cols={2} spacing={40}>
          <Flex align={"center"} gap="md">
            <img src={s1} />
            <Stack spacing={"0px"}>
              <Text fw={"bold"} fz={20}>
                2,245
              </Text>
              <Text fz={12} color="gray">
                Members
              </Text>
            </Stack>
          </Flex>
          <Flex align={"center"} gap="md">
            <img src={s2} />
            <Stack spacing={"0px"}>
              <Text fw={"bold"} fz={20}>
                46,328
              </Text>
              <Text fz={12} color="gray">
                Clients
              </Text>
            </Stack>
          </Flex>
          <Flex align={"center"} gap="md">
            <img src={s3} />
            <Stack spacing={"0px"}>
              <Text fw={"bold"} fz={20}>
                828
              </Text>
              <Text fz={12} color="gray">
                Projects
              </Text>
            </Stack>
          </Flex>
          <Flex align={"center"} gap="md">
            <img src={s4} />
            <Stack spacing={"0px"}>
              <Text fw={"bold"} fz={20}>
                1,926,436
              </Text>
              <Text fz={12} color="gray">
                Payments
              </Text>
            </Stack>
          </Flex>
        </SimpleGrid> */}
      </Flex>
      <Services />
      <Acheivements />
      {/* <Test /> */}
    </Box>
  );
};

export default Home;
