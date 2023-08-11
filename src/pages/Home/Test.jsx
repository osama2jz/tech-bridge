import { Carousel } from "@mantine/carousel";
import { Box, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";
import TestCard from "./TestCard";

const Test = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const reviews = [
    {
      name: "Grace Hall",
      des: "Client",
      review:
        "TechBridge didnot just complete the project and walk away; they provided comprehensive post-launch support.",
    },
    {
      name: "Connor Walker",
      des: "Client",
      review:
        "TechBridge delivered the software on time without compromising on quality. Their commitment to meeting deadlines was commendable.",
    },
    {
      name: "Kira Wood",
      des: "Client",
      review:
        "The TechBridge team is undoubtedly their biggest asset. Each member demonstrated deep knowledge in their respective domains.",
    },
    {
      name: "Connor Walker",
      des: "Client",
      review:
        "TechBridge delivered the software on time without compromising on quality. Their commitment to meeting deadlines was commendable.",
    },
  ];
  return (
    <Box className={classes.tests}>
      <Title order={4} align="center" color={theme.colors.cyan} fw={400}>
        OUR TESTIMONIALS
      </Title>
      <Title order={1} align="center" fw={700}>
        What Our Clients Say
      </Title>
      <Carousel
        slideSize="50%"
        mt="xl"
        loop
        withIndicators
        styles={{
          indicator: { backgroundColor: theme.colors.purple, color: "white" },
        }}
        align="start"
        breakpoints={[
          { minWidth: "lg", slideSize: "33.33%", slideGap: 0 },
          { minWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        {reviews.map((obj, ind) => (
          <Carousel.Slide
            key={ind}
            py="10px"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TestCard obj={obj} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};

export default Test;
