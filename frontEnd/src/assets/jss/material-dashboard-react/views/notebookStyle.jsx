import { defaultFont } from "assets/jss/material-dashboard-react.jsx";

const notebookStyle = theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
	},
  progress: {
    ...defaultFont,
    width: "20%"
  },
  mainPanel: {
    ...defaultFont,
    width: "100%"
  }
});

export default notebookStyle;
