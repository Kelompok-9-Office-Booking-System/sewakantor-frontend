import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { BsSearch, BsStarFill } from "react-icons/bs";
import { MdMapsHomeWork } from "react-icons/md";
import ReactLoading from "react-loading";
import {
  createSearchParams,
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import useStoreAuth from "../../hooks/store/useStoreAuth.js";
import useStoreSearchQuery from "../../hooks/store/useStoreSearchQuery.js";
import shallow from "zustand/shallow";
import useFetch from "../../hooks/useFetch.js";
import useLocalstorage from "../../hooks/useLocalstorage";
import { decrypt, encrypt } from "../../utils/encryption.js";
import style from "./style.module.css";

import sampleResponse from "../sampleResponse.json";

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
              : formatRatings(data.rating)}
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
  const navigate = useNavigate();
  const listCategory = [
    { name: "Office Rooms", value: "office" },
    { name: "Meeting Rooms", value: "meeting" },
    { name: "Coworking", value: "coworking" },
    { name: "Virtual Office", value: "virtual" },
  ];
  const [searchQuery, fnSetSearchQuery, fnResetSearchQuery] =
    useStoreSearchQuery(
      (state) => [
        state.searchQuery,
        state.fnSetSearchQuery,
        state.fnRemoveSearchQuery,
        state.fnResetSearchQuery,
      ],
      shallow
    );
  const [isSearching, setIsSearching] = useState(false);
  const authToken = useStoreAuth((state) => state.authData);

  /**
   * State
   */
  const [debounceQuery, setDebounceQuery] = useState(searchQuery.query);

  const [isButtonDisabled, setIsButtonDisabled] = useState({
    type: false,
    city: false,
    price: false,
    rating: false,
  });
  const [isResetDisabled, setIsResetDisabled] = useState({
    price: true,
    rating: true,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [buildingList, setBuildingList] = useState([]);
  const [filteredBuildingList, setFilteredBuildingList] = useState([]);
  /**
   * Use Effect
   */
  //Fetch tower data
  useEffect(() => {
    if (!authToken) {
      return navigate("/login");
    }
    const decryptedToken = decrypt(authToken);
    //  TODO: Fetch building from API
    fnResetSearchQuery();
    setIsLoading(true);
    useFetch("/customer/spaces", {
      headers: {
        Authorization: `Bearer ${decryptedToken.token}`,
      },
    }).then((data) => {
      console.log(data);
      setBuildingList(data.data);
      setIsLoading(false);
    });
  }, []);

  // Filtering
  const filterBuilding = () => {
    if (
      searchQuery.type.length > 0 ||
      searchQuery.minPrice > 0 ||
      searchQuery.maxPrice > 0 ||
      searchQuery.minRating > 0 ||
      searchQuery.query.length > 0
    ) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }

    let tempList = buildingList;
    if (searchQuery.type.length > 0) {
      const tempFiltered = [];
      const typeArray = searchQuery.type.split(",");
      tempList.forEach((item) => {
        item.types.forEach((type) => {
          if (typeArray.includes(type.name.split(" ")[0].toLowerCase())) {
            tempFiltered.push(item);
          }
        });
      });
      tempList = [...new Set(tempFiltered)];
    }
    if (
      searchQuery.minPrice > 0 &&
      searchQuery.minPrice <= searchQuery.maxPrice
    ) {
      const tempFiltered = tempList.filter((item) => {
        return (
          item.price >= searchQuery.minPrice &&
          item.price <= searchQuery.maxPrice
        );
      });
      tempList = [...tempFiltered];
    }
    if (
      searchQuery.minRating > 0 &&
      searchQuery.minRating <= searchQuery.maxRating
    ) {
      const tempFiltered = tempList.filter((item) => {
        return (
          item.rating >= searchQuery.minRating &&
          item.rating <= searchQuery.maxRating
        );
      });
      tempList = [...tempFiltered];
    }

    if (searchQuery.query.length > 0) {
      const tempFiltered = tempList.filter((building) => {
        const { name, address } = building;
        const isTowerName = name
          .toLowerCase()
          .includes(debounceQuery.toLowerCase());
        const isAddress = address
          .toLowerCase()
          .includes(debounceQuery.toLowerCase());
        return isTowerName || isAddress;
      });
      tempList = [...tempFiltered];
    }
    return tempList;
  };
  useEffect(() => {
    setIsLoading(true);

    let tempList = filterBuilding();
    const updateList = setTimeout(() => {
      setFilteredBuildingList(tempList);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(updateList);
  }, [
    searchQuery.type,
    searchQuery.minPrice,
    searchQuery.maxPrice,
    searchQuery.minRating,
    searchQuery.maxRating,
  ]);
  useEffect(() => {
    const tempList = filterBuilding();
    if (searchQuery.query.length === 0) {
      setDebounceQuery("");
      if (tempList.length > 0) {
        setFilteredBuildingList(tempList);
      } else {
        setFilteredBuildingList([]);
      }
      return;
    }

    setIsLoading(true);
    const debounce = setTimeout(() => {
      setDebounceQuery(searchQuery.query);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(debounce);
  }, [searchQuery.query]);
  useEffect(() => {
    const tempBuildingList =
      filteredBuildingList.length > 0 ? filteredBuildingList : buildingList;
    const filteredList = tempBuildingList.filter((building) => {
      const { name, address } = building;
      const isTowerName = name
        .toLowerCase()
        .includes(debounceQuery.toLowerCase());
      const isAddress = address
        .toLowerCase()
        .includes(debounceQuery.toLowerCase());
      return isTowerName || isAddress;
    });
    setFilteredBuildingList(filteredList);
  }, [debounceQuery]);

  // Validating
  useEffect(() => {
    if (searchQuery.minPrice > searchQuery.maxPrice) {
      setIsButtonDisabled({ ...isButtonDisabled, price: true });
      fnSetSearchQuery("maxPrice", searchQuery.minPrice);
    } else {
      setIsButtonDisabled({ ...isButtonDisabled, price: false });
    }
    if (searchQuery.minPrice > 0) {
      setIsButtonDisabled({ ...isButtonDisabled, price: false });
      setIsResetDisabled({ ...isResetDisabled, price: false });
    } else {
      setIsButtonDisabled({ ...isButtonDisabled, price: true });
      setIsResetDisabled({ ...isResetDisabled, price: true });
    }
  }, [searchQuery.minPrice, searchQuery.maxPrice]);
  useEffect(() => {
    if (searchQuery.minRating > searchQuery.maxRating) {
      setIsButtonDisabled({ ...isButtonDisabled, rating: true });
      fnSetSearchQuery("maxRating", searchQuery.minRating);
    } else {
      setIsButtonDisabled({ ...isButtonDisabled, rating: false });
    }
    if (searchQuery.minRating > 0) {
      setIsButtonDisabled({ ...isButtonDisabled, rating: false });
      setIsResetDisabled({ ...isResetDisabled, rating: false });
    } else {
      setIsButtonDisabled({ ...isButtonDisabled, rating: true });
      setIsResetDisabled({ ...isResetDisabled, rating: true });
    }
  }, [searchQuery.minRating, searchQuery.maxRating]);

  /**
   * Callback
   */
  const queryInputChange = useCallback(
    (e) => {
      fnSetSearchQuery("query", e.target.value);
    },
    [searchQuery]
  );
  const inputTypeChange = useCallback(
    (e) => {
      const stateValue = searchQuery.type
        .split(",")
        .filter((type) => type !== "");
      if (stateValue.includes(e.target.value)) {
        const index = stateValue.indexOf(e.target.value);
        stateValue.splice(index, 1);
      } else {
        stateValue.push(e.target.value);
      }
      fnSetSearchQuery("type", stateValue.join(","));
    },
    [searchQuery]
  );
  const inputPriceChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      fnSetSearchQuery(name, value);
    },
    [searchQuery]
  );
  const resetPrice = useCallback(() => {
    fnSetSearchQuery("minPrice", 0);
    fnSetSearchQuery("maxPrice", 0);
  }, [searchQuery]);

  const inputRatingChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      fnSetSearchQuery(name, value);
    },
    [searchQuery]
  );
  const resetRating = useCallback(() => {
    fnSetSearchQuery("minRating", 0);
    fnSetSearchQuery("maxRating", 5);
  }, [searchQuery]);

  return (
    <div
      className={`d-flex flex-column bg-skSmoke min-vh-100 align-items-center justify-content-center`}
    >
      <div className={`${style.pageContainer}`}>
        {/* Filter */}
        <div className={`${style.filterContainer} d-flex flex-column`}>
          <h3 className={`${style.filterText}`}>Filter</h3>

          {/* Category */}
          <h4 className={`${style.filterCategoryText}`}>Type</h4>
          <div className={`d-flex flex-column gap-2`}>
            {listCategory.map((category) => (
              <div
                className={`d-flex align-items-center gap-3`}
                key={category.name}
              >
                {/*<input*/}
                {/*  type={`radio`}*/}
                {/*  className={`${style.filterCheckbox}`}*/}
                {/*  name={`cb-type`}*/}
                {/*  id={`cb-${category.value}`}*/}
                {/*  checked={category.value === type}*/}
                {/*  value={`${category.value}`}*/}
                {/*  onChange={(e) => {*/}
                {/*    handleFilterType(e.currentTarget.value);*/}
                {/*  }}*/}
                {/*  onClick={(e) => {*/}
                {/*    e.stopPropagation();*/}
                {/*    if (e.currentTarget.checked) {*/}
                {/*      handleFilterType("");*/}
                {/*    }*/}
                {/*  }}*/}
                {/*/>*/}
                <input
                  type={"checkbox"}
                  className={`${style.filterCheckbox}`}
                  name={"cb-type"}
                  id={`cb-${category.value}`}
                  checked={searchQuery.type.split(",").includes(category.value)}
                  value={`${category.value}`}
                  onChange={inputTypeChange}
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
              <label htmlFor={`minPrice`}>From: </label>
              <input
                className={`form-control`}
                type={`number`}
                name={`minPrice`}
                id={`minPrice`}
                min={0}
                step={100000}
                value={searchQuery.minPrice}
                onChange={inputPriceChange}
              />
            </div>
            <div
              className={`d-flex gap-2 align-items-center justify-content-between w-100`}
            >
              <label htmlFor={`maxPrice`}>To: </label>
              <input
                className={`form-control`}
                type={`number`}
                name={`maxPrice`}
                id={`maxPrice`}
                min={0}
                step={100000}
                value={searchQuery.maxPrice}
                onChange={inputPriceChange}
              />
            </div>
            <button
              className={`btn btn-dark d-none`}
              disabled={isButtonDisabled.price}
            >
              Filter
            </button>
            <button
              className={`btn btn-danger`}
              disabled={isResetDisabled.price}
              onClick={resetPrice}
            >
              Reset
            </button>
          </div>

          {/* Rating */}
          <h4 className={`${style.filterCategoryText}`}>Rating</h4>
          <div className={`d-flex flex-column gap-2 w-100 flex-wrap`}>
            <div
              className={`d-flex gap-2 align-items-center justify-content-between w-100`}
            >
              <label htmlFor={`minRating`}>From: </label>
              <input
                className={`form-control`}
                type={`number`}
                name={`minRating`}
                id={`minRating`}
                min={0}
                max={5}
                step={0.5}
                value={searchQuery.minRating}
                onChange={inputRatingChange}
              />
            </div>
            <div
              className={`d-flex gap-2 align-items-center justify-content-between w-100`}
            >
              <label htmlFor={`maxRating`}>To: </label>
              <input
                className={`form-control`}
                type={`number`}
                name={`maxRating`}
                id={`maxRating`}
                min={0}
                max={5}
                step={0.5}
                value={searchQuery.maxRating}
                onChange={inputRatingChange}
              />
            </div>
            <button
              className={`btn btn-dark d-none`}
              disabled={isButtonDisabled.rating}
            >
              Filter
            </button>
            <button
              className={`btn btn-danger`}
              disabled={isResetDisabled.rating}
              onClick={resetRating}
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
              value={searchQuery.query}
              autoComplete={"off"}
              onChange={queryInputChange}
            />
          </div>
          {/* Search Result */}
          {debounceQuery && (
            <div className={`fs-5 my-3`}>
              Search result for{" "}
              <span className={`fw-bold`}>"{debounceQuery.trim()}"</span>{" "}
              returned {filteredBuildingList.length} results.
            </div>
          )}

          {/* Duration */}
          {/*}
          <div
            className={`d-flex align-items-center gap-3 ${
              !searchQuery.search && "my-3"
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
          {*/}

          {/* List */}
          <div className={`d-flex justify-content-center my-5 h-100`}>
            {isLoading ? (
              <div
                className={`mx-auto fs-5 fw-bold d-flex h-100 align-items-start p-5 justify-content-center`}
              >
                <ReactLoading
                  type={"spin"}
                  color={"#242831"}
                  width={32}
                  height={32}
                />
              </div>
            ) : (
              <>
                {isSearching ? (
                  <>
                    {filteredBuildingList.length > 0 ? (
                      <div className={`${style.listCardContainer}`}>
                        {filteredBuildingList.map((building, index) => (
                          <BuildingCard key={index} data={building} />
                        ))}
                      </div>
                    ) : (
                      <div
                        className={`mx-auto h-100 fs-5 fw-bold d-flex align-items-start p-5 justify-content-center`}
                      >
                        No result
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {buildingList.length > 0 ? (
                      <div className={`${style.listCardContainer}`}>
                        {buildingList?.map((building, index) => (
                          <BuildingCard key={index} data={building} />
                        ))}
                      </div>
                    ) : (
                      <div
                        className={`mx-auto h-100 fs-5 fw-bold d-flex align-items-start p-5 justify-content-center`}
                      >
                        No building data
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOffice;
