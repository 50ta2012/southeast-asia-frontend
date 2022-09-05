import 'bootstrap/dist/css/bootstrap.min.css';
import './TableButton.css';
import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import { Modal, Image } from 'antd';
import { Player } from "video-react";
import "video-react/dist/video-react.css";

export default function TableButton (props){
    const name = props.name;
		const imgPath = props.imgPath
		const videoPath = props.videoPath
		
		const [isModalVisible, setIsModalVisible] = useState(false);

		const showModal = () => {
			setIsModalVisible(true);
		};
	
		const handleOk = () => {
			setIsModalVisible(false);
		};
	
		const handleCancel = () => {
			setIsModalVisible(false);
		};
	
		const which_show = () => {
			if (name === "圖片") {

					return <div> 
						
						<Modal title={"組圖"} centered width={1000} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
							<Image src={`https://twowayiot.com/${imgPath}`} width={960} height={540} />
						</Modal></div>
			}	else if (name === "影片"){
				return <div>
					  <Modal title={"影片"} centered width={1000} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Player src={`https://twowayiot.com/${videoPath}`} />
          </Modal>
				</div>;
			}
		}


    return <>
    
		{/* <Button type="primary" onClick={showModal}>
        {name}
      </Button> */}
			<button type="button" className="btn btn-primary btn-option" onClick={showModal}>{name}</button>
      {/* <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}> */}
				{which_show()}
      {/* </Modal> */}

    </>
}
