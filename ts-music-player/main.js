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
const addToPlayList = (image, title, score) => {
    console.log("PLAYLIST_COUNT", count);
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            if (document.getElementById(`playlist-${i}`).checked && flag == false) {
                console.log("Selected Playlist Number", i);
                flag = true;
                checked = i;
                let plName = `playlist-${checked}`;
                let song = {
                    strAlbumThumb: image,
                    strAlbum: title,
                    intScore: score,
                };
                store = JSON.parse(localStorage.getItem(`${plName}`)) || [];
                store.push(song);
                // Set localStorage
                localStorage.setItem(`${plName}`, JSON.stringify(store));
            }
            else if (checked > -1) {
                let plName = `playlist-${checked}`;
                let song = {
                    strAlbumThumb: image,
                    strAlbum: title,
                    intScore: score,
                };
                console.log("Already Created");
                store.push(song);
                console.log(store);
                localStorage.setItem(`${plName}`, JSON.stringify(store));
            }
            else {
                alert("No Playlist selected :(");
            }
        }
    }
    else {
        alert("PlayList is not Created");
    }
};
class MusicPlayer {
    constructor(musicInfo) {
        this._musicInfo = musicInfo;
    }
    fetchSongs() {
        return __awaiter(this, void 0, void 0, function* () {
            let a = "10";
            console.log("Fetching Songs");
            console.log(localStorage.url);
            const fetchMusic = yield fetch(`${localStorage.url}`);
            const musicData = yield fetchMusic.json();
            console.log(musicData.album[0]);
            let html = "";
            musicData.album.forEach((alb) => {
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
        <a href="#" class="btn btn-primary" id="add-pl" onclick="addToPlayList('${alb.strAlbumThumb}','${alb.strAlbum}','${alb.intScore}')">Add to Playlist</a>
      </div>
    </div>
      `;
            });
            main.innerHTML = html;
        });
    }
    createPlaylist() {
        var _a;
        console.log("Clicked Playlist");
        count += 1;
        // let Playlist = document.createElement("a");
        // Playlist.setAttribute("class", "dropdown-item");
        // Playlist.setAttribute("href", "#");
        // Playlist.innerText = "PlayList-1";
        // let plName = Playlist.innerText;
        // localStorage.plName = [];
        let div = document.createElement("div");
        let Playlist = document.createElement("input");
        Playlist.type = "radio";
        Playlist.name = "playlist";
        Playlist.value = `playlist-${count}`;
        Playlist.id = `playlist-${count}`;
        let label = document.createElement("label");
        label.setAttribute("for", `playlist-${count}`);
        label.innerHTML = `playlist-${count}<br>`;
        div.append(Playlist, label);
        div.classList.add("options-div");
        (_a = document.querySelector(".dropdown-item")) === null || _a === void 0 ? void 0 : _a.append(div);
        // document.querySelector(".dropdown-item")?.append(Playlist);
    }
    // addList(): () => void {
    //   return () => {
    //     console.log("Hello World");
    //   };
    // }
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
// Listeners
search.addEventListener("input", (e) => {
    console.log(e.target.value);
    albumName = e.target.value;
});
submit.addEventListener("click", (e) => {
    user.searchSongs(e);
});
// Home
home.addEventListener("click", () => {
    localStorage.url = url;
    window.location.reload();
});
createPlaylist === null || createPlaylist === void 0 ? void 0 : createPlaylist.addEventListener("click", () => {
    user.createPlaylist();
});
