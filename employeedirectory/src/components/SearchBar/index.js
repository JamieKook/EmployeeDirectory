import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBar(props) {
  return (
    <form className="search">
      <div className="form-group d-flex p-4">
        <label htmlFor="sortby">Sort By:</label>
        <select className="form-control" id="sortby" onChange= {props.handleSortSelect}>
          <option>Select an Option</option>
          <option>Last Name</option>
        </select>
      </div>
    </form>
  );
}

export default SearchBar;
