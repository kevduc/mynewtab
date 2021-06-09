import React, { Component } from "react";
import DocDropdown from "./DocDropdown";

class Link extends Component {
  render() {
    if (this.props.children === "{widget}") {
      const widgetName = this.props.url;
      switch (widgetName) {
        case "DocDropdown":
          return <DocDropdown />;
        default:
          console.error(`Error: Cannot find widget "${widgetName}".`);
          return <></>;
      }
    } else {
      return (
        <>
          <img alt="" src={this.props.icon} style={{ width: 20, height: 20 }} />
          <a href={this.props.url}>{this.props.children}</a>
        </>
      );
    }
  }
}

export default Link;
