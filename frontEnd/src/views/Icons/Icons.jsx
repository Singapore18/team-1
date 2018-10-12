import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { Timeline, TimelineEvent } from "react-event-timeline";
import timeline from "variables/timeline";
import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";
import images from "variables/images";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

function Icons(props) {
  const { classes } = props;
  return (
    <div>
      <Card plain>
        <CardHeader plain color="info">
          <h4 className={classes.cardTitleWhite}>Activity Log</h4>
          <p className={classes.cardCategoryWhite}>
            Management has never been so easy.
          </p>
        </CardHeader>
      </Card>
      <div />
    </div>
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
