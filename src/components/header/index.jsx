import { Box, Burger, Button, Flex, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useStyles } from "./styles";
import { ArrowNarrowRight } from "tabler-icons-react";

const Header = ({ opened, toggle }) => {
  const isMobile = useMediaQuery("(max-width: 1100px)");
  const theme = useMantineTheme();
  const activeLink = useLocation().pathname;
  const navigate = useNavigate();
  const { classes } = useStyles({ opened });
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        // paddingInline: isMobile ? "10px" : "80px",
        alignItems: "center",
        paddingBlock: isMobile ? "10px" : "10px",
        position: "absolute",
        backgroundColor: "transparent",
        zIndex: 1000,
        top: 0,
        width: "100%",
        boxShadow: "0px 5px 5px rgb(255,255,255,0.2)",
      }}
    >
      <Flex
        align={"center"}
        className={classes.logo}
        onClick={() => navigate("/")}
        ml="50px"
      >
        <img src={logo} width={120} />
      </Flex>
      <Flex
        gap={"lg"}
        mr="50px"
        align={"center"}
        className={classes.navigationBar}
      >
        <Link
          className={classes.link}
          to="/"
          style={{ borderBottom: activeLink === "/" && "2px solid white" }}
          onClick={() => isMobile && toggle()}
        >
          Home
        </Link>
        <Link
          className={classes.link}
          to="/about-us"
          style={{
            borderBottom: activeLink === "/about-us" && "2px solid white",
          }}
          onClick={() => isMobile && toggle()}
        >
          About
        </Link>
        <Link
          className={classes.link}
          to="/services"
          style={{
            borderBottom: activeLink === "/services" && "2px solid white",
          }}
          onClick={() => isMobile && toggle()}
        >
          Services
        </Link>
        <Link
          className={classes.link}
          to="/technology-conferences"
          style={{
            borderBottom:
              activeLink === "/technology-conferences" && "2px solid white",
          }}
          onClick={() => isMobile && toggle()}
        >
          Technology Conferences
        </Link>
        <Link
          className={classes.link}
          to="/contact-us"
          style={{
            borderBottom: activeLink === "/contact-us" && "2px solid white",
          }}
          onClick={() => isMobile && toggle()}
        >
          Contact Us
        </Link>
        <Button rightIcon={<ArrowNarrowRight />} bg={theme.colors.cyan}>
          Register Now
        </Button>
      </Flex>

      {isMobile && <Burger opened={opened} onClick={toggle} color="white" />}
    </Box>
  );
};
export default Header;
