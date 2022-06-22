import { useCallback, useEffect, useState } from "react";
import { BsSearch, BsStarFill } from "react-icons/bs";
import { MdMapsHomeWork } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";
import style from "./style.module.css";

const BuildingCard = ({ data }) => {
  const formatRatings = (ratings) => {
    let totalRating = 0;
    ratings.forEach((rating) => (totalRating += rating));

    return (totalRating / ratings.length).toFixed(1);
  };
  return (
    <Link
      to={`/bangunan/${data.id}`}
      className={`d-flex flex-column flex-wrap justify-content-between align-items-start bg-skWhite text-black ${style.listCard}`}
    >
      <div className={`d-flex flex-column`}>
        <img src={data.thumbnail} alt={data.towerName} />
        <div className={`${style.listTower}`}>{data.towerName}</div>
        <div className={`d-flex gap-3 align-items-center`}>
          <div className={`d-flex align-items-center gap-2`}>
            <MdMapsHomeWork size={20} /> {data.units}
          </div>
          <div className={`d-flex align-items-center gap-2`}>
            <BsStarFill size={20} className={`text-skYellow`} />{" "}
            {formatRatings(data.ratings)}
          </div>
        </div>
        <div className={`text-muted`}>{data.address}</div>
      </div>
      <div className={`fw-bold`}>
        Start from IDR {data.price.toLocaleString()}
      </div>
    </Link>
  );
};

const SearchOffice = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [inputSearch, setInputSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [urlQuery, setUrlQuery] = useState({});
  const [priceFilter, setPriceFilter] = useState({ from: 0, to: 0 });
  const [isPriceButtonEnable, setIsPriceButtonEnable] = useState(false);
  const [priceButtonText, setPriceButtonText] = useState("Filter");
  const [capFilter, setCapFilter] = useState({ from: 0, to: 0 });
  const [isCapacityButtonEnable, setIsCapacityButtonEnable] = useState(false);
  const [capacityButtonText, setCapacityButtonText] = useState("");

  const addToQueryParameter = useCallback(
    (key, value) => {
      setSearchParams({ ...urlQuery, [key]: value });
    },
    [urlQuery, setSearchParams]
  );
  const removeFromQueryParameter = useCallback(
    (key) => {
      delete urlQuery[key];
      setSearchParams({ ...urlQuery });
    },
    [urlQuery, setSearchParams]
  );

  useEffect(() => {
    if (!searchParams) return;
    const tempUrlQuery = {};
    searchParams.forEach((value, key) => {
      tempUrlQuery[key] = value;
    });
    setUrlQuery(tempUrlQuery);
    if (tempUrlQuery.q) {
      setInputSearch(tempUrlQuery.q);
    }
  }, [searchParams]);
  useEffect(() => {
    if (!inputSearch) {
      return setSearchQuery("");
    }
    const debounceSearch = setTimeout(() => {
      setSearchQuery(inputSearch);
    }, 500);

    return () => clearTimeout(debounceSearch);
  }, [inputSearch]);
  useEffect(() => {
    if (searchQuery) {
      addToQueryParameter("q", searchQuery);
    } else {
      removeFromQueryParameter("q");
    }
  }, [addToQueryParameter, removeFromQueryParameter, searchQuery]);
  // Check price filter
  useEffect(() => {
    if (priceFilter.from <= priceFilter.to) {
      setIsPriceButtonEnable(true);
    } else {
      setIsPriceButtonEnable(false);
    }

    if (priceFilter.from === 0 && priceFilter.to === 0) {
      setPriceButtonText("Reset");
    } else {
      setPriceButtonText("Filter");
    }
  }, [priceFilter]);
  // Check capacity filter
  useEffect(() => {
    if (capFilter.from <= capFilter.to) {
      setIsCapacityButtonEnable(true);
    } else {
      setIsCapacityButtonEnable(false);
    }

    if (capFilter.from === 0 && capFilter.to === 0) {
      setCapacityButtonText("Reset");
    } else {
      setCapacityButtonText("Filter");
    }
  }, [capFilter]);

  const listCategory = [
    { name: "Office Rooms", value: "office" },
    { name: "Meeting Rooms", value: "meeting" },
    { name: "Coworking", value: "coworking" },
    { name: "Virtual Office", value: "virtual" },
  ];
  const placeholderBuilding = [
    {
      id: 1,
      thumbnail: "https://placeholder.pics/svg/280x175",
      towerName: "BCA Tower",
      units: (Math.random() * 1000).toFixed(0),
      ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
      address: "50/F, Menara BCA Grand Indonesia, Jakarta, 10310",
      price: 2700000,
    },
    {
      id: 2,
      thumbnail: "https://placeholder.pics/svg/280x175",
      towerName: "BCA Tower",
      units: (Math.random() * 1000).toFixed(0),
      ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
      address: "50/F, Menara BCA Grand Indonesia, Jakarta, 10310",
      price: 2700000,
    },
    {
      id: 3,
      thumbnail: "https://placeholder.pics/svg/280x175",
      towerName: "BCA Tower",
      units: (Math.random() * 1000).toFixed(0),
      ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
      address: "50/F, Menara BCA Grand Indonesia, Jakarta, 10310",
      price: 2700000,
    },
    {
      id: 4,
      thumbnail: "https://placeholder.pics/svg/280x175",
      towerName: "BCA Tower",
      units: (Math.random() * 1000).toFixed(0),
      ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
      address: "50/F, Menara BCA Grand Indonesia, Jakarta, 10310",
      price: 2700000,
    },
    {
      id: 5,
      thumbnail: "https://placeholder.pics/svg/280x175",
      towerName: "BCA Tower",
      units: (Math.random() * 1000).toFixed(0),
      ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
      address: "50/F, Menara BCA Grand Indonesia, Jakarta, 10310",
      price: 2700000,
    },
    {
      id: 6,
      thumbnail: "https://placeholder.pics/svg/280x175",
      towerName: "BCA Tower",
      units: (Math.random() * 1000).toFixed(0),
      ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
      address: "50/F, Menara BCA Grand Indonesia, Jakarta, 10310",
      price: 2700000,
    },
  ];

  return (
    <div
      className={`d-flex flex-column bg-skSmoke min-vh-100 align-items-center justify-content-center`}
    >
      <div className={`${style.pageContainer}`}>
        {/* Filter */}
        <div className={`${style.filterContainer} d-flex flex-column`}>
          <h3 className={`${style.filterText}`}>Filter</h3>

          {/* Category */}
          <h4 className={`${style.filterCategoryText}`}>Categories</h4>
          <div className={`d-flex flex-column gap-2`}>
            {listCategory.map((category) => (
              <div
                className={`d-flex align-items-center gap-3`}
                key={category.name}
              >
                <input
                  type={`checkbox`}
                  className={`${style.filterCheckbox}`}
                  name={`cb-${category.value}`}
                  id={`cb-${category.value}`}
                  value={`${category.value}`}
                  onChange={(e) => {
                    if (e.target.checked) {
                      console.log(e.target.value);
                    }
                  }}
                />
                <label htmlFor={`cb-${category.value}`}>{category.name}</label>
              </div>
            ))}
          </div>

          {/* Price */}
          <h4 className={`${style.filterCategoryText}`}>Price</h4>
          <div className={`d-flex flex-column gap-2 w-100 flex-wrap`}>
            <div
              className={`d-flex gap-2 align-items-center justify-content-between w-100`}
            >
              <label htmlFor={`price-from`}>From: </label>
              <input
                className={`form-control`}
                type={`number`}
                name={`price-from`}
                id={`price-from`}
                min={0}
                value={priceFilter.from}
                onChange={(e) => {
                  setPriceFilter({
                    ...priceFilter,
                    from: Number(e.target.value),
                  });
                }}
              />
            </div>
            <div
              className={`d-flex gap-2 align-items-center justify-content-between w-100`}
            >
              <label htmlFor={`price-to`}>To: </label>
              <input
                className={`form-control`}
                type={`number`}
                name={`price-to`}
                id={`price-to`}
                min={0}
                value={priceFilter.to}
                onChange={(e) =>
                  setPriceFilter({
                    ...priceFilter,
                    to: Number(e.target.value),
                  })
                }
              />
            </div>
            <button
              className={`btn btn-dark`}
              disabled={!isPriceButtonEnable}
              onClick={async () => {
                if (priceButtonText.toLowerCase() === "reset") {
                  await removeFromQueryParameter("pricingFrom");
                  await removeFromQueryParameter("pricingTo");
                  return;
                }

                const q = {
                  pricingFrom: priceFilter.from,
                  pricingTo: priceFilter.to,
                };
                setSearchParams({ ...urlQuery, ...q });
              }}
            >
              {priceButtonText}
            </button>
          </div>

          {/* Capacity */}
          <h4 className={`${style.filterCategoryText}`}>Capacity</h4>
          <div className={`d-flex flex-column gap-2 w-100 flex-wrap`}>
            <div
              className={`d-flex gap-2 align-items-center justify-content-between w-100`}
            >
              <label htmlFor={`price-from`}>From: </label>
              <input
                className={`form-control`}
                type={`number`}
                name={`price-from`}
                id={`price-from`}
                min={0}
                value={capFilter.from}
                onChange={(e) => {
                  setCapFilter({
                    ...capFilter,
                    from: Number(e.target.value),
                  });
                }}
              />
            </div>
            <div
              className={`d-flex gap-2 align-items-center justify-content-between w-100`}
            >
              <label htmlFor={`price-to`}>To: </label>
              <input
                className={`form-control`}
                type={`number`}
                name={`price-to`}
                id={`price-to`}
                min={0}
                value={capFilter.to}
                onChange={(e) => {
                  setCapFilter({
                    ...capFilter,
                    to: Number(e.target.value),
                  });
                }}
              />
            </div>
            <button
              className={`btn btn-dark`}
              disabled={!isCapacityButtonEnable}
              onClick={async () => {
                if (capacityButtonText.toLowerCase() === "reset") {
                  await removeFromQueryParameter("capacityFrom");
                  await removeFromQueryParameter("capacityTo");
                  return;
                }

                const q = {
                  capacityFrom: capFilter.from,
                  capacityTo: capFilter.to,
                };
                setSearchParams({ ...urlQuery, ...q });
              }}
            >
              {capacityButtonText}
            </button>
          </div>
        </div>

        {/* List */}
        <div className={`${style.listContainer} d-flex flex-column`}>
          {/* Search bar */}
          <div className={`position-relative d-flex align-items-center`}>
            <BsSearch
              size={24}
              className={`${style.listSearchIcon} position-absolute`}
            />
            <input
              className={`form-control ${style.listSearch}`}
              type={`text`}
              name={`search`}
              id={`search`}
              placeholder={`Search by name, city, or area`}
              value={inputSearch}
              autoComplete={"off"}
              onChange={(e) => setInputSearch(e.target.value)}
            />
          </div>
          {/* Search Result */}
          {searchQuery && (
            <div className={`fs-5 my-3`}>
              Search result for "{searchQuery.trim()}"
            </div>
          )}

          {/* Duration */}
          <div
            className={`d-flex align-items-center gap-3 ${
              !searchQuery && "my-3"
            }`}
          >
            <button
              className={`btn ${
                urlQuery.duration === "monthly"
                  ? "btn-dark"
                  : "btn-outline-dark"
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (urlQuery.duration === "monthly") {
                  removeFromQueryParameter("duration");
                } else {
                  addToQueryParameter("duration", "monthly");
                }
              }}
            >
              Monthly
            </button>
            <button
              className={`btn ${
                urlQuery.duration === "daily" ? "btn-dark" : "btn-outline-dark"
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (urlQuery.duration === "daily") {
                  removeFromQueryParameter("duration");
                } else {
                  addToQueryParameter("duration", "daily");
                }
              }}
            >
              Daily
            </button>
          </div>

          {/* List */}
          <div className={`${style.listCardContainer} my-3`}>
            {placeholderBuilding.map((building, index) => (
              <BuildingCard key={index} data={building} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOffice;
