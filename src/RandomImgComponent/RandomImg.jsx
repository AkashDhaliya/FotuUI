import React, { useEffect, useState } from "react";
import Requests from "../RequestComponent/Requests";
import Loading from "../LoadingComponent/Loading";
import { FiDownload } from "react-icons/fi";
import { FaSyncAlt } from "react-icons/fa";
import Download from "../DownloadComponent/Download";
import "./RandomImg.css";

function RandomImg() {
  const [randomPic, setRandomPic] = useState([]);
  const [picId, setPicId] = useState("");
  const [download, setDownload] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData=async ()=>{
    let params = {
      per_page: 1,
      order_by: "Popular",
      client_id: "a2WcvdBJ0Puu78DOVsuF3ZDnYGr404up7B_r9xZxrxA",
    };
    setRandomPic("");
    setPicId("");
    setDownload("")
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
        setRandomPic(image);
        setPicId(item.links.download);
      },
      (error) => {}
    );
  };

  function downloadImage(){
    setDownload("")
    setDownload(picId);
  };

  return randomPic.length !== 0 ? (
    <section className="images-section randomImg">
      <Download link={download} />
      <div className="randomImg-header-btns">
        <span>
          <button title="refresh" onClick={fetchData}>
            <FaSyncAlt />
          </button>
          <button title="Download" onClick={downloadImage}>
            <FiDownload />
          </button>
        </span>
      </div>
      <div className="random-flex-image">{randomPic}</div>
    </section>
  ) : (
    <Loading />
  );
}

export default RandomImg;
