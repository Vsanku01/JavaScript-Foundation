"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// DOM References
const main = document.querySelector("main");
const search = document.getElementById("Search");
const submit = document.getElementById("submit");
const home = document.getElementById("home");
const createPlaylist = document.getElementById("createPlaylist");
const viewPlaylist = document.getElementById("viewPlaylist");
const renderPlayList = document.getElementById("renderPlayList");
// VARIABLES
let albumName = "";
let url = "https://theaudiodb.com/api/v1/json/1/album.php?i=112024";
let count = 0;
let checked = -1;
// LocalStorage
if (!localStorage.url) {
    localStorage.url = url;
}
else {
    console.log("False");
}
let flag = false;
let store = [];
class MusicPlayer {
    constructor(musicInfo) {
        this._musicInfo = musicInfo;
    }
    fetchSongs() {
        return __awaiter(this, void 0, void 0, function* () {
            const PlayListNumber = parseInt(localStorage.getItem("PlayListNumber"));
            const localSongs = JSON.parse(localStorage.getItem(`playlist-${PlayListNumber}`));
            console.log("Local Songs", localSongs);
            //
            let html = "";
            localSongs.forEach((alb) => {
                html += `
      <div class="card col-sm-12 col-md-2 col-lg-2" style="width: 8rem" id="card">
      <img
        src= "${alb.strAlbumThumb}"  
        class="card-img-top"
        alt="album_name"
        id="album_name"
        onerror="this.src='https://images.unsplash.com/photo-1507246207829-732ed643ea0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';"
      />
      <div class="card-body">
        <h5 class="card-title">${alb.strAlbum}</h5>
        <p class="card-text">
        Rating: ${alb.intScore} ⭐️
        </p>
      </div>
    </div>
      `;
            });
            main.innerHTML = html;
            // Disable Loader
            loader === null || loader === void 0 ? void 0 : loader.classList.add("hidden");
            main.classList.remove("hidden");
        });
    }
    searchSongs(e) {
        e.preventDefault();
        console.log("Clicked !!");
        localStorage.url = `https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${albumName}`;
        window.location.reload();
        this.fetchSongs();
    }
}
let user = new MusicPlayer();
user.fetchSongs();
