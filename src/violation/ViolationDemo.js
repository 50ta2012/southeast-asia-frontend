import ReactTable from './table/ReactTable';
import TableButton from './table/TableButton';
// import {useState , useEffect} from 'react';


/* Data generator */
function usersGererator(size) {
  let items = [];
  for (let i = 0; i < size; i++) {
    items.push({ id: i + 1, name: `Name ${i + 1}`, age: 18 + i });
  }
  return items;
}

/* Parameter */
const tableData = usersGererator(100);

const sizePerPage = 10;

const TableHeader = () => {
  return (
    <tr>
      <th>編號</th>
      <th>地點</th>
      <th>事由</th>
      <th>時間</th>
      <th>車種</th>
      <th>車牌</th>
      <th>檢視</th>
    </tr>
  )
}

const tableBody = (value, index) => {
  return (
    <tr key={index}>
      <td>{value.id}</td>
      <td>{value.name}</td>
      <td>{value.age}</td>
      <td>{value.age}</td>
      <td>{value.age}</td>
      <td>{value.age}</td>
      <td>
        <TableButton name = {"圖片"} />
        <TableButton name = {"影片"} />
      </td>
      
    </tr>
  );
}


export default function ViolationDemo() {
  
  return (
    <div className="App">
      <h1>違規清單</h1>
      <ReactTable tableData={tableData} sizePerPage={sizePerPage} tableHeader={TableHeader} tableBody={tableBody} />
    </div>
  );
}



