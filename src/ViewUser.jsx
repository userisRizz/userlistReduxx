import React from "react";
import { useLocation } from "react-router-dom";
import "./ViewUser.css";

const ViewUser = () => {
  const location = useLocation();
  const data = location.state.data;

  return (
    <div className="user-details">
      <h1>User Details</h1>
      <p className="detail-item">Name: {data?.name}</p>
      <p className="detail-item">Username: {data?.username}</p>
      <p className="detail-item">Email: {data?.email}</p>
      <div className="address">
        <h2>Address:</h2>
        <p className="detail-item">Street: {data?.address?.street}</p>
        <p className="detail-item">Suite: {data?.address?.suite}</p>
        <p className="detail-item">City: {data?.address?.city}</p>
        <p className="detail-item">Zipcode: {data?.address?.zipcode}</p>
        <div className="geo">
          <h3>Geo:</h3>
          <p className="detail-item">Lat: {data?.address?.geo?.lat}</p>
          <p className="detail-item">Lng: {data?.address?.geo?.lng}</p>
        </div>
      </div>
      <p className="detail-item">Phone: {data?.phone}</p>
      <p className="detail-item">
        Website:{" "}
        <a
          href={`http://${data?.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data?.website}
        </a>
      </p>
      <div className="company">
        <h2>Company:</h2>
        <p className="detail-item">Name: {data?.company?.name}</p>
        <p className="detail-item">CatchPhrase: {data?.company?.catchPhrase}</p>
        <p className="detail-item">BS: {data?.company?.bs}</p>
      </div>
    </div>
  );
};

export default ViewUser;
