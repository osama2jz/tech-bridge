import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme, { opened }) => ({
  logo: {
    color: "white",
    "&:hover": {
      cursor: "pointer",
    },
  },
  link: {
    textDecoration: "none",
    fontSize: "16px",
    color: "rgb(255,255,255,0.8)",

    "&:hover": {
      cursor: "pointer",
      scale: "1.02",
      // color: theme.colors.purple,
    },
    [`@media (max-width: 1100px)`]: {
      color: "white",
      "&:hover": {
        color: "white",
      },
    },
  },
  icon: {
    "&:hover": {
      cursor: "pointer",
      opacity: 0.7,
    },
  },
  navigationBar: {
    [`@media (max-width: 1100px)`]: {
      flexDirection: "column",
      position: "absolute",
      top: "90px",
      padding: "20px 20px",
      color: "white !important",
      // borderRadius: "10px",
      width: "89vw",
      left:0,
      backgroundColor: theme.colors.purple,
      display: opened ? "flex" : "none",
      zIndex: 11,
      boxShadow: "0px 10px 10px rgb(0,0,0,0.2)",
    },
  },
}));
