import PropTypes from "prop-types";
import React, { Component } from "react";
import ChatWindow from "./ChatWindow";
import launcherIcon from "./../assets/logo-no-bg.svg";
import launcherIconActive from "./../assets/close-icon.png";
//@material-ui
import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Badge } from "@material-ui/core";
import { Chat, Close } from "@material-ui/icons";
import classNames from "classnames";
import chatWindowStyle from "assets/jss/material-dashboard-react/components/chatWindowStyle.jsx";
class Launcher extends Component {
  constructor() {
    super();
    this.state = {
      launcherIcon,
      isOpen: false
    };
  }

  handleClick() {
    this.props.clearNewMessageCount();
    if (this.props.handleClick !== undefined) {
      this.props.handleClick();
    } else {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  render() {
    const isOpen = this.props.hasOwnProperty("isOpen")
      ? this.props.isOpen
      : this.state.isOpen;
    const classList = ["sc-launcher", isOpen ? "opened" : ""];
    const { classes } = this.props;
    return (
      <div>
        <div />

        <Button
          variant="fab"
          color="secondary"
          className={classes.container}
          onClick={this.handleClick.bind(this)}
        >
          {isOpen ? <Close /> : <Chat />}
        </Button>
        <Badge
          color="primary"
          badgeContent={this.props.newMessagesCount}
          className={classNames(
            classes.badge,
            this.props.newMessagesCount == 0 && classes.hidden
          )}
        />
        <ChatWindow
          messageList={this.props.messageList}
          onUserInputSubmit={this.props.onMessageWasSent}
          agentProfile={this.props.agentProfile}
          isOpen={isOpen}
          onClose={this.handleClick.bind(this)}
          showEmoji={this.props.showEmoji}
        />
      </div>
    );
  }
}

// const MessageCount = props => {
//   if (props.count === 0 || props.isOpen === true) {
//     return null;
//   }
//   return <div className={"sc-new-messsages-count"}>{props.count}</div>;
// };

Launcher.propTypes = {
  onMessageWasReceived: PropTypes.func,
  onMessageWasSent: PropTypes.func,
  newMessagesCount: PropTypes.number,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  messageList: PropTypes.arrayOf(PropTypes.object),
  showEmoji: PropTypes.bool,
  clearNewMessageCount: PropTypes.func
};

Launcher.defaultProps = {
  newMessagesCount: 0,
  showEmoji: true
};

export default withStyles(chatWindowStyle)(Launcher);
