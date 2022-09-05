import ReactTable from './table/ReactTable';
import TableButton from './table/TableButton';
import {useState , useEffect} from 'react';
import { FormattedMessage } from 'react-intl';
import ImgButton from './table/ImgButton';
import VideoButton from './table/VideoButton';



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
      <th><FormattedMessage id="table-th1" /></th>
      <th><FormattedMessage id="table-th2" /></th>
      <th><FormattedMessage id="table-th3" /></th>
      <th><FormattedMessage id="table-th4" /></th>
      <th><FormattedMessage id="table-th5" /></th>
      <th><FormattedMessage id="table-th6" /></th>
      <th><FormattedMessage id="table-th7" /></th>
      <th><FormattedMessage id="table-th8" /></th>
    </tr>
  )
}

const tableBody = (value, index) => {
  return (
    <tr key={index}>
      <td>{value.id}</td>
      <td>{value.roadName}</td>
      <td>{value.eventType}</td>
      <td>{value.reportDate}</td>
      <td>{value.carType}</td>
      <td>{value.plateNumber}</td>
      <td>
        <ImgButton imgPath = {value.imgPath}/>
      </td>
      <td>
      <VideoButton videoPath = {value.videoPath}/>
      </td>
      
    </tr>
  );
}


export default function ViolationDemo() {
  const [tableData, setTableData] = useState([]); 

  useEffect(() => {
    

    (async () => {
      const data = await fetch('https://twowayiot.com/violation/all')
      const res = await data.json();
      // setPost(res);
      console.log(res);
      setTableData(res);
    })();


  }, []);
  
  
  return (
    <div className="App">
      <h1><FormattedMessage id="table-title" /></h1>
      <ReactTable tableData={tableData} sizePerPage={sizePerPage} tableHeader={TableHeader} tableBody={tableBody} />
    </div>
  );
}



