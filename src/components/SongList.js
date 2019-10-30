import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  renderSongs() {
    return (
      <ul>
        {this.props.songs.map(song => {
          return <li key={song.title}>{song.title}</li>;
        })}
      </ul>
    );
  }
  render() {
    console.log("props", this.props);
    return <div>{this.renderSongs()}</div>;
  }
}

const mapStatetoProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(
  mapStatetoProps,
  null
)(SongList);
