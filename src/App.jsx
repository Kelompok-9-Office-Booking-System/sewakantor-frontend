import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import UserFooter from "./components/UserFooter";
import UserNavbar from "./components/UserNavbar";
import DetailOffice from "./pages/DetailOffice";
import NotFound from "./pages/NotFound";
import SearchOffice from "./pages/SearchOffice";
import UserLanding from "./pages/UserLanding";
import UserLogin from "./pages/UserLogin";
import UserRegis from "./pages/UserRegis";
import routes from "./routes";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className={`bg-skSmoke`}>
      <UserNavbar />
      <Routes>
        <Route path={routes.home} element={<UserLanding />} />
        <Route path={routes.register} element={<UserRegis />} />
        <Route path={routes.login} element={<UserLogin />} />

        <Route path={routes.search} element={<SearchOffice />} />
        <Route path={routes.discover} element={<SearchOffice />} />
        <Route path={routes.details} element={<DetailOffice />} />

        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <UserFooter />
    </div>
  );
}

export default App;
