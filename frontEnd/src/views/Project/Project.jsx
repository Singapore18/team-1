import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import projectStyle from "assets/jss/material-dashboard-react/views/projectStyle.jsx";
import img from "assets/img/sam.png"

const styles = {
  card: {
    maxWidth: 100

  },
  media: {
    maxWidth: 100
  },
};

const client = {
  id: 1,
  name: "Sam Yeo",
  personalInterest: "Running",
  jobInterest: "Retail",
  skills: ["cook", "making coffee"],
  age: "25",

};

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

      <div >


        <Card className={classes.card}>
          
          <Avatar
            alt="Sam Yeo picture"
            src={img}
            className={classes.bigAvatar}
          />

          <CardContent>
            <Typography gutterBottom variant="h4" component="h4">
              Introduction
          </Typography>
            <Typography variant="h6">
              "I can do it!"
          </Typography>
            <br />
            <Typography variant="p">
              Hi! My name is {client.name}. I am {client.age} years old.
          </Typography>
            <br />

            <Typography variant="h5">
              Personal Traits
          </Typography>
            <br />


            {client.personalInterest == 'Running' && <Typography variant="p">
              I am physically fit and live an active lifestyle! As a outgoing person, I like to get out of my comfort zone and enjoy a challenge!
          </Typography>}


            {client.personalInterest == 'Gardening' || client.personalInterest == 'Store' && <Typography variant="p">
              I am kind and empathetic towards others, always ready to lend a listening ear. In addition, I enjoy social interactions and work well in a team!
          </Typography>}

            {client.personalInterest == 'Office' || client.personalInterest == 'Logistic' && <Typography variant="p">
              Being detail-oriented, I make a conscious effort to ensure a smooth workflow. If you need an eye for details, I am suitable for the role.
          </Typography>}

            {client.personalInterest == 'Cooking' && <Typography variant="p">
              As a very disciplined individual, I believe in hardwork and will carry out my assigned tasks to the best of my abilities.
          </Typography>}
            <br />

            <Typography variant="h5">
              Skills
          </Typography>
            <br />
            <Typography variant="p">
              I am skilled in
          </Typography>
            {
              client.skills.map(skill => (
                <Chip className={classes.chip}
                  label={skill}
                />
              )
              )}

          </CardContent>
        </Card>

      </div>

    );
  }
}

export default withStyles(projectStyle)(Project);
