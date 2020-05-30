import React from "react";
import { FiSearch } from "react-icons/fi";

import "./Search.css";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }

  searchInputChange = (event) => {
    let regex = /^[a-zA-Z]*$/;
    if (regex.test(event.target.value)) {
      return true;
    } else {
      return false;
    }
  };
  render() {
    return (
      <section>
        <input
          onInput={this.searchInputChange}
          className="Search-Query"
          type="text"
          placeholder="Search photos here.."
          name="search"
        />
        <span className="search-icon-span">
          <FiSearch />
        </span>
      </section>
    );
  }
}

export default SearchComponent;
