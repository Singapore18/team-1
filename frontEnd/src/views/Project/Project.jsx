import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CardImage from "components/CardImage/CardImage.jsx";
import Tooltip from "@material-ui/core/Tooltip";
import Radio from "@material-ui/core/Radio";

//icon
import { DesktopMac } from "@material-ui/icons";

import { Typography } from "@material-ui/core";

import projectStyle from "assets/jss/material-dashboard-react/views/projectStyle.jsx";

const project1 = ["Segmention_20July2018", "Segmention_27July2018"];
const project2 = [
  "Tissue_Classification_21July2018",
  "Tissue_Classification_28July2018",
  "Tissue_Segmention_29July2018"
];
const project3 = ["Ailment_Classification_03August2018"];
class Project extends React.Component {
  state = {
    selected: "a"
  };
  handleChange = event => {
    this.setState({ selected: event.target.value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes, history } = this.props;
    return (
      <div>
        <Typography
          color="secondary"
          variant="headline"
          className={classes.sectionHeader}
        >
          Project 1 (Cell Generation)
        </Typography>
        <GridContainer>
          {project1.map((tt, index) => (
            <GridItem xs={12} sm={12} md={4} key={index}>
              <CardImage
                id={tt}
                icon={
                  <DesktopMac color="primary" className={classes.addIcon} />
                }
                details={
                  <Typography className={classes.cardTitle}>{tt}</Typography>
                }
              />
            </GridItem>
          ))}
        </GridContainer>
        <Divider className={classes.divider} />
        <Typography
          color="secondary"
          variant="headline"
          className={classes.sectionHeader}
        >
          Project 2 (Osmosis Acceleration)
        </Typography>
        <GridContainer>
          {project2.map((tt, index) => (
            <GridItem xs={12} sm={12} md={4} key={index}>
              <CardImage
                id={tt}
                icon={
                  <DesktopMac color="primary" className={classes.addIcon} />
                }
                details={
                  <Typography className={classes.cardTitle}>{tt}</Typography>
                }
              />
            </GridItem>
          ))}
        </GridContainer>
        <Divider className={classes.divider} />
        <Typography
          color="secondary"
          variant="headline"
          className={classes.sectionHeader}
        >
          Project 3 (Incomplete)
        </Typography>
        <GridContainer>
          {project3.map((tt, index) => (
            <GridItem xs={12} sm={12} md={4} key={index}>
              <CardImage
                onClick={() => history.push("/notebook")}
                id={tt}
                icon={
                  <DesktopMac color="primary" className={classes.addIcon} />
                }
                details={
                  <Typography className={classes.cardTitle}>{tt}</Typography>
                }
              />
            </GridItem>
          ))}
        </GridContainer>
        <Divider className={classes.divider} />
      </div>
    );
  }
}

export default withStyles(projectStyle)(Project);
