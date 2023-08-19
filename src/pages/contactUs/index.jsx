import {
  Alert,
  Anchor,
  BackgroundImage,
  Box,
  Button,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import linkedin from "../../assets/linkedin.png";
import tick from "../../assets/tick.svg";
import { useForm } from "@mantine/form";

const ContactUs = () => {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const isMobile2 = useMediaQuery("(max-width: 800px)");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      email: "",
      fullName: "",
      subject: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      fullName: (value) => (value?.length < 1 ? "Please Enter Name" : null),
      subject: (value) => (value?.length < 1 ? "Please Enter Subject" : null),
      message: (value) => (value?.length < 1 ? "Please Enter Message" : null),
    },
  });

  useEffect(() => {
    setTimeout(() => setSent(false), 3000);
  }, [sent]);
  const handleSubmit = async (e) => {
    // Replace 'your-formspree-endpoint' with your Formspree endpoint
    setLoading(true);
    const response = await fetch("https://formspree.io/f/xqkvqaqd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: e.fullName,
        Email: e.email,
        Message: e.message,
        subject: e.subject,
      }),
    });
    if (response.ok) {
      form.reset();
      console.log("here");
      setSent(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  return (
    <Box>
      <Box className={classes.top}>
        <Title className={classes.title1}>Contact Us</Title>
      </Box>
      <Box p="50px">
        <Flex className={classes.title3}>
          <Title align="center" order={isMobile2 ? 2 : 1}>
            Contact
          </Title>
          <Title color={theme.colors.cyan} order={isMobile2 ? 2 : 1}>
            Us
          </Title>
        </Flex>
      </Box>
      <Flex
        direction={isMobile ? "column" : "row"}
        p={isMobile ? "20px" : "100px"}
        gap="50px"
        justify={"space-between"}
      >
        <Stack spacing={"lg"} w={isMobile ? "100%" : "50%"}>
          <Title order={2} color={theme.colors.purple} fw={400}>
            Contact Us
          </Title>
          <Title order={4} fw={300}>
            Get In Touch With Us
          </Title>
          <Stack className={classes.cont} p="sm">
            <Text color={theme.colors.purple} fw="bold">
              Contact Number
            </Text>
            <Text>+971 55 533 7348</Text>
          </Stack>
          <Stack className={classes.cont} p="sm">
            <Text color={theme.colors.purple} fw="bold">
              Email
            </Text>
            <Text>support@techbridge19.com</Text>
          </Stack>
          <Stack className={classes.cont} p="sm">
            <Text color={theme.colors.purple} fw="bold">
              Linkedin
            </Text>
            <Anchor
              href={"https://www.linkedin.com/company/techbridge19-consulting"}
            >
              https://www.linkedin.com/company/techbridge19-consulting
            </Anchor>
          </Stack>
          <Group>
            <Image src={facebook} width={50} />
            <Image src={insta} width={50} />
            <Image src={linkedin} width={50} />
          </Group>
        </Stack>
        <form
          style={{
            width: isMobile ? "90%" : "45%",
            backgroundColor: "white",
            boxShadow: "0px 10px 10px rgb(0,0,0,0.3)",
            padding: "20px",
            borderRadius: "10px",
          }}
          onSubmit={form.onSubmit((values) => handleSubmit(values))}
        >
          <Stack w="100%">
            <Title order={2} color={theme.colors.purple} fw={400}>
              Get Pure Estimate
            </Title>
            <Title order={4} fw={300}>
              Fill up the form
            </Title>
            <TextInput
              placeholder="Full Name"
              {...form.getInputProps("fullName")}
            />
            <TextInput placeholder="Email" {...form.getInputProps("email")} />
            <TextInput
              placeholder="Subject"
              {...form.getInputProps("subject")}
            />

            <Textarea
              placeholder="Write details here"
              {...form.getInputProps("message")}
            />
            <Button
              bg={theme.colors.purple}
              my="lg"
              type="submit"
              loading={loading}
              leftIcon={sent && <img src={tick} width={"20px"} />}
            >
              {sent ? "Message Sent" : "Send Message"}
            </Button>
          </Stack>
        </form>
      </Flex>
    </Box>
  );
};

export default ContactUs;
