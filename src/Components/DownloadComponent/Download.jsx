import React from "react";
import "./Download.css";

class Download extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfSize: [],
    };
  }

  componentDidMount() {
    window.addEventListener("click", this.windowOnClick);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== undefined && nextProps.link.length !== 0) {
      let link =
        nextProps.link +
        "?client_id=a2WcvdBJ0Puu78DOVsuF3ZDnYGr404up7B_r9xZxrxA&w=";
      let items = (
        <ul>
          <li>
            <a href={link + "640"} download target="_blank">
              Small
            </a>
          </li>
          <li>
            <a href={link + "1920"} download target="_blank">
              Medium
            </a>
          </li>
          <li>
            <a href={link + "2400"} download target="_blank">
              Large
            </a>
          </li>
        </ul>
      );
      this.setState({ listOfSize: items }, this.toggleModle);
    }
  }

  toggleModle = () => {
    let modal = document.querySelector(".modal");
    modal.classList.toggle("show-modal");
  };

  windowOnClick = (event) => {
    if (event.target === document.querySelector(".modal")) {
      this.toggleModle();
    }
  };

  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close-button" onClick={this.toggleModle}>
            ×
          </span>
          <h4 className="download-Header">Download Size</h4>
          {this.state.listOfSize}
        </div>
      </div>
    );
  }
}

export default Download;
