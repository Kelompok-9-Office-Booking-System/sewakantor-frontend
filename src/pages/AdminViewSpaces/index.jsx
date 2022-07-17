import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AdminContentContainer from "../../components/AdminContentContainer";
import AdminDataContainer from "../../components/AdminDataContainer";
import AdminDataTable from "../../components/AdminDataTable";
import AdminFooter from "../../components/AdminFooter";
import AdminSidebar from "../../components/AdminSidebar";
import routes from "../../routes";

const placeholderBuilding = [
  {
    id: 1,
    thumbnail: "https://placeholder.pics/svg/280x175",
    towerName: "BCA Tower Lorem",
    email : "BCA@tower.com",
    ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
    address: "Jakarta, 10310",
    contactPerson: "(406) 555-0120",
  },
  {
    id: 2,
    thumbnail: "https://placeholder.pics/svg/280x175",
    towerName: "BCA Tower Ipsum",
    email : "BCA@tower.com",
    ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
    address: "Jakarta, 10310",
    contactPerson: "(406) 555-0120",
  },
  {
    id: 3,
    thumbnail: "https://placeholder.pics/svg/280x175",
    towerName: "BCA Tower Dolor",
    email : "BCA@tower.com",
    ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
    address: "Tangerang, 10310",
    contactPerson: "(406) 555-0120",
  },
  {
    id: 4,
    thumbnail: "https://placeholder.pics/svg/280x175",
    towerName: "BCA Tower Sit",
    email : "BCA@tower.com",
    ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
    address: "Bekasi, 10310",
    contactPerson: "(406) 555-0120",
  },
  {
    id: 5,
    thumbnail: "https://placeholder.pics/svg/280x175",
    towerName: "BCA Tower Amet",
    email : "BCA@tower.com",
    ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
    address: "Jakarta, 10310",
    contactPerson: "(406) 555-0120",
  },
];

const AdminViewSpaces = () => {
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
            { label: "Add New", link: routes.adminSpacesAdd, callback: () => {} },
            { label: "Export", callback: () => {} },
          ]}
        >
          <AdminDataTable
            data={placeholderBuilding}
            head={["space name", "contact person", "email", "address"]}
            dataKeys={["towerName", "contactPerson", "email", "address"]}
          />
        </AdminDataContainer>
      </AdminContentContainer>
      <AdminFooter />
    </div>
  );
};

export default AdminViewSpaces;
