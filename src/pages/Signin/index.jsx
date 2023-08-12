import {
  Anchor,
  Box,
  Button,
  Flex,
  Image,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import login from "../../assets/login.png";
import logo from "../../assets/logo2.svg";
import { useMediaQuery } from "@mantine/hooks";

const Signin = () => {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const theme = useMantineTheme();
  return (
    <Flex h={"100vh"} style={{ overflow: "hidden" }} justify={"space-between"}>
      <Stack
        w={isMobile ? "100%" : "30%"}
        px={isMobile ? "10px" : "100px"}
        justify="center"
        align="center"
      >
        <img src={logo} width={"100px"} />
        <Title>Sign In</Title>
        <TextInput label="Email" placeholder="example@email.com" w={"100%"} />
        <PasswordInput label="Password" placeholder="********" w={"100%"} />
        <Anchor color={theme.colors.cyan} ml="auto">
          Forgot Password?
        </Anchor>
        <Button bg={theme.colors.cyan} w={"100%"}>
          Sign In
        </Button>
        <Text>
          Don't have an account?{" "}
          <Anchor color={theme.colors.cyan} href="/signup">
            Sign Up{" "}
          </Anchor>
        </Text>
      </Stack>
      {!isMobile && (
        <Box w={"40%"}>
          <img src={login} width={"100%"} height={"100%"} />
        </Box>
      )}
    </Flex>
  );
};

export default Signin;
