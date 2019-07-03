import React, { Component } from "react";
import Section from "./Section";
import Link from "./Link";
import "../utils";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSections } from "../actions/boardActions";

export class Board extends Component {
  componentWillMount() {
    this.props.fetchSections();
  }

  render() {
    return (
      <div>
        {this.props.sections.map(section => (
          <Section key={section.id} title={section.title}>
            <ul>
              {section.body.split("\n").map(link => (
                <li key={link.hashCode()}>
                  <Link>{link}</Link>
                </li>
              ))}
            </ul>
          </Section>
        ))}
      </div>
    );
  }
}

Board.propTypes = {
  fetchSections: PropTypes.func.isRequired,
  sections: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  sections: state.sections.items
});

export default connect(
  mapStateToProps,
  { fetchSections }
)(Board);
