import Background from "assets/img/loginbg.jpg";
const drawerWidth = 400;
const importerStyle = theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 3
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
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
  list: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  listWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center 2%",
    opacity: 0.5
  },
  sidebarMain: {
    width: drawerWidth - 30
  }
});

export default importerStyle;
