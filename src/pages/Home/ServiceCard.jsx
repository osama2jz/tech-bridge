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
import { CircleCheck } from "tabler-icons-react";

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
        boxShadow: show
          ? "0px 10px 10px rgb(0,0,0,0.5)"
          : "0px 10px 10px rgb(0,0,0,0.2)",
        position: "relative",
        transition: "0.3s all ease-in-out",
        cursor: "pointer",
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      <img
        src={obj.image}
        width="350px"
        height={"285px"}
        style={{
          transform: show && "scale(1.1)",
          transition: "0.3s all ease-in-out",
        }}
      />
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
            backgroundColor: "rgb(98, 160, 180, 0.2)",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        >
          <Text fw={"bold"} fz={"lg"}>
            Read More
          </Text>
        </Stack>
      )}
      <Modal
        onClose={() => setOpened(false)}
        opened={opened}
        centered
        size={"auto"}
        withCloseButton={false}
        styles={{
          body: { overflow: "hidden" },
          content: { borderRadius: "20px" },
        }}
        transitionProps={{ transition: "scale" }}
      >
        <Title align="center" mb="lg" order={2} color={theme.colors.purple}>
          {obj?.title}
        </Title>
        <Group position="center" p="lg">
          <img src={obj.image} width="400px" style={{ borderRadius: "10px" }} />
          <List
            p="sm"
            style={{ maxWidth: "60%" }}
            icon={
              <CircleCheck
                fill={theme.colors.cyan}
                color="white"
                size={30}
                style={{ marginTop: "0px" }}
              />
            }
          >
            {obj?.bullets?.split(".").map((item, ind) => (
              <List.Item key={ind}>{item}</List.Item>
            ))}
          </List>
        </Group>
        <Group position="right" mt="md">
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
