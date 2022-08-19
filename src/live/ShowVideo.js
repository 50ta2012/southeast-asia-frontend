import React, { useState } from 'react';
import './ShowVideo.css'



const modalContainer = {

  postition: 'fixed',
  padding: '5px',
  zIndex: 1001
}

const modalBackground = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,.7)',
  zIndex: 1001
}



export default function ShowVideo(props) {

  const { car } = props
  const [showVideo, setShowVideo] = useState(false)

  const show = () => {
    setShowVideo(!showVideo)
  }

  const videosrc = () => {
    const videosrc = './video/' + car.VideoName
    return videosrc
  }
  let video_src = videosrc()


  return <div>

<img width={40} src='./image2/1.png' alt='' onClick={() => {show();}} />
    {showVideo && (
      <div style={modalBackground}>
        <div style={modalContainer}>
          <div className='titleCloseBtn'>
            <button
              onClick={show}>x</button>
          </div>

          <video width="750" height="500" autoPlay controls>
            <source
               src={video_src}
              type="video/mp4" />
          </video>

        </div>
      </div>
    )}
  </div>;
}


