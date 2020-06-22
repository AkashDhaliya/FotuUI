import React from "react";
import Loading from "../LoadingComponent/Loading";
import Download from "../DownloadComponent/Download";
import "./ImageSection.css";
import { FiDownload } from "react-icons/fi";
import { NO_OF_ITEMS } from "../../Constants/Const";

class ImageSection extends React.Component {

  downloadImage = (e) => {
    this.props.downloadImg(e.currentTarget.getAttribute("link"));
  };

  loadImages = (evt) => {
    let pageNo = this.props.photosList.length / NO_OF_ITEMS + 1;
    if (
      evt.target.scrollHeight - evt.target.scrollTop < 1200 &&
      this.props.page_no !== pageNo &&
      !this.props.isFetching
    ) {
      this.props.fetchStatus();
      this.props.getImages({
        query: this.props.search,
        pageNo: pageNo,
        path: this.props.path
      });
    }
  };

  render() {
    if (this.props.photosList.length !== 0) {
      return (
        <section className="images-section" onScroll={this.loadImages}>
          <Download
            link={this.props.download}
            resetLink={this.props.downloadImg}
          />
          {this.props.photosList.map((item) => {
            return (
              <div key={item.id} className="flex-images">
                <img
                  src={item.urls.small}
                  alt={item.alt_description}
                  title={item.alt_description}
                  width="100%"
                  height="100%"
                ></img>
                <button
                  link={item.links.download}
                  className="download-photo"
                  onClick={this.downloadImage}
                  title="Download"
                >
                  <FiDownload />
                </button>
              </div>
            );
          })}
        </section>
      );
    } else {
      return <Loading />;
    }
  }
}

export default ImageSection;
