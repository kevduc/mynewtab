import React, { Component } from "react";
import List from "./List";

class Section extends Component {
  render() {
    let separatorCount = 0;
    return (
      <>
        <h1>{this.props.title}</h1>
        <hr />
        {this.props.content.map(element => {
          const type = Object.keys(element)[0];

          switch (type) {
            case "list":
              return (
                <List
                  key={
                    "list-" +
                    element.list
                      .map(link => Object.values(link).join("-"))
                      .join("-")
                  }
                  list={element.list}
                />
              );
            case "separator":
              return <hr key={"separator-" + separatorCount++} />;
            default:
              return <></>;
          }
        })}
      </>
    );
  }
}

export default Section;
