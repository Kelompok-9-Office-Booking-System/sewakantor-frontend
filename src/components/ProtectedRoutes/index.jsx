//Expected encrypted auth in localstorage
//if encrypted role equals to SUPERADMIN, SUPERVISOR, CONSULTANT

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalstorage from "../../hooks/useLocalstorage";
import { decryptData, encryptData } from "../../utils/encryption";

const ProtectedRoutes = ({ adminRole, children }) => {
  const navigate = useNavigate();
  const { getLSValue, setLSValue, removeLSValue } = useLocalstorage();
  const authRole = getLSValue("authRole");
  const [validRole, setValidRole] = useState(false);

  useEffect(() => {
    if (!authRole) {
      return navigate("/login");
    }
    const decryptedRole = decryptData(authRole);
    console.log(decryptedRole.toLocaleString(), adminRole.toLocaleString());
    if (decryptedRole.toLowerCase() === adminRole.toLowerCase()) {
      return setValidRole(true);
    } else {
      removeLSValue("authRole");
      return navigate("/login");
    }
  }, [authRole]);

  if (!validRole) {
    return <></>;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
