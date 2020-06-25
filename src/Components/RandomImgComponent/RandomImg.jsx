import React from "react";
import Loading from "../LoadingComponent/Loading";
import ImageComponent from "../ImgSectionComponent/ImageSection";
import { RANDOM_IMG } from "../../Constants/Const";
import { FiDownload } from "react-icons/fi";
import { FaSyncAlt } from "react-icons/fa";
import Download from "../DownloadComponent/Download";

import {
  getImages,
  fetchStatus,
  downloadImg,
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
});

class RandomImg extends React.Component {
  componentDidMount() {
    this.fetchData();
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
        <Download
          link={this.props.download}
          resetLink={this.props.downloadImg}
        />
        <div className="randomImg-header-btns">
          {/* <span> */}
            <button title="refresh" onClick={this.fetchData}>
              <FaSyncAlt />
            </button>
            <button
              title="Download"
              link={this.props.photosList[0].links.download}
              onClick={this.downloadImage}
            >
              <FiDownload />
            </button>
          {/* </span> */}
        </div>
        <ImageComponent {...this.props} parent={RANDOM_IMG} />
      </>
    ) : (
      <Loading />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomImg);
