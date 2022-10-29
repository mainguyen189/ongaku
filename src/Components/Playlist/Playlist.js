import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

class Playlist extends React.Component{
    render(){
        return(
            <div className="Playlist">
                <input defaultValue={"My New Playlist"}/>
                <TrackList tracks={this.props.playlistTrack} 
                            onRemove={this.props.onRemove}
                            isRemoval={true}/>
                <button className="Playlist-save">Save to Spotify</button>
            </div>
        )
    }
}

export default Playlist;