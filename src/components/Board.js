import React, { Component } from "react";
import Section from "./Section";
import "../utils";

export class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: []
    };
  }
  componentWillMount() {
    fetch("/layout.json")
      .then(res => res.json())
      .then(data => this.setState({ sections: data.sections }));
    // .then(data => console.log(data));
  }
  render() {
    const sectionElements = this.state.sections.map(section => (
      <Section key={section.title} {...section} />
    ));
    return <div>{sectionElements}</div>;
  }
}

export default Board;
