import React, { useState } from "react";

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mostToLeast, setMostToLeast] = useState(true);
  const [upvoteQuery, setUpvoteQuery] = useState("");

  const performSearch = (event) => {
    event.preventDefault();
    //validation goes here 👀 
    if (searchQuery === "") {
      alert('Search field is empty. Please fill search field to search for post')
      //error
    } else {
      //props.handleSearch(searchQuery, mostToLeast);
    }
      props.handleSearch(searchQuery, mostToLeast, upvoteQuery)
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-success mb-3">
        <div className="container">
          <span className="navbar-brand">Subreddit</span>
        </div>
      </nav>
      <div id="search-container" className="container">
        <div id="search" className="card card-body bg-light mb-2">
          <h4>Search</h4>
          <form id="search-form" className="search">
            <div className="form-group search-form">
              <input
                type="text"
                className="form-control mb-3 search-input"
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search for post..."
              />
            </div>
            <div className="form-check form-check-inline">
              Sort By:
              <input
                className="form-check-input ml-2"
                type="radio"
                checked={mostToLeast}
                onChange={(event) => setMostToLeast(event.target.value)}
                name="sortby"
                value="most"
              />
              <label className="form-check-label">Most to Least Upvotes</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                onChange={(event) => setMostToLeast(!event.target.value)}
                checked={!mostToLeast}
                name="sortby"
                value="least"
              />
              <label className="form-check-label">Least to Most Upvotes</label>
            </div>
            <h5 className="mt-2">Filter:</h5>
            <div className="form-group">
              Date:
              <input
                name="filter"
                id="dates"
                className="form-control"
                type="date"
              />
              Number of UpVotes:
              <input
                name="filter"
                type="number"
                id="votes"
                className="form-control"
                onChange={(event) => setUpvoteQuery(event.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success btn-block mt-4"
              id="search-btn"
              onClick={performSearch}
            >
              Search
            </button>
          </form>
        </div>
        
        <div id="posts"></div>
      </div>
    </div>
  );
};

export default Search;
