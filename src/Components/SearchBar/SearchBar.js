import React from "react";

import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div class="SearchBar">
                <input placeholder="Find a Song, Album, or Artist" />
                <button class="SearchButton">Search</button>
            </div>
        )
    }
}

export default SearchBar;