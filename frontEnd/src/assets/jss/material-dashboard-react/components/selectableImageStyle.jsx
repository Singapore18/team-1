import green from "@material-ui/core/colors/green";
const selectableImageStyle = theme => ({
  checkerRoot: {
    color: "#00acc1",
    "&$checked": {
      color: "#00acc1"
    }
  },
  checked: {},
  root: {
    ...theme.mixins.gutters(),
    width: "80%",
    minWidth: "253px",
    // height: "100%",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "10px",
    marginBottom: "10px"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  divider: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
    height: "1px",
    width: "100%",
    maxWidth: "360px",
    backgroundColor: "#00acc1"
  },
  imageSrc: {
    position: "relative",
    width: "250px",
    height: "250px",
    backgroundSize: "cover",
    backgroundPosition: "center 20%"
    // aspectRatio: 1
    // backgroundSize: "cover",
    // backgroundPosition: "center 40%"
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  recommended: {
    backgroundColor: "green"
    // borderRadius: "10px"
  },
  plugins: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  lock: {
    marginLeft: "10px"
  }
});

export default selectableImageStyle;
