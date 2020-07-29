import React from 'react'

const Search = (props) => {
    return (
        <div className="App">
            <nav className="navbar navbar-dark bg-success mb-3">
                <div className="container">
                <span className="navbar-brand">Subreddit</span>
                </div>
            </nav>
            <div id="search-container" class="container">
                <div id="search" class="card card-body bg-light mb-2">
                <h4>Search</h4>
                <form id="search-form" className="search" onSubmit={props.bookSearch}>
                    <div className="form-group search-form">
                    <input type="text" className="form-control mb-3 search-input" onChange={props.handleSearch} placeholder="Search for post..."/>
                    </div>
                    <div className="form-check form-check-inline">
                    Sort By:
                    <input className="form-check-input ml-2" type="radio" name="sortby" value="most" checked/>
                    <label className="form-check-label">
                        Most to Least Upvotes
                    </label>
                    </div> 
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="sortby" value="least"/>
                    <label className="form-check-label">
                    Least to Most Upvotes
                    </label>
                    </div>
                    <h5 className="mt-2">Filter:</h5>
                    <div className="form-group">
                    Date:
                    <input name="filter" id="dates" className="form-control" type="date"/>
                    Number of UpVotes:
                    <input name="filter" id="votes" className="form-control" type="number"/>
                    </div>
                    <button type="submit" className="btn btn-success btn-block mt-4" id="search-btn">
                    Search
                    </button>
                </form>
                </div>
                <div id="posts"></div>
            </div>
        </div>    
    )
}

export default Search;