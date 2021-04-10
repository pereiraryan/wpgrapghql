import React from "react";

function SearchForm({ searchTerm, handleSearchTermChange }) {
  return (
    <form
      method="post"
      className="search-form"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearchTermChange(e.target.value)}
        placeholder="Search for blog posts…"
      />
    </form>
  );
}

export default SearchForm;
