import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import FacialExpression from "../src/components/FacialExpression"
import SongListItem from "../src/components/SongListItem"

const trendingSongs = [
  
];

export default function MusicApp() {
  return (
    <div className="music-app">
      <FacialExpression />
      <main className="song-list">
        <div>
        <h2>Recommanded Songs</h2>
            <SongListItem />
        </div>
      </main>
    </div>
  );
}
