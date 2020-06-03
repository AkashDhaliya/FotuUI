import React from "react";
import Requests from "../RequestComponent/Requests";
import "./ImageSection.css";
import { FiDownload } from "react-icons/fi";
import SearchComponent from "../SearchComponent/Search";

const ListOfPhotos = "https://api.unsplash.com/photos";
const searchUrl = "https://api.unsplash.com/search/photos";
var Images = [];

class ImageSection extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = {
      photosList: [],
      noOfitems: 30,
      pageNo:1,
      searchQuery: "",
      isError: false,
      isResponse: false,
    };
  }

  componentDidMount() {
    Requests(
      ListOfPhotos,
      "?per_page=" + this.state.noOfitems + "&order_by=popular"
    ).then(
      (response) => {
        this.createImages(response.data);
      },
      (error) => {
        this.setState({ isError: true, isResponse: true });
      }
    );
  }

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
    this.setState({
      photosList: this.state.photosList.concat(images),
      isError: false,
      isResponse: true,
    });
  };

  searchHandlerEvent = (query) => {
    if (query.length > 0) {
      this.setState({ searchQuery: query, isError: false, isResponse: false });
      Requests(
        searchUrl,
        "?per_page=" + this.state.noOfitems + "&order_by=popular&query=" + query
      ).then(
        (response) => {
          this.createImages(response.data.results);
        },
        (error) => {
          this.setState({ isError: true, isResponse: true });
        }
      );
    }
  };

  loadImages = (evt) => {
    if (evt.target.scrollHeight - evt.target.scrollTop < 1200 && this.state.pageNo!=evt.currentTarget.childElementCount / this.state.noOfitems + 1) {
      this.setState({
        pageNo: evt.currentTarget.childElementCount / this.state.noOfitems + 1,
      });
      Requests(
        ListOfPhotos,
        "?per_page=" + this.state.noOfitems + "&order_by=popular&page=" + this.state.pageNo
      ).then(
        (response) => {
          this.createImages(response.data);
        },
        (error) => {
          this.setState({ isError: true, isResponse: true });
        }
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
