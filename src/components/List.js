import React, { Component } from "react";
import Link from "./Link";

export default class List extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map(link => (
          <li key={Object.values(link).join("-")}>
            {/* key formula allows only one instance of a widget */}
            <Link icon={link.icon} url={link.url}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
