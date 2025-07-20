import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import FacialExpression from "../src/components/FacialExpression"
import SongListItem from "../src/components/SongListItem"

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
            <SongListItem />
        </div>
      </main>
    </div>
  );
}
