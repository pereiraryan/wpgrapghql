import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://content.wpgraphql.com/graphql",
  cache: new InMemoryCache()
});
