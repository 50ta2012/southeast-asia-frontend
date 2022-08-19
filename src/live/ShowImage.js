// import React, { useState } from 'react'
// import ShowLargeImage from './ShowLargeImage'
//export default function ShowImage({props}) {
export default function ShowImage() {
    //const [showImg, setShowImg] = useState(true)

    //console.log('props=')
    //console.log(props)

    //const { props_imagesrc } = props
    //console.log('props_imagesrc=')
    //console.log(props_imagesrc)
    //const { car } = props
    

    const imageSrc = () => {
        //const imagesrc = '/image/'+props
        const imagesrc = '../../../../public/image2/1.png' //for test
        return imagesrc
    }
    let img = imageSrc()
    return (
        <div>
            <img
                src={img}
                alt=""
                width='100%'
                />
            {/*      onClick={() => {
            //         setShowImg(true);
            //     }} />
            // {showImg && <ShowLargeImage setShowImg={setShowImg} img={img}/>} */}
        </div>
    )
}
