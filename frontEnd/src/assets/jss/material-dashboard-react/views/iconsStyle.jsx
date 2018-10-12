import { boxShadow } from "assets/jss/material-dashboard-react.jsx";

const iconsStyle = {
  iframe: {
    width: "100%",
    height: "500px",
    border: "0",
    ...boxShadow
  },
  iframeContainer: {
    margin: "0 -20px 0"
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  imageSrc: {
    width: "100px",
    height: "100px",
    backgroundSize: "cover",
    backgroundPosition: "center 20%"
  },
  root: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  images: {
    width: "15%",
    // marginTop: "70px",
    // marginLeft: "70px"
  },
  timeline: {
    width: "100%"
  }
};

export default iconsStyle;
