import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import UserFooter from "./components/UserFooter";
import UserNavbar from "./components/UserNavbar";
import useStoreAuth from "./hooks/store/useStoreAuth.js";
import DetailOffice from "./pages/DetailOffice";
import LiveChat from "./pages/LiveChat";
import NotFound from "./pages/NotFound";
import SearchOffice from "./pages/SearchOffice";
import UserAbout from "./pages/UserAbout";
import UserLanding from "./pages/UserLanding";
import UserLogin from "./pages/UserLogin";
import UserRegis from "./pages/UserRegis";
import routes from "./routes";
import { decrypt } from "./utils/encryption.js";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isRegisterLoginAllowed, setIsRegisterLoginAllowed] = useState(true);

  const authData = useStoreAuth((state) => state.authData);

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
    console.log(location.pathname);
    if (
      location.pathname.includes("register") ||
      location.pathname.includes("login")
    ) {
      if (isRegisterLoginAllowed) {
        return;
      } else {
        navigate(routes.home);
      }
    }
  }, [location, isRegisterLoginAllowed]);

  return (
    <div className={`bg-skSmoke text-skMidnight`}>
      <UserNavbar />
      <Routes>
        <Route path={routes.home} element={<UserLanding />} />
        <Route path={routes.about} element={<UserAbout />} />

        <Route path={routes.register} element={<UserRegis />} />
        <Route path={routes.login} element={<UserLogin />} />

        <Route path={routes.discover} element={<SearchOffice />} />
        <Route path={routes.details} element={<DetailOffice />} />

        <Route path={routes.chat} element={<LiveChat />} />

        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <UserFooter />
    </div>
  );
}

export default App;
