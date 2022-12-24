import ReactTable from "../table/ReactTable";
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import ImgButton from "../table/ImgButton";


import testjson from './pho.json'
import { Modal, Image } from 'antd';
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const sizePerPage = 10;


const TableHeader = () => {
  return (
    <tr>
      <th>
        <FormattedMessage id="Img-btn" />
      </th>
      <th>
        <FormattedMessage id="table-th1" />
      </th>
      <th>
        <FormattedMessage id="燈號" />
      </th>
      <th>
        <FormattedMessage id="大圖" />
      </th>
      {/* <th>
        <FormattedMessage id="table-th5" />
      </th>
      <th>
        <FormattedMessage id="table-th6" />
      </th>
      <th>
        <FormattedMessage id="Img-btn-big" />
      </th> */}
    </tr>
  );
};

const tableBody = (value, index) => {
  return (
    <tr key={index}>
      <td><img src={value.plateImg} max-width={100} width="320" height="180" alt=""/></td>
      <td>{value.ID}</td>
      <td>{value.light}</td>
      {/* <td>{value.EventDatetime}</td>
      <td>{value.CarType}</td>
      <td>{value.PlateNumber}</td> */}
      <td>
        <ImgButton imgPath={value.plateImg} />
      </td>
    
    </tr>
  );
};

export default function GreenRedLightDemo() {
    const [tableData, setTableData] = useState(testjson);
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

  return (
    <div className="App">
      <h1>
        <FormattedMessage id="green_red_light" />
      </h1>
      <ReactTable
        tableData={tableData}
        sizePerPage={sizePerPage}
        tableHeader={TableHeader}
        tableBody={tableBody}
      />
    </div>
  );
}
