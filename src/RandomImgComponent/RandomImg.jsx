import React, { useEffect, useState } from "react";
import Requests from "../RequestComponent/Requests";
import Loading from "../LoadingComponent/Loading"
import "./RandomImg.css";
//import { FiDownload } from "react-icons/fi";

function RandomImg() {
  const [randomPic, setRandomPic] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let params = {
        per_page: 1,
        order_by: "Popular",
        client_id: "a2WcvdBJ0Puu78DOVsuF3ZDnYGr404up7B_r9xZxrxA",
      };

      await Requests("/photos/random", params).then(
        (response) => {
          let item = response.data;
          let image = (
            <img
              src={item.urls.regular}
              alt={item.alt_description}
              title={item.alt_description}
              width="100%"
            ></img>
          );
          setRandomPic(image);
        },
        (error) => {}
      );
    };
    fetchData();
  }, [setRandomPic]);

  return randomPic.length !== 0 ? (
    <section className="images-section">
      <div className="random-flex-image">{randomPic}</div>
    </section>
  ) : (
    <Loading/>
  );
}

export default RandomImg;
