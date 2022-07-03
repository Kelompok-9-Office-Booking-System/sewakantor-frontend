import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import UserFooter from "./components/UserFooter";
import UserNavbar from "./components/UserNavbar";
import NotFound from "./pages/NotFound";
import SearchOffice from "./pages/SearchOffice";
import UserLanding from "./pages/UserLanding";
import UserRegis from "./pages/UserRegis";
import routes from "./routes";

function App() {
  const location = useLocation();
  const includeNav = [routes.home, routes.search, routes.discover];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      {includeNav.indexOf(location.pathname) > -1 && <UserNavbar />}
      <Routes>
        <Route path={routes.home} element={<UserLanding />} />
        <Route path={routes.register} element={<UserRegis />} />
        <Route path={routes.search} element={<SearchOffice />} />
        <Route path={routes.discover} element={<SearchOffice />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
      {includeNav.indexOf(location.pathname) > -1 && <UserFooter />}
    </>
  );
}

export default App;
