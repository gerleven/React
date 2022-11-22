import { React, useEffect, useState } from "react";

export default class AppGlobalService {
  async GetArtist(artist) {
    debugger
    let artistApiUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
    try {
      let artistResponse = await (await fetch(artistApiUrl)).json();
      debugger
      return artistResponse;
    } catch (error) {
        debugger
      return error;
    }
  }
  async GetSong(artist, song) {
    let songApiUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    try {
      let songResponse = await (await fetch(songApiUrl)).json();
      return songResponse;
    } catch (error) {
      return error;
    }
  }
}
