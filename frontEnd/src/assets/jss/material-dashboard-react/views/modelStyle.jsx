const modelStyle = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  success: {
    color: "green"
  },
  thumbUpWrapper: {
    position: "absolute",
    marginbottom: theme.spacing.unit,
    marginright: theme.spacing.unit
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
  addIcon: {
    position: "relative",
    width: "250px",
    height: "250px",
    backgroundSize: "cover"
  },
  analyticIcons: {
    position: "relative",
    width: "200px",
    height: "200px",
    backgroundSize: "cover"
  },
  cardHeader: {
    width: "700px"
  },
  sectionHeader: {
    margin: "20px"
  },
  divider: {
    marginTop: "20px",
    marginBottom: "20px"
  }
});

export default modelStyle;
