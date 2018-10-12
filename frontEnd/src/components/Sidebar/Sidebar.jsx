import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { toggleDrawer } from "actions";
import compose from "recompose/compose";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "components/CustomButtons/Button";
// core components
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import sidebarStyle from "assets/jss/material-dashboard-react/components/sidebarStyle.jsx";

class Sidebar extends React.Component {
  state = {
    open: true,
    links: null,
    brand: null
  };
  // verifies if routeName is the one active (in browser input)
  activeRoute = routeName => {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
    // return false;
  };
  handleDrawerToggle = () => {
    this.props.toggleDrawer();
  };

  render() {
    const { classes, theme, color, logo, image, logoText, routes } = this.props;
    let links = (
      <List className={classes.list}>
        {routes.map((prop, key) => {
          if (prop.redirect) return null;
          var activePro = " ";
          var listItemClasses;
          if (prop.path === "/user") {
            activePro = classes.activePro + " ";
            listItemClasses = classNames({
              [" " + classes[color]]: true
            });
          } else {
            listItemClasses = classNames({
              [" " + classes[color]]: this.activeRoute(prop.path)
            });
          }
          const whiteFontClasses = classNames({
            [" " + classes.whiteFont]: this.activeRoute(prop.path)
          });
          if (prop.sidebarName)
            return (
              <NavLink
                to={prop.path}
                className={activePro + classes.item}
                activeClassName="active"
                key={key}
              >
                <ListItem button className={classes.itemLink + listItemClasses}>
                  <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                    {typeof prop.icon === "string" ? (
                      <Icon>{prop.icon}</Icon>
                    ) : (
                      <prop.icon />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={prop.sidebarName}
                    className={classes.itemText + whiteFontClasses}
                    disableTypography={true}
                  />
                </ListItem>
              </NavLink>
            );
        })}
      </List>
    );
    var brand = (
      <div className={classes.logo}>
        <div className={classes.logoLink}>
          <Button
            disableRipple
            color="transparent"
            className={classes.logoButton}
            onClick={() => this.handleDrawerToggle()}
          >
            <MenuIcon />
            <ListItemText
              primary={logoText}
              className={classes.lgText}
              disableTypography={true}
            />
          </Button>
        </div>
      </div>
    );
    return (
      <div>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="right"
            open={this.props.open}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={this.props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {brand}
            <div className={classes.sidebarWrapper}>
              <HeaderLinks />
              {links}
            </div>
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            anchor="left"
            variant="permanent"
            open={this.props.drawerOpen}
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.props.drawerOpen && classes.drawerPaperClose
              )
            }}
          >
            {brand}
            <div className={classes.sidebarWrapper}>{links}</div>
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerOpen: PropTypes.bool.isRequired
};

const mapStateToProps = store => ({
  drawerOpen: store.drawer.open
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleDrawer())
});

export default compose(
  withStyles(sidebarStyle, { withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Sidebar);
