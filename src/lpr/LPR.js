import React, { useEffect, useState } from "react";
import "./LPR.css";
// import ReactHlsPlayer from "react-hls-player";
import ShowImage from "./ShowImage";



// const source = "https://twowayiotse.ddns.net/stream/cam2/index.m3u8";
// const source_ptz = "https://twowayiotse.ddns.net/stream/cam1/index.m3u8";
// const url = "https://twowayiotse.ddns.net/violation/all";



export default function LPR() {

  const [data , setData] = useState([]);


  useEffect(() => {

    (async () => {
      const data = await fetch('https://twowayiotse.ddns.net/violation/all')
      const response = await data.json();
  
        console.log('原始資料');
        console.log(response);

        //將車號辨識為"Name"的資料去除
        const tmp_arr2 = response.filter(function (item) {
          return item.plateNumber !== "None"
        });
  
        console.log('去除 None');
        console.log(tmp_arr2);


      //將陣列倒敘
      const data_length = tmp_arr2.length;
      const tmp_arr = []
      for (let i = 0; i < data_length; i++) {
          tmp_arr[i] = tmp_arr2.pop()
      }

  
      //將車號相同的資料去除
      const set = new Set()
      const result = tmp_arr.filter(item=>!set.has(item.plateNumber)?set.add(item.plateNumber):false) 
      console.log('去除 相同車號');
      console.log(result);


      setData(result);

    })();
  }, []);

//   console.log('data in LPR');
// console.log(data);

  // <div> 
  //         <ReactHlsPlayer src={source} autoPlay={true} controls={true} muted={true} width={500} height={375} /> </div>
  //       <div>



  return (
    <div>
      <div className="grid">

      {data.slice(0,6).map((value,index)=>(
        
        <ShowImage data={data} setData={setData} index={index}></ShowImage>
      ))}
        
      </div>
    </div>
  );
}
