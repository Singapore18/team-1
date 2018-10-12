import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Chip from "@material-ui/core/Chip";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import FileCopy from "@material-ui/icons/FileCopy";
import ReportProblem from "@material-ui/icons/ReportProblem";
import FolderShared from "@material-ui/icons/FolderShared";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

// import running from "assets/img/running.jpg";
// import cooking from "assets/img/cooking.jpg";
// import gardening from "assets/img/gardening.jpg";
// import office from "assets/img/office.jpg";
// import staff from "assets/img/staff.jpg";
// import logistic from "assets/img/logistic.jpg";
const tileData = [
//   {
//     img: running,
//     title: "Running"
//   },
//   {
//     img: cooking,
//     title: "Cooking"
//   },
//   {
//     img: gardening,
//     title: "Gardening"
//   },
//   {
//     img: office,
//     title: "Office"
//   },
//   {
//     img: staff,
//     title: "Store"
//   },
//   {
//     img: logistic,
//     title: "Losgistic"
//   }
];

class Dashboard extends React.Component {
  state = {
    value: 0,
    showName: false,
    interests: {
      Running: false,
      Cooking: false,
      Gardening: false,
      Office: false,
      Store: false,
      Logsitic: false
    },
    industries: [],
    gender: "female",
    education: 0
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleChangeGender = event => {
    this.setState({
      gender: event.target.value
    });
  };

  handleChangeEducation = event => {
    this.setState({
      education: event.target.value
    });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleToggle = name => event => {
    let interests = this.state.interests;
    interests[name] = !interests[name];
    this.setState(interests);
  };

  handleDlete = id => {
    let arr = this.state.industries.filter(x => x != id);
    this.setState({ industries: arr });
  };

  mapIdToChip = id => {
    switch (id) {
      case 1:
        return "Technology";

      case 2:
        return "Retailing";

      default:
        return "Construction";
    }
  };

  addIndustries = event => {
    if (this.state.industries.includes(event.target.value)) return;
    else {
      let industries = this.state.industries;
      industries.push(event.target.value);
      this.setState(industries);
    }
  };
  render() {
    const { classes, history } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Card plain>
            <CardHeader plain color="rose">
              <h4 className={classes.cardTitleWhite}>
                Fill out the informations so we could serve you better :)
              </h4>
              <p className={classes.cardCategoryWhite}>
                Finding jobs has never been so easy
              </p>
            </CardHeader>
          </Card>
        </div>

        <form className={classes.container} noValidate autoComplete="off">
          <Typography variant="title" className={classes.subtitle}>
            Enter your details
          </Typography>
          <div className={classes.nameBoxes}>
            <TextField
              id="first-name"
              label="First Name"
              className={classes.name}
              name="firtName"
              variant="outlined"
              onChange={this.handleChange("firstName")}
            />
            <TextField
              id="last-name"
              label="Last Name"
              className={classes.name}
              name="lastName"
              variant="outlined"
              onChange={this.handleChange("lastName")}
            />
            <TextField
              id="nric"
              label="NRIC"
              className={classes.name}
              name="nric"
              variant="outlined"
              onChange={this.handleChange("nric")}
            />
          </div>
          <div className={classes.nameBoxes}>
            <TextField
              id="contact-number"
              label="Contact Number"
              className={classes.name}
              type="number"
              name="contact"
              variant="outlined"
              onChange={this.handleChange("contact")}
            />
            <FormControl
              component="fieldset"
              className={classNames(classes.formControl, classes.gender)}
            >
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="Gender"
                name="gender"
                className={classes.group}
                value={this.state.gender}
                onChange={this.handleChangeGender}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <Typography variant="title" className={classes.subtitle}>
            Interest
          </Typography>
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
              <ListSubheader component="div">
                Choose the activities that you like best
              </ListSubheader>
            </GridListTile>
            {tileData.map(tile => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  //   subtitle={<span>by: {tile.author}</span>}
                  actionIcon={
                    <Checkbox
                      color="secondary"
                      checked={this.state.interests[tile.title]}
                      onChange={this.handleToggle(tile.title)}
                      value="checkedA"
                    />
                  }
                />
              </GridListTile>
            ))}
          </GridList>
          <Typography variant="title" className={classes.subtitle}>
            Working experience & Skills
          </Typography>
          <FormControl className={classes.textField}>
            <InputLabel shrink htmlFor="education-label-placeholder">
              Education
            </InputLabel>
            <Select
              value={this.state.education}
              onChange={this.changeEducation}
              input={<Input name="industry" id="age-label-placeholder" />}
              displayEmpty
              name="education"
              className={classes.selectEmpty}
            >
              <MenuItem value={0}>
                <em>N/A</em>
              </MenuItem>
              <MenuItem value={1}>Secondary</MenuItem>
              <MenuItem value={2}>Tiertiary</MenuItem>
              <MenuItem value={3}>Bachelor</MenuItem>
              <MenuItem value={4}>Higher</MenuItem>
            </Select>
            <FormHelperText>You can choose more than 1</FormHelperText>
          </FormControl>
          <TextField
            id="work-experience"
            label="Past work experience (N/A for none)"
            className={classes.textField}
            name="wes"
            variant="outlined"
            onChange={this.handleChange("wes")}
          />
          <TextField
            id="skills"
            label="Training/Skills (Enter a new skill on new line)"
            className={classes.textField}
            multiline
            name="skills"
            variant="outlined"
            onChange={this.handleChange("wes")}
          />
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="industry-label-placeholder">
              Preferred Industry
            </InputLabel>
            <Select
              value={0}
              onChange={this.addIndustries}
              input={<Input name="industry" id="age-label-placeholder" />}
              displayEmpty
              name="industry"
              className={classes.selectEmpty}
            >
              <MenuItem value={0}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Technology</MenuItem>
              <MenuItem value={2}>Retailing</MenuItem>
              <MenuItem value={3}>Construction</MenuItem>
            </Select>
            <FormHelperText>You can choose more than 1</FormHelperText>
          </FormControl>
          {this.state.industries.length > 0 && (
            <List>
              {this.state.industries.map(id => (
                <ListItem key={id}>
                  <Chip
                    label={this.mapIdToChip(id)}
                    onDelete={() => this.handleDlete(id)}
                  />
                </ListItem>
              ))}
            </List>
          )}
          <TextField
            id="hcysm"
            multiline
            label="How can you support me?"
            className={classes.textField}
            name="hcysm"
            variant="outlined"
            onChange={this.handleChange("hcysm")}
          />
          <TextField
            id="quote"
            multiline
            label="Quote?"
            className={classes.textField}
            name="quote"
            variant="outlined"
            onChange={this.handleChange("quote")}
          />
          <TextField
            id="location"
            label="Location of Residence"
            className={classes.textField}
            name="location"
            variant="outlined"
            onChange={this.handleChange("location")}
          />
          <TextField
            id="location-pref"
            label="Location Preference"
            className={classes.textField}
            name="locationPref"
            variant="outlined"
            onChange={this.handleChange("locationPref")}
          />
          <TextField
            id="pref-working-hours"
            label="Preferred working hours"
            className={classes.textField}
            name="prefWh"
            variant="outlined"
            onChange={this.handleChange("prefWh")}
          />
          <TextField
            id="pref-working-dur"
            label="Preferred working days"
            className={classes.textField}
            name="prefWd"
            variant="outlined"
            onChange={this.handleChange("prefWd")}
          />
          <TextField
            id="pref-working-time"
            label="Preferred working time"
            className={classes.textField}
            name="prefWt"
            variant="outlined"
            onChange={this.handleChange("prefWt")}
          />
          <Button
            variant="text"
            className={classes.button}
            onClick={() => this.login()}
          >
            <Typography className={classes.loginBtnText}>Submit</Typography>
          </Button>
        </form>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
