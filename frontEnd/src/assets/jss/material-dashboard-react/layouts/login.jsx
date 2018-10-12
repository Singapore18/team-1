import Background from "assets/img/loginbg.jpg";
import {
  defaultFont,
  container,
  primaryColor
} from "assets/jss/material-dashboard-react.jsx";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    flex: 1,
    top: "0",
    height: "100vh",
    ...defaultFont
  },
  header: {
    top: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover"
  },
  mainPanel: {
    position: "relative",
    height: "92%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    overflowScrolling: "touch"
  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  },
  margin: {
    margin: theme.spacing.unit,
    width: "300px"
  },
  logoName: {
    // color: "#0d449b",
    marginBottom: "10px"
    // fontStyle: "italic"
  },
  catchLine: {
    marginBottom: "60px"
  },
  button: {
    margin: "70px",
    height: "50px",
    width: "200px",
    borderRadius: "100px",
    background: "linear-gradient(60deg, #00acc1, #02c7dd)",
    textTransform: "none"
  },
  loginBtnText: {
    color: "#fff"
  },
  progress: {
    color: "#0d449b",
    margin: "70px",
    height: "50px"
  }
});

export default appStyle;
