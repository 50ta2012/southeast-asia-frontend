import React, { useState } from "react";
import "./ShowImage.css";
import { FormattedMessage } from "react-intl";
import { Modal } from "antd";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ShowImage({ data, index }) {
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

  let imgsrc = "https://twowayiot.com" + data[index].imagePath;
  return (
    <div>
      <img className="img-grid" src={imgsrc} alt="" onClick={showModal} />
      <Modal
        title={<FormattedMessage id="Img-btn" />}
        centered
        width="50%"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <img src={imgsrc} width="100%" alt="" />
      </Modal>
    </div>
  );
}
