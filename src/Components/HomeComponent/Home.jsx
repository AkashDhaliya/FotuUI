import React, { Component } from "react";
import {connect} from 'react-redux';
import ImageComponent from "../ImgSectionComponent/ImageSection";
import { getImages,fetchStatus,downloadImg } from "../../Redux/Actions/actions";
import {LISTURLPATH} from "../../Constants/Const";

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  getImages: (param) => dispatch(getImages(param)),
  fetchStatus: () => dispatch(fetchStatus()),
  downloadImg:(id)=>dispatch(downloadImg(id))
});

class Home extends Component {

  componentDidMount() {
    this.props.getImages({
        query: this.props.search,
        pageNo: 1,
        path:LISTURLPATH
      });
  }

  render() {
    return <ImageComponent {...this.props} path={LISTURLPATH}/>;
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
