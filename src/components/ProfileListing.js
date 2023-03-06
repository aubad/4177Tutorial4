import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProfileListing() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://express-t4.onrender.com/api/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <ul>
      {data.map((user) => (
        <li key={user._id}>
          <h2>{user.name}</h2>
          <img src={user.picture} alt={user.name} />
          <p>{user.about}</p>
          <p>Gender: {user.gender}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <Link to={`/user/${user._id}`}>View Details</Link>
        </li>
      ))}
    </ul>
  );
}

export default ProfileListing;
