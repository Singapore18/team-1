import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00acc1"
    },
    secondary: {
      main: "#c13700"
    },
    error: red,
    action: green,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "300",
      lineHeight: "1.5em"
    }
  }
});
export default theme;
