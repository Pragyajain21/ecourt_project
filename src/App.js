import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomSelect from "./Component/CustomSelect";
import countrydata from "./Component/countrydata.json";

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
          data={countrydata}
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
