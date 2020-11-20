import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Employee Name</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="jobs"
          type="text"
          className="form-control"
          placeholder="Who do you want to search for?"
          id="employee"
        />
        <datalist id="employee">
          {props.employee.map((employee) => (
            <option value={employee} key={employee} />
          ))}
        </datalist>
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
