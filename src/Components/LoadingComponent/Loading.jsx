import React from "react";
import { RANDOM_IMG, SEARCH_IMAGE } from "../../Constants/Const";

function Loading(props) {
  console.log(props);
  return (
    <section
      className={
        props.parent === RANDOM_IMG
          ? "randomImg Img-section LoadingImg"
          : props.parent === SEARCH_IMAGE
          ? "searchImg Img-section LoadingImg"
          : "Img-section LoadingImg"
      }
    >
      <div>
        <img src={require("../../Waiting-Logo.gif")} alt="Loading" />
      </div>
    </section>
  );
}

export default Loading;
