import React from 'react'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AdminContentContainer from "../../components/AdminContentContainer";
import AdminDataContainer from "../../components/AdminDataContainer";
import AdminDataTable from "../../components/AdminDataTable";
import AdminFooter from "../../components/AdminFooter";
import AdminSidebar from "../../components/AdminSidebar";
import routes from "../../routes";
import style from "./style.module.css";
const AdminEditUser = () => {
  return (
    <div className={`bg-skSmoke position-relative`} style={{ height: "100%" }}>
      <AdminSidebar />
      <AdminContentContainer title={"Edit User"} breadcrumb={true}>
        <AdminDataContainer
          title={"Edit User"}
        >
          <form>
            <div className="d-flex justify-content-between">
              <div className={style.form_input}>
                <label>First Name</label>
                <input type="text" placeholder="Enter your first name"></input>
              </div>
              <div className={style.form_input}>
                <label>Last Name</label>
                <input type="text" placeholder="Enter your last name"></input>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className={style.form_input}>
                <label>Password</label>
                <input type="text" placeholder="Enter your password"></input>
              </div>
              <div className={style.form_input}>
                <label>Confirm Password</label>
                <input type="text" placeholder="Re-type your password"></input>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className={style.form_input}>
                <label>Company Name</label>
                <input
                  type="text"
                  placeholder="Enter your company's name"
                ></input>
              </div>
              <div className={style.form_input}>
                <label>Company Email</label>
                <input
                  type="text"
                  placeholder="Enter your company's email"
                ></input>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className={style.form_input}>
                <label>Country</label>
                <input
                  type="text"
                  placeholder="Enter the company's country"
                ></input>
              </div>
              <div className={style.form_input}>
                <label>Zip Code</label>
                <input
                  type="text"
                  placeholder="Enter the company's zip code"
                ></input>
              </div>
            </div>
            <div className={style.form_input}>
              <label>Address</label>
              <textarea
                rows="4"
                cols="103"
                placeholder="Address of the Company"
              ></textarea>
            </div>
            <div className={style.addSpace_form_button}>
              <button>Edit</button>
              <button className={style.cancel_button}>Cancel</button>
            </div>
          </form>
        </AdminDataContainer>
      </AdminContentContainer>
      <AdminFooter />
    </div>
  )
}

export default AdminEditUser