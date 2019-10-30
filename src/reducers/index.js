import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", durattion: "4:18" },
    { title: "Macarena", durattion: "2:30" },
    { title: "All Star", durattion: "3:15" },
    { title: "I Want it That Way", durattion: "1:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
