import Background from "assets/img/loginbg.jpg";

const drawerWidth = 400;
const importerStyle = theme => ({
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
  fab1: {
    position: "fixed",
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 3
  },
  fabMoveLeft1: {
    transform: `translate3d(-${drawerWidth}px, 0, 0)`,
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut
    })
  },
  fabMoveRight1: {
    transform: "translate3d(0, 0, 0)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp
    })
  },
  fab2: {
    position: "fixed",
    bottom: theme.spacing.unit * 12,
    right: theme.spacing.unit * 3
  },
  fabMoveLeft2: {
    transform: `translate3d(-${drawerWidth}px, 0, 0)`,
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut
    })
  },
  fabMoveRight2: {
    transform: "translate3d(0, 0, 0)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp
    })
  },
  chip: {
    margin: theme.spacing.unit,
    // color: "#fff",
    fontWeight: "bold"
  },
  labelSetChip: {
    margin: theme.spacing.unit,
    justifyContent: "space-between",
    width: "80%",
    // color: "#fff",
    fontWeight: "bold"
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
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  listItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  textField: {
		width: "80%",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  sidebarMain: {
    width: drawerWidth - 30
  }
});

export default importerStyle;
