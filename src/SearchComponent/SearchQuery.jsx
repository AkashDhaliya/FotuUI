import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./Search.css";

function SearchQuery(props) {
  const [searchValue, setSearchValue] = useState("");

  function searchInputChange(event) {
    let value = event.target.value;
    if (value !== "") {
      setSearchValue(value);
    }
  }

  /*This method is used to validate the input given by user onn the basis of key press. 
    Here the key code for the events gets fetached and validated
    keyCode >= 65 && keyCode <= 90 is from A to  Z.
    keyCode >= 97 && keyCode <= 122 is from A to  Z.
    keyCode == 13 is for Enter.
    keyCode == 32 is for Space.
    */

   function detectEnterPress(event) {
    let keyCode = event.charCode;
    if (
      (keyCode >= 65 && keyCode <= 90) ||
      (keyCode >= 97 && keyCode <= 122) ||
      keyCode === 32
    ) {
      return true;
    } else if (keyCode === 13) {
      submitSearch();
      event.preventDefault();
    } else {
      return false;
    }
  }

  function submitSearch() {
    if (searchValue !== "") {
      props.query(searchValue);
    }
  }

  return (
    <section>
      <div className="Search-section">
        <span className="search-icon-span">
          <FiSearch onClick={submitSearch} />
        </span>
        <input
          onKeyPress={detectEnterPress}
          onChange={searchInputChange}
          maxLength="50"
          autoComplete="off"
          className="Search-Query"
          type="text"
          value={searchValue}
          placeholder="Search photos here.."
          name="search"
        />
      </div>
    </section>
  );
}

export default SearchQuery;
