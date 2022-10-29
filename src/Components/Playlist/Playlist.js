import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

class Playlist extends React.Component{
    render(){
        return(
            <div className="Playlist">
                <input defaultvalue={"My New Playlist"}/>
                <TrackList />
                <button className="Playlist-save">Save to Spotify</button>
            </div>
        )
    }
}

export default Playlist;