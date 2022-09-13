import React, { useEffect, useState } from "react";
import "./LPR.css";
import ShowImage from "./ShowImage";

export default function LPR() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://twowayiot.com/lpr/limit/6");

      setData(await res.json());
    })();
  }, []);

  return (
    <div>
      <div className="grid">
        {data.map((value, index) => (
          <ShowImage
            key={index}
            data={data}
            setData={setData}
            index={index}
          ></ShowImage>
        ))}
      </div>
    </div>
  );
}
