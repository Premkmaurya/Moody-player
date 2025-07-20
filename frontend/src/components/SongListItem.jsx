import { FaHeart } from "react-icons/fa";
import { useState } from "react";

function SongListItem() {
  const [songs, setSongs] = useState([
    { title: "Attention", artist: "Doja Cat" },
    { title: "Calm Down", artist: "Rema" },
    { title: "Kill Bill", artist: "SZA" },
    { title: "As It Was", artist: "Harry Styles" },
  ]);

  return (
    <div>
      {songs.map((song, idx) => (
        <div key={idx} className="song-list-item" style={{ display: "flex", justifyContent: "space-between", padding: "8px", borderBottom: "1px solid #ddd" }}>
          <div>
            <div className="song-title" style={{ fontWeight: "bold" }}>{song.title}</div>
            <div className="song-artist" style={{ fontSize: "smaller", color: "gray" }}>{song.artist}</div>
          </div>
          <div className="song-actions">
            <FaHeart color="red" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SongListItem;
