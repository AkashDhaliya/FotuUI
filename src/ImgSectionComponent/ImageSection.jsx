import React from "react";
import Requests from "../RequestComponent/Requests";
import Loading from "../LoadingComponent/Loading";
import Download from "../DownloadComponent/Download";
import "./ImageSection.css";
import { FiDownload } from "react-icons/fi";

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
      downloadImageId: "",
    };
  }

  componentDidMount() {
    if (this.props.searchQuery !== undefined) {
      this.searchHandlerEvent(this.props.searchQuery);
    } else {
      this.getImages();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.searchQuery !== undefined &&
      this.props.searchQuery !== nextProps.searchQuery
    ) {
      this.searchHandlerEvent(nextProps.searchQuery);
    }
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

  downloadImage = (e) => {
    this.setState({ downloadImageId: e.currentTarget.getAttribute("link") });
  };

  searchHandlerEvent = (query) => {
    if (query.length > 0) {
      this.setState(
        {
          path: "/search/photos",
          photosList: [],
          downloadImageId: "",
          imagesCount: 30,
          searchQuery: query,
          isError: false,
          isResponse: false,
        },
        this.getImages
      );
    }
  };

  getRandomPic = () => {
    this.setState(
      {
        path: "/photos/random",
        photosList: [],
        imagesCount: 1,
        searchQuery: "",
        isError: false,
        isResponse: false,
      },
      this.getImages
    );
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
          downloadImageId: "",
        },
        this.getImages
      );
    }
  };

  render() {
    if (!this.state.isError) {
      return (
        <React.Fragment>
          {this.state.isResponse && (
            <section className="images-section" onScroll={this.loadImages}>
              <Download link={this.state.downloadImageId} />
              {this.state.photosList}
            </section>
          )}
          {!this.state.isResponse && <Loading />}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Loading />
        </React.Fragment>
      );
    }
  }
}

export default ImageSection;
