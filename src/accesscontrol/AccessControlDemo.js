import ReactTable from "../table/ReactTable";
import React, { useState, useRef } from "react";
import { FormattedMessage } from "react-intl";
import ImgButton from "../table/ImgButton";

//demo json import
import testjson from "./230104_tpeib_log.json";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Modal from "react-bootstrap/Modal";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AccessControlDemo.css";

/* Data generator */
// function usersGererator(size) {
//   let items = [];
//   for (let i = 0; i < size; i++) {
//     items.push({ id: i + 1, name: `Name ${i + 1}`, age: 18 + i });
//   }
//   return items;
// }

/* Parameter */
// const tableData = usersGererator(100);

export default function AccessControlDemo() {
  const [open, setOpen] = useState(false); // add data UI
  //React Ref setting
  const displayName = useRef();
  const unitName = useRef();
  const note = useRef();
  const starTime = useRef();
  const endTime = useRef();
  const plateNumber = useRef();

  //tableData
  const [tableData, setTableData] = useState(testjson);

  // Modal Delete setting
  const [delShow, setDelShow] = useState(false); //DEL modal UI

  const handleClose = () => setDelShow(false);
  const handleShow = () => setDelShow(true);
  const [dataName, setDataName] = useState();

  //const [tableData, setTableData] = useState([]);

  /*API for tabledata*/
  //   useEffect(() => {
  //     (async () => {
  //       const data = await fetch("https://twowayiot.com/violation/all");
  //       const res = await data.json();
  //       // setPost(res);
  //       // console.log(res);
  //       setTableData(res);
  //     })();
  //   }, []);

  const sizePerPage = 10;

  const TableHeader = () => {
    return (
      <tr>
        <th>姓名 </th>
        <th>身份</th>
        <th>進場時間</th>
        <th>車牌號碼</th>
        <th>照片</th>
        <th>刪除</th>
      </tr>
    );
  };

  const tableBody = (value, index) => {
    return (
      <tr key={index}>
        <td>{value.name}</td>
        <td>{value.pass_status}</td>
        <td>{value.recognition_time}</td>
        <td>{value.plate_number}</td>
        <td>
          <ImgButton imgPath={value.image_path} />
        </td>
        <td>
          <Button
            variant="danger"
            onClick={() => {
              setDataName(value.name);
              handleShow();
            }}
          >
            刪除
          </Button>
        </td>
      </tr>
    );
  };

  return (
    <div className="App">
      <h1>
        <FormattedMessage id="access_control" />
      </h1>
      <div className="reserv-container">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="btn btn-primary"
        >
          新增預約
        </Button>
        <Collapse in={open}>
          <div className="reserv-form " id="example-collapse-text">
            <div className="reserv-body row">
              <div className="reserv-header"></div>
              <div className="reserv-group">
                <div className="form-title col-3">
                  <label>姓名</label>
                </div>
                <div className="form-input col-9" required="required">
                  <input
                    type="text"
                    className="form-control"
                    ref={displayName}
                    name="displayName"
                    placeholder="請輸入姓名"
                  ></input>
                </div>
              </div>
              <div className="reserv-group">
                <div className="form-title col-3">
                  <label>單位</label>
                </div>
                <div className="form-input col-9">
                  <input
                    type="text"
                    className="form-control"
                    ref={unitName}
                    name="unitName"
                    placeholder="請輸入單位"
                  ></input>
                </div>
              </div>
              <div className="reserv-group">
                <div className="form-title col-3">
                  <label>備註</label>
                </div>
                <div className="form-input col-9">
                  <input
                    type="text"
                    className="form-control"
                    ref={note}
                    name="note"
                    placeholder="備註欄"
                  ></input>
                </div>
              </div>
              <div className="reserv-group">
                <div className="form-title col-3">
                  <label>入場時間</label>
                </div>
                <div className="form-input col-9">
                  <input
                    type="datetime-local"
                    className="form-control"
                    ref={starTime}
                    name="starTime"
                  ></input>
                </div>
              </div>
              <div className="reserv-group">
                <div className="form-title col-3">
                  <label>離場時間</label>
                </div>
                <div className="form-input col-9">
                  <input
                    type="datetime-local"
                    className="form-control"
                    ref={endTime}
                    name="endTime"
                  ></input>
                </div>
              </div>
              <div className="reserv-group">
                <div className="form-title col-3">
                  <label>車牌號碼</label>
                </div>
                <div className="form-input col-9">
                  <input
                    required="required"
                    type="text"
                    className="form-control"
                    ref={plateNumber}
                    name="plateNumber"
                    placeholder="請輸入車牌號碼"
                  ></input>
                </div>
              </div>
              <div className="form-button d-grid mb-4 col align-self-center">
                <button className="btn btn-primary" onClick={""}>
                  送出預約
                </button>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
      <ReactTable
        tableData={tableData}
        sizePerPage={sizePerPage}
        tableHeader={TableHeader}
        tableBody={tableBody}
      />
      <Modal show={delShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>刪除</Modal.Title>
        </Modal.Header>
        <Modal.Body>您確定要刪除 {dataName} 的預約嗎 </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            否
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
            }}
          >
            是
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
