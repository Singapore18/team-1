import { defaultFont } from "assets/jss/material-dashboard-react.jsx";

const styles = theme => ({
  root: {
    width: "100%",
    ...defaultFont
  },
  container: {
    backgroundColor: "transparent",
		position: "fixed",
		width: "150px"
  },
  content: {
    fontSize: "12px",
    fontStyle: "italic"
  },
  button: {
    marginRight: theme.spacing.unit
  },
  backButton: {
    marginRight: theme.spacing.unit
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

export default styles;
