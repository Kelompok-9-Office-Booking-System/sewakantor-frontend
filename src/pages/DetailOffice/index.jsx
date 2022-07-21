import { useMutation, useQuery } from "@apollo/client";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Image, Row } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import ReactLoading from "react-loading";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useStoreAuth from "../../hooks/store/useStoreAuth.js";
import useFetch from "../../hooks/useFetch.js";
import routes from "../../routes.js";
import { decrypt } from "../../utils/encryption.js";
import style from "./style.module.css";
import {
  CUST_SEND_CHAT,
  FIND_LIVECHAT_ROOM,
  MUTATION_CREATE_ROOM,
} from "../../graphql/Livechat/index.js";

const RoomPlan = () => {
  return (
    <>
      <svg
        width="700"
        height="268"
        viewBox="0 0 700 268"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_192_3896)">
          <rect y="0.5" width="700" height="267" rx="10" fill="#10141D" />
          <path d="M1 168H80" stroke="white" />
          <path d="M129 168H391" stroke="white" />
          <path d="M392 168V268" stroke="white" />
          <path d="M422 189H447" stroke="white" />
          <path d="M435 189V267" stroke="white" />
          <rect
            x="297.43"
            y="108.982"
            width="66.9563"
            height="18.4513"
            stroke="white"
          />
          <path
            d="M343.296 139.281C343.296 141.308 342.109 143.197 340.08 144.6C338.054 146.002 335.227 146.885 332.08 146.885C328.933 146.885 326.106 146.002 324.079 144.6C322.051 143.197 320.863 141.308 320.863 139.281C320.863 137.253 322.051 135.364 324.079 133.961C326.106 132.559 328.933 131.676 332.08 131.676C335.227 131.676 338.054 132.559 340.08 133.961C342.109 135.364 343.296 137.253 343.296 139.281Z"
            stroke="white"
          />
          <rect
            x="206.041"
            y="108.982"
            width="66.9563"
            height="18.4513"
            stroke="white"
          />
          <path
            d="M251.908 139.281C251.908 141.308 250.72 143.197 248.692 144.6C246.665 146.002 243.838 146.885 240.691 146.885C237.545 146.885 234.717 146.002 232.691 144.6C230.662 143.197 229.475 141.308 229.475 139.281C229.475 137.253 230.662 135.364 232.691 133.961C234.717 132.559 237.545 131.676 240.691 131.676C243.838 131.676 246.665 132.559 248.692 133.961C250.72 135.364 251.908 137.253 251.908 139.281Z"
            stroke="white"
          />
          <rect
            x="114.651"
            y="108.982"
            width="66.9563"
            height="18.4513"
            stroke="white"
          />
          <path
            d="M160.518 139.281C160.518 141.308 159.331 143.197 157.302 144.6C155.275 146.002 152.448 146.885 149.302 146.885C146.155 146.885 143.328 146.002 141.301 144.6C139.272 143.197 138.085 141.308 138.085 139.281C138.085 137.253 139.272 135.364 141.301 133.961C143.328 132.559 146.155 131.676 149.302 131.676C152.448 131.676 155.275 132.559 157.302 133.961C159.331 135.364 160.518 137.253 160.518 139.281Z"
            stroke="white"
          />
          <rect
            x="247.221"
            y="62.596"
            width="66.9563"
            height="18.4513"
            transform="rotate(180 247.221 62.596)"
            stroke="white"
          />
          <path
            d="M201.354 32.2978C201.354 30.2704 202.541 28.3814 204.57 26.9781C206.597 25.5762 209.424 24.6931 212.571 24.6931C215.717 24.6931 218.544 25.5762 220.571 26.9781C222.6 28.3814 223.787 30.2704 223.787 32.2978C223.787 34.3252 222.6 36.2142 220.571 37.6175C218.544 39.0194 215.717 39.9025 212.571 39.9025C209.424 39.9025 206.597 39.0194 204.57 37.6175C202.541 36.2142 201.354 34.3252 201.354 32.2978Z"
            stroke="white"
          />
          <rect
            x="392.506"
            y="62.596"
            width="66.9563"
            height="18.4513"
            transform="rotate(180 392.506 62.596)"
            stroke="white"
          />
          <path
            d="M346.639 32.2978C346.639 30.2704 347.827 28.3814 349.855 26.9781C351.882 25.5762 354.709 24.6931 357.856 24.6931C361.002 24.6931 363.829 25.5762 365.856 26.9781C367.885 28.3814 369.072 30.2704 369.072 32.2978C369.072 34.3252 367.885 36.2142 365.856 37.6175C363.829 39.0194 361.002 39.9025 357.856 39.9025C354.709 39.9025 351.882 39.0194 349.855 37.6175C347.827 36.2142 346.639 34.3252 346.639 32.2978Z"
            stroke="white"
          />
          <rect
            x="547.166"
            y="62.596"
            width="66.9563"
            height="18.4513"
            transform="rotate(180 547.166 62.596)"
            stroke="white"
          />
          <path
            d="M501.299 32.2978C501.299 30.2704 502.487 28.3814 504.515 26.9781C506.542 25.5762 509.369 24.6931 512.516 24.6931C515.663 24.6931 518.49 25.5762 520.516 26.9781C522.545 28.3814 523.732 30.2704 523.732 32.2978C523.732 34.3252 522.545 36.2142 520.516 37.6175C518.49 39.0194 515.663 39.9025 512.516 39.9025C509.369 39.9025 506.542 39.0194 504.515 37.6175C502.487 36.2142 501.299 34.3252 501.299 32.2978Z"
            stroke="white"
          />
          <rect
            x="79.6729"
            y="20.6406"
            width="46.0074"
            height="27.1199"
            transform="rotate(90 79.6729 20.6406)"
            stroke="white"
          />
          <path
            d="M35.6496 52.0597C32.5029 52.0597 29.6759 51.1766 27.6492 49.7746C25.6205 48.3713 24.433 46.4824 24.433 44.4549C24.433 42.4275 25.6205 40.5385 27.6492 39.1352C29.6759 37.7333 32.5029 36.8502 35.6496 36.8502C38.7963 36.8502 41.6234 37.7333 43.6501 39.1352C45.6787 40.5385 46.8662 42.4275 46.8662 44.4549C46.8662 46.4824 45.6787 48.3713 43.6501 49.7746C41.6234 51.1766 38.7963 52.0597 35.6496 52.0597Z"
            stroke="white"
          />
          <rect
            x="388.819"
            y="108.982"
            width="66.9563"
            height="18.4513"
            stroke="white"
          />
          <path
            d="M434.686 139.281C434.686 141.308 433.499 143.197 431.47 144.6C429.443 146.002 426.616 146.885 423.47 146.885C420.323 146.885 417.496 146.002 415.469 144.6C413.44 143.197 412.253 141.308 412.253 139.281C412.253 137.253 413.44 135.364 415.469 133.961C417.496 132.559 420.323 131.676 423.47 131.676C426.616 131.676 429.443 132.559 431.47 133.961C433.499 135.364 434.686 137.253 434.686 139.281Z"
            stroke="white"
          />
          <rect
            x="480.209"
            y="108.982"
            width="66.9563"
            height="18.4513"
            stroke="white"
          />
          <path
            d="M526.076 139.281C526.076 141.308 524.888 143.197 522.86 144.6C520.833 146.002 518.006 146.885 514.859 146.885C511.712 146.885 508.885 146.002 506.859 144.6C504.83 143.197 503.643 141.308 503.643 139.281C503.643 137.253 504.83 135.364 506.859 133.961C508.885 132.559 511.712 131.676 514.859 131.676C518.006 131.676 520.833 132.559 522.86 133.961C524.888 135.364 526.076 137.253 526.076 139.281Z"
            stroke="white"
          />
          <rect
            x="496.612"
            y="215.965"
            width="66.9563"
            height="18.4513"
            stroke="white"
          />
          <path
            d="M542.479 246.263C542.479 248.29 541.292 250.179 539.263 251.583C537.236 252.985 534.409 253.868 531.263 253.868C528.116 253.868 525.289 252.985 523.262 251.583C521.233 250.179 520.046 248.29 520.046 246.263C520.046 244.236 521.233 242.347 523.262 240.943C525.289 239.541 528.116 238.658 531.263 238.658C534.409 238.658 537.236 239.541 539.263 240.943C541.292 242.347 542.479 244.236 542.479 246.263Z"
            stroke="white"
          />
          <path
            d="M183.5 182.5C183.5 184.347 182.352 186.085 180.359 187.384C178.37 188.681 175.593 189.5 172.5 189.5C169.407 189.5 166.63 188.681 164.641 187.384C162.648 186.085 161.5 184.347 161.5 182.5C161.5 180.653 162.648 178.915 164.641 177.616C166.63 176.319 169.407 175.5 172.5 175.5C175.593 175.5 178.37 176.319 180.359 177.616C182.352 178.915 183.5 180.653 183.5 182.5Z"
            stroke="white"
          />
          <path
            d="M176.5 255C176.5 257 175.335 258.863 173.346 260.246C171.359 261.629 168.586 262.5 165.5 262.5C162.414 262.5 159.641 261.629 157.654 260.246C155.665 258.863 154.5 257 154.5 255C154.5 253 155.665 251.137 157.654 249.754C159.641 248.371 162.414 247.5 165.5 247.5C168.586 247.5 171.359 248.371 173.346 249.754C175.335 251.137 176.5 253 176.5 255Z"
            stroke="white"
          />
          <path
            d="M233.5 182.5C233.5 184.347 232.352 186.085 230.359 187.384C228.37 188.681 225.593 189.5 222.5 189.5C219.407 189.5 216.63 188.681 214.641 187.384C212.648 186.085 211.5 184.347 211.5 182.5C211.5 180.653 212.648 178.915 214.641 177.616C216.63 176.319 219.407 175.5 222.5 175.5C225.593 175.5 228.37 176.319 230.359 177.616C232.352 178.915 233.5 180.653 233.5 182.5Z"
            stroke="white"
          />
          <path
            d="M226.5 255C226.5 256.99 225.29 258.853 223.208 260.241C221.129 261.627 218.229 262.5 215 262.5C211.771 262.5 208.871 261.627 206.792 260.241C204.71 258.853 203.5 256.99 203.5 255C203.5 253.01 204.71 251.147 206.792 249.759C208.871 248.373 211.771 247.5 215 247.5C218.229 247.5 221.129 248.373 223.208 249.759C225.29 251.147 226.5 253.01 226.5 255Z"
            stroke="white"
          />
          <path
            d="M281.5 182.5C281.5 184.347 280.352 186.085 278.359 187.384C276.37 188.681 273.593 189.5 270.5 189.5C267.407 189.5 264.63 188.681 262.641 187.384C260.648 186.085 259.5 184.347 259.5 182.5C259.5 180.653 260.648 178.915 262.641 177.616C264.63 176.319 267.407 175.5 270.5 175.5C273.593 175.5 276.37 176.319 278.359 177.616C280.352 178.915 281.5 180.653 281.5 182.5Z"
            stroke="white"
          />
          <path
            d="M274.5 255C274.5 257 273.335 258.863 271.346 260.246C269.359 261.629 266.586 262.5 263.5 262.5C260.414 262.5 257.641 261.629 255.654 260.246C253.665 258.863 252.5 257 252.5 255C252.5 253 253.665 251.137 255.654 249.754C257.641 248.371 260.414 247.5 263.5 247.5C266.586 247.5 269.359 248.371 271.346 249.754C273.335 251.137 274.5 253 274.5 255Z"
            stroke="white"
          />
          <path
            d="M331.5 182.5C331.5 184.347 330.352 186.085 328.359 187.384C326.37 188.681 323.593 189.5 320.5 189.5C317.407 189.5 314.63 188.681 312.641 187.384C310.648 186.085 309.5 184.347 309.5 182.5C309.5 180.653 310.648 178.915 312.641 177.616C314.63 176.319 317.407 175.5 320.5 175.5C323.593 175.5 326.37 176.319 328.359 177.616C330.352 178.915 331.5 180.653 331.5 182.5Z"
            stroke="white"
          />
          <path
            d="M324.5 255C324.5 257 323.335 258.863 321.346 260.246C319.359 261.629 316.586 262.5 313.5 262.5C310.414 262.5 307.641 261.629 305.654 260.246C303.665 258.863 302.5 257 302.5 255C302.5 253 303.665 251.137 305.654 249.754C307.641 248.371 310.414 247.5 313.5 247.5C316.586 247.5 319.359 248.371 321.346 249.754C323.335 251.137 324.5 253 324.5 255Z"
            stroke="white"
          />
          <path
            d="M380.5 219C380.5 220.99 379.29 222.853 377.208 224.241C375.129 225.627 372.229 226.5 369 226.5C365.771 226.5 362.871 225.627 360.792 224.241C358.71 222.853 357.5 220.99 357.5 219C357.5 217.01 358.71 215.147 360.792 213.759C362.871 212.373 365.771 211.5 369 211.5C372.229 211.5 375.129 212.373 377.208 213.759C379.29 215.147 380.5 217.01 380.5 219Z"
            stroke="white"
          />
          <path
            d="M692.5 149.5C692.5 151.336 691.308 153.075 689.22 154.379C687.14 155.679 684.235 156.5 681 156.5C677.765 156.5 674.86 155.679 672.78 154.379C670.692 153.075 669.5 151.336 669.5 149.5C669.5 147.664 670.692 145.925 672.78 144.621C674.86 143.321 677.765 142.5 681 142.5C684.235 142.5 687.14 143.321 689.22 144.621C691.308 145.925 692.5 147.664 692.5 149.5Z"
            stroke="white"
          />
          <path
            d="M692.5 195C692.5 197.293 691.262 199.406 689.185 200.964C687.108 202.522 684.216 203.5 681 203.5C677.784 203.5 674.892 202.522 672.815 200.964C670.738 199.406 669.5 197.293 669.5 195C669.5 192.707 670.738 190.594 672.815 189.036C674.892 187.478 677.784 186.5 681 186.5C684.216 186.5 687.108 187.478 689.185 189.036C691.262 190.594 692.5 192.707 692.5 195Z"
            stroke="white"
          />
          <path
            d="M692.5 240C692.5 241.99 691.29 243.853 689.208 245.241C687.129 246.627 684.229 247.5 681 247.5C677.771 247.5 674.871 246.627 672.792 245.241C670.71 243.853 669.5 241.99 669.5 240C669.5 238.01 670.71 236.147 672.792 234.759C674.871 233.373 677.771 232.5 681 232.5C684.229 232.5 687.129 233.373 689.208 234.759C691.29 236.147 692.5 238.01 692.5 240Z"
            stroke="white"
          />
          <path
            d="M617.5 239C617.5 241 616.335 242.863 614.346 244.246C612.359 245.629 609.586 246.5 606.5 246.5C603.414 246.5 600.641 245.629 598.654 244.246C596.665 242.863 595.5 241 595.5 239C595.5 237 596.665 235.137 598.654 233.754C600.641 232.371 603.414 231.5 606.5 231.5C609.586 231.5 612.359 232.371 614.346 233.754C616.335 235.137 617.5 237 617.5 239Z"
            stroke="white"
          />
          <path
            d="M617.5 195C617.5 199.587 612.696 203.5 606.5 203.5C600.304 203.5 595.5 199.587 595.5 195C595.5 190.413 600.304 186.5 606.5 186.5C612.696 186.5 617.5 190.413 617.5 195Z"
            stroke="white"
          />
          <path
            d="M617.5 151C617.5 153 616.335 154.863 614.346 156.246C612.359 157.629 609.586 158.5 606.5 158.5C603.414 158.5 600.641 157.629 598.654 156.246C596.665 154.863 595.5 153 595.5 151C595.5 149 596.665 147.137 598.654 145.754C600.641 144.371 603.414 143.5 606.5 143.5C609.586 143.5 612.359 144.371 614.346 145.754C616.335 147.137 617.5 149 617.5 151Z"
            stroke="white"
          />
          <rect x="625.5" y="135.5" width="36" height="119" stroke="white" />
          <rect x="129.5" y="196.5" width="218" height="45" stroke="white" />
          <rect x="25.5" y="189.5" width="41" height="58" stroke="white" />
          <path d="M112.979 1.5V68.7692" stroke="white" />
          <path d="M0.5 85.7888H111.808" stroke="white" />
          <path d="M268.213 1.5V85.8007" stroke="white" />
          <path d="M268.829 85.7985H231.317" stroke="white" />
          <path d="M156.331 1.50964V86.6092" stroke="white" />
          <path d="M156.331 85.7985H198.511" stroke="white" />
          <path d="M415.842 1.5V85.8007" stroke="white" />
          <path d="M416.458 85.7985H378.946" stroke="white" />
          <path d="M303.96 1.50964V86.6092" stroke="white" />
          <path d="M303.96 85.7985H346.14" stroke="white" />
          <path d="M563.473 1.5V85.8007" stroke="white" />
          <path d="M564.088 85.7985H526.576" stroke="white" />
          <path d="M451.59 1.50964V86.6092" stroke="white" />
          <path d="M451.59 85.7985H493.77" stroke="white" />
          <path d="M588.117 266.534V116.405" stroke="white" />
          <path d="M700 266.517V114.966" stroke="white" />
          <path d="M700 116.409H657.82" stroke="white" />
          <path d="M475.637 266.534V182.233" stroke="white" />
          <path d="M475.022 182.235H512.533" stroke="white" />
          <path d="M587.52 266.524V181.424" stroke="white" />
          <path d="M587.52 182.235H545.34" stroke="white" />
          <path d="M699.744 1.5V85.8007" stroke="white" />
          <path d="M700.001 85.7985H684.367" stroke="white" />
          <path d="M653.115 1.50964V86.6092" stroke="white" />
          <path d="M653.115 85.7985H670.694" stroke="white" />
        </g>
        <defs>
          <clipPath id="clip0_192_3896">
            <rect y="0.5" width="700" height="267" rx="10" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default function DetailOffice() {
  const navigate = useNavigate();
  const { id } = useParams();
  const authToken = useStoreAuth((state) => state.authData);
  const [officeTypes] = useState([
    {
      name: "Office Room",
    },
    {
      name: "Meeting Room",
    },
    {
      name: "Coworking",
    },
    {
      name: "Virtual space",
    },
  ]);
  const [mockReview] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Great place",
      picture: "https://i.pravatar.cc/300",
    },
    {
      id: 2,
      name: "Jane Doe",
      rating: 4,
      comment: "Good place",
      picture: "https://i.pravatar.cc/299",
    },
    {
      id: 3,
      name: "Jack Doe",
      rating: 3,
      comment: "Not bad",
      picture: "https://i.pravatar.cc/298",
    },
    {
      id: 4,
      name: "Jenny Doe",
      rating: 2,
      comment: "Not good",
      picture: "https://i.pravatar.cc/296",
    },
  ]);

  const addDate = (date, durationType, duration) => {
    let days = 0;
    if (durationType === "day") {
      days = duration;
    }
    if (durationType === "monthly") {
      days = duration * 30;
    }
    const dateObj = new Date(date);
    dateObj.setDate(dateObj.getDate() + days);
    return dateObj;
  };

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [availableTypes, setAvailableTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [durationType, setDurationType] = useState("monthly");
  const [quantity, setQuantity] = useState(1);
  const [duration, setDuration] = useState(1);
  const [rentDate, setRentDate] = useState({
    start: new Date(),
    end: addDate(new Date(), durationType, duration),
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckLoading, setIsCheckLoading] = useState(false);

  const { data: findChatRoom, loading: findChatRoomLoading } = useQuery(
    FIND_LIVECHAT_ROOM,
    {
      variables: {
        userEmail: decrypt(authToken).email,
        buildingId: id,
      },
      fetchPolicy: "no-cache",
      onCompleted: (data) => {
        console.log(data);
      },
    }
  );
  const [createChatRoom, { loading: createChatRoomLoading }] =
    useMutation(MUTATION_CREATE_ROOM);
  const [sendMessage, { loading: sendMessageLoading }] =
    useMutation(CUST_SEND_CHAT);

  useEffect(() => {
    setRentDate({
      ...rentDate,
      end: addDate(rentDate.start, durationType, duration),
    });
  }, [durationType, duration]);

  useEffect(() => {
    setIsChecked(false);
  }, [durationType, duration, quantity, rentDate]);

  useEffect(() => {
    setIsLoading(true);
    const decryptedAuth = decrypt(authToken);
    const data = useFetch(`/customer/spaces/${id}`, {
      headers: {
        Authorization: `Bearer ${decryptedAuth.token}`,
      },
    }).then((res) => {
      setData(res.data);
      const tempAvailableTypes = [];
      res.data.types.forEach((type) => {
        tempAvailableTypes.push(type.name);
      });
      setAvailableTypes(tempAvailableTypes);
      officeTypes.forEach((type) => {
        if (tempAvailableTypes.includes(type.name)) {
          type.price = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          }).format(res.data.price);
        } else {
          type.price = "-";
        }
      });
      setIsLoading(false);
    });
  }, []);

  const addHandler = useCallback(
    (type) => {
      if (type === "duration") {
        setDuration(duration + 1);
      }
      if (type === "quantity") {
        setQuantity(quantity + 1);
      }
    },
    [duration, quantity]
  );
  const minHandler = useCallback(
    (type) => {
      if (type === "duration") {
        if (duration === 1) {
          Swal.fire({
            title: `Duration can't be less than 1 ${
              durationType === "monthly" ? "month" : "day"
            }`,
            icon: "error",
            toast: true,
            position: "bottom",
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton: false,
          });
          return;
        }
        setDuration(duration - 1);
      }
      if (type === "quantity") {
        if (quantity === 1) {
          Swal.fire({
            title: `Quantity can't be less than 1 unit`,
            icon: "error",
            toast: true,
            position: "bottom",
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton: false,
          });
          return;
        }
        setQuantity(quantity - 1);
      }
    },
    [duration, quantity]
  );
  const checkHandler = useCallback(
    (e) => {
      e.preventDefault();
      setIsChecked(false);
      setIsCheckLoading(true);
      const timeout = setTimeout(() => {
        setIsCheckLoading(false);
        setIsChecked(true);
      }, 1500);
    },
    [isChecked, isCheckLoading]
  );

  const bookHandler = useCallback(
    async (e) => {
      e.preventDefault();
      //  Get livechat room
      const fetchLivechatRoom = findChatRoom.chatroom;
      if (fetchLivechatRoom.length > 0) {
        return navigate(`/chat/${id}`);
      }

      // Create livechat room
      createChatRoom({
        variables: {
          userEmail: decrypt(authToken).email,
          buildingId: id,
          buildingName: data.name,
          buildingImg: data.thumbnail,
        },
      }).then((res) => {
        sendMessage({
          variables: {
            chatroomId: res.data.insert_chatroom.returning[0].id,
            email: decrypt(authToken).email,
            message: `Hallo, saya tertarik untuk menyewa ${quantity} unit di ${
              data.name
            } untuk ${duration} ${
              durationType === "monthly" ? "bulan" : "hari"
            }.`,
          },
        }).then(() => {
          navigate(`/chat/${id}`);
        });
      });
    },
    [id, authToken, data, quantity, duration, durationType]
  );

  if (isLoading) {
    return (
      <div
        className={`d-flex align-items-center justify-content-center`}
        style={{ width: "100vw", height: "100vh" }}
      >
        <ReactLoading type={"spin"} color={"#242831"} height={32} width={32} />
      </div>
    );
  }

  return (
    <div className={`container ${style.detailOffice}`}>
      <div className="row">
        <div className="col-7 me-5">
          <div>
            <div
              id="carouselExampleControlsNoTouching"
              className="carousel slide"
              data-bs-touch="false"
              data-bs-interval="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    style={{ height: 400, objectFit: "cover" }}
                    src={data.thumbnail}
                    className="d-block w-100"
                    alt={data.name}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="mt-4">
              <div className="row bg-dark text-light p-0 rounded mx-1 text-center">
                <div className="col-12 border-bottom border-1 text-start">
                  <p className={`my-3`} style={{ fontWeight: "bold" }}>
                    Member Access Hours
                  </p>
                </div>
                <div className="col-4 my-2">
                  <span style={{ fontWeight: "bold" }}>Monday - Friday</span>
                  <br />
                  08.00 am - 06.00 pm
                </div>
                <div className="col-4 my-2">
                  <span style={{ fontWeight: "bold" }}>Saturday</span>
                  <br />
                  Closed
                </div>
                <div className="col-4 my-2">
                  <span style={{ fontWeight: "bold" }}>Sunday</span>
                  <br />
                  Closed
                </div>
              </div>
            </div>
            {/* Room Plan */}
            <div className="my-4">
              <h2>Room Plan</h2>
              <div
                style={{ width: "100%" }}
                className={`d-flex align-items-center justify-content-center`}
              >
                <RoomPlan />
              </div>
            </div>
            <div className={`my-4`}>
              <h2 className="">Pricing</h2>
              <div
                className={`d-flex align-items-center justify-content-between text-center`}
              >
                {officeTypes.map((type, index) => (
                  <button
                    className={`${style.type} ${
                      availableTypes.includes(type.name) ? "" : "text-muted"
                    } ${selectedType === type.name ? style.selectedType : ""}`}
                    disabled={!availableTypes.includes(type.name)}
                    key={index}
                    onClick={() => {
                      if (selectedType === type.name) {
                        setSelectedType("");
                      } else {
                        setSelectedType(type.name);
                      }
                    }}
                  >
                    {selectedType === type.name ? type.price : type.name}
                  </button>
                ))}
              </div>
              <div className="d-flex justify-content-between mt-4 text-center">
                <div className={`d-flex flex-column justify-content-between`}>
                  <label>Select Duration</label>
                  <select
                    className="w-100 px-3 form-select"
                    style={{ fontSize: 18 }}
                    value={durationType}
                    onChange={(e) => setDurationType(e.target.value)}
                  >
                    <option value="monthly">Month</option>
                    <option value="day">Day</option>
                  </select>
                </div>
                <div
                  className={`d-flex flex-column justify-content-between w-25 px-3`}
                >
                  <label>Room Quantity</label>
                  <div className="d-flex justify-content-between align-items-center my-auto">
                    <button
                      className="btn btn-dark px-2 py-0"
                      onClick={() => minHandler("quantity")}
                    >
                      -
                    </button>
                    <h2 className={`m-0`}>{quantity}</h2>
                    <button
                      type="button"
                      className="btn btn-dark px-2 py-0 "
                      onClick={() => addHandler("quantity")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div
                  className={`d-flex flex-column justify-content-between w-25 px-3`}
                >
                  <label>Duration</label>
                  <div className="d-flex justify-content-between align-items-center my-auto">
                    <button
                      className="btn btn-dark px-2 py-0"
                      onClick={() => minHandler("duration")}
                    >
                      -
                    </button>
                    <h2 className={`m-0`}>{duration}</h2>
                    <button
                      type="button"
                      className="btn btn-dark px-2 py-0 "
                      onClick={() => addHandler("duration")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={`d-flex flex-column justify-content-between`}>
                  <label>Start date</label>
                  <input
                    type="date"
                    name="date"
                    className={`w-full form-control`}
                    style={{ fontSize: 18 }}
                    value={rentDate.start.toISOString().split("T")[0]}
                    onChange={(e) => {
                      setRentDate({
                        ...rentDate,
                        start: new Date(e.target.value),
                      });
                    }}
                  />
                </div>
              </div>
              <div className={`w-100`}>
                <div className="d-flex justify-content-between align-items-center mt-3 border border-dark rounded p-1">
                  <p style={{ fontWeight: "bold", margin: 0 }}>
                    {duration}{" "}
                    {durationType === "monthly" ? "month(s)" : "day(s)"}{" "}
                    selected
                  </p>
                  <Button
                    variant={"dark"}
                    type="button"
                    onClick={checkHandler}
                    className="rounded"
                  >
                    Check availability
                  </Button>
                </div>
                {isCheckLoading && (
                  <div className={`w-100 my-3 d-flex justify-content-center`}>
                    <ReactLoading
                      type={"spin"}
                      color={"#242831"}
                      height={32}
                      width={32}
                    />
                  </div>
                )}
                <div className="my-2 w-100 d-flex">
                  <span
                    className={`rounded w-100 bg-success bg-opacity-25 px-2 ${
                      isChecked ? "" : "visually-hidden"
                    }`}
                  >
                    Congratulations! Room is available
                  </span>
                </div>
              </div>
              <div
                className={`d-flex justify-content-between ${
                  isChecked ? "" : "visually-hidden"
                }`}
              >
                <h3>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0,
                  }).format(duration * data.price)}
                </h3>
                <Button
                  variant={`dark`}
                  type="button"
                  className={`rounded-3`}
                  disabled={createChatRoomLoading || sendMessageLoading}
                  onClick={bookHandler}
                >
                  {createChatRoomLoading || sendMessageLoading ? (
                    <ReactLoading
                      type={"bubbles"}
                      color={"#fff"}
                      height={24}
                      width={24}
                    />
                  ) : (
                    "Booking"
                  )}
                </Button>
              </div>
            </div>
            {/* Review */}
            <div>
              <h2 className="mb-4">They Said</h2>
              <div
                className={`w-100 d-grid gap-2`}
                style={{ gridTemplateColumns: "repeat(2, minmax(0,1fr))" }}
              >
                {mockReview.map((review) => (
                  <div
                    className={`p-2 d-flex align-items-center gap-3 bg-skWhisper rounded`}
                  >
                    <Image
                      src={review.picture}
                      width={96}
                      height={96}
                      className={`rounded-3`}
                    />
                    <div
                      className={`d-flex flex-column justify-content-between`}
                    >
                      <div
                        className={`d-flex align-items-center gap-2 justify-content h-100`}
                      >
                        <BsFillStarFill className={`text-skYellow`} size={16} />
                        <span>{review.rating}</span>
                      </div>
                      <span className={`fw-bold fs-5`}>{review.name}</span>
                      <span>{review.comment}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="mb-4">
            <h1>{data.name}</h1>
            <p style={{ color: "grey" }}>{data.address}</p>
            <Button variant={"dark"} className={`px-5`}>
              Request visit
            </Button>
          </div>
          <div>
            <h2>Overview</h2>
            <p>{data.description}</p>
          </div>
          <div>
            <div className="mb-4">
              <h2>Location</h2>
              {/* Maps */}
              <iframe
                style={{ width: "100%", height: 300 }}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  data.address
                )}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width={600}
                height={450}
                allowFullScreen={true}
                loading={"lazy"}
                referrerPolicy={"no-referrer-when-downgrade"}
              ></iframe>
            </div>
            {/* Nearby Location */}
            <div>
              <div className="d-flex align-items-center">
                <ImLocation size={24} />
                <h3 className={`m-0`}>Nearby Places</h3>
              </div>
              <div className={`my-3`}>
                {data.nearbyPlaces &&
                  data.nearbyPlaces.map((place) => (
                    <div
                      className={`d-flex align-items-center justify-content-between`}
                      key={place.id}
                    >
                      <h5>{place.name}</h5>
                      <span className={`fw-bold`}>{place.distance}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <h2>Facilities</h2>
            <div className="row">
              {data.facilities &&
                data.facilities
                  .sort((a, b) => a.id - b.id)
                  .map((facility) => (
                    <div
                      className={`col-6 d-flex align-items-center gap-2 my-2`}
                      key={facility.id}
                    >
                      <img
                        src={facility.icon}
                        alt={facility.name}
                        width={24}
                        height={24}
                      />
                      <h5 className={`my-0`}>{facility.name}</h5>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
