import React from "react";
import Loading from "../LoadingComponent/Loading";
import ImageComponent from "../ImgSectionComponent/ImageSection";
import { RANDOM_IMG } from "../../Constants/Const";
import { FaSyncAlt } from "react-icons/fa";

import {
  getImages,
  fetchStatus,
  downloadImg,
  resetData,
} from "../../Redux/Actions/actions";
import { connect } from "react-redux";
import { RANDOMURLPATH } from "../../Constants/Const";

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  getImages: (param) => dispatch(getImages(param)),
  fetchStatus: () => dispatch(fetchStatus()),
  downloadImg: (id) => dispatch(downloadImg(id)),
  resetData: () => dispatch(resetData()),
});

class RandomImg extends React.Component {
  componentDidMount() {
    this.props.resetData();
    this.fetchData();
  }

  componentWillUnmount() {
    this.props.resetData();
  }

  fetchData = async () => {
    this.props.fetchStatus();
    this.props.getImages({
      query: "",
      per_page: 1,
      path: RANDOMURLPATH,
    });
  };

  downloadImage = (e) => {
    this.props.downloadImg(e.currentTarget.getAttribute("link"));
  };

  render() {
    return this.props.photosList.length !== 0 ? (
      <>
        <button className="refreshImg" title="refresh" onClick={this.fetchData}>
          <FaSyncAlt />
        </button>
        <ImageComponent {...this.props} parent={RANDOM_IMG} />
      </>
    ) : (
      <Loading />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomImg);
