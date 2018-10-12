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
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import AddIcon from "@material-ui/icons/Add";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import ImageUploader from "react-images-upload";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

import running from "assets/img/running.jpg";
import cooking from "assets/img/cooking.jpg";
import gardening from "assets/img/gardening.jpg";
import office from "assets/img/office.jpg";
import staff from "assets/img/staff.jpg";
import logistic from "assets/img/logistic.jpg";
const tileData = [
  {
    img: running,
    title: "Running"
  },
  {
    img: cooking,
    title: "Cooking"
  },
  {
    img: gardening,
    title: "Gardening"
  },
  {
    img: office,
    title: "Office"
  },
  {
    img: staff,
    title: "Store"
  },
  {
    img: logistic,
    title: "Losgistic"
  }
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
const support = [
  "Clear Concise Instructions",
  "Encouragement",
  "Soft-Tone",
  "Structured Environment",
  "Mentor"
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
    industry: "",
    industries: [],
    gender: "female",
    workLocation: 0,
    skill: "",
    skills: [],
    works: [
      {
        id: 0
      }
    ],
    fun: [],
    pictures: [],
    active: true,
    snackbarOpen: false
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

  changeWorkLocation = event => {
    this.setState({
      workLocation: event.target.value
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

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ snackbarOpen: false });
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

  addSkills = () => {
    let skills = this.state.skills,
      skill = this.state.skill;
    skills.push(skill);
    skill = "";
    this.setState({ skills, skill });
  };

  addIndustries = () => {
    let industries = this.state.industries,
      industry = this.state.industry;
    industries.push(industry);
    industry = "";
    this.setState({ industries, industry });
  };

  deleteSkill = skill => {
    let arr = this.state.skills.filter(x => x != skill);
    this.setState({ skills: arr });
  };

  deleteIndustry = industry => {
    let arr = this.state.industries.filter(x => x != industry);
    this.setState({ industries: arr });
  };

  addWork = () => {
    let works = this.state.works;
    works.push({
      id: 0
    });
    this.setState(works);
  };

  onDropFun = (pictureFiles, pictureDataURLs) => {
    this.setState({
      fun: this.state.pictures.concat(pictureFiles)
    });
  };
  onDrop = (pictureFiles, pictureDataURLs) => {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles)
    });
  };
  render() {
    const { classes, history } = this.props;
    const { fun, pictures } = this.state;
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
          <Typography
            color="secondary"
            variant="title"
            className={classes.subtitle}
          >
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
              </RadioGroup>
            </FormControl>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              className={classes.name}
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>
          <TextField
            id="address"
            label="Address"
            className={classes.textField}
            name="address"
            variant="outlined"
            onChange={this.handleChange("address")}
          />
          <TextField
            id="postalCode"
            label="Postal Code"
            className={classes.textField}
            name="postalcode"
            variant="outlined"
            onChange={this.handleChange("postalcode")}
          />
          <Typography
            color="secondary"
            variant="title"
            className={classes.subtitle}
          >
            Personal Interest
          </Typography>
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
              <ListSubheader component="div">
                Choose the activities that you like best
              </ListSubheader>
            </GridListTile>
            {tileData.map(tile => (
              <GridListTile key={tile.img} className={classes.img}>
                <img src={tile.img} alt={tile.title} className={classes.img} />
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
          <Typography
            color="secondary"
            variant="title"
            className={classes.subtitle}
          >
            Working experience & Skills
          </Typography>
          <TextField
            id="work-experience"
            label="Skills"
            className={classes.textField}
            name="skills"
            variant="outlined"
            value={this.state.skill}
            onChange={this.handleChange("skill")}
            onKeyPress={ev => {
              if (ev.key === "Enter") {
                // Do code here
                ev.preventDefault();
                this.addSkills();
              }
            }}
          />
          {this.state.skills.length > 0 && (
            <List>
              {this.state.skills.map(skill => (
                <ListItem key={skill}>
                  <Chip
                    label={skill}
                    onDelete={() => this.deleteSkill(skill)}
                  />
                </ListItem>
              ))}
            </List>
          )}
          <Typography>Work Experience</Typography>
          <div>
            {this.state.works.map(work => (
              <div key={work} className={classes.workExperienceBox}>
                <TextField
                  id="role"
                  label="Role"
                  className={classes.name}
                  name={work.id}
                  variant="outlined"
                  //   onChange={this.editWorkExperience}
                />
                <TextField
                  id="company"
                  label="Company"
                  className={classes.name}
                  name={work.id}
                  variant="outlined"
                  //   onChange={this.editWorkExperience}
                />
                <TextField
                  id="industry"
                  label="Industry"
                  className={classes.name}
                  name={work.id}
                  variant="outlined"
                  //   onChange={this.editWorkExperience}
                />
                <TextField
                  id="startDate"
                  label="Start Date"
                  type="date"
                  defaultValue="2018-02-25"
                  className={classes.name}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="endDate"
                  label="End Date"
                  type="date"
                  defaultValue="2018-08-30"
                  className={classes.name}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </div>
            ))}
          </div>
          <Button
            onClick={() => this.addWork()}
            variant="outlined"
            className={classes.addButton}
          >
            <AddIcon />
            Add
          </Button>

          <Typography
            color="secondary"
            variant="title"
            className={classes.subtitle}
          >
            Preference
          </Typography>
          <TextField
            id="industries"
            label="Preferred Industries"
            className={classes.textField}
            name="industries"
            variant="outlined"
            value={this.state.industry}
            onChange={this.handleChange("industry")}
            onKeyPress={ev => {
              if (ev.key === "Enter") {
                // Do code here
                ev.preventDefault();
                this.addIndustries();
              }
            }}
          />
          {this.state.industries.length > 0 && (
            <List>
              {this.state.industries.map(industry => (
                <ListItem key={industry}>
                  <Chip
                    label={industry}
                    onDelete={() => this.deleteIndustry(industry)}
                  />
                </ListItem>
              ))}
            </List>
          )}

          <FormControl className={classes.textField}>
            <InputLabel shrink>Preferred Work Location</InputLabel>
            <Select
              value={this.state.workLocation}
              onChange={this.changeWorkLocation}
              input={
                <Input name="wlocation" id="wlocation-label-placeholder" />
              }
              displayEmpty
              name="wlocation"
              className={classes.selectEmpty}
            >
              <MenuItem value={0}>
                <em>N/A</em>
              </MenuItem>
              <MenuItem value={1}>East</MenuItem>
              <MenuItem value={2}>South East</MenuItem>
              <MenuItem value={3}>South</MenuItem>
              <MenuItem value={4}>South West</MenuItem>
              <MenuItem value={5}>West</MenuItem>
              <MenuItem value={6}>North West</MenuItem>
              <MenuItem value={7}>North</MenuItem>
              <MenuItem value={8}>North East</MenuItem>
            </Select>
            <FormHelperText>Choose 1</FormHelperText>
          </FormControl>

          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Preferred Work Days</FormLabel>
            <FormGroup className={classes.nameBoxes}>
              {days.map(day => (
                <FormControlLabel
                  key={day}
                  control={<Checkbox />}
                  label={day}
                />
              ))}
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Preferred Work Hours</FormLabel>
            <div className={classes.nameBoxes}>
              <TextField
                id="startTime"
                label="Start Time"
                type="time"
                defaultValue="07:30"
                className={classes.name}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="endTime"
                label="End Time"
                type="time"
                defaultValue="16:30"
                className={classes.name}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
          </FormControl>

          <Typography
            color="secondary"
            variant="title"
            className={classes.subtitle}
          >
            Additional Information
          </Typography>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Support Required</FormLabel>
            <FormGroup className={classes.nameBoxes}>
              {support.map(sp => (
                <FormControlLabel key={sp} control={<Checkbox />} label={sp} />
              ))}
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Upload a fun photo</FormLabel>
          </FormControl>
          {fun.length > 0 && (
            <Typography>{fun.length} image(s) uploaded</Typography>
          )}
          <ImageUploader
            className={classes.upload}
            withIcon={true}
            buttonText="Choose fun images"
            onChange={this.onDropFun}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />

          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Upload a resume photo</FormLabel>
          </FormControl>
          {pictures.length > 0 && (
            <Typography>{pictures.length} image(s) uploaded</Typography>
          )}
          <ImageUploader
            className={classes.upload}
            withIcon={true}
            buttonText="Choose resume images"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
          {this.state.active && (
            <Button
              variant="text"
              className={classes.button}
              onClick={() =>
                this.setState({ active: false, snackbarOpen: true })
              }
            >
              <Typography className={classes.loginBtnText}>Hire me!</Typography>
            </Button>
          )}
        </form>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={2000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">Posted!</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
            onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
