import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context/index.js";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

const token = import.meta.env.VITE_GRAPHQL_TOKEN;

const client = () => {
  const httpLink = new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_URI,
  });
  const wsLink = new GraphQLWsLink(
    createClient({
      url: import.meta.env.VITE_GRAPHQL_WS,
      connectionParams: {
        headers: {
          Authorization: `Bearer ${token}`,
          "x-hasura-admin-secret": token,
        },
      },
    })
  );
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
        "x-hasura-admin-secret": token,
      },
    };
  });

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
  );

  return new ApolloClient({
    link: ApolloLink.from([authLink, splitLink]),
    cache: new InMemoryCache(),
  });
};

export default client;
