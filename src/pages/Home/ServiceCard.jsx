import { Box, Divider, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import a1 from "../../assets/a1.png";

const ServiceCard = ({ obj }) => {
  const [show, setShow] = useState(false);
  return (
    <Box
      w={350}
      height={330}
      pb="md"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px 10px 10px rgb(0,0,0,0.2)",
        position: "relative",
        cursor:'pointer'
      }}
    >
      <img src={obj.image} width="350px" />
      <Text fw={"bold"} fz={"lg"}>
        {obj?.title}
      </Text>
      {show && (
        <Stack
          pos={"absolute"}
          justify="center"
          align="center"
          style={{
            color: "white",
            backgroundColor: "rgb(98, 160, 180, 0.6)",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        >
          <Text fw={"bold"} fz={"lg"}>
            {obj?.title}
          </Text>
          <Divider color="white" w="100%" />
          <Text fz={"md"} align="center">
            {obj?.content}
          </Text>
        </Stack>
      )}
    </Box>
  );
};

export default ServiceCard;
