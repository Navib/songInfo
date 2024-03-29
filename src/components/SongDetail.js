import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  const { song } = props;
  if (!song) return <div> Select a song</div>;
  return (
    <div>
      <h3> Details for:</h3>
      <p>
        Title:
        {song.title}
        <br />
        Duration:
        {song.durattion}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};
export default connect(mapStateToProps)(SongDetail);
