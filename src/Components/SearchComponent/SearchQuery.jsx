import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

function SearchQuery(props) {
  const [searchValue, setSearchValue] = useState("");

  /*This method is used to validate the input given by user onn the basis of key press. 
    Here the key code for the events gets fetached and validated
    keyCode >= 65 && keyCode <= 90 is from A to  Z.
    keyCode >= 97 && keyCode <= 122 is from A to  Z.
    keyCode == 13 is for Enter.
    keyCode == 32 is for Space.
    */

   function detectKeyPress(event) {
    let keyCode = event.keyCode;
    if (
      (keyCode >= 65 && keyCode <= 90) ||
      (keyCode >= 97 && keyCode <= 122) ||
      keyCode === 32 || keyCode === 0
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
      <div className="search-section">
        <span className="search-icon-span">
          <FiSearch onClick={submitSearch} />
        </span>
        <input
          onKeyDown={detectKeyPress}
          onChange={(e)=>setSearchValue(e.target.value)}
          maxLength="50"
          autoComplete="off"
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
