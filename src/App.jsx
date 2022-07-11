import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import AdminContentContainer from "./components/AdminContentContainer";
import AdminDataContainer from "./components/AdminDataContainer";
import AdminDataTable from "./components/AdminDataTable";
import AdminFooter from "./components/AdminFooter";
import AdminSidebar from "./components/AdminSidebar";

const placeholderBuilding = [
  {
    id: 1,
    thumbnail: "https://placeholder.pics/svg/280x175",
    towerName: "BCA Tower Lorem",
    units: (Math.random() * 1000).toFixed(0),
    ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
    address: "50/F, Menara BCA Grand Indonesia, Jakarta, 10310",
    price: 1700000,
  },
  {
    id: 2,
    thumbnail: "https://placeholder.pics/svg/280x175",
    towerName: "BCA Tower Ipsum",
    units: (Math.random() * 1000).toFixed(0),
    ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
    address: "50/F, Menara BCA Grand Indonesia, Bandung, 10310",
    price: 2700000,
  },
  {
    id: 3,
    thumbnail: "https://placeholder.pics/svg/280x175",
    towerName: "BCA Tower Dolor",
    units: (Math.random() * 1000).toFixed(0),
    ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
    address: "50/F, Menara BCA Grand Indonesia, Tangerang, 10310",
    price: 3700000,
  },
  {
    id: 4,
    thumbnail: "https://placeholder.pics/svg/280x175",
    towerName: "BCA Tower Sit",
    units: (Math.random() * 1000).toFixed(0),
    ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
    address: "50/F, Menara BCA Grand Indonesia, Bekasi, 10310",
    price: 4000000,
  },
  {
    id: 5,
    thumbnail: "https://placeholder.pics/svg/280x175",
    towerName: "BCA Tower Amet",
    units: (Math.random() * 1000).toFixed(0),
    ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
    address: "50/F, Menara BCA Grand Indonesia, Jakarta, 10310",
    price: 5000000,
  },
];

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={`bg-skSmoke position-relative`} style={{ height: "100%" }}>
      <AdminSidebar />
      <AdminContentContainer title={"Lorem ipsum"} breadcrumb={true}>
        <AdminDataContainer
          title={"Lorem ipsum"}
          buttons={[
            { label: "Lorem ipsum", link: "#", callback: () => {} },
            { label: "Lorem ipsum", callback: () => {} },
          ]}
        >
          <AdminDataTable
            data={placeholderBuilding}
            head={["name", "price", "units", "address"]}
            dataKeys={["towerName", "price", "units", "address"]}
          />
        </AdminDataContainer>
      </AdminContentContainer>
      <AdminFooter />
    </div>
  );
}

export default App;
