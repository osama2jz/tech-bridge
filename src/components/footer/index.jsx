import { Anchor, Box, Divider, Flex, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import fb from "../../assets/fb.svg";
import ig from "../../assets/ig.svg";
import lk from "../../assets/li.svg";
import tw from "../../assets/tw.svg";
import logo from "../../assets/logo.svg";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";

const Footer = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width: 1000px)");
  return (
    <Box className={classes.footer}>
      <Flex
        direction={isMobile ? "column" : "row"}
        gap={"xl"}
        align={isMobile ? "center" : "flex-end"}
      >
        <img src={logo} width={"150px"} />
        {!isMobile && (
          <Divider
            color="white"
            orientation={"vertical"}
            h={"30px"}
            mb="xs"
            style={{ alignSelf: "flex-end" }}
          />
        )}
        <Flex gap={"xl"}>
          <Anchor className={classes.icon} target="_blank">
            <img src={fb} width={"30px"} />
          </Anchor>
          <Anchor className={classes.icon} target="_blank">
            <img src={tw} width={"30px"} />
          </Anchor>
          <Anchor className={classes.icon} target="_blank">
            <img src={lk} width={"30px"} className={classes.icon} />
          </Anchor>
          <Anchor className={classes.icon} target="_blank">
            <img src={ig} width={"30px"} />
          </Anchor>
        </Flex>
      </Flex>
      <Flex gap={"lg"} align={"center"} justify={'center'} className={classes.navigationBar} wrap={"wrap"}>
        <Link className={classes.link} to="/">
          Home
        </Link>
        <Link className={classes.link} to="/about-us">
          About
        </Link>
        <Link className={classes.link} to="/services">
          Services
        </Link>
        <Link className={classes.link} to="/portfolio">
          Technology Conferences
        </Link>
        <Link className={classes.link} to="/contact-us">
          Contact Us
        </Link>
      </Flex>

      <Text align="center" w={"75%"} fz={"md"}>
        Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
        Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och
        pesask vyfisat. Viktiga poddradio har un mad och inde.
      </Text>
      <Flex gap={"30px"}>
        <Anchor fz="md" color="rgb(255,255,255,0.7)">
          Terms and Conditions
        </Anchor>
        <Anchor fz="md" color="rgb(255,255,255,0.7)">
          Privacy Policy
        </Anchor>
      </Flex>
    </Box>
  );
};

export default Footer;
