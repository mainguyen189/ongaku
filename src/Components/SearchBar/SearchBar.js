import React from "react";

class SearchBar extends React.Component {
    render() {
        return (
            <div class="SearchBar">
                <input placeholder="Input a Song, an Album, or an Artist" />
                <button class="SearchButton">Search</button>
            </div>
        )
    }
}