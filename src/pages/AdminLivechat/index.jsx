import { useMutation, useSubscription } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image } from "react-bootstrap";
import { AiOutlineSend } from "react-icons/ai";
import {
  BsCheck,
  BsCheck2,
  BsCheckAll,
  BsEmojiFrown,
  BsEmojiSmile,
} from "react-icons/bs";
import ReactLoading from "react-loading";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  ADMIN_READ_CHAT,
  ADMIN_SEND_CHAT,
  ADMIN_SUBS_LIVECHAT_ROOM,
  ADMIN_SUBSCRIBE_LIVECHAT,
  CUST_READ_CHAT,
  CUST_SEND_CHAT,
  SUBS_LIVECHAT_ROOM,
  SUBSCRIBE_LIVECHAT,
} from "../../graphql/Livechat/index.js";
import useStoreAuth from "../../hooks/store/useStoreAuth.js";
import { decrypt } from "../../utils/encryption.js";
import style from "./style.module.css";

const AdminLivechat = () => {
  const navigate = useNavigate();
  const [messageArray, setMessageArray] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentRoom, setCurrentRoom] = useState({});
  let { id } = useParams();

  const { data: dataLivechatRoom, loading: loadingLivechatRoom } =
    useSubscription(ADMIN_SUBS_LIVECHAT_ROOM, {
      fetchPolicy: "no-cache",
      shouldResubscribe: true,
    });
  const {
    data: dataLivechat,
    loading: loadingLivechat,
    error: errorLivechat,
  } = useSubscription(ADMIN_SUBSCRIBE_LIVECHAT, {
    variables: {
      id: id,
    },
    fetchPolicy: "no-cache",
    shouldResubscribe: true,
  });
  const [readChat, { data: dataReadChat }] = useMutation(ADMIN_READ_CHAT);
  const [sendChat, { data: dataSendChat, loading: loadingSendChat }] =
    useMutation(ADMIN_SEND_CHAT);

  useEffect(() => {
    console.log(loadingLivechatRoom);
    if (id && !loadingLivechatRoom) {
      // const findRoomId = dataLivechatRoom.chatroom.find(
      //   (item) => parseInt(item["buildingId"]) === parseInt(id)
      // );
      const findRoomId = dataLivechatRoom.chatroom.find(
        (item) => item["id"] === id
      );
      setSelectedRoom(findRoomId);
      console.log("Assign room");
    } else {
      setSelectedRoom(null);
    }
  }, [id, loadingLivechatRoom, dataLivechatRoom]);

  useEffect(() => {
    if (dataLivechatRoom && !loadingLivechatRoom) {
      let chatrooms = dataLivechatRoom.chatroom;
      chatrooms = chatrooms.sort((next, current) => {
        const aDate = new Date(next.chats[0].sendAt);
        const bDate = new Date(current.chats[0].sendAt);
        return bDate - aDate;
      });
      setMessageArray(chatrooms);
    }
  }, [dataLivechatRoom, loadingLivechatRoom, selectedRoom]);
  useEffect(() => {
    console.log("Fetch chatroom");
    if (errorLivechat) {
      return console.error(errorLivechat);
    }
    if (dataLivechat && !loadingLivechat && selectedRoom) {
      console.log("Data livechat");
      console.log(dataLivechat);
      setCurrentRoom(dataLivechat.chatroom[0]);
      readChat({ variables: { chatId: dataLivechat.chatroom[0].id } });
    }
  }, [dataLivechat, loadingLivechat, selectedRoom]);

  // Handler
  const handleSendChat = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    if (message) {
      sendChat({
        variables: {
          chatroomId: currentRoom.id,
          message: message,
        },
      }).then(() => {
        e.target.message.value = "";
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a message",
      });
    }
  };

  if (loadingLivechatRoom) {
    return (
      <div
        className={`w-100 d-flex align-items-center justify-content-center`}
        style={{ minHeight: "100vh" }}
      >
        <ReactLoading type={"spin"} color={"#242831"} width={32} height={32} />
      </div>
    );
  }

  return (
    <Container
      className={`d-flex align-items-center justify-content-center p-0 ${style.pageContainer}`}
      fluid
    >
      <Container
        className={`d-flex py-5 gap-4 text-start overflow-auto w-100 ${style.containerMaxHeight}`}
        style={{ minHeight: "100vh" }}
        fluid={`lg`}
      >
        {/*  Chat list */}
        {/* TODO:
					 - Overflow message
					 */}
        <Col className={`${style.container25}`}>
          <h2 className={`fw-bold`}>Live chat</h2>

          <div className={`w-100 overflow-auto mw-100`}>
            {/*  Message List */}
            <h5>Chatroom</h5>

            <div className={`gap-2 my-3 overflow-auto`}>
              {messageArray.map((message) => (
                <div
                  key={message.id}
                  className={`d-flex w-100 my-2 flex-grow-1 gap-3 align-items-center justify-content-start w-100 p-2 ${
                    // parseInt(selectedRoom.buildingId) === message.buildingId &&
                    // selectedRoom.customer === message.customer
                    //   ? "bg-skMischka text-skMidnight"
                    //   : "bg-skMidnight text-skWhite"
                    id === message.id
                      ? "bg-skMischka text-skMidnight"
                      : "bg-skMidnight text-skWhite"
                  }`}
                  // style={{
                  //   cursor:
                  //     parseInt(selectedRoom) === message.buildingId
                  //       ? "default"
                  //       : "pointer",
                  //   borderRadius: "10px",
                  // }}
                  style={{
                    cursor: id === message.id ? "default" : "pointer",
                    borderRadius: "10px",
                  }}
                  onClick={() => {
                    // if (
                    //   parseInt(selectedRoom.buildingId) ===
                    //     message.buildingId &&
                    //   selectedRoom.customer === message.customer
                    // ) {
                    //   setSelectedRoom(message.buildingId);
                    //   navigate(`/admin/chat/${message.buildingId}`);
                    //   setCurrentRoom({});
                    // }
                    console.log(message.id);
                    if (id !== message.id) {
                      setSelectedRoom(message.id);
                      navigate(`/admin/chat/${message.id}`);
                      setCurrentRoom({});
                    }
                  }}
                >
                  <Image
                    src={message.buildingImg}
                    className={`rounded-3`}
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      aspectRatio: "1/1",
                    }}
                  />
                  <div className={`my-auto d-flex flex-column gap-1 w-100`}>
                    <h6
                      className={`fw-bold m-0 d-flex align-items-center w-100 justify-content-between`}
                      style={{ fontSize: "18px" }}
                    >
                      {message.customer}
                    </h6>
                    <div
                      className={`m-0 d-flex w-100 align-items-center justify-content-between`}
                      style={{ width: "12rem" }}
                    >
                      <p className={`m-0 ${style.newMessageContent}`}>
                        {message.chats.length > 0
                          ? message.chats[0].message
                          : "Start chatting now!"}
                      </p>
                      {message.chats_aggregate.aggregate.count > 0 && (
                        <div
                          className={`d-flex align-items-center justify-content-center fw-normal bg-skWhisper text-skMidnight`}
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            aspectRatio: "1/1",
                            fontSize: "14px",
                          }}
                        >
                          {message.chats_aggregate.aggregate.count}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>

        {/*  Live chat */}
        {id ? (
          <Col
            className={`d-flex flex-column justify-content-between p-3 bg-skMidnight text-skWhite w-100 ${style.container50} ${style.chatContainer}`}
            style={{ borderRadius: "10px" }}
          >
            {loadingLivechat ? (
              <div
                className={`w-100 h-100 d-flex align-items-center justify-content-center`}
              >
                <ReactLoading
                  type={"bubbles"}
                  color={"#FFFFFF"}
                  width={32}
                  height={32}
                />
              </div>
            ) : (
              <>
                {/* Receiver detail */}
                <div className={`d-flex align-items-center gap-4 px-4`}>
                  <Image
                    src={currentRoom.buildingImg}
                    alt={currentRoom.buildingName}
                    className={`rounded-3`}
                    style={{
                      width: "72px",
                      height: "72px",
                      objectFit: "cover",
                      aspectRatio: "1/1",
                    }}
                  />
                  <div
                    className={`d-flex flex-column align-items-start justify-content-between gap-2 w-100`}
                  >
                    <h5 className={`fs-4 fw-bold m-0`}>
                      {currentRoom.buildingName}
                    </h5>
                    <h6 className={`fs-6 m-0`}>{currentRoom.customer}</h6>
                    <Button
                      variant={"primary"}
                      size={"sm"}
                      className={`d-none`}
                      onClick={() => {
                        navigate(`/details/${currentRoom.buildingId}`);
                      }}
                    >
                      View space
                    </Button>
                  </div>
                </div>

                {/* Border */}
                <hr className={`w-100`} />

                {/* Chat */}
                <div
                  className={`w-100 my-2 px-4 ${style.chatMessageContainer}`}
                >
                  {currentRoom.chats?.map((chat) => (
                    <div key={chat.id} className={`my-2`}>
                      {chat.sender.toLowerCase() === "admin" ? (
                        <div
                          className={`d-flex flex-column text-skMidnight ${style.chatMessage} ${style.chatSent}`}
                          title={`Sent at ${new Intl.DateTimeFormat("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                          }).format(new Date(chat.sendAt))}`}
                        >
                          <h6
                            className={`fw-bold`}
                            style={{
                              marginRight: "0",
                              marginLeft: "auto",
                              fontSize: "14px",
                              marginTop: "0",
                              marginBottom: "0",
                            }}
                          >
                            Admin
                          </h6>
                          <span
                            style={{
                              marginTop: "4px",
                              fontSize: "16px",
                              marginLeft: "auto",
                              marginRight: "0",
                              textAlign: "right",
                            }}
                          >
                            {chat.message}
                          </span>
                          <span className={`${style.chatTime}`}>
                            {chat.read ? (
                              <BsCheckAll
                                size={12}
                                className={`text-primary`}
                              />
                            ) : (
                              <BsCheck size={12} />
                            )}
                            {"・"}
                            <span>
                              {new Intl.DateTimeFormat("id-ID", {
                                hour: "2-digit",
                                minute: "2-digit",
                              }).format(new Date(chat.sendAt))}
                            </span>
                          </span>
                        </div>
                      ) : (
                        <div
                          className={`d-flex flex-column text-skMidnight ${style.chatMessage} ${style.chatFrom}`}
                          title={`Sent at ${new Intl.DateTimeFormat("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                          }).format(new Date(chat.sendAt))}`}
                        >
                          <h6
                            className={`fw-bold`}
                            style={{
                              marginLeft: "0",
                              marginRight: "auto",
                              fontSize: "14px",
                              marginTop: "0",
                              marginBottom: "0",
                            }}
                          >
                            {chat.sender}
                          </h6>
                          <span
                            style={{
                              marginTop: "4px",
                              fontSize: "16px",
                            }}
                          >
                            {chat.message}
                          </span>
                          <span className={`${style.chatTime}`}>
                            <span>
                              {new Intl.DateTimeFormat("id-ID", {
                                hour: "2-digit",
                                minute: "2-digit",
                              }).format(new Date(chat.sendAt))}
                            </span>
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Chat input */}
                <form
                  className={`w-100 border border-skSmoke d-flex`}
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    height: "4rem",
                  }}
                  onSubmit={handleSendChat}
                >
                  {/* Input */}
                  <div className={`d-flex p-2 w-100 gap-1 align-items-center`}>
                    <div className={`w-fit border-0 m-0 p-1 bg-transparent`}>
                      <BsEmojiSmile size={24} className={`text-skWhite`} />
                    </div>
                    <input
                      className={`w-100 border-0 bg-transparent text-skWhite form-control`}
                      type={`text`}
                      name={`message`}
                      id={`message`}
                      placeholder={`Input message...`}
                      autoComplete={"off"}
                    />
                  </div>
                  {/* Send */}
                  <div
                    className={`d-flex gap-4 align-items-center justify-content-center bg-skWhite`}
                    style={{
                      borderRadius: "10px",
                      height: "100%",
                      aspectRatio: "1/1",
                    }}
                  >
                    <button className={`w-fit border-0 m-0 p-1 bg-transparent`}>
                      {loadingSendChat ? (
                        <ReactLoading
                          type={"spin"}
                          color={"#242831"}
                          width={24}
                          height={24}
                        />
                      ) : (
                        <AiOutlineSend size={24} className={`text-skBlack`} />
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </Col>
        ) : (
          <Col
            className={`d-flex flex-column justify-content-center gap-5 align-items-center p-4 bg-skMidnight text-skWhite w-100 ${style.container50} ${style.chatContainer}`}
            style={{ borderRadius: "10px" }}
          >
            <BsEmojiFrown size={64} className={`text-skWhite`} />
            <div
              className={`d-flex flex-column align-items-center justify-content-center`}
            >
              <h3>No chatroom selected!</h3>
              <span>Please select a chatroom</span>
            </div>
          </Col>
        )}
      </Container>
    </Container>
  );
};

export default AdminLivechat;
