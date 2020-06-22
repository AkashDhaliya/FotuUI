import React from "react";
import ImageComponent from "../ImgSectionComponent/ImageSection";
import SearchQuery from "./SearchQuery";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  getSearchResults = (query) => {
    this.setState({ query: query });
  };

  render() {
    return (
      <React.Fragment>
        <SearchQuery query={this.getSearchResults} />
        <ImageComponent searchQuery={this.props.query} />
      </React.Fragment>
    );
  }
}

export default Search;
