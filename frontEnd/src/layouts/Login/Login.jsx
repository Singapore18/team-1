/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect, NavLink} from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Footer from "components/Footer/Footer.jsx";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import dashboardRoutes from "routes/dashboard.jsx";
import loginStyle from "assets/jss/material-dashboard-react/layouts/login.jsx";
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKey from '@material-ui/icons/VpnKey';
import classNames from "classnames";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CircularProgress from '@material-ui/core/CircularProgress';

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			id: '',
			pw: '',
			showPassword: false,
			mobileOpen: false,
			loading: false,
			toDashboard: false
    };
    this.resizeFunction = this.resizeFunction.bind(this);
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
	}
	
	login = () => {
		// this.setState({loading: true});
		this.setState({toDashboard: true});
		// setTimeout(() => {
		// 	this.setState({toDashboard: true});
		// }, 2000);
	}
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }
  componentDidMount() {
		document.title = "JPM 18";
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener("resize", this.resizeFunction);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
	}
	handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  render() {
		const { classes, ...rest } = this.props;
		if (this.state.toDashboard) {
      return <Redirect to='/form' />
    } else
    return (
      <div className={classes.wrapper}>
				<div className={classes.header}/>
				<div className={classes.mainPanel} ref="mainPanel">
				<Typography
					color="primary"
					className={classes.logoName}
					align="inherited"
					variant="display2">Welcome to MedFrame AI</Typography>
					<Typography
					color="secondary"
					className={classes.catchLine}
					align="inherited"
					variant="headline"><b>C</b>reate   <b>C</b>ustomize   <b>C</b>ollaborate</Typography>
				<FormControl className={classes.margin}>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
					id="username"
					autoComplete={this.state.mobileOpen ? "on" : "off"}
					onChange={this.handleChange('id')}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
				</FormControl>
				<FormControl className={classes.margin}>
				
				<InputLabel htmlFor="password">Password</InputLabel>
				<Input
					id="password"
					autoComplete={this.state.mobileOpen ? "on" : "off"}
					onChange={this.handleChange('pw')}
					type={this.state.showPassword ? 'text' : 'password'}
          startAdornment={
            <InputAdornment position="start">
              <VpnKey/>
            </InputAdornment>
					}
					endAdornment= {
						<InputAdornment position="end">
							<IconButton
								aria-label="Toggle password visibility"
								onClick={this.handleClickShowPassword}
							>
								{this.state.showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
        />
      </FormControl>
			{/* {!this.state.loading ?  */}
			<Button variant="text" className={classes.button} onClick={() => this.login()}>
        <Typography className={classes.loginBtnText}>Login</Typography>
			</Button> 
			{/*: <CircularProgress className={classes.progress} thickness={7} />} */}
				</div>
				<Footer/>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(loginStyle)(Login);
