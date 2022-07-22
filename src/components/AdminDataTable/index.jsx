import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import style from "./style.module.css";

const AdminDataTable = ({ data, head = [], dataKeys = [] }) => {
  const [itemPerPage, setItemPerPage] = useState(2);
  const [items, setItems] = useState([]);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [dataStart, setDataStart] = useState(0);
  const [dataEnd, setDataEnd] = useState(0);

  let [pageArray, setPageArray] = useState([]);

  useEffect(() => {
    const tempItems = [];
    data.forEach((item, index) => {
      const tempItem = {};
      dataKeys.forEach((key, index) => {
        tempItem[key] = item[key];
      });
      tempItems.push(tempItem);
    });
    setItems(tempItems);

    //Pagination
    let tempTotalPages = Math.ceil(tempItems.length / itemPerPage);
    setTotalPages(tempTotalPages);
    const tempPageArray = [];
    for (let i = 1; i <= tempTotalPages; i++) {
      tempPageArray.push(i);
    }
    setPageArray(tempPageArray);
    //	Slice data
    const tempItems2 = tempItems.slice(
      (currentPage - 1) * itemPerPage,
      currentPage * itemPerPage
    );
    setDataStart((currentPage - 1) * itemPerPage);
    setDataEnd(currentPage * itemPerPage);
    setItems(tempItems2);
  }, []);
  useEffect(() => {
    const tempItems = [];
    data.forEach((item, index) => {
      const tempItem = {};
      dataKeys.forEach((key, index) => {
        tempItem[key] = item[key];
      });
      tempItems.push(tempItem);
    });
    //Pagination
    let tempTotalPages = Math.ceil(tempItems.length / itemPerPage);
    setTotalPages(tempTotalPages);
    const tempPageArray = [];
    for (let i = 1; i <= tempTotalPages; i++) {
      tempPageArray.push(i);
    }
    setPageArray(tempPageArray);
    //	Slice data
    const tempItems2 = tempItems.slice(
      (currentPage - 1) * itemPerPage,
      currentPage * itemPerPage
    );
    if (currentPage > tempTotalPages) {
      setCurrentPage(1);
    }
    setDataStart((currentPage - 1) * itemPerPage);
    let dataLast = currentPage * itemPerPage;
    if (dataLast > tempItems.length) {
      dataLast = tempItems.length;
    }
    setDataEnd(dataLast);
    setItems(tempItems2);
  }, [currentPage, itemPerPage]);

  return (
    <div className={`d-flex flex-column w-100`}>
      <div
        className={`d-flex align-items-center justify-content-between w-100`}
      >
        <div className={`d-flex align-items-center gap-2`}>
          <span>Show</span>
          <select
            className={`form-select`}
            value={itemPerPage}
            onChange={(e) => setItemPerPage(parseInt(e.target.value))}
          >
            <option value={2}>2</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <span>entries</span>
        </div>
        <div className={`d-flex align-items-center gap-2`}>
          <span>Search : </span>
          <input
            type="text"
            placeholder="Search for..."
            className="form-control"
            style={{ width: "25rem" }}
          />
        </div>
      </div>
      <hr className={style.divider} />
      <table className={`table`}>
        <thead className={`text-center text-capitalize`}>
          <tr>
            {head.map((head, index) => {
              return <th key={index}>{head}</th>;
            })}
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={`text-center text-capitalize`}>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                {dataKeys.map((key, index) => {
                  return (
                    <td className={`py-3`} key={index}>
                      {item[key]}
                    </td>
                  );
                })}
                <td className={`py-3`}>
                  <div
                    className={`d-flex align-items-center justify-content-center gap-2`}
                  >
                    <Button variant={"primary"} size={"sm"}>
                      <FaEdit size={16} />
                    </Button>
                    <Button variant={"danger"} size={"sm"}>
                      <BsTrash size={16} />
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        className={`d-flex w-100 justify-content-between align-items-center`}
      >
        <div>
          Showing entries {dataStart + 1} to {dataEnd} of {data.length} entries
        </div>
        <div>
          {pageArray.map((page, index) => {
            return (
              <Button
                key={index}
                variant={currentPage === page ? "primary" : "light"}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AdminDataTable;
