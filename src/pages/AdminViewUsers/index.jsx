import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AdminContentContainer from "../../components/AdminContentContainer";
import AdminDataContainer from "../../components/AdminDataContainer";
import AdminDataTable from "../../components/AdminDataTable";
import AdminFooter from "../../components/AdminFooter";
import AdminSidebar from "../../components/AdminSidebar";
import routes from "../../routes";

const users = [
  {
    id: 1,
    firstName: "Jane",
    lastName: "Cooper",
    company: "BCA Tower",
    country: "Jakarta",
    password: "377737upa",
  },
  {
    id: 2,
    firstName: "Dwight",
    lastName: "Hawkins",
    company: "Tempo Scan Tower",
    country: "Jakarta",
    password: "38473hh5",
  },
];

const AdminViewUsers = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={`bg-skSmoke position-relative`} style={{ height: "100%" }}>
      <AdminSidebar />
      <AdminContentContainer title={"All Spaces"} breadcrumb={true}>
        <AdminDataContainer
          title={"All Spaces"}
          buttons={[
            {
              label: "Add New",
              link: routes.adminSpacesAdd,
              callback: () => {},
            },
            { label: "Export", callback: () => {} },
          ]}
        >
          <AdminDataTable
            data={users}
            head={["first name", "last name", "company", "country", "password"]}
            dataKeys={["firstName", "lastName", "company", "country", "password"]}
          />
        </AdminDataContainer>
      </AdminContentContainer>
      <AdminFooter />
    </div>
  );
};

export default AdminViewUsers;
