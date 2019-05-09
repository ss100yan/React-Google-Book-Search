import React from "react";

const SearchForm = props => {
  return (
    <form>
      <div className="form-group" style={{ textAlign: "center" }}>
        <input style={{ textAlign: "left" }}
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Google Books"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-light ">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
