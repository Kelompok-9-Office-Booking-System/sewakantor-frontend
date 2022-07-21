// noinspection GraphQLUnresolvedReference

import { gql } from "@apollo/client";

export const SUBS_LIVECHAT_ROOM = gql`
  subscription SubsLivechatRoom($userEmail: String!) {
    chatroom(
      where: { customer: { _eq: $userEmail } }
      order_by: { createdDate: desc }
    ) {
      id
      buildingId
      buildingName
      buildingImg
      customer
      createdDate
      updatedDate
      chats(order_by: { sendAt: desc }, limit: 1) {
        id
        message
        sender
        sendAt
        read
      }
      chats_aggregate(where: { read: { _eq: false } }) {
        aggregate {
          count
        }
      }
    }
  }
`;

export const GET_LIVECHAT_ROOM = gql`
  query GetLivechatRoom($userEmail: String!) {
    chatroom(where: { customer: { _eq: $userEmail } }) {
      id
      buildingId
      buildingName
      buildingImg
      customer
      createdDate
      updatedDate
    }
  }
`;

export const FIND_LIVECHAT_ROOM = gql`
  query FindLivechatRoom($userEmail: String!, $buildingId: Int) {
    chatroom(
      where: { customer: { _eq: $userEmail }, buildingId: { _eq: $buildingId } }
    ) {
      id
      buildingId
      buildingName
      buildingImg
      customer
      createdDate
      updatedDate
    }
  }
`;

export const SUBSCRIBE_LIVECHAT = gql`
  subscription SubscribeLivechat($userEmail: String!, $buildingId: Int!) {
    chatroom(
      where: { customer: { _eq: $userEmail }, buildingId: { _eq: $buildingId } }
    ) {
      id
      buildingId
      buildingName
      buildingImg
      customer
      createdDate
      updatedDate
      chats(order_by: { sendAt: asc }) {
        id
        message
        read
        readAdmin
        sendAt
        sender
      }
    }
  }
`;

export const CUST_READ_CHAT = gql`
  mutation CustReadChat($chatId: uuid!) {
    update_chat(where: { chatroom: { _eq: $chatId } }, _set: { read: true }) {
      returning {
        id
        message
        read
        chatroom
      }
    }
  }
`;

export const CUST_SEND_CHAT = gql`
  mutation CustSendChat(
    $chatroomId: uuid!
    $email: String!
    $message: String!
  ) {
    insert_chat(
      objects: {
        chatroom: $chatroomId
        message: $message
        sender: $email
        read: true
      }
    ) {
      returning {
        id
        chatroom
        message
      }
    }
  }
`;

export const MUTATION_CREATE_ROOM = gql`
  mutation CreateLivechatRoom(
    $userEmail: String!
    $buildingId: Int!
    $buildingName: String!
    $buildingImg: String!
  ) {
    insert_chatroom(
      objects: {
        buildingId: $buildingId
        buildingImg: $buildingImg
        buildingName: $buildingName
        customer: $userEmail
      }
    ) {
      returning {
        id
        customer
        buildingId
        buildingImg
        buildingName
      }
    }
  }
`;
