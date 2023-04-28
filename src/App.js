import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomSelect from "./Component/CustomSelect";

export default class App extends Component {
  state = {
    country: "",
  };
  handleCustomSelect = (country) => {
    this.setState({ country });
  };

  render() {
    const { country } = this.state;
    return (
      <div>
        <CustomSelect
          data={[
            { value: 1, lable: "India" },
            { value: 2, lable: "China" },
            { value: 3, lable: "UK" },
            { value: 4, lable: "USA" },
            { value: 5, lable: "Russia" },
            { value: 6, lable: "Nepal" },
          ]}
          value={country}
          placeholder="select Country"
          onChange={this.handleCustomSelect}
        />
      </div>
    );
  }
}
App.propTypes = {
  value: PropTypes.string,
  data: PropTypes.array.isRequired,
  styleClass: PropTypes.string,
};
