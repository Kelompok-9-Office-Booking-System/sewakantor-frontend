import React from "react";
import AdminContentContainer from "../../components/AdminContentContainer";
import AdminDataContainer from "../../components/AdminDataContainer";
import AdminSidebar from "../../components/AdminSidebar";
import routes from "../../routes";
import style from "./style.module.css";
import { Dropdown } from "react-bootstrap";

const AdminAddSpacesOffice = () => {
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
          <div className={style.office_type_container}>
            <form>
              <div className="d-flex justify-content-between">
                <div className={style.form_input}>
                  <Dropdown>
                    <label>Select Category</label>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      size="lg"
                      className={style.category_dropdown}
                    >
                      Select Category
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>Office Room</Dropdown.Item>
                      <Dropdown.Item>Meeting Room</Dropdown.Item>
                      <Dropdown.Item>Virtual Office</Dropdown.Item>
                      <Dropdown.Item>Coworking</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className={style.form_input}>
                  <label>Price</label>
                  <input type="text" placeholder="Enter the price"></input>
                </div>
              </div>
              <div className={style.form_input_image}>
                <label>Upload Image File</label>
                <input type="file"></input>
              </div>
              <div className={style.submit_button_container}>
                <button className={style.office_form_button}>Submit</button>
              </div>
            </form>
          </div>
          <div className={style.add_type_btn}>
            <button className={style.add_office_type_btn}>
              Add Office Type
            </button>
          </div>
        </AdminDataContainer>
      </AdminContentContainer>
    </div>
  );
};

export default AdminAddSpacesOffice;
