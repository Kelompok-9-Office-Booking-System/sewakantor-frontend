import React, { useEffect, useRef, useState } from "react";
import { BsBookmark, BsCamera, BsCameraFill, BsStar } from "react-icons/all.js";
import { BsStarFill } from "react-icons/bs";
import { MdMapsHomeWork } from "react-icons/md";
import ReactLoading from "react-loading";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

/*Component*/
import UserNavbar from "../../components/UserNavbar";
import UserFooter from "../../components/UserFooter";
import { Container, Row, Col, Button } from "react-bootstrap";

/**Image */
import useStoreAuth from "../../hooks/store/useStoreAuth.js";
import routes from "../../routes.js";
import { decrypt } from "../../utils/encryption.js";
import sampleResponse from "../sampleResponse.json";
import sampleReview from "../sampleReviews.json";

/**Style */
import style from "./style.module.css";

const AboutMe = ({ authData }) => {
  const [fullName, setFullName] = useState(authData.fullName);
  const [birthday, setBirthday] = useState(
    new Date("27 december 1998").toISOString().split("T")[0]
  );
  return (
    <>
      <h2>About Me</h2>
      <hr />
      <Col className={style.profile_content}>
        <form>
          <div className="d-flex justify-content-between">
            <div className={style.form_input}>
              <label>Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              ></input>
            </div>
            <div className={style.form_input}>
              <label>Birthday</label>
              <input
                type="date"
                value={birthday}
                onChange={(e) => {
                  setBirthday(e.target.value);
                }}
              ></input>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className={style.form_input}>
              <label>Company Name</label>
              <input type="text"></input>
            </div>
            <div className={style.form_input}>
              <label>Company Email</label>
              <input type="text"></input>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <div className={style.form_input}>
              <label>Country</label>
              <input type="text"></input>
            </div>
            <div className={style.form_input}>
              <label>ZIP Code</label>
              <input type="number"></input>
            </div>
          </div>

          <div className={style.form_input_address}>
            <label>Company Address</label>
            <input type="text"></input>
          </div>

          <div className={style.profile_form_button}>
            <button
              onClick={(e) => {
                e.preventDefault();
                Swal.fire({
                  title: "Updating data",
                  text: "Please wait...",
                  timer: 2000,
                  didOpen() {
                    Swal.showLoading();
                  },
                  willClose() {
                    Swal.fire({
                      title: "Data updated",
                      text: "Your data has been updated",
                      icon: "success",
                      showConfirmButton: false,
                      timer: 2000,
                      timerProgressBar: true,
                    });
                  },
                });
              }}
            >
              Change
            </button>
          </div>
        </form>
      </Col>
    </>
  );
};
const Settings = ({ authData }) => {
  return (
    <>
      <h2>Account Settings</h2>
      <hr />
      <Col className={style.profile_content}>
        <form>
          <div className="d-flex justify-content-between">
            <div className={style.form_input}>
              <label>Password</label>
              <input type="password" value={authData.password}></input>
            </div>
            <div className={style.form_input}>
              <label>Email</label>
              <input type="email" value={authData.email}></input>
            </div>
          </div>

          <div className={style.profile_form_button}>
            <button
              onClick={(e) => {
                e.preventDefault();
                Swal.fire({
                  title: "Updating data",
                  text: "Please wait...",
                  timer: 2000,
                  didOpen() {
                    Swal.showLoading();
                  },
                  willClose() {
                    Swal.fire({
                      title: "Data updated",
                      text: "Your data has been updated",
                      icon: "success",
                      showConfirmButton: false,
                      timer: 2000,
                      timerProgressBar: true,
                    });
                  },
                });
              }}
            >
              Change
            </button>
          </div>
        </form>
      </Col>
    </>
  );
};
const SavedOffice = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [savedData] = useState([...sampleResponse.data]);

  useEffect(() => {
    const updateLoading = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => {
      clearTimeout(updateLoading);
    };
  }, []);

  return (
    <>
      <h2>Saved Office</h2>
      <hr />
      <div className={`d-flex w-100`}>
        {isLoading ? (
          <div
            className={`w-100 d-flex align-items-center justify-content-center my-3`}
          >
            <ReactLoading
              type={"spin"}
              color={"#242831"}
              width={32}
              height={32}
            />
          </div>
        ) : (
          <div
            className={`d-flex flex-wrap gap-3 justify-content-between align-items-start mb-4`}
          >
            {savedData.map((item, index) => (
              <Link to={`/details/${item.id}`} key={index}>
                <div
                  className={`${style.profile_content} text-skMidnight ${style.saved_card}`}
                  style={{ width: "18rem" }}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className={`rounded-3`}
                    style={{
                      width: "100%",
                      height: "12rem",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className={`d-flex w-100 align-items-center justify-content-between my-2`}
                  >
                    <h4 className={`m-0`}>{item.name}</h4>
                    <BsBookmark size={24} />
                  </div>
                  <div className={`d-flex gap-3 align-items-center`}>
                    <div className={`d-flex align-items-center gap-2`}>
                      <MdMapsHomeWork size={20} /> {item.unit}
                    </div>
                    <div className={`d-flex align-items-center gap-2`}>
                      <BsStarFill size={20} className={`text-skYellow`} />
                      {item.rating}
                    </div>
                  </div>
                  <div
                    className={`text-muted my-3`}
                    style={{ fontSize: "14px" }}
                  >
                    {item.address}
                  </div>
                  <div className={`fw-bold`}>
                    Start from IDR {item.price.toLocaleString()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState([...sampleReview.data]);
  const [modalRating, setModalRating] = useState(0);
  const [modalRatingElement, setModalRatingElement] = useState([]);
  const [modalSpace, setModalSpace] = useState("");
  const [modalUnit, setModalUnit] = useState("");
  const [modalReview, setModalReview] = useState("");

  useEffect(() => {
    const rating = [];
    for (let i = 0; i < Math.ceil(modalRating); i++) {
      rating.push(<BsStarFill size={24} className={`text-skYellow`} />);
    }
    if (rating.length < 5) {
      const length = rating.length;
      for (let i = 0; i < 5 - length; i++) {
        rating.push(<BsStar size={24} className={`text-skYellow`} />);
      }
    }

    setModalRatingElement(rating);
  }, [modalRating]);

  const ReviewItem = ({ item }) => {
    const rating = [];
    for (let i = 0; i < Math.ceil(item.rating); i++) {
      rating.push(<BsStarFill size={24} className={`text-skYellow`} />);
    }
    if (rating.length < 5) {
      for (let i = 0; i <= 5 - rating.length; i++) {
        rating.push(<BsStar size={24} className={`text-skYellow`} />);
      }
    }

    return (
      <Col className={`${style.profile_content}`}>
        <Col
          className={`d-flex align-items-start justify-content-between w-100`}
        >
          <div
            className={`d-flex justify-content-between gap-2 flex-column ${style.form_input}`}
          >
            <label>Space name</label>
            <input type={`text`} disabled={true} value={item.space} />
          </div>
          <div
            className={`d-flex justify-content-between gap-2 flex-column ${style.form_input}`}
            style={{ width: "fit-content", marginRight: "25px" }}
          >
            <label>Rating</label>
            <div className={`d-flex gap-1`} style={{ padding: "10px 0" }}>
              {rating.map((item, index) => (
                <>{item}</>
              ))}
            </div>
          </div>
        </Col>
        <Col
          className={`d-flex align-items-start justify-content-between w-100`}
        >
          <div
            className={`d-flex justify-content-between gap-2 flex-column ${style.form_input}`}
          >
            <label>Unit name</label>
            <input type={`text`} disabled={true} value={item.unit} />
          </div>
        </Col>
        <Col
          className={`d-flex align-items-start justify-content-between w-100`}
        >
          <div
            className={`d-flex w-100 justify-content-between gap-2 flex-column ${style.form_input}`}
          >
            <label>Review</label>
            <textarea
              disabled={true}
              value={item.review}
              rows={5}
              style={{ width: "100%", resize: "none" }}
            />
          </div>
        </Col>
        <Button variant={`dark`}>Change review</Button>
      </Col>
    );
  };

  return (
    <>
      {isModalOpen && (
        <div
          className={`${style.modal}`}
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <div
            className={`${style.modal_content} bg-skMidnight text-skSmoke rounded-3`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h3>Add new</h3>
            <hr />
            <Col
              className={`d-flex align-items-start justify-content-between w-100`}
            >
              <div
                className={`d-flex justify-content-between gap-2 flex-column ${style.form_input}`}
              >
                <label>Space name</label>
                <input
                  type={`text`}
                  value={modalSpace}
                  onChange={(e) => {
                    setModalSpace(e.target.value);
                  }}
                />
              </div>
              <div
                className={`d-flex justify-content-between gap-2 flex-column ${style.form_input}`}
                style={{ width: "fit-content", marginRight: "25px" }}
              >
                <label>Rating</label>
                <div className={`d-flex gap-1`} style={{ padding: "10px 0" }}>
                  {modalRatingElement.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setModalRating(index + 1);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col
              className={`d-flex align-items-start justify-content-between w-100`}
            >
              <div
                className={`d-flex justify-content-between gap-2 flex-column ${style.form_input}`}
              >
                <label>Unit name</label>
                <input
                  type={`text`}
                  value={modalUnit}
                  onChange={(e) => {
                    setModalUnit(e.target.value);
                  }}
                />
              </div>
            </Col>
            <Col
              className={`d-flex align-items-start justify-content-between w-100`}
            >
              <div
                className={`d-flex w-100 justify-content-between gap-2 flex-column ${style.form_input}`}
              >
                <label>Review</label>
                <textarea
                  rows={5}
                  style={{ width: "100%", resize: "none" }}
                  value={modalReview}
                  onChange={(e) => {
                    setModalReview(e.target.value);
                  }}
                />
              </div>
            </Col>
            <Button
              variant={`light`}
              onClick={() => {
                const tempReviews = [...reviews];
                const payload = {
                  id: tempReviews.length + 1,
                  space: modalSpace,
                  unit: modalUnit,
                  rating: modalRating,
                  review: modalReview,
                };
                Swal.fire({
                  title: "Submitting review",
                  text: "Please wait...",
                  timer: 2000,
                  didOpen() {
                    Swal.showLoading();
                  },
                  willClose() {
                    tempReviews.push(payload);
                    setReviews(tempReviews);
                    Swal.fire({
                      title: "Review submitted",
                      text: "Your review has been submitted",
                      icon: "success",
                      showConfirmButton: false,
                      timer: 1500,
                      timerProgressBar: true,
                    }).then(() => {
                      setModalSpace("");
                      setModalUnit("");
                      setModalRating(0);
                      setModalReview("");
                      setIsModalOpen(false);
                    });
                  },
                });
              }}
            >
              Save
            </Button>
          </div>
        </div>
      )}
      <div
        className={`d-flex w-100 align-items-center justify-content-between`}
        style={{ marginTop: "50px" }}
      >
        <h2 className={`my-0`}>My reviews</h2>
        <Button
          variant={`dark`}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Add review
        </Button>
      </div>
      <hr />
      <div className={`d-flex w-100 flex-column gap-3 my-3`}>
        {reviews.map((item, index) => {
          return <ReviewItem key={index} item={item} />;
        })}
      </div>
    </>
  );
};

const UserProfile = () => {
  const navigate = useNavigate();
  const authData = decrypt(useStoreAuth((state) => state.authData));
  const authAvatar = useStoreAuth((state) => state.authAvatar);
  const authLogout = useStoreAuth((state) => state.fnLogout);
  const avatarInputRef = useRef();

  const [avatar, setAvatar] = useState(authAvatar);
  const [fullName] = useState(authData.fullName);
  const [menu] = useState([
    {
      key: "about",
      name: "About me",
    },
    {
      key: "setting",
      name: "Account setting",
    },
    {
      key: "saved",
      name: "Saved office",
    },
    {
      key: "review",
      name: "Review",
    },
    {
      key: "logout",
      name: "Logout",
    },
  ]);
  const [currentTab, setCurrentTab] = useState("about");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentTab]);

  return (
    <div className="profile_section">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6" className={style.profile_outline}>
            <div
              className={`position-relative ${style.profile_image} rounded-circle overflow-hidden`}
            >
              <img
                src={avatar || "https://via.placeholder.com/150"}
                alt={`${fullName}`}
                className={`w-100 h-100`}
              />
              <div
                className={`position-absolute ${style.profile_overlay} rounded-circle`}
                onClick={() => {
                  avatarInputRef.current.click();
                }}
              >
                <BsCameraFill className={`text-skWhite`} size={32} />
              </div>
              <input
                ref={avatarInputRef}
                type="file"
                className={`d-none`}
                onChange={(e) => {
                  const files = e.target.files[0];
                  if (!files) return;
                  //  Files to base64
                  const reader = new FileReader();
                  reader.readAsDataURL(files);
                  reader.onload = (e) => {
                    Swal.fire({
                      title: "Updating data",
                      text: "Please wait...",
                      timer: 2000,
                      didOpen() {
                        Swal.showLoading();
                      },
                      willClose() {
                        setAvatar(e.target.result);
                        Swal.fire({
                          title: "Data updated",
                          text: "Your data has been updated",
                          icon: "success",
                          showConfirmButton: false,
                          timer: 2000,
                          timerProgressBar: true,
                        });
                      },
                    });
                  };
                }}
              />
            </div>
            <h4>Albert Flores</h4>

            <Col className={style.profile_button}>
              {menu.map((item) => (
                <Button
                  key={item.key}
                  variant={
                    item.key === "logout"
                      ? "danger"
                      : currentTab === item.key
                      ? "dark"
                      : "light"
                  }
                  onClick={(e) => {
                    e.preventDefault();

                    if (item.key === "logout") {
                      Swal.fire({
                        title: "Logout",
                        text: "Are you sure want to logout?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes",
                        cancelButtonText: "No",
                      }).then((result) => {
                        if (result.value) {
                          authLogout();
                          Swal.fire({
                            title: "Logout",
                            text: "You have been logged out",
                            icon: "success",
                            timer: 1000,
                            timerProgressBar: true,
                          }).then(() => {
                            navigate(routes.login);
                          });
                        }
                      });
                    } else {
                      setCurrentTab(item.key);
                    }
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Col>
          </Col>

          <Col lg="9" md="8" sm="6" className={style.profile_main_content}>
            {currentTab === "about" && <AboutMe authData={authData} />}
            {currentTab === "setting" && <Settings authData={authData} />}
            {currentTab === "saved" && <SavedOffice />}
            {currentTab === "review" && <Reviews />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
