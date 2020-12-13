import theme from "../../theme";

const styles = {
  img: {
    height: 280,
    width: "100%",
    "&:hover": {
      transform: "translateY(-4px)",
      transition: "all 0.3s",
    },
  },
  center: {
    textAlign: "center",
    justifyContent: "center",
    "& h2": {
      color: "blue",
    },
  },
  btnDetail: {
    color: theme.palette.purple.main,
  },
};

export default styles;
