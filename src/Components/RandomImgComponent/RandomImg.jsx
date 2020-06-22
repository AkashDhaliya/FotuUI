import React from "react";
import Loading from "../LoadingComponent/Loading";
import { FiDownload } from "react-icons/fi";
import { FaSyncAlt } from "react-icons/fa";
import Download from "../DownloadComponent/Download";
import "./RandomImg.css";
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
    return this.props.randomImg.length !== 0 ? (
      <section className="images-section randomImg">
        <Download
          link={this.props.download}
          resetLink={this.props.downloadImg}
        />
        <div className="randomImg-header-btns">
          <span>
            <button title="refresh" onClick={this.fetchData}>
              <FaSyncAlt />
            </button>
            <button
              title="Download"
              link={this.props.randomImg.links.download}
              onClick={this.downloadImage}
            >
              <FiDownload />
            </button>
          </span>
        </div>
        <div className="random-flex-image">
          <img
            src={this.props.randomImg.urls.regular}
            alt={this.props.randomImg.alt_description}
            title={this.props.randomImg.alt_description}
          ></img>
        </div>
      </section>
    ) : (
      <Loading />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomImg);
