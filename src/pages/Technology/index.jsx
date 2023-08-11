import {
  BackgroundImage,
  Box,
  Flex,
  Image,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { useStyles } from "./styles";

const Technology = () => {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const isMobile2 = useMediaQuery("(max-width: 800px)");
  const { classes } = useStyles();
  const theme = useMantineTheme();
  let tech = [
    {
      image: "t1",
      content:
        "Event management services can help in selecting the right venue for the technology conference, based on the number of attendees, location, and budget. We can also manage the logistics of the venue, such as seating arrangements, audio-visual equipment, and lighting.",
    },
    {
      image: "t2",
      content:
        "We can handle the registration and ticketing process for the technology conference, making it easy for attendees to sign up and pay for their tickets.",
    },
    {
      image: "t3",
      content:
        "We can help in selecting and managing the speakers for the technology conference. We can coordinate with the speakers on their travel arrangements, accommodation, and presentation requirements.",
    },
    {
      image: "t4",
      content:
        "We can help in securing sponsorships for the technology conference, which can help in covering the costs of the event. We can also manage the sponsor relationships and ensure that they receive the appropriate recognition and exposure.",
    },
    {
      image: "t5",
      content:
        "We can help in promoting the technology conference through various channels, such as social media, email marketing, and advertising. We can also create marketing materials, such as brochures and flyers, to promote the event.",
    },
    {
      image: "t6",
      content:
        "We can provide on-site support during the technology conference, ensuring that everything runs smoothly. We can manage the registration desk, coordinate with the venue staff, and handle any issues that may arise.",
    },
    {
      image: "t7",
      content:
        "We can provide post-event analysis, which can help in evaluating the success of the technology conference. We can gather feedback from attendees and sponsors, and provide insights on how to improve future events.",
    },
  ];
  return (
    <Box>
      <Box className={classes.top}>
        <Title className={classes.title1}>Technology Conferences</Title>
      </Box>
      <Box p="50px">
        <Flex className={classes.title3}>
          <Title align="center" order={isMobile2 ? 2 : 1}>
            Technology
          </Title>
          <Title color={theme.colors.cyan} order={isMobile2 ? 2 : 1}>
            Conferences
          </Title>
        </Flex>
        <Flex
          wrap={"wrap"}
          gap={50}
          justify={"center"}
          p={isMobile ? "10px" : "100px"}
        >
          {tech.map((item, ind) => (
            <Box
              key={ind}
              style={{
                width: isMobile2 ? "350px" : "495px",
                height: isMobile2 ? "253px" : "343px",
                position: "relative",
              }}
            >
              <BackgroundImage
                src={
                  new URL(`../../assets/${item.image}.png`, import.meta.url)
                    .href
                }
                h={isMobile2 ? "233px" : "343px"}
                w={isMobile2 ? "350px" : "510px"}
                alt={item}
              >
                <Text
                  fz={isMobile2?"sm":"lg"}
                  align="justify"
                  style={{
                    position: "absolute",
                    top: "50%",
                    // left: "50%",
                    width: "85%",
                    transform: "translate(8%, -40%)",
                  }}
                >
                  {item.content}
                </Text>
              </BackgroundImage>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Technology;
