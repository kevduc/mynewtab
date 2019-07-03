import React, { Component } from "react";
import Item from "./Item";

class Section extends Component {
  render() {
    let separatorCount = 0;
    return (
      <>
        <h1>{this.props.title}</h1>
        <hr />
        {this.props.content.map(element => {
          console.log(element);
          switch (element.type) {
            case "list":
              return (
                <ul
                  key={
                    "list-" +
                    element.items
                      .map(item => Object.values(item).join("-"))
                      .join("-")
                  }
                >
                  {element.items.map(item => (
                    <li key={Object.values(item).join("-")}>
                      <Item {...item} />
                    </li>
                  ))}
                </ul>
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
