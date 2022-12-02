import { useState, useEffect } from "react";

const GetUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("https://finalspaceapi.com/api/v0/character/");
    if (!response.ok) {
      throw new Error("Error while fetching users");
    }
    const data = await response.json();
    const limitedUsers = data.slice(0, 10);
    return setUsers(limitedUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="space_cards">
        {users?.map((user) => (
          <div key={user.id} className="card">
            <div className="imgBox">
              <img src={user.img_url} alt={user.alias} />
            </div>
            <div className="contentBox">
              <p>Name: {user.name}</p>
              <p>Origin: {user.origin}</p>
              <p>Species: {user.species}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetUsers;
