import React, { Component } from "react";
import Section from "./Section";
import Link from "./Link";
import "../utils";

export class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: []
    };
  }
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ sections: data }));
  }
  render() {
    const sectionElements = this.state.sections.map(section => (
      <Section key={section.id} title={section.title}>
        <ul>
          {section.body.split("\n").map(link => (
            <li key={link.hashCode()}>
              <Link>{link}</Link>
            </li>
          ))}
        </ul>
      </Section>
    ));
    return <div>{sectionElements}</div>;
  }
}

export default Board;
