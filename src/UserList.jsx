// src/UserList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, setCurrentPage } from "./slices/userSlice";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import ViewUser from "./ViewUser";
import TableName from "./TableName";

const UserList = () => {
  const dispatch = useDispatch();
  const {
    data: users,
    status,
    error,
    currentPage,
    usersPerPage,
  } = useSelector((state) => state.users);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const handleClick = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((number) => (
      <button key={number} onClick={() => handleClick(number)}>
        {number}
      </button>
    ));
  };

  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Name", field: "name", cellRenderer: TableName },
    { headerName: "Username", field: "username" },
    { headerName: "Email", field: "email" },
  ];

  let content;

  if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "succeeded") {
    content = (
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          rowData={currentUsers}
          columnDefs={columnDefs}
          pagination={false}
        />
      </div>
    );
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <h1>Users</h1>
      {content}
      <div>{renderPageNumbers()}</div>
    </div>
  );
};

export default UserList;
