import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Image } from "react-bootstrap";
import { AiOutlineSend } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import style from "./style.module.css";

const LiveChat = () => {
  const [messageArray, setMessageArray] = useState([
    {
      id: 1,
      from: "Tower A",
      content: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      unread: 2,
      img: "https://via.placeholder.com/64",
    },
    {
      id: 2,
      from: "Tower B",
      content: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      unread: 0,
      img: "https://via.placeholder.com/64",
    },
    {
      id: 3,
      from: "Tower C",
      content: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      unread: 0,
      img: "https://via.placeholder.com/64",
    },
    {
      id: 4,
      from: "Tower D",
      content: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      unread: 1,
      img: "https://via.placeholder.com/64",
    },
    {
      id: 5,
      from: "Tower E",
      content: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      unread: 0,
      img: "https://via.placeholder.com/64",
    },
    {
      id: 6,
      from: "Tower F",
      content: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      unread: 4,
      img: "https://via.placeholder.com/64",
    },
  ]);
  const [liveChat, setLiveChat] = useState([
    {
      type: "tower",
      message: "Lorem ipsum dolor sit amet.",
      timestamp: "12:00",
    },
  ]);
  const [activeBooking, setActiveBooking] = useState([
    {
      id: 1,
      unit: "Tower C",
      duration: "5 months",
      startDate: "2020-01-01",
      endDate: "2020-06-01",
      status: "Pending",
      price: "IDR 2.500.000,- / month",
    },
    {
      id: 2,
      unit: "Tower D",
      duration: "2 months",
      startDate: "2020-01-01",
      endDate: "2020-03-01",
      status: "Pending",
      price: "IDR 1.500.000,- / month",
    },
  ]);

  const chatBoxRef = useRef();
  const lastChatRef = useRef();

  // set overflow to the end of the chat
  useEffect(() => {
    if (!lastChatRef) return;
    lastChatRef.current.scrollIntoView({ behavior: "smooth" });
  }, [liveChat]);

  // Handler
  const handleSendChat = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    if (message) {
      setLiveChat([
        ...liveChat,
        {
          type: "user",
          message,
          timestamp: "12:03",
        },
      ]);
      e.target.message.value = "";
    } else {
      alert("Please enter your message");
    }
  };

  return (
    <Container
      className={`d-flex align-items-center justify-content-center p-0`}
      fluid
    >
      <Container
        className={`d-flex py-2 gap-4 text-start overflow-auto w-100 ${style.containerMaxHeight}`}
        fluid={`lg`}
      >
        {/*  Chat list */}
        {/* TODO:
          - Overflow message
         */}
        <Col className={`${style.container25}`}>
          <h2 className={`fw-bold`}>Live chat</h2>

          <div className={`w-100 overflow-auto mw-100`}>
            {/*  New message */}
            <h5>New messages</h5>
            <div className={`my-3`}>
              {messageArray
                .filter((message) => message.unread > 0)
                .map((message) => (
                  <div
                    key={message.id}
                    className={`d-flex rounded my-2 flex-grow-1 gap-2 align-items-center justify-content-center w-100 p-2 bg-skMidnight text-skWhite`}
                  >
                    <Image src={message.img} className={`rounded-circle`} />
                    <div className={`my-auto d-flex flex-column gap-1`}>
                      <h6 className={`fs-5 fw-bold m-0`}>{message.from}</h6>
                      <p className={`m-0 ${style.newMessageContent}`}>
                        {message.content}
                      </p>
                    </div>
                    <div
                      className={`bg-skSmoke text-skBlack p-1 rounded-circle ${style.newMessageUnread}`}
                    >
                      {message.unread}
                    </div>
                  </div>
                ))}
            </div>

            {/*  Message List */}
            <h5>Last messages</h5>

            <div className={`gap-2 my-3 overflow-auto`}>
              {messageArray.map((message) => (
                <div
                  key={message.id}
                  className={`d-flex my-2 rounded flex-grow-1 gap-2 align-items-center justify-content-center w-100 p-2 bg-skMidnight text-skWhite`}
                >
                  <Image src={message.img} className={`rounded-circle`} />
                  <div className={`my-auto d-flex flex-column gap-1`}>
                    <h6 className={`fs-5 fw-bold m-0`}>{message.from}</h6>
                    <p className={`m-0 ${style.newMessageContent}`}>
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>

        {/*  Live chat */}
        <Col
          className={`d-flex flex-column justify-content-between p-4 bg-skMidnight text-skWhite rounded w-100 ${style.container50} ${style.chatContainer}`}
          ref={chatBoxRef}
        >
          {/* Receiver detail */}
          <div className={`d-flex align-items-center gap-4 px-4`}>
            <Image
              src={`https://via.placeholder.com/80`}
              alt={"Tower"}
              className={`rounded-circle`}
            />
            <div className={`d-flex flex-column gap-2`}>
              <h5 className={`fs-3 fw-bold m-0`}>Tower C</h5>
              <span>Online</span>
            </div>
          </div>

          {/* Border */}
          <hr className={`w-100`} />

          {/* Chat */}
          <div className={`w-100 my-2 px-4 ${style.chatMessageContainer}`}>
            {liveChat.map((chat, index) => (
              <div key={index} className={`my-2`}>
                {chat.type === "tower" ? (
                  <div
                    className={`d-flex rounded flex-column text-skBlack ${style.chatMessage} ${style.chatFrom}`}
                  >
                    <span className={``}>{chat.message}</span>
                    <span className={`${style.chatTime}`}>
                      {chat.timestamp}
                    </span>
                  </div>
                ) : (
                  <div
                    className={`d-flex rounded flex-column text-skBlack ${style.chatMessage} ${style.chatSent}`}
                  >
                    <span className={``}>{chat.message}</span>
                    <span className={`${style.chatTime}`}>
                      {chat.timestamp}
                    </span>
                  </div>
                )}
              </div>
            ))}
            <div ref={lastChatRef} />
          </div>

          {/* Chat input */}
          <form
            className={`w-100 border border-skSmoke d-flex rounded`}
            onSubmit={handleSendChat}
          >
            {/* Input */}
            <div className={`d-flex p-2 w-100 gap-4 align-items-center`}>
              <button className={`w-fit border-0 m-0 p-1 bg-transparent`}>
                <BsEmojiSmile size={24} className={`text-skWhite`} />
              </button>
              <input
                className={`w-100 border-0 bg-transparent text-skWhite`}
                type={`text`}
                name={`message`}
                id={`message`}
                placeholder={`Input message...`}
                autoComplete={"off"}
              />
            </div>
            {/* Send */}
            <div className={`d-flex p-2 gap-4 align-items-center bg-skWhite`}>
              <button className={`w-fit border-0 m-0 p-1`}>
                <AiOutlineSend size={24} className={`text-skBlack`} />
              </button>
            </div>
          </form>
        </Col>

        {/* Current Booking */}
        <Col className={`${style.container25}`}>
          <h2 className={`fw-bold`}>Current booking</h2>
          <h5>{activeBooking.length} active booking</h5>
          <div className={`w-100 overflow-auto mw-100`}>
            {activeBooking.map((booking) => (
              <div
                key={booking.id}
                className={`w-100 my-2 h-fit bg-skMidnight text-skWhite rounded p-3 d-flex flex-column gap-1`}
              >
                <h6 className={`fs-5 fw-bold`}>{booking.unit}</h6>
                <span>{booking.unit}</span>
                <span>{booking.duration}</span>
                <span>
                  {booking.startDate} - {booking.endDate}
                </span>
                <span>{booking.price}</span>
              </div>
            ))}
          </div>
        </Col>
      </Container>
    </Container>
  );
};

export default LiveChat;
