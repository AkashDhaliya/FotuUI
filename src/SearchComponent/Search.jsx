import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./Search.css";

function SearchComponent(props) {
  const [searchValue, setSearchValue] = useState("");
  const [validSearchVal, setValidSearchVal] = useState(false);

  /*This method is used to validate the input given by user onn the basis of key press. 
    Here the key code for the events gets fetached and validated
    keyCode >= 65 && keyCode <= 90 is from A to  Z.
    keyCode >= 97 && keyCode <= 122 is from A to  Z.
    keyCode == 13 is for Enter.
    keyCode == 32 is for Space.
    */

  function searchInputCheck(event) {
    let keyCode = event.charCode;
    if (
      (keyCode >= 65 && keyCode <= 90) ||
      (keyCode >= 97 && keyCode <= 122) ||
      keyCode == 32
    ) {
      setValidSearchVal(true);
      return true;
    } else if (keyCode == 13) {
      setValidSearchVal(true);
      searchRef();
      event.preventDefault();
    } else {
      setValidSearchVal(false);
      return false;
    }
  }

  function searchInputChange(event) {
    if (validSearchVal) {
      let value = event.target.value;
      setSearchValue(value.trim());
    }
  }

  function searchRef() {
    props.searchHandler(searchValue);
  }

  return (
    <section>
      <span className="Search-section">
        <input
          onKeyPress={searchInputCheck}
          onChange={searchInputChange}
          maxLength="20"
          className="Search-Query"
          type="text"
          value={searchValue}
          placeholder="Search photos here.."
          name="search"
        />
        <span className="search-icon-span">
          <FiSearch onClick={searchRef} />
        </span>
      </span>
    </section>
  );
}

export default SearchComponent;
