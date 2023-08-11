import { createStyles } from "@mantine/core";
import img from "../../assets/servicesbg.png";
import img1 from "../../assets/teamCard.png";
import img2 from "../../assets/teambg.png";
export const useStyles = createStyles((theme) => ({
  top: {
    height: "500px",
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100% 500px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [`@media (max-width: 1000px)`]: {
      height: "500px",
      backgroundSize: "100% 500px",
    },
    [`@media (max-width: 800px)`]: {
      height: "450px",
      backgroundSize: "200% 450px",
      backgroundPosition: "right center",
    },
  },
  title1: {
    display: "flex",
    gap: "10px",
    textShadow: "5px 5px 2px rgb(0,0,0,0.5)",
    borderBottom: "3px solid cyan",
    alignSelf: "flex-end",
    marginRight: "70px",
    marginTop: "auto",
    marginBottom: "70px",
    paddingBottom: "2px",
    position: "relative",
    ":after": {
      content: '""',
      width: "80%",
      position: "absolute",
      bottom: -10,
      height: "3px",
      backgroundColor: theme.colors.cyan,
    },
  },
  title3: {
    display: "flex",
    gap: "10px",
    borderBottom: "3px solid black",
    // alignSelf: "center",
    paddingBottom: "2px",
    flexGrow: 1,
    width: "250px",
    margin: "auto",
    marginBottom: "10px",
    justifyContent: "center",
    position: "relative",
    ":after": {
      content: '""',
      width: "80%",
      position: "absolute",
      bottom: -10,
      height: "3px",
      backgroundColor: theme.colors.cyan,
    },
  },
}));
