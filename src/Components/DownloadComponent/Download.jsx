import React from "react";
import { CLIENT_ID } from "../../Constants/Const";

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

  componentDidUpdate(prevProps){
    if (this.props.link !== undefined && this.props.link.length !== 0 && prevProps.link!==this.props.link) {
      let link = `${this.props.link}?client_id=${CLIENT_ID}`;
      let items = (
        <ul>
          <li>
            <a href={link + "640"} download target="_blank" rel="noopener noreferrer nofollow">
              Small
            </a>
          </li>
          <li>
            <a href={link + "1920"} download target="_blank" rel="noopener noreferrer nofollow">
              Medium
            </a>
          </li>
          <li>
            <a href={link + "2400"} download target="_blank" rel="noopener noreferrer nofollow">
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
    this.props.resetLink("");
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
