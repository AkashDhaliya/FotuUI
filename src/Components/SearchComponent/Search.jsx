import React from "react";
import ImageComponent from "../ImgSectionComponent/ImageSection";
import SearchQuery from "./SearchQuery";
import {
  getImages,
  resetData,
  fetchStatus,
  downloadImg,
} from "../../Redux/Actions/actions";
import { connect } from "react-redux";
import { SEARCHURLPATH } from "../../Constants/Const";

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  getImages: (param) => dispatch(getImages(param)),
  fetchStatus: () => dispatch(fetchStatus()),
  downloadImg: (id) => dispatch(downloadImg(id)),
  resetData: () => dispatch(resetData()),
});

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state={
      search:""
    }
  }
  componentDidMount() {
    this.props.resetData();
  }

  componentWillUnmount() {
    this.props.resetData();
  }

  getSearchResults = (query) => {
    this.setState({search:query})
    this.props.getImages({
      query: query,
      pageNo: 1,
      path: SEARCHURLPATH,
    });
  };

  render() {
    return (
      <React.Fragment>
        <SearchQuery query={this.getSearchResults} />
        <ImageComponent {...this.props} path={SEARCHURLPATH} search={this.state.search} />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
