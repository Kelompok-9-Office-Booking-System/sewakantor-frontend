//Expected encrypted auth in localstorage
//if encrypted role equals to SUPERADMIN, SUPERVISOR, CONSULTANT

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useStoreAuth from "../../hooks/store/useStoreAuth.js";
import useLocalstorage from "../../hooks/useLocalstorage";
import routes from "../../routes.js";
import { decrypt } from "../../utils/encryption";

const ProtectedRoutes = ({ adminRole, children }) => {
  const navigate = useNavigate();
  const [validRole, setValidRole] = useState(false);
  const authData = decrypt(useStoreAuth((state) => state.authData));

  useEffect(() => {
    if (!authData) {
      // return navigate(routes.adminLogin);
      return;
    }
    const userRole = authData.role.toLowerCase();

    console.log("Signed in as:", userRole);
    console.log("Assign permission");
    let permission = [];
    if (userRole === "superadmin") {
      permission = ["super", "admin"];
    } else {
      permission = ["admin"];
    }

    if (permission.includes(adminRole)) {
      setValidRole(true);
    } else {
      Swal.fire({
        title: "Access denied",
        text: "You don't have permission to access this page",
        icon: "error",
        confirmButtonText: "OK",
      }).then((result) => {
        navigate(routes.adminDashboard);
      });
    }
  }, [authData]);

  if (!validRole) {
    return <></>;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
