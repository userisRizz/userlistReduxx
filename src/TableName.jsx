import React from "react";
import { useNavigate } from "react-router-dom";
import "./TableName.css";
const TableName = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="TableName"
      onClick={() =>
        navigate("/view-user", {
          state: {
            data: data,
          },
        })
      }
    >
      {data?.name}
    </div>
  );
};

export default TableName;
