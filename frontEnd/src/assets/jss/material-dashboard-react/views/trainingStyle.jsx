import { successColor } from "assets/jss/material-dashboard-react.jsx";

const minHeight = "430px";
const dashboardStyle = {
  root: {
    display: "flex",
    width: "800px",
    height: "700px",
    alignSelf: "center"
  },
  button: {
    marginTop: "40px",
    height: "50px",
    width: "200px",
    borderRadius: "100px",
    background: "linear-gradient(60deg, #00acc1, #02c7dd)",
    textTransform: "none"
  },
  chartHeaderWrapper: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  chartHeader: {
    color: "#fff",
    fontWeight: "bold"
  },
  trainBtnText: {
    color: "#fff",
    fontWeight: "bold"
  },
  body: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: minHeight
  },
  tableWrapper: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: minHeight
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
  folderIconButton: {
    flex: 1,
    position: "relative",
    width: "100%",
    height: "100%",
    alignSelf: "center"
  },
  folderIcon: {
    fontSize: "155px"
  }
};

export default dashboardStyle;
