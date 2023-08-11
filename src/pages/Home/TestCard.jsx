import { Avatar, Box, Flex, Stack, Text } from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";
import img from "../../assets/Avatar.png";

const TestCard = ({ obj }) => {
  const { classes } = useStyles();
  return (
    <Box
      w={300}
      p="xl"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Text
        bg="white"
        p="30px"
        style={{
          borderRadius: "10px",
          boxShadow: "0px 10px 10px rgb(0,0,0,0.2)",
        }}
        className={classes.comment}
      >
        {obj?.review}
      </Text>
      <Flex align={"center"} gap="md" ml="10px">
        <Avatar radius={"xl"} src={img} size={"lg"} />
        <Stack spacing={0}>
          <Text fw={"bold"}>{obj?.name}</Text>
          <Text color="gray" fz="sm">
            {obj?.role}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default TestCard;
