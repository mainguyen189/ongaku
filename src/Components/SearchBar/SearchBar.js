import React from "react";

import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Find a Song, Album, or Artist" />
                <button className="SearchButton">Search</button>
            </div>
        )
    }
}

export default SearchBar;