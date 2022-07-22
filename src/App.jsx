import { ApolloProvider } from "@apollo/client";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./App.css";
import AdminContentContainer from "./components/AdminContentContainer/index.jsx";
import AdminFooter from "./components/AdminFooter/index.jsx";
import AdminSidebar from "./components/AdminSidebar/index.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes/index.jsx";
import UserFooter from "./components/UserFooter";
import UserNavbar from "./components/UserNavbar";
import useStoreAuth from "./hooks/store/useStoreAuth.js";
import AdminBooking from "./pages/Admin/AdminBooking";
import AdminAddBooking from "./pages/Admin/AdminBooking/Add";
import AdminEditBooking from "./pages/Admin/AdminBooking/Edit";
import AdminGuestReview from "./pages/Admin/AdminGuestReview";
import AdminSpaces from "./pages/Admin/AdminSpaces";
import AdminAddSpaces from "./pages/Admin/AdminSpaces/AddDetail";
import AdminUser from "./pages/Admin/AdminUser";
import AdminAddUser from "./pages/Admin/AdminUser/Add";
import AdminDashboard from "./pages/AdminDashboard/index.jsx";
import AdminLivechat from "./pages/AdminLivechat/index.jsx";
import AdminLogin from "./pages/AdminLogin/index.jsx";
import DetailOffice from "./pages/DetailOffice";
import LiveChat from "./pages/LiveChat";
import NotFound from "./pages/NotFound";
import SearchOffice from "./pages/SearchOffice";
import UserAbout from "./pages/UserAbout";
import UserLanding from "./pages/UserLanding";
import UserLogin from "./pages/UserLogin";
import UserProfile from "./pages/UserProfile/index.jsx";
import UserRegis from "./pages/UserRegis";
import routes from "./routes";
import client from "./utils/apolloClient.js";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isRegisterLoginAllowed, setIsRegisterLoginAllowed] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const authData = useStoreAuth((state) => state.authData);
  const authToken = useStoreAuth((state) => state.authToken);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    if (authData.length > 0) {
      setIsRegisterLoginAllowed(false);
    } else {
      setIsRegisterLoginAllowed(true);
    }
  }, [authData]);
  useEffect(() => {
    const adminRoute = location.pathname.includes("admin");
    if (location.pathname.includes("admin")) {
      setIsAdmin(adminRoute);
    } else {
      setIsAdmin(adminRoute);
    }

    if (
      (location.pathname.includes("register") ||
        location.pathname.includes("login")) &&
      !adminRoute
    ) {
      if (isRegisterLoginAllowed) {
        return;
      } else {
        navigate(routes.home);
      }
    }
    if (
      (location.pathname.includes("discover") ||
        location.pathname.includes("details") ||
        location.pathname.includes("profile") ||
        location.pathname.includes("chat")) &&
      !adminRoute
    ) {
      console.log("Admin should've not been able to access this page", isAdmin);
      if (authToken.length === 0) {
        Swal.fire({
          title: "Please login first",
          text: "You need to login first to access this page",
          toast: true,
          position: "bottom",
          timer: 1500,
          timerProgressBar: true,
          didOpen() {
            navigate(routes.login);
          },
        });
      }
    }
  }, [location, isRegisterLoginAllowed, isAdmin]);

  const AdminRoutes = ({
    children,
    role = "admin",
    title,
    breadcrumb = true,
  }) => (
    <ProtectedRoutes adminRole={role}>
      <div
        className={`bg-skSmoke position-relative`}
        style={{ height: "100%" }}
      >
        <AdminSidebar />
        <AdminContentContainer title={title} breadcrumb={breadcrumb}>
          {children}
        </AdminContentContainer>
        <AdminFooter />
      </div>
    </ProtectedRoutes>
  );

  return (
    <ApolloProvider client={client()}>
      <div className={`bg-skSmoke text-skMidnight`}>
        {!isAdmin && <UserNavbar />}
        <Routes>
          <Route path={routes.home} element={<UserLanding />} />
          <Route path={routes.about} element={<UserAbout />} />
          <Route path={routes.register} element={<UserRegis />} />
          <Route path={routes.login} element={<UserLogin />} />
          <Route path={routes.discover} element={<SearchOffice />} />
          <Route path={routes.details} element={<DetailOffice />} />
          <Route path={routes.profile} element={<UserProfile />} />
          <Route path={routes.chat} element={<LiveChat />} />
          <Route path={routes.chatID} element={<LiveChat />} />
          <Route path={routes.adminLogin} element={<AdminLogin />} />
          <Route
            path={routes.adminDashboard}
            element={
              <AdminRoutes title={"Dashboard"}>
                <AdminDashboard />
              </AdminRoutes>
            }
          />
          <Route
            path={routes.adminLivechat}
            element={
              <AdminRoutes title={"Message"}>
                <AdminLivechat />
              </AdminRoutes>
            }
          />
          <Route
            path={routes.adminLivechatID}
            element={
              <AdminRoutes title={"Message"}>
                <AdminLivechat />
              </AdminRoutes>
            }
          />

          <Route
            path={routes.adminBookings}
            element={
              <ProtectedRoutes adminRole={"admin"}>
                <AdminBooking />
              </ProtectedRoutes>
            }
          />
          <Route
            path={routes.adminBookingsAdd}
            element={
              <ProtectedRoutes adminRole={"admin"}>
                <AdminAddBooking />
              </ProtectedRoutes>
            }
          />
          <Route
            path={routes.adminBookings}
            element={
              <ProtectedRoutes adminRole={"admin"}>
                <AdminEditBooking />
              </ProtectedRoutes>
            }
          />

          <Route
            path={routes.adminReviews}
            element={
              <ProtectedRoutes adminRole={"admin"}>
                <AdminGuestReview />
              </ProtectedRoutes>
            }
          />
          <Route
            path={routes.adminReviewsAdd}
            element={
              <ProtectedRoutes adminRole={"admin"}>
                <AdminGuestReview />
              </ProtectedRoutes>
            }
          />

          <Route
            path={routes.adminSpaces}
            element={
              <ProtectedRoutes adminRole={"super"}>
                <AdminSpaces />
              </ProtectedRoutes>
            }
          />
          <Route
            path={routes.adminSpacesAdd}
            element={
              <ProtectedRoutes adminRole={"super"}>
                <AdminAddSpaces />
              </ProtectedRoutes>
            }
          />
          <Route
            path={routes.adminSpacesEdit}
            element={
              <ProtectedRoutes adminRole={"super"}>
                <AdminAddSpaces />
              </ProtectedRoutes>
            }
          />

          <Route
            path={routes.adminUsers}
            element={
              <ProtectedRoutes adminRole={"admin"}>
                <AdminUser />
              </ProtectedRoutes>
            }
          />
          <Route
            path={routes.adminUsersAdd}
            element={
              <ProtectedRoutes adminRole={"admin"}>
                <AdminAddUser />
              </ProtectedRoutes>
            }
          />
          <Route
            path={routes.adminUsersEdit}
            element={
              <ProtectedRoutes adminRole={"admin"}>
                <AdminAddUser />
              </ProtectedRoutes>
            }
          />
          <Route
            path={routes.adminManagers}
            element={
              <ProtectedRoutes adminRole={"admin"}>
                <AdminUser />
              </ProtectedRoutes>
            }
          />
          <Route
            path={routes.adminManagersAdd}
            element={
              <ProtectedRoutes adminRole={"admin"}>
                <AdminAddUser />
              </ProtectedRoutes>
            }
          />
          <Route
            path={routes.adminManagersEdit}
            element={
              <ProtectedRoutes adminRole={"admin"}>
                <AdminAddUser />
              </ProtectedRoutes>
            }
          />

          <Route path={"*"} element={<NotFound />} />
        </Routes>
        {!isAdmin && <UserFooter />}
      </div>
    </ApolloProvider>
  );
}

export default App;
