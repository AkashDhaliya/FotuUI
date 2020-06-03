import React from "react";
import Requests from "../RequestComponent/Requests";
import "./ImageSection.css";
import { FiDownload } from "react-icons/fi";
import SearchComponent from "../SearchComponent/Search";

class ImageSection extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = {
      photosList: [],
      noOfitems: 30,
      imagesCount: 0,
      pageNo: 1,
      searchQuery: "",
      path: "/photos",
      isError: false,
      isResponse: false,
    };
  }

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    let params = {
      query: this.state.searchQuery,
      per_page: this.state.noOfitems,
      page: this.state.pageNo,
      order_by: "Popular",
      client_id: "a2WcvdBJ0Puu78DOVsuF3ZDnYGr404up7B_r9xZxrxA",
    };
    Requests(this.state.path, params).then(
      (response) => {
        this.createImages(
          this.state.searchQuery === "" ? response.data : response.data.results
        );
      },
      (error) => {
        this.setState({ isError: true, isResponse: true });
      }
    );
  };

  createImages = (data) => {
    let images = data.map((item) => {
      return (
        <div key={item.id} className="flex-images">
          <img
            src={item.urls.small}
            alt={item.alt_description}
            title={item.alt_description}
            width="100%"
            height="300"
          ></img>
          <a
            className="download-photo"
            href={item.links.download_location}
            title="Download"
            download={item.alt_description}
          >
            <FiDownload />
          </a>
        </div>
      );
    });

    let existindData = this.state.photosList;
    existindData = existindData.concat(images);
    images = existindData.filter(function (item, index, data) {
      let dataIndex = data.findIndex((ind) => ind.key === item.key);
      return dataIndex === index;
    });

    this.setState({
      photosList: images,
      imagesCount: this.state.imagesCount + data.length,
      isError: false,
      isResponse: true,
    });
  };

  searchHandlerEvent = (query) => {
    if (query.length > 0) {
      this.setState(
        {
          path: "/search/photos",
          photosList: [],
          imagesCount: 30,
          searchQuery: query,
          isError: false,
          isResponse: false,
        },
        this.getImages
      );
    }
  };

  loadImages = (evt) => {
    let pageNo = this.state.imagesCount / this.state.noOfitems + 1;
    if (
      evt.target.scrollHeight - evt.target.scrollTop < 1200 &&
      this.state.pageNo !== pageNo
    ) {
      this.setState(
        {
          path: this.state.searchQuery === "" ? "/photos" : "/search/photos",
          pageNo: pageNo,
        },
        this.getImages
      );
    }
  };

  render() {
    if (!this.state.isError) {
      return (
        <React.Fragment>
          <SearchComponent searchHandler={this.searchHandlerEvent} />
          {this.state.isResponse && (
            <section className="images-section" onScroll={this.loadImages}>
              {this.state.photosList}
            </section>
          )}
          {!this.state.isResponse && (
            <section className="images-section" ref={this.imgRef}>
              <div className="images-section-loading">
                <img src={require("../Waiting-Logo.gif")} alt="Loading" />
              </div>
            </section>
          )}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <p>Error while loading images. Please try again</p>
        </React.Fragment>
      );
    }
  }
}

export default ImageSection;
