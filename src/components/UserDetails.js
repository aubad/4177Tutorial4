import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function UserDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const apiLink = `https://express-t4.onrender.com/api/users/${id}`;
  useEffect(() => {
    fetch(apiLink)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <ul>
      <li key={data._id}>
        <h2>{data.name}</h2>
        <img src={data.picture} alt={data.name} />
        <p>{data.about}</p>
        <p>Gender: {data.gender}</p>
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
        <p>Company: {data.company}</p>
        <p>Balance {data.balance}</p>
        <p>Address {data.address}</p>
      </li>
    </ul>
  );
}

export default UserDetails;
