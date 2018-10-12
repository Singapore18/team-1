import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import { connect } from "react-redux";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Stepper from "components/Stepper";
import { steps, contents } from "variables/stepper";
//main panel
import notebookStyle from "assets/jss/material-dashboard-react/views/notebookStyle.jsx";
import logo from "assets/img/hunk.jpg";
import { Launcher } from "components/ChatWidget/index.jsx";

class Dashboard extends React.Component {
  state = {
    messageList: [],
    newMessageCount: 0
  };

  componentDidMount() {
    setTimeout(() => {
      this._sendMessage(
        "Woah the result from previous training looks really good!"
      );
    }, 7000);
  }
  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    });
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [
          ...this.state.messageList,
          {
            author: "them",
            type: "text",
            data: { text }
          }
        ],
        newMessageCount: this.state.newMessageCount + 1
      });
    }
  }

  render() {
    const { classes, page } = this.props;
    return (
      <div className={classes.container}>
        <div/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired
};

const mapStateToProps = store => ({
  page: store.notebook
});
export default compose(
  withStyles(notebookStyle),
  connect(mapStateToProps)
)(Dashboard);
