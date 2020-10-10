// DOM References
const main = document.querySelector("main")!;
const search = document.getElementById("Search")! as HTMLInputElement;
const submit = document.getElementById("submit")! as HTMLButtonElement;
const home = document.getElementById("home")! as HTMLAnchorElement;
const createPlaylist = document.getElementById("createPlaylist");
const viewPlaylist = document.getElementById("viewPlaylist")!;
const renderPlayList = document.getElementById("renderPlayList")!;

// VARIABLES
let albumName: string = "";
let url = "https://theaudiodb.com/api/v1/json/1/album.php?i=112024";
let count = 0;
let checked = -1;

// LocalStorage
if (!localStorage.url) {
  localStorage.url = url;
} else {
  console.log("False");
}

interface musicInfo {
  artistName?: string;
}
let flag = false;
let store: any[] = [];

class MusicPlayer {
  private _musicInfo;
  constructor(musicInfo?: musicInfo) {
    this._musicInfo = musicInfo;
  }

  async fetchSongs() {
    const PlayListNumber = parseInt(localStorage.getItem("PlayListNumber")!);
    const localSongs = JSON.parse(
      localStorage.getItem(`playlist-${PlayListNumber}`)!
    );
    console.log("Local Songs", localSongs);

    //
    let html = "";
    localSongs.forEach((alb: any) => {
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
    loader?.classList.add("hidden");
    main.classList.remove("hidden");
  }

  searchSongs(e: any) {
    e.preventDefault();
    console.log("Clicked !!");
    localStorage.url = `https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${albumName}`;
    window.location.reload();
    this.fetchSongs();
  }
}

let user = new MusicPlayer();
user.fetchSongs();
