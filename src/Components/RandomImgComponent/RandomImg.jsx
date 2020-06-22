import React from "react";
import Requests from "../RequestComponent/Requests";
import Loading from "../LoadingComponent/Loading";
import { FiDownload } from "react-icons/fi";
import { FaSyncAlt } from "react-icons/fa";
import Download from "../DownloadComponent/Download";
import "./RandomImg.css";

class RandomImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomPic: [],
      picId: "",
      download: "",
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    let params = {
      per_page: 1,
      order_by: "Popular",
      client_id: "a2WcvdBJ0Puu78DOVsuF3ZDnYGr404up7B_r9xZxrxA",
    };
    this.setState({randomPic:[],picId:"",download:""})
    await Requests("/photos/random", params).then(
      (response) => {
        let item = response.data;
        let image = (
          <img
            src={item.urls.regular}
            alt={item.alt_description}
            title={item.alt_description}
          ></img>
        );
        this.setState({randomPic:image,picId:item.links.download})
      },
      (error) => {}
    );
  };

  render() {
    return this.state.randomPic.length !== 0 ? (
      <section className="images-section randomImg">
        <Download link={this.state.download} />
        <div className="randomImg-header-btns">
          <span>
            <button title="refresh" onClick={this.fetchData}>
              <FaSyncAlt />
            </button>
            <button title="Download" onClick={()=>this.setState({download:this.state.picId})}>
              <FiDownload />
            </button>
          </span>
        </div>
        <div className="random-flex-image">{this.state.randomPic}</div>
      </section>
    ) : (
      <Loading />
    );
  }
}

export default RandomImg;
