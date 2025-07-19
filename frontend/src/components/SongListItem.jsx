import { FaHeart } from "react-icons/fa";
import {useState} from "react"
function SongListItem() {
  const [songs,setSongs] = useState([])

  return (
    {songs.map((song,idx)=>{
      <div className="song-list-item">
          <div>
            <div className="song-title">{title}</div>
            <div className="song-artist">{artist}</div>
          </div>
          <div className="song-actions">
            <FaHeart />
          </div>
        </div>
       })
      };
  );
}

export default SongListItem;