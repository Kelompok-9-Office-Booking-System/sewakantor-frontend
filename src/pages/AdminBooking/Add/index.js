import React, {useState} from "react";
import AdminContentContainer from "../../../components/AdminContentContainer";
import AdminDataContainer from "../../../components/AdminDataContainer";
import AdminFooter from "../../../components/AdminFooter";
import AdminSidebar from "../../../components/AdminSidebar";
import style from "./style.module.css";

const AdminAddBooking = () => {
  const baseData = {
    companyName: "",
    buildingName: "",
    email:"",
    noHandphone: "",
    date:"",
    time:"",
  }

  const baseError = {
    email: "",
    noHandphone: "",
  }

  const [data, setDatas] = useState(baseData);
  const [errorMessage, setErrorMessage] = useState(baseError);

  // Regex for email and handphone
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const noHandphoneRegex = /^[0-9]*$/g

  // Logic for errorMessage
  const handleInputTodo = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
      if(name === "email") {
        if (!emailRegex.test(value)) {
          setErrorMessage({...errorMessage, 
            email : "Email Tidak Sesuai"});
          } else {
              setErrorMessage({...errorMessage, 
              email : ""});
            }
      }else if (name === "noHandphone"){
        if (!noHandphoneRegex.test(value)) {
          setErrorMessage({...errorMessage, 
          noHandphone : "No Handphone Tidak Sesuai"});
        } else {
          setErrorMessage({...errorMessage, 
          noHandphone : ""});
        }
      }


      setDatas({...data, 
            [name] : value});
  }

  // Error handling when buttton submit had to press
  const handleSubmit = (event) => {
    if(errorMessage.email !== "" || errorMessage.noHandphone !== "") {
      alert("Terdapat data yang tidak sesuai");
    } else {
      alert("")
    }
    event.preventDefault();
  }

  return (
      <div
        className={`bg-skSmoke position-relative`}
        style={{ height: "100%" }}
      >
        <AdminSidebar />
        <AdminContentContainer title={"Add Schedule Booking"} breadcrumb={true}>
        <AdminDataContainer
            title={"Add Schedule Bookings"}
          >
          <form className={style.form_input_address} onSubmit={handleSubmit}>
          <div className="row mt-4">
              <div className="col-6">
                <label className={`mb-3 ${style.label}`}>Company Name</label> 
                <br/>
                <input  type='text' 
                        name="companyName"
                        value={data.companyName}
                        onChange={handleInputTodo}
                        required
                        />
              </div>
              <div className="col-6">
                <label className={`mb-3 ${style.label}`}>Building Name</label> 
                <br/>
                <input  type='text' 
                        name="buildingName" 
                        value={data.buildingName}
                        onChange={handleInputTodo}
                        required/>
              </div>
          </div>
          <div className="row mt-4">
              <div className="col-6">
                <label className={`mb-3 ${style.label}`}>Email Company</label> 
                <br/>
                <input  type='text' 
                        name="email"
                        value={data.email}
                        onChange={handleInputTodo}  
                        required/>
                <br/><span className="text-danger">{errorMessage.email}</span>
              </div>
              <div className="col-6">
                <label className={`mb-3 ${style.label}`}>Phone Number</label> 
                <br/>
                <input  type='text' 
                        name="noHandphone"
                        value={data.noHandphone}
                        onChange={handleInputTodo}
                        min-length="9" 
                        max-length="14" 
                        required/>
                <br/><span className="text-danger">{errorMessage.noHandphone}</span>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <label className={`mb-3 ${style.label}`}>Date</label> 
                <br/>
                <input  type='date' 
                        name="date" 
                        value={data.date}
                        onChange={handleInputTodo}
                        required/>
             </div>
              <div className="col-6">
                <label className={`mb-3 ${style.label}`}>Time</label> 
                <br/>
                <input  type="time"
                        name="time"
                        value={data.time}
                        onChange={handleInputTodo}
                        className={style.time} 
                        required/>
              <span className="ms-2 text-info">Example: 10:00 AM or 01:00 PM</span>
              </div>
            </div>
            <div className={`text-center mt-4 ${style.addSpace_form_button}`}>
              <button>Submit</button>
              <button className={`ms-5 ${style.cancel_button}`}>Cancel</button>
            </div>
          </form>
          </AdminDataContainer>
        </AdminContentContainer>
        <AdminFooter />
      </div>
  );
};

export default AdminAddBooking;
