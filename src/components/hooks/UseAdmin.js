import { useEffect, useState } from "react";

const UseAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    fetch(`https://gymaster-server-kohl.vercel.app/users/admin/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.isAdmin);
        setIsAdmin(data.isAdmin);
        setAdminLoading(false);
      });
  }, [email]);
  return [isAdmin, adminLoading];
};

export default UseAdmin;
