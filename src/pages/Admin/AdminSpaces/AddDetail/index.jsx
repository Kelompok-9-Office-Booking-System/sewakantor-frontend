import React, { useState } from "react";
import AdminContentContainer from "../../../../components/AdminContentContainer";
import AdminDataContainer from "../../../../components/AdminDataContainer";
import AdminFooter from "../../../../components/AdminFooter";
import AdminSidebar from "../../../../components/AdminSidebar";
import routes from "../../../../routes";
import style from "./style.module.css";

const AdminAddSpaces = () => {
  const [nearplaces, setNearplaces] = useState([
    {
      placeName: "",
      distance: "",
    },
  ]);

  const onChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...nearplaces];
    list[index][name] = value;
    setNearplaces(list);
  };

  const handleaddClick = () => {
    setNearplaces([
      ...nearplaces,
      {
        placeName: "",
        distance: "",
      },
    ]);
  };

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
            {
              label: "Office Type",
              callback: () => {},
            },
          ]}
        >
          <form>
            <div className="d-flex justify-content-between">
              <div className={style.form_input}>
                <label>Space Name</label>
                <input type="text" placeholder="Name of the space"></input>
              </div>
              <div className={style.form_input}>
                <label>Contact Person</label>
                <input type="text" placeholder="Phone Number"></input>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div className={style.form_input}>
                <label>Email</label>
                <input type="text" placeholder="Email Address"></input>
              </div>
              <div className={style.form_input_nearby}>
                <div className={style.nearby_place_row}>
                  <label>Nearby Places</label>
                  <button
                    className={style.add_nearby_button}
                    onClick={handleaddClick}
                  >
                    + add
                  </button>
                </div>
                {nearplaces.map((x, i) => {
                  return (
                    <>
                      <input
                        name="placeName"
                        type="text"
                        className={style.input_place}
                        placeholder="Place Name"
                        onChange={(e) => onChange(e, i)}
                      ></input>
                      <input
                        name="distance"
                        type="text"
                        className={style.input_distance}
                        placeholder="(km)"
                        onChange={(e) => onChange(e, i)}
                      ></input>
                    </>
                  );
                })}
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <div className={style.form_input}>
                <label>Address</label>
                <textarea
                  rows="4"
                  cols="103"
                  placeholder="Address of the Space"
                ></textarea>
              </div>
            </div>

            <div className={`${style.form_input_address} d-flex flex-column`}>
              <label>Spaces Description</label>
              <textarea
                rows="4"
                placeholder="Description of the Space"
              ></textarea>
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
