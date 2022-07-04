import axios from "axios";
import { useCallback, useEffect, useState } from "react";
// import { Image } from "react-bootstrap";
import { BsSearch, BsStarFill } from "react-icons/bs";
import { MdMapsHomeWork } from "react-icons/md";
import { createSearchParams, Link, useSearchParams } from "react-router-dom";
import useLocalstorage from "../../hooks/useLocalstorage";
import style from "./style.module.css";

const BuildingCard = ({ data }) => {
  const formatRatings = (ratings) => {
    let totalRating = 0;
    ratings.forEach((rating) => (totalRating += rating));

    return (totalRating / ratings.length).toFixed(1);
  };
  return (
    <Link
      to={`/details/${data.id}`}
      className={`d-flex flex-column flex-wrap justify-content-between align-items-start bg-skWhite text-black ${style.listCard}`}
    >
      <div className={`d-flex flex-column`}>
        <img
          src={data.thumbnail}
          alt={data.name}
          className={`${style.listThumbnail}`}
        />
        <div className={`${style.listTower}`}>{data.name}</div>
        <div className={`d-flex gap-3 align-items-center`}>
          <div className={`d-flex align-items-center gap-2`}>
            <MdMapsHomeWork size={20} /> {data.unit}
          </div>
          <div className={`d-flex align-items-center gap-2`}>
            <BsStarFill size={20} className={`text-skYellow`} />
            {typeof data.rating === "number"
              ? data.rating
              : formatRatings(data.ratings)}
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

  const [searchParams, setSearchParams] = useSearchParams();
  const { getLSValue } = useLocalstorage();
  /**
   * State
   */
  // Filtering
  const [type, setType] = useState(searchParams.get("type") || "");

  const [priceFrom, setPriceFrom] = useState(
    Number(searchParams.get("priceFrom")) || 0
  );
  const [priceTo, setPriceTo] = useState(
    Number(searchParams.get("priceTo")) || 0
  );
  const [validatePrice, setValidatePrice] = useState(true);
  const [resetPrice, setResetPrice] = useState(true);

  const [capacityFrom, setCapacityFrom] = useState(
    Number(searchParams.get("capacityFrom")) || 0
  );
  const [capacityTo, setCapacityTo] = useState(
    Number(searchParams.get("capacityTo")) || 0
  );
  const [validateCapacity, setValidateCapacity] = useState(true);
  const [resetCapacity, setResetCapacity] = useState(true);

  // Search
  const [inputSearch, setInputSearch] = useState(searchParams.get("q") || "");
  const [debounceSearch, setDebounceSearch] = useState(inputSearch);
  const [duration, setDuration] = useState("");

  // Tower list
  const [defaultTower, setDefaultTower] = useState([]);
  const [listTower, setListTower] = useState([]);

  /**
   * Use Effect
   */
  //Fetch tower data
  const fetchData = async () => {
    const dataResponse = await axios.get(
      `http://54.211.120.43/api/v1/customer/spaces`,
      {
        headers: {
          Authorization: `Bearer ${
            getLSValue("auth").token || process.env.REACT_APP_TOKEN
          }`,
        },
      }
    );
    const buildingData = dataResponse.data;

    return buildingData;
  };
  useEffect(() => {
    const asyncFetch = async () => {
      const building = await fetchData();
      setDefaultTower(building.data);
      setListTower(building.data);
    };
    asyncFetch();
  }, []);
  //Fetch everytime search params change
  useEffect(() => {
    let list = defaultTower || [];

    if (searchParams.get("type")) {
      let tempArray = [];
      const findName = listCategory.find(
        (cat) => cat.value === searchParams.get("type")
      );
      list.forEach((item) => {
        const checkIfIncludes = item.types.find((item) =>
          item.name.toLowerCase().includes(findName.value.toLowerCase())
        );
        if (checkIfIncludes) {
          tempArray.push(item);
        }
      });
      list = tempArray;
    }
    if (searchParams.get("q")) {
      let tempArray = [];
      list.forEach((item) => {
        if (
          item.name
            .toLowerCase()
            .includes(searchParams.get("q").toLowerCase()) ||
          item.address
            .toLowerCase()
            .includes(searchParams.get("q").toLowerCase())
        ) {
          tempArray.push(item);
        }
      });
      list = tempArray;
    }
    if (searchParams.get("priceFrom") && searchParams.get("priceTo")) {
      let tempArray = [];
      list.forEach((item) => {
        if (
          item.price >= searchParams.get("priceFrom") &&
          item.price <= searchParams.get("priceTo")
        ) {
          tempArray.push(item);
        }
      });
      list = tempArray;
    }
    if (searchParams.get("capacityFrom") && searchParams.get("capacityTo")) {
      let tempArray = [];
      list.forEach((item) => {
        if (
          item.unit >= searchParams.get("capacityFrom") &&
          item.unit <= searchParams.get("capacityTo")
        ) {
          tempArray.push(item);
        }
      });
      list = tempArray;
    }

    setListTower(list);
  }, [searchParams]);

  //Filter tower data
  useEffect(() => {
    if (priceFrom === 0 && priceTo === 0) {
      setResetPrice(false);
      return;
    }
    if (priceFrom > priceTo) {
      setValidatePrice(false);
      setResetPrice(true);
      return;
    }
    setValidatePrice(true);
    setResetPrice(true);
  }, [priceFrom, priceTo]);
  useEffect(() => {
    if (capacityFrom === 0 && capacityTo === 0) {
      setResetCapacity(false);
      return;
    }
    if (capacityFrom > capacityTo) {
      setValidateCapacity(false);
      setResetCapacity(true);
      return;
    }
    setValidateCapacity(true);
    setResetCapacity(true);
  }, [capacityFrom, capacityTo]);

  //Search bar
  useEffect(() => {
    if (inputSearch === "") {
      setSearchParams(appendSearchParams({ q: "" }));
      return;
    }
    setDebounceSearch(inputSearch);
  }, [inputSearch]);
  //Debounce search
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (debounceSearch !== "") {
        setSearchParams(appendSearchParams({ q: debounceSearch }));
        return;
      }
      setDebounceSearch("");
    }, 250);

    return () => {
      clearTimeout(debounce);
    };
  }, [debounceSearch]);

  /**
   * Callback
   */
  const appendSearchParams = (obj) => {
    const sp = createSearchParams(searchParams);
    Object.entries(obj).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        sp.delete(key);
        value.forEach((v) => sp.append(key, v));
      } else if (value === undefined || value === null || value === "") {
        sp.delete(key);
      } else {
        sp.set(key, value);
      }
    });
    return sp;
  };

  const handleFilterType = useCallback(
    (checkedType) => {
      setType(checkedType);
      setSearchParams(appendSearchParams({ type: checkedType }));
    },
    [type]
  );
  const handleFilterPrice = useCallback(() => {
    setSearchParams(
      appendSearchParams({ priceFrom: priceFrom, priceTo: priceTo })
    );
  }, [priceFrom, priceTo]);
  const handleResetPrice = useCallback(() => {
    setPriceFrom(0);
    setPriceTo(0);
    setSearchParams(appendSearchParams({ priceFrom: null, priceTo: null }));
  }, [priceFrom, priceTo]);

  const handleFilterCapacity = useCallback(() => {
    setSearchParams(
      appendSearchParams({ capacityFrom: capacityFrom, capacityTo: capacityTo })
    );
  }, [capacityFrom, capacityTo]);
  const handleResetCapacity = useCallback(() => {
    setCapacityFrom(0);
    setCapacityTo(0);
    setSearchParams(
      appendSearchParams({ capacityFrom: null, capacityTo: null })
    );
  }, [capacityFrom, capacityTo]);

  const handleFilterDuration = useCallback(
    (e) => {
      setDuration(e);
      if (e === "") {
        setSearchParams(appendSearchParams({ duration: null }));
      } else {
        setSearchParams(appendSearchParams({ duration: e }));
      }
    },
    [duration]
  );

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
                  type={`radio`}
                  className={`${style.filterCheckbox}`}
                  name={`cb-type`}
                  id={`cb-${category.value}`}
                  checked={category.value === type}
                  value={`${category.value}`}
                  onChange={(e) => {
                    handleFilterType(e.currentTarget.value);
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (e.currentTarget.checked) {
                      handleFilterType("");
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
                step={100000}
                value={priceFrom}
                onChange={(e) => {
                  setPriceFrom(Number(e.target.value));
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
                step={100000}
                value={priceTo}
                onChange={(e) => setPriceTo(Number(e.target.value))}
              />
            </div>
            <button
              className={`btn btn-dark`}
              disabled={!validatePrice}
              onClick={handleFilterPrice}
            >
              Filter
            </button>
            <button
              className={`btn btn-danger`}
              disabled={!resetPrice}
              onClick={handleResetPrice}
            >
              Reset
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
                step={10}
                value={capacityFrom}
                onChange={(e) => {
                  setCapacityFrom(Number(e.target.value));
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
                step={10}
                value={capacityTo}
                onChange={(e) => {
                  setCapacityTo(Number(e.target.value));
                }}
              />
            </div>
            <button
              className={`btn btn-dark`}
              disabled={!validateCapacity}
              onClick={handleFilterCapacity}
            >
              Filter
            </button>
            <button
              className={`btn btn-danger`}
              disabled={!resetCapacity}
              onClick={handleResetCapacity}
            >
              Reset
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
          {inputSearch && (
            <div className={`fs-5 my-3`}>
              Search result for "{debounceSearch.trim()}"
            </div>
          )}

          {/* Duration */}
          <div
            className={`d-flex align-items-center gap-3 ${
              !inputSearch && "my-3"
            }`}
          >
            <button
              className={`btn ${
                duration === "monthly" ? "btn-dark" : "btn-outline-dark"
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (duration !== "monthly") {
                  handleFilterDuration("monthly");
                } else {
                  handleFilterDuration("");
                }
              }}
            >
              Monthly
            </button>
            <button
              className={`btn ${
                duration === "daily" ? "btn-dark" : "btn-outline-dark"
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (duration !== "daily") {
                  handleFilterDuration("daily");
                } else {
                  handleFilterDuration("");
                }
              }}
            >
              Daily
            </button>
          </div>

          {/* List */}
          <div className={`${style.listCardContainer} my-3`}>
            {listTower.length > 0 ? (
              <>
                {listTower?.map((building, index) => (
                  <BuildingCard key={index} data={building} />
                ))}
              </>
            ) : (
              <div>No result</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOffice;
