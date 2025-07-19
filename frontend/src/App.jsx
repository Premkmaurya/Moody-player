import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import FacialExpression from "../src/components/FacialExpression"

const trendingSongs = [
  { title: "Attention", artist: "Doja Cat"},
  { title: "Calm Down", artist: "Rema"},
  { title: "Kill Bill", artist: "SZA" },
  { title: "As It Was", artist: "Harry Styles"},
];

export default function MusicApp() {
  return (
    <div className="music-app">
      <FacialExpression />
      <main>
        <h2>Recommanded Songs</h2>
        <div className="song-list">
          {trendingSongs.map((song, i) => (
            <SongListItem key={i} {...song} />
          ))}
        </div>
      </main>
    </div>
  );
}


function SongListItem({ title, artist }) {
  return (
    <div className="song-list-item">
      <div className="avatar"></div>
      <div>
        <div className="song-title">{title}</div>
        <div className="song-artist">{artist}</div>
      </div>
      <div className="song-actions">
        <FaHeart />
      </div>
    </div>
  );
}
