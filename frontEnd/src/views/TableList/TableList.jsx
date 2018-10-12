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

class TableList extends React.Component {
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
          <Avatar classname={classes.button}
            alt="Sam Yeo picture"
            src={img}
            className={classes.bigAvatar}
          />

          <CardContent>
            <Typography gutterBottom variant="h4" component="h4">
             Resume
          </Typography>
            <Typography variant="p">
              Name: Sam Yeo<br/>
              Gender: Male<br/>
              Age: 25<br/>
              Address: XX Tampines St XX<br/>
              Postal Code: XXXXXX<br/>
          </Typography>
            <br />


            <Typography variant="h5">
              Work Experience
          </Typography>
            <br />

            <Typography variant="p">
            <li>Working Experience 1</li>
            <li>Working Experience 2</li>
            <li>Working Experience 3</li>
          </Typography>


  
          <br/>
          <Typography variant="h5">
              Skills
          </Typography>
            <br />
            <Typography variant="p">
            <li>Skills 1</li>
            <li>Skills 2</li>
            <li>Skills 3</li> 
          </Typography>

          </CardContent>
        </Card>

      </div>

    );
  }
}

export default withStyles(projectStyle)(TableList);
