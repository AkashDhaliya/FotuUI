import React from "react";
import { RANDOM_IMG, SEARCH_IMAGE } from "../../Constants/Const";

function Loading(props) {
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
        {props.isError && (
          <p>
            Some error occurred.Please click <a>here</a> or refresh the page
          </p>
        )}
      </div>
    </section>
  );
}

export default Loading;
