import React, { Component } from "react";
import Link from "./Link";
import DocDropdown from "./DocDropdown";

export default class Item extends Component {
  render() {
    switch (this.props.type) {
      case "link":
        return (
          <Link icon={this.props.icon} href={this.props.link}>
            {this.props.label}
          </Link>
        );
      case "component":
        switch (this.props.name) {
          case "DocDropdown":
            return <DocDropdown />;
          default:
            return <></>;
        }
      default:
        return <></>;
    }
  }
}
