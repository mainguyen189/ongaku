
import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {  //hardcode for now
      searchResults: [{name: 'name', artist: 'artist', album: 'album', id: 1}, {name: 'name2', artist: 'artist2', album: 'album2', id: 2}],
      playlistName: 'playlistname',
      playlistTrack: [{name: 'playname', artist: 'playartist', album: 'palyalbum', id: 3}, {name: 'playname2', artist: 'playartist2', album: 'album2', id: 4}]
    }
  }

  render() {
    return (
      <div>
        <h1>On<span className="highlight">ga</span>ku</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist playlistName={this.state.playlistName} playlistTrack={this.state.playlistTrack}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
