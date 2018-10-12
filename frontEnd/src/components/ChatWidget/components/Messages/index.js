import React, { Component } from "react";
import TextMessage from "./TextMessage";
import EmojiMessage from "./EmojiMessage";
import chatIconUrl from "./../../assets/chat-icon.svg";
import Avatar from "@material-ui/core/Avatar";
import img from "assets/img/sripad_lol.jpeg";
import me from "assets/img/hung.jpeg";
import withStyles from "@material-ui/core/styles/withStyles";

const style = them => ({
  avatar: {
    margin: 10
  }
});
class Message extends Component {
  _renderMessageOfType(type) {
    switch (type) {
      case "text":
        return <TextMessage {...this.props.message} />;
      case "emoji":
        return <EmojiMessage {...this.props.message} />;
    }
  }

  render() {
    const { classes } = this.props;
    let contentClassList = [
      "sc-message--content",
      this.props.message.author === "me" ? "sent" : "received"
    ];
    return (
      <div className="sc-message">
        <div className={contentClassList.join(" ")}>
          {this.props.message.author === "them" && (
            <Avatar alt="Sripad" src={img} className={classes.avatar} />
          )}
          {this._renderMessageOfType(this.props.message.type)}
          {this.props.message.author === "me" && (
            <Avatar alt="Me" src={me} className={classes.avatar}/>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(style)(Message);
