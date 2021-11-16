import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'https://upward-gator-23.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret" : "5agM7i36Dr8RbQ3dlPPhT2NKO0j1POcLWlDKXpyXVzHSOPYpKAbIU6yUgzKKqZ2U"
    },
  });

  export default client;