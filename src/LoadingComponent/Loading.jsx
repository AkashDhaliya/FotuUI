import React from "react";
import './Loading.css';

function Loading() {
  return (
    <section className="images-section LoadingImg">
      <div>
        <img src={require("../Waiting-Logo.gif")} alt="Loading" />
      </div>
    </section>
  );
}

export default Loading;
