import React from "react";
import "./LPR.css";
import ReactHlsPlayer from "react-hls-player";

export default function LPR() {
  const source = "https://twowayiotse.ddns.net/stream/cam2/index.m3u8";

  return (
    <div>
      <div className="grid">
        <div> <ReactHlsPlayer src={source} autoPlay={true} controls={true} muted={true} width={500} height={375} /> </div>
        <div>2</div>
        <div> <ReactHlsPlayer src={source} autoPlay={true} controls={true} muted={true} width={500} height={375} /> </div>
        <div>4</div>
        <div> <ReactHlsPlayer src={source} autoPlay={true} controls={true} muted={true} width={500} height={375} /> </div>
        <div>6</div>
        <div> <ReactHlsPlayer src={source} autoPlay={true} controls={true} muted={true} width={500} height={375} /> </div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>
  );
}
