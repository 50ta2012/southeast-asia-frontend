import React, { useState } from "react";
import ShowLargeImage from "./ShowLargeImage";
import "./ShowImage.css";

export default function ShowImage({ data, setData, index }) {
  const [showImg, setShowImg] = useState(false);

  let imgsrc = "https://twowayiot.com" + data[index].imagePath;
  return (
    <div>
      <img
        className="img-grid"
        src={`https://twowayiot.com${data[index].imagePath}`}
        alt=""
        onClick={() => {
          setShowImg(true);
        }}
      />
      {showImg && (
        <ShowLargeImage key={index} setShowImg={setShowImg} img={imgsrc} />
      )}
    </div>
  );
}
