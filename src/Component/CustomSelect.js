import React, { useState } from "react";
import PropTypes from "prop-types";

export default function CustomSelect({ value, data, onChange, placeholder }) {
  const [countryId, setCountryId] = useState("");
  const [state, setState] = useState([]);
  const [stateId, setStateId] = useState("");
  const [formError, setFormError] = useState("");
  const [display, setdisplay] = useState("");

  const handlecountry = (e) => {
    const getcountryId = e.target.value;

    const getStatedata = data.find(
      (country) => country.country_id === getcountryId
    ).states;
    setCountryId(getcountryId);

    setState(getStatedata);
  };
  const handlestate = (e) => {
    const stateId = e.target.value;
    setStateId(stateId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stateId === "" || countryId === "") {
      setFormError("Please Select both country and state");
    } else {
      setdisplay("Country:" + countryId + "State:" + stateId);
    }
  };
  return (
    <div
      className="custom-select"
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        marginTop: 20,
      }}
    >
      <form onSubmit={handleSubmit}>
        <select
          value={countryId}
          className="select-box"
          onChange={(e) => handlecountry(e)}
        >
          <option value="">{placeholder}</option>
          {data.map((item, key) => (
            <option key={key} value={item.country_id}>
              {item.country_name}
            </option>
          ))}
        </select>
        <select
          name="states"
          className="select-state "
          value={stateId}
          onChange={(e) => handlestate(e)}
        >
          <option value="">--Select state--</option>
          {state.map((getState, index) => (
            <option value={getState.state_id} key={index}>
              {getState.state_name}
            </option>
          ))}
        </select>
        <br />
        <p style={{ color: "red", fontWeight: "bold" }}>{formError}</p>
        <button
          type="submit"
          style={{ color: "white", background: "green", border: "none" }}
        >
          {" "}
          Submit
        </button>
      </form>
      <br />

      <div>
        <p>{display}</p>
      </div>
    </div>
  );
}
CustomSelect.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.array.isRequired,
  styleClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

CustomSelect.defaultProps = {
  value: "",
  styleClass: "",
  placeholder: "",
};
