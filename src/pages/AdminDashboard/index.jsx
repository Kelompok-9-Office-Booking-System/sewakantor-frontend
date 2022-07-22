import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { BsPersonBadge } from "react-icons/bs";
import { MdGroups, MdOutlineHomeWork } from "react-icons/md";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
  ComposedChart,
  Area,
  Pie,
  ResponsiveContainer,
} from "recharts";

const AdminDashboard = () => {
  const [chartDuration, setChartDuration] = useState(7);
  const [mockChartData, setMockChartData] = useState([]);
  const OfficeType = [
    {
      type: "Office Rooms",
      value: "82",
      background: "#54D14D",
    },
    {
      type: "Meeting Rooms",
      value: "42",
      background: "#EF7E5D",
    },
    {
      type: "Coworking",
      value: "65",
      background: "#35C2FD",
    },
    {
      type: "Virtual Offices",
      value: "65",
      background: "#FF830C",
    },
  ];
  const UserRegistered = [
    {
      type: "Today",
      value: "4",
      background: "#4EACF4",
    },
    {
      type: "This Week",
      value: "13",
      background: "#EB55A5",
    },
    {
      type: "This Month",
      value: "54",
      background: "#6F21D1",
    },
  ];

  useEffect(() => {
    const chartData = [];
    for (let i = 1; i <= chartDuration; i++) {
      const date = new Date(`2022-07-${i}`);
      chartData.push({
        name: new Intl.DateTimeFormat("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(date),
        bookings: Math.floor(Math.random() * 100) + 1,
      });
    }
    setMockChartData(chartData);
  }, [chartDuration]);

  return (
    <div className={`d-flex flex-column w-100 px-5 py-3 gap-3`}>
      <div className={`d-flex gap-3`}>
        <div
          className={`d-flex align-items-center justify-content-center gap-3 p-3`}
          style={{ background: "#6F42C1", borderRadius: "16px" }}
        >
          {/*  Icon*/}
          <div className={`d-flex align-items-center justify-content-center`}>
            <BsPersonBadge size={32} className={`text-skWhite`} />
          </div>
          {/*Text*/}
          <div
            className={`d-flex flex-column justify-content-center text-skWhite`}
          >
            <h5 className={`m-0`}>Bookings</h5>
            <span>100</span>
          </div>
        </div>
        <div
          className={`d-flex align-items-center justify-content-center gap-3 p-3`}
          style={{ background: "#007BFF", borderRadius: "16px" }}
        >
          {/*  Icon*/}
          <div className={`d-flex align-items-center justify-content-center`}>
            <MdGroups size={32} className={`text-skWhite`} />
          </div>
          {/*Text*/}
          <div
            className={`d-flex flex-column justify-content-center text-skWhite`}
          >
            <h5 className={`m-0`}>Users</h5>
            <span>100</span>
          </div>
        </div>
        <div
          className={`d-flex align-items-center justify-content-center gap-3 p-3`}
          style={{ background: "#6F42C1", borderRadius: "16px" }}
        >
          {/*  Icon*/}
          <div className={`d-flex align-items-center justify-content-center`}>
            <MdOutlineHomeWork size={32} className={`text-skWhite`} />
          </div>
          {/*Text*/}
          <div
            className={`d-flex flex-column justify-content-center text-skWhite`}
          >
            <h5 className={`m-0`}>Spaces</h5>
            <span>100</span>
          </div>
        </div>
      </div>
      <div
        className={`w-100 d-flex flex-column align-items-center justify-content-center gap-3 p-3 bg-skWhite`}
        style={{ borderRadius: "10px", border: "2px solid #242831" }}
      >
        <h2 className={"ms-0 me-auto"}>Order overview</h2>
        <div>
          <ButtonGroup>
            <Button
              variant="outline-dark"
              onClick={() => setChartDuration(7)}
              active={chartDuration === 7}
            >
              7 days
            </Button>
            <Button
              variant="outline-dark"
              onClick={() => setChartDuration(30)}
              active={chartDuration === 30}
            >
              30 days
            </Button>
          </ButtonGroup>
        </div>
        <ComposedChart width={1280} height={320} data={mockChartData}>
          <Area
            type="monotone"
            dataKey="bookings"
            fill="#81C995"
            fillOpacity={0.1}
            stroke="#81C995"
            strokeWidth={2}
            dot={{ strokeWidth: 6 }}
          />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
        </ComposedChart>
      </div>
      <div
        className={`w-100 d-flex align-items-center justify-content-center gap-3`}
      >
        <div
          className={`w-50 d-flex flex-column align-items-center justify-content-center gap-3 p-3 bg-skWhite`}
          style={{ borderRadius: "10px", border: "2px solid #242831" }}
        >
          <h2 className={"ms-0 me-auto"}>Order overview</h2>
          {OfficeType.map((item, index) => (
            <div className={`w-100 py-4 px-5`} key={index}>
              <div
                className={`d-flex align-items-center justify-content-between gap-3`}
              >
                <h5>{item.type}</h5>
                <h6 className={`text-muted`}>{item.value}%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress"
                  role="progressbar"
                  style={{
                    width: `${item.value}%`,
                    background: item.background,
                  }}
                  aria-label="Basic example"
                  aria-valuenow={item.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`w-50 d-flex flex-column align-items-center justify-content-center gap-3 p-3 bg-skWhite`}
          style={{ borderRadius: "10px", border: "2px solid #242831" }}
        >
          <h2 className={"ms-0 me-auto"}>User overview</h2>
          <div className={`d-flex gap-5`}>
            {UserRegistered.map((item, index) => (
              <div className={`text-center`}>
                <h3>{item.value}</h3>
                <h6 className={`text-muted`}>{item.type}</h6>
              </div>
            ))}
          </div>
          {UserRegistered.map((item, index) => (
            <div className={`w-100 py-4 px-5`} key={index}>
              <div
                className={`d-flex align-items-center justify-content-between gap-3`}
              >
                <h5>{item.type}</h5>
                <h6 className={`text-muted`}>{item.value} user</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress"
                  role="progressbar"
                  style={{
                    width: `${item.value}%`,
                    background: item.background,
                  }}
                  aria-label="Basic example"
                  aria-valuenow={item.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
