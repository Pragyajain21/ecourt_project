import React from "react";
import PropTypes from "prop-types";

export default function CustomSelect({ value, data, onChange, placeholder }) {
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };
  return (
    <div
      className="custom-select"
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <select value={value} className="select-box" onChange={handleChange}>
        <option value="">{placeholder}</option>
        {data.map((item, key) => (
          <option key={key} value={item.value}>
            {item.lable}
          </option>
        ))}
      </select>
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
