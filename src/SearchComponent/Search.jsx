import React from "react";
import { FiSearch } from "react-icons/fi";

import "./Search.css";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      validSearchVal: false,
    };
  }

  /*This method is used to validate the input given by user onn the basis of key press. 
    Here the key code for the events gets fetached and validated
    keyCode >= 65 && keyCode <= 90 is from A to  Z.
    keyCode >= 97 && keyCode <= 122 is from A to  Z.
    keyCode == 13 is for Enter.
    keyCode == 32 is for Space.
    */

  searchInputCheck = (event) => {
    let keyCode = event.charCode;
    if (
      (keyCode >= 65 && keyCode <= 90) ||
      (keyCode >= 97 && keyCode <= 122) ||
      keyCode == 32
    ) {
      this.setState({ validSearchVal: true });
      return true;
    } else if (keyCode == 13) {
      this.setState({ validSearchVal: true });
      event.preventDefault();
      this.getSearchImageData();
    } else {
      this.setState({ validSearchVal: false });
      return false;
    }
  };

  searchInputChange = (event) => {
    if (this.state.validSearchVal) {
      let value = event.target.value;
      this.setState({ searchValue: value.trim() });
    }
  };

  getSearchImageData = () => {
    console.log("test");
  };

  render() {
    return (
      <section>
        <span className = "Search-section">
          <input
            onKeyPress={this.searchInputCheck}
            onChange={this.searchInputChange}
            maxLength="20"
            className="Search-Query"
            type="text"
            value={this.state.searchValue}
            placeholder="Search photos here.."
            name="search"
          />
          <span className="search-icon-span">
            <FiSearch />
          </span>
        </span>
      </section>
    );
  }
}

export default SearchComponent;
