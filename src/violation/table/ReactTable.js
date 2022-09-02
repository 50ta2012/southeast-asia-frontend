import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState, useContext } from 'react';
import { Table, Pagination } from 'react-bootstrap';


const ActiveContext = createContext();

function ActiveProvider({ children }) {
  const [active, setActive] = useState(1);

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
}

function MakeReactTable(props) {
  // parameter
  const tableData = props.tableData;
  const sizePerPage = props.sizePerPage;
  const TableHeader = props.tableHeader;
  const tableBody = props.tableBody;


  const MakePartTable = (props) => {
    const partTableData = [];
    for (let i = 0; i < props.tableData.length; i += props.sizePerPage) {
      partTableData.push(props.tableData.slice(i, i + props.sizePerPage));
    }

    const { active } = useContext(ActiveContext);
    const index = active - 1;
    if (partTableData.length > 0) {
      return partTableData[index].map(props.tableBody);
    }
    
  }

  const MakePaginationItem = (props) => {
    // 一開始就選頁數 1
    const { active, setActive } = useContext(ActiveContext);
    const first = 1;
    const last = props.size;
    const size = props.size;

    let items = []

    items.push(
      <Pagination.Prev key={'prev'} onClick={() => setActive(active - 1 < 1 ? last : active - 1)} />
    );

    if (size < 8) {
      // size < 8
      for (let i = 1; i <= size; i++) {
        items.push(
          <Pagination.Item key={i} active={i === active} onClick={() => setActive(i)}>
            {i}
          </Pagination.Item>,
        );
      }
    } else {
      if (active - first < 4) {
        // size >= 8 && active - first < 4
        for (let i = 1; i <= 5; i++) {
          items.push(
            <Pagination.Item key={i} active={i === active} onClick={() => setActive(i)}>
              {i}
            </Pagination.Item>,
          );
        }
        items.push(<Pagination.Ellipsis key={'ell'} disabled />);
        items.push(
          <Pagination.Item key={last} active={last === active} onClick={() => setActive(last)}>
            {last}
          </Pagination.Item>,
        );
      } else {
        if (last - active < 4) {
          // size >= 8 && active - first >= 4 && last - active < 4
          items.push(
            <Pagination.Item key={first} active={first === active} onClick={() => setActive(first)}>
              {first}
            </Pagination.Item>,
          );
          items.push(<Pagination.Ellipsis key={'ell'} disabled />);
          for (let i = last - 4; i <= last; i++) {
            items.push(
              <Pagination.Item key={i} active={i === active} onClick={() => setActive(i)}>
                {i}
              </Pagination.Item>,
            );
          }
        } else {
          // size >= 8 && active - first >= 4 && last - active >= 4
          items.push(
            <Pagination.Item key={first} active={first === active} onClick={() => setActive(first)}>
              {first}
            </Pagination.Item>,
          );
          items.push(<Pagination.Ellipsis key={'ell-1'} disabled />);
          for (let i = active - 1; i <= active + 1; i++) {
            items.push(
              <Pagination.Item key={i} active={i === active} onClick={() => setActive(i)}>
                {i}
              </Pagination.Item>,
            );
          }
          items.push(<Pagination.Ellipsis key={'ell-2'} disabled />);
          items.push(
            <Pagination.Item key={last} active={last === active} onClick={() => setActive(last)}>
              {last}
            </Pagination.Item>,
          );
        }
      }
    }

    items.push(
      <Pagination.Next key={'next'} onClick={() => setActive(active + 1 > last ? first : active + 1)} />
    );

    return items;
  }


  return (
    <>
      <Table striped bordered hover>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          <MakePartTable tableData={tableData} sizePerPage={sizePerPage} tableBody={tableBody} />
        </tbody>
      </Table>
      <Pagination>
        <MakePaginationItem size={
          tableData.length % sizePerPage === 0 ? tableData.length / sizePerPage : tableData.length / sizePerPage + 1
        } />
      </Pagination>
    </>
  )
}

export default function ReactTable(props) {
  return (
    <ActiveProvider>
      <MakeReactTable tableData={props.tableData} sizePerPage={props.sizePerPage} tableHeader={props.tableHeader} tableBody={props.tableBody} />
    </ActiveProvider>
  )
}