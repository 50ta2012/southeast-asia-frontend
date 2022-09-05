import React, { useState } from 'react'
import ShowLargeImage from './ShowLargeImage';

export default function ShowImage({data,setData,index}) {

    const [showImg, setShowImg] = useState(false)

    let imgsrc = "https://twowayiot.com/"+data[index].imgPath
    return (
        <div>
        <img src={`https://twowayiot.com/${data[index].imgPath}`}  alt="" width={500} height={375}
            onClick={
              () => {
              setShowImg(true);
              }
            } />
           {showImg && <ShowLargeImage setShowImg={setShowImg} img={imgsrc}/>}
      </div>
    )
}
