import React, {useState} from 'react';
import { FormattedMessage } from 'react-intl';
import { Modal } from 'antd';
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Player } from "video-react";
import "video-react/dist/video-react.css";

function VideoButton(props) {
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

return <>
    <button type="button" className="btn btn-primary btn-option" onClick={showModal}><FormattedMessage id="Video-btn" /></button>
    <Modal title={<FormattedMessage id="Video-btn" />} centered width={1000} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Player src={`https://twowayiot.com/${videoPath}`} />
		</Modal>
            </>
}

export default VideoButton