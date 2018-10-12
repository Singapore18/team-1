import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import ButtonBase from "@material-ui/core/ButtonBase";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
// core components

import selectableImageStyle from "assets/jss/material-dashboard-react/components/selectableImageStyle.jsx";

const SelectableImage = ({ ...props }) => {
  const { classes, url, id, onClick, selected, checkBoxTap } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <ButtonBase
          key={id}
          focusRipple
          onClick={onClick}
          className={classes.buttonContainer}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${url})`
            }}
          />
        </ButtonBase>
        <div className={classes.divider} />
        <div className={classes.plugins}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selected}
                onChange={checkBoxTap}
                classes={{
                  root: classes.checkerRoot,
                  checked: classes.checked
                }}
              />
            }
            label={id}
          />
        </div>
      </Paper>
    </div>
  );
};

SelectableImage.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
	checkBoxTap: PropTypes.func,
	icon: PropTypes.string
};

export default withStyles(selectableImageStyle)(SelectableImage);
