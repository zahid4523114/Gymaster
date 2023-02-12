import React, { useContext, useEffect, useState } from "react";
import UseAdmin from "../hooks/UseAdmin";
import { AuthContext } from "../context/AuthProvider";

const Users = () => {
  const { user } = useContext(AuthContext);

  const [users, setUsers] = useState([]);

  const [isAdmin] = UseAdmin(user?.email);

  useEffect(() => {
    fetch(`https://gymaster-server-kohl.vercel.app/allUsers`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="my-20">
      {isAdmin ? (
        <div className="overflow-x-auto w-9/12 mx-auto">
          <h1 className="text-center text-2xl mb-4">ব্যবহারকারী</h1>
          <table className="table w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="shadow mx-auto w-fit p-5 text-3xl">
          <h1>আপনার এই তথ্য প্রবেশের অনুমতি নেই..!</h1>
        </div>
      )}
    </div>
  );
};

export default Users;
