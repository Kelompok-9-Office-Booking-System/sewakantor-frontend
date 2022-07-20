import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AdminContentContainer from "../../components/AdminContentContainer";
import AdminDataContainer from "../../components/AdminDataContainer";
import AdminDataTable from "../../components/AdminDataTable";
import AdminFooter from "../../components/AdminFooter";
import AdminSidebar from "../../components/AdminSidebar";
import routes from "../../routes";
import style from "./style.module.css";

const AdminAddSpaces = () => {
  return (
    <div className={`bg-skSmoke position-relative`} style={{ height: "100%" }}>
      <AdminSidebar />
      <AdminContentContainer title={"Add Spaces"} breadcrumb={true}>
        <AdminDataContainer
          title={"Add Spaces"}
          buttons={[
            {
              label: "Details",
              link: routes.adminSpacesAdd,
              callback: () => {},
            },
            { label: "Office Type", callback: () => {} },
          ]}
        >
          <form>
            <div className="d-flex justify-content-between">
              <div className={style.form_input}>
                <label>Spaces Name</label>
                <input type="text"></input>
              </div>
              <div className={style.form_input}>
                <label>Contact Person</label>
                <input type="text"></input>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div className={style.form_input}>
                <label>Email</label>
                <input type="text"></input>
              </div>
              <div className={style.form_input_nearby}>
                <div className={style.nearby_place_row}>
                  <label>Nearby Places</label>
                  <button className={style.add_nearby_button}>+ add</button>
                </div>
                <input type="text"></input>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <div className={style.form_input}>
                <label>Address</label>
                <textarea rows="4" cols="103"></textarea>
              </div>
            </div>

            <div className={style.form_input_address}>
              <label>Spaces Description</label>
              <textarea rows="4" cols="103"></textarea>
            </div>

            <div className={style.form_input_address}>
              <label>Upload Image File</label>
              <input type="file"></input>
            </div>

            <div className={style.addSpace_form_button}>
              <button>Submit</button>
              <button className={style.cancel_button}>Cancel</button>
            </div>
          </form>
        </AdminDataContainer>
      </AdminContentContainer>
      <AdminFooter />
    </div>
  );
};

export default AdminAddSpaces;
