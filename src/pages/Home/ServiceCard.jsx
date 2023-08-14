import {
  Box,
  Button,
  Divider,
  Group,
  List,
  Modal,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";

const ServiceCard = ({ obj }) => {
  const [show, setShow] = useState(false);
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <Box
      w={350}
      height={330}
      pb="md"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => setOpened(true)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px 10px 10px rgb(0,0,0,0.2)",
        position: "relative",
        cursor: "pointer",
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
      <Modal
        onClose={() => setOpened(false)}
        opened={opened}
        centered
        size={"lg"}
        withCloseButton={false}
        styles={{body:{overflow:'hidden'}}}
        transitionProps={{ transition: "rotate-left" }}
      >
        <Title align="center" mb="lg" order={2}>
          {obj?.title}
        </Title>
        <List>
          {obj?.bullets?.split(".").map((item, ind) => (
            <List.Item key={ind}>{item}</List.Item>
          ))}
        </List>
        <Group position="center" mt="md">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setOpened(false);
            }}
            bg={theme.colors.cyan}
          >
            Close
          </Button>
        </Group>
      </Modal>
    </Box>
  );
};

export default ServiceCard;
