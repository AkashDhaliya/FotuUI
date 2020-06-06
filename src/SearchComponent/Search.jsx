import React from "react";
import ImageComponent from "../ImgSectionComponent/ImageSection";
import SearchQuery from "./SearchQuery";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  getSearchResults = (query) => {
    this.setState({ query: query });
  };

  render() {
    return (
      <React.Fragment>
        <SearchQuery query={this.getSearchResults} />
        <ImageComponent searchQuery={this.state.query} />
      </React.Fragment>
    );
  }
}

export default Search;
