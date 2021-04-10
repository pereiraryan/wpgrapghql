import React, { useState, useMemo } from "react";
import { debounce } from "lodash";

import SearchForm from "./searchForm";
import PostsList from "./postsList";

function PostsFinder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const setDebouncedSearchTermMemoized = useMemo(
    () => debounce(setDebouncedSearchTerm, 300),
    []
  );

  function handleSearchTermChange(newSearchTerm) {
    setSearchTerm(newSearchTerm);
    setDebouncedSearchTermMemoized(newSearchTerm);
  }

  return (
    <div className="posts-search">
      <SearchForm
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
      />
      <PostsList searchTerm={debouncedSearchTerm} />
    </div>
  );
}

export default PostsFinder;
