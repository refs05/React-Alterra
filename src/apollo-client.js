import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'https://charming-hedgehog-20.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret" : "1gXBb6D40LmTKF7jJ1VA0Uv2uHSBMvJLBkmsTs9gAN2mlfL6QOyMJgAPox5p59su"
    }
  });

  export default client;