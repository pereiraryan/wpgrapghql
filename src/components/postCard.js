import React from "react";

const formatDate = (date) => new Date(date).toDateString();

function PostCard({ post }) {
  const {
    title,
    date,
    link,
    author: {
      node: { name: authorName }
    },
    featuredImage
  } = post;

  return (
    <div className="post-card">
      {featuredImage ? (
        <img
          src={featuredImage.node.sourceUrl}
          alt={featuredImage.node.altText}
        />
      ) : null}
      <a href={link}>
        <h3>{title}</h3>
      </a>
      <p>
        <span className="text-bold">Date:</span> {formatDate(date)}
      </p>
      <p>
        <span className="text-bold">Author:</span> {authorName}
      </p>
    </div>
  );
}

export default PostCard;
