import React,{useState}  from 'react'
import { GoogleMap, Marker, useJsApiLoader , InfoWindow } from '@react-google-maps/api';
import ReactHlsPlayer from "react-hls-player";

//InfoWindow 只接受string , 要讀取local端的jpg , mp4要使用import的方式
//import mp4 from './1.mp4';
//import camera from './video-camera.svg';


//import ShowLargeImage from './ShowLargeImage';
import markers from './markers.json'
import { findByText } from '@testing-library/react';




const containerStyle = {
  // width: '100vw',
  height: '100vh'
};

const center = {
//達運總公司
  lat: 25.064841700150897,
  lng: 121.44679589557038
};


function LiveVideo() {


  const source = "http://127.0.0.1:8080/stream/59ef9f53-af44-4dfe-b795-f2176af5e86b/index.m3u8";

  //const [showImg, setShowImg] = useState(false)

  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCUP5bwpiUCLYYkdU9s3jmlcRZ1xTwasNE"
  })


  

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   markers.forEach(({ position }) => bounds.extend(position));
  //   map.fitBounds(bounds);
  //   //setMap(map)
  // }, [])


  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])


/////////////////////////////////////////////////////////////////////////

  const [activeMarker, setActiveMarker] = useState(null);



  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return isLoaded ? (
    
      <GoogleMap
      
        mapContainerStyle={containerStyle}
        center={center}
        zoom={50}
        onLoad={handleOnLoad}
      >
          {markers.map(({ id, name, position }) => (
          <Marker
            key={id}
            position={position}
            icon={{
            url:'https://cdn-icons-png.flaticon.com/512/3708/3708519.png',
            scaledSize:new window.google.maps.Size(70,70),
              origin:new window.google.maps.Point(0,0),
              anchor: new window.google.maps.Point(15,15),
          }}
            

            onClick={() => handleActiveMarker(id)}
          >
            
            {activeMarker === id ? (

               <InfoWindow 
                onCloseClick={() => setActiveMarker(null)} >
                <div style={{ width: findByText, height: findByText }}>
                
                {/* show information */}
                  <h2> {name} </h2>
                  <ReactHlsPlayer
                    src={source}
                    autoPlay={true}
                    muted={true}
                    width="20%"
                    height="auto"
                  />


                  {/* <img src={camera} alt='info' width="150px" height="150px" 
                    onClick={() => {
                    setShowImg(true);
                }}/>
                   {showImg && <ShowLargeImage setShowImg={setShowImg} img={camera}/>}


                  <video width="150" height="100" controls>
                    <source
                      src={mp4}
                      type="video/mp4" />
                  </video>
                

                  <img src="https://i.imgur.com/9G5JOp8.png" width="150px" height="150px" alt=''
                  onClick={() => {
                    setShowImg(true);
                }}/>
                   {showImg && <ShowLargeImage setShowImg={setShowImg} img={"https://i.imgur.com/9G5JOp8.png"}/>}


                  <iframe title="YouTube video player" class="youtube-player" type="text/html" width="150" height="150" src="http://www.youtube.com/embed/UmFjNiiVk9w?rel=0" frameborder="0"></iframe>
                 */}
                
                
                </div>
              </InfoWindow>
            ) : null}
          
          </Marker>
        ))}
      </GoogleMap>
  ) : <></>
}

export default React.memo(LiveVideo)