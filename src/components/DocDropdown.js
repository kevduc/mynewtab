import React, { Component } from "react";

export default class DocDropdown extends Component {
  render() {
    return (
      <select id="doc_release" defaultValue="default">
        <option value="default" disabled hidden>
          R...
        </option>
        <option value="R2014b">R2014b</option>
        <option value="R2014a">R2014a</option>
        <option value="R2013b">R2013b</option>
        <option value="R2013a">R2013a</option>
        <option value="R2012b">R2012b</option>
        <option value="R2012a">R2012a</option>
        <option value="R2011b">R2011b</option>
        <option value="R2011a">R2011a</option>
        <option value="R2010b">R2010b</option>
        <option value="R2010a">R2010a</option>
        <option value="R2009b">R2009b</option>
        <option value="R2009a">R2009a</option>
        <option value="other">More...</option>
      </select>
    );
  }
}
