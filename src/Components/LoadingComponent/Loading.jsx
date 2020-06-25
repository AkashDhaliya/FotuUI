import React from "react";

function Loading() {
  return (
    <section className="Img-section LoadingImg">
      <div>
        <img src={require("../../Waiting-Logo.gif")} alt="Loading" />
      </div>
    </section>
  );
}

export default Loading;
