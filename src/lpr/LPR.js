import React, { useEffect, useState } from "react";
import "./LPR.css";
import ReactHlsPlayer from "react-hls-player";




const source = "https://twowayiotse.ddns.net/stream/cam2/index.m3u8";
const source_ptz = "https://twowayiotse.ddns.net/stream/cam1/index.m3u8";



export default function LPR() {

  const [data , setData] = useState([]);

  //const url = "https://twowayiotse.ddns.net/stream/cam2/index.m3u8";

  const url = "https://twowayiotse.ddns.net/violation/all"


  const fetchData = async () => {

    query();
    function query(){
        fetch(url)
        .then(result => result.json())
        .catch(err => console.error('Error:', err))
        .then((output) => {
            console.log('Output: ', output);

            // const tmp_arr = []
            //                 for (let i = 0; i < output.length; i++) {
            //                     tmp_arr[i] = output.pop()
            //                 }

            //                 setData(tmp_arr);

      });
    }
  }
  fetchData();


// console.log('data');
// console.log(data);
// const img_url = "https://twowayiotse.ddns.net/"+data[0].imgPath;
// console.log('img_url');
// console.log(img_url);


// useEffect(() => {
//   const fetchData = async () => {
//       try {
//           const response = await fetch(url);
//           const json = await response.json();
//           console.log(json);
//       } catch (error) {
//           console.log("error", error);
//       }
//   };


//   fetchData();
// }, []);



  return (
    <div>
      <div className="grid">


        <div> 
          <ReactHlsPlayer src={source} autoPlay={true} controls={true} muted={true} width={500} height={375} /> </div>

        <div>
        <h2>PTZ</h2>
          <ReactHlsPlayer src={source_ptz} autoPlay={true} controls={true} muted={true} width={500} height={375} /></div>
        <div><img 
              src="https://twowayiotse.ddns.net/violation/image/20220830200419-CAM_11-None.jpg" 
              height={300}/>
        </div>

        <div>4</div>
        <div>5</div>        
        <div>6</div>



      </div>
    </div>
  );
}
