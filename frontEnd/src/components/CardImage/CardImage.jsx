import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import LockIcon from "@material-ui/icons/Lock";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

import selectableImageStyle from "assets/jss/material-dashboard-react/components/selectableImageStyle.jsx";
import { Tooltip } from "@material-ui/core";

const CardImage = ({ ...props }) => {
  const {
    children,
    classes,
    url,
    id,
    onClick,
    recommended,
    details,
    icon,
    locked
  } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <ButtonBase
          key={id}
          focusRipple
          onClick={onClick}
          className={classes.buttonContainer}
        >
          {url && !icon ? (
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${url})`
              }}
            />
          ) : (
            icon
          )}
        </ButtonBase>
        <div className={classes.plugins}>
          <div
            className={classNames(
              classes.divider,
              recommended && classes.recommended
            )}
          />
          <div className={classes.details}>
            {details}{" "}
            {locked && (
              <Tooltip title="This feature is only for premium users only">
                <LockIcon className={classes.lock} />
              </Tooltip>
            )}
          </div>
          <div className={classes.footer}>{children}</div>
        </div>
      </Paper>
    </div>
  );
};

CardImage.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  checkBoxTap: PropTypes.func,
  recommended: PropTypes.bool,
  locked: PropTypes.bool
};

export default withStyles(selectableImageStyle)(CardImage);
