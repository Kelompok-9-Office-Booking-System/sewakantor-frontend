import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AdminContentContainer from "..//../../components/AdminContentContainer";
import AdminDataContainer from "../../../components/AdminDataContainer";
import AdminDataTable from "../../../components/AdminDataTable";
import AdminFooter from "../../../components/AdminFooter";
import AdminSidebar from "../../../components/AdminSidebar";


const placeholderBooking = [
  {
    id: 1,
    nameCompany: "General Electric",
    phone: "082153481251",
    email: "general@electric.com",
    date: "8/2/19",
    time: "09.00",
    building: "WTC 5 Jakarta",
  },
  {
    id: 2,
    nameCompany: "General Electric",
    phone: "082153481251",
    email: "general@electric.com",
    date: "8/2/19",
    time: "10.00",
    building: "WTC 5 Jakarta",
  },
  {
    id: 3,
    nameCompany: "General Electric",
    phone: "082153481251",
    email: "general@electric.com",
    date: "8/2/19",
    time: "11.00",
    building: "WTC 5 Jakarta",
  },
];

function AdminViewBooking() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div
      className={`bg-skSmoke position-relative`}
      style={{ height: "100%" }}
    >
      <AdminSidebar />
      <AdminContentContainer title={"All Bookings"} breadcrumb={true}>
        <AdminDataContainer
          title={"All Schedule Bookings"}
          buttons={[
            { label: "Add new", link: "#", callback: () => {} },
            { label: "Export", callback: () => {} },
          ]}
        >
          <AdminDataTable
            data={placeholderBooking}
            head={["name company", "phone", "email", "arrive", "time", "building"]}
            dataKeys={["nameCompany", "phone", "email", "date", "time", "building"]}
          />
        </AdminDataContainer>
      </AdminContentContainer>
      <AdminFooter />
    </div>
);
}

export default AdminViewBooking;
