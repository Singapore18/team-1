import { successColor } from "assets/jss/material-dashboard-react.jsx";

const dashboardStyle = theme => ({
  successText: {
    color: successColor
  },
  linkText: {
    color: "#00acc1"
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px"
  },
  stats: {
    color: "#999999",
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardCategory: {
    color: "#999999",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitle: {
    color: "#3C4858",
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
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  workExperienceBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "center"
  },
  nameBoxes: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "center"
  },
  group: {
    display: "flex",
    flexDirection: "row"
  },
  name: {
    width: "120%",
    margin: theme.spacing.unit * 2
  },
  formControl: {
    width: "97%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "auto"
  },
  gridList: {
    height: 650,
    width: "100%"
  },
  textField: {
    width: "97%",
    margin: theme.spacing.unit * 2
  },
  subtitle: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5
  },
  addButton: {
    width: "50%"
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
  upload: {
    width: "40%",
    backgroundColor: "transparent"
  }
  //   img: {
  // 	height: 300,
  // 	resizeMode: "cover"
  //   }
});

export default dashboardStyle;
