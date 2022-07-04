import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import UserFooter from "./components/UserFooter";
import UserNavbar from "./components/UserNavbar";
import UserAbout from "./pages/UserAbout";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className={`bg-skSmoke`}>
      <UserNavbar />
      <UserAbout />
      <UserFooter />
    </div>
  );
}

export default App;
