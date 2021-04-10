import React from "react";
import { useQuery, gql } from "@apollo/client";

import PostCard from "./postCard";

const searchPosts = gql`
  query POSTS_SEARCH_QUERY($searchTerm: String!) {
    posts(where: { search: $searchTerm }) {
      nodes {
        databaseId
        title
        date
        link
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

function PostsList({ searchTerm }) {
  const { loading, error, data } = useQuery(searchPosts, {
    variables: { searchTerm }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const postsFound = !!data?.posts.nodes.length;
  if (!postsFound) {
    return <p>No matching posts found.</p>;
  }

  return (
    <div className="posts-list">
      {data.posts.nodes.map((post) => (
        <PostCard key={post.databaseId} post={post} />
      ))}
    </div>
  );
}

export default PostsList;
