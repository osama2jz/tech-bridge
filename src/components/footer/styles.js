import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  footer: {
    padding: "50px",
    backgroundColor: theme.colors.purple,
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: "20px",
    fontSize: "22px",
    "& > *": {
      zIndex: 99,
      position: "relative",
    },
    [`@media (max-width: 800px)`]: {
      padding: "10px",
    },
  },
  link: {
    textDecoration: "none",
    fontSize: "16px",
    color: "white",
    borderRight: "1px solid white",
    paddingRight: "20px",
    ":last-of-type": {
      border: "none",
    },
    "&:hover": {
      cursor: "pointer",
      scale: "1.02",
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
}));
