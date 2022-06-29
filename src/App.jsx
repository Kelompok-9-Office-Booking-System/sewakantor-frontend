import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import UserFooter from "./components/UserFooter";
import UserNavbar from "./components/UserNavbar";
import SearchOffice from "./pages/SearchOffice";
import UserLanding from "./pages/UserLanding";
import UserRegis from "./pages/UserRegis";
import routes from "./routes";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <UserNavbar />
      <Routes>
        <Route path={routes.home} element={<UserLanding />} />
        <Route path={routes.register} element={<UserRegis />} />
        <Route path={routes.search} element={<SearchOffice />} />
        <Route path={routes.discover} element={<SearchOffice />} />
      </Routes>
      <UserFooter />
    </>
  );
}

export default App;
