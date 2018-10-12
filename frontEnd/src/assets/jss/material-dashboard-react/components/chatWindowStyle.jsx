const styles = theme => ({
  container: {
    position: "fixed",
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 12
  },
  badge: {
    position: "fixed",
    bottom: theme.spacing.unit * 8,
    right: theme.spacing.unit * 12
  },
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  },
  hidden: {
    display: "none"
  }
});

export default styles;
