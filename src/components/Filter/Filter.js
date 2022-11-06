import React from "react";
import PropTypes from "prop-types";

const Filter = ({ onFilter }) => (
  <>
    <p>Find contacts by name</p>
    <input type="text" onChange={onFilter} name="filter"></input>
  </>
);

export default Filter;

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};