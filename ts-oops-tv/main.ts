const power = document.getElementById("power");
const volUp = document.getElementById("volUp");
const volDown = document.getElementById("volDown");
const channelUp = document.getElementById("channelUp");
const channelDown = document.getElementById("channelDown");
const changeTv = document.getElementById("changeTv");
const resetTv = document.getElementById("resetTv");
const tvDisplay = document.getElementById("player");
const plasmaCheck = document.getElementById("plasma");
console.log("check", localStorage.channelCount);

if (!localStorage.channelCount || localStorage.channelCount < 0) {
  localStorage.channelCount = 0;
}

localStorage.volume = 50;

if (plasmaCheck == null) {
  document.querySelector(
    ".status"
  ).innerHTML = `<p>Panasonic at channel ${localStorage.channelCount}, volume ${localStorage.volume}</p>`;
} else {
  document.querySelector(
    ".status"
  ).innerHTML = `<p>LG at channel ${localStorage.channelCount}, volume ${localStorage.volume}</p>`;
}

function clickCounter() {
  if (typeof Storage !== "undefined") {
    if (localStorage.channelCount) {
      localStorage.channelCount = Number(localStorage.channelCount) + 1;
    } else {
      localStorage.channelCount = 1;
    }
  }
}

// CONSTANTS
let VOLUME = localStorage.volume;
let CHANNEL = localStorage.channelCount;

interface tv_info {
  brand: string;
  channel?: number;
  price: number;
  inches: number;
  status: "ON" | "OFF";
  volume?: number;

  screenThickness?: number;
  energy?: number;
  lifespan?: number;
  refreshRate?: number;
  viewingAngle?: number;
  backLight?: string;
  displayDetails?: string;
}

// Lazy Object Literal Initialization
let tv = {} as tv_info;

class TV {
  private _brand;
  private _channel;
  private _volume;
  private _price;
  private _inches;
  constructor(tv: tv_info) {
    this._brand = tv.brand;
    this._channel = tv.channel ? tv.channel : 1;
    this._volume = tv.volume ? tv.volume : 50;
    this._price = tv.price;
    this._inches = tv.inches;
  }

  createTv() {
    tv.brand = this._brand;
    tv.channel = this._channel;
    tv.volume = this._volume;
    tv.price = this._price;
    tv.inches = this._inches;
    console.log(tv);
  }

  increaseVolume(event) {
    if (localStorage.volume >= 0 && localStorage.volume <= 100) {
      localStorage.volume = Number(localStorage.volume) + 10;
      event.target.setVolume(VOLUME);
    } else {
      alert("Max Vol Reached !!!");
    }
  }

  decreaseVolume(event) {
    if (localStorage.volume >= 10 && localStorage.volume <= 100) {
      localStorage.volume = Number(localStorage.volume) - 10;
      event.target.setVolume(localStorage.volume);
    } else {
      alert("Mutted 📳");
    }
  }

  increaseChannel(event) {
    if (CHANNEL <= 50) {
      clickCounter();
      window.location.reload();
    } else {
      alert("You have reached the last Channel");
    }
  }

  decreaseChannel(event) {
    if (localStorage.channelCount > 0) {
      localStorage.channelCount = Number(localStorage.channelCount) - 1;
      window.location.reload();
    } else {
      alert("Reached First Channel");
    }
  }

  resetTV() {
    tv.channel = 1;
  }

  status() {
    let stat = `${tv.brand} at channel ${tv.channel}, volume ${tv.volume}`;
    document.querySelector(".status").innerHTML = `<p>${stat}</p>`;
  }
}

let tvObj = new TV({
  brand: "Panasonic",
  channel: 0,
  price: 5000,
  inches: 50,
  status: "ON",
  volume: 30,
});

// **** PLAYER CONTROLS *******

// **** PLAYER CONTROLS *******

let led = {} as tv_info;

// Cause it extends is should also have parent props
// LED
class LED extends TV {
  private _ledBrand;
  private _ledChannel;
  private _ledVolume;
  private _ledPrice;
  private _ledInches;
  private _ledScreenThickness;
  private _ledEnergy;
  private _ledLifespan;
  private _ledRefreshRate;
  private _ledViewingAngle;
  private _ledBackLight;
  private _ledDisplayDetails;
  constructor(led: tv_info) {
    super(led);
    this._ledBrand = led.brand;
    this._ledChannel = led.channel ? led.channel : 1;
    this._ledVolume = led.volume ? led.volume : 50;
    this._ledPrice = led.price;
    this._ledInches = led.inches;
    this._ledScreenThickness = led.screenThickness;
    this._ledEnergy = led.energy;
    this._ledLifespan = led.lifespan;
    this._ledRefreshRate = led.refreshRate;
    this._ledViewingAngle = led.viewingAngle;
    this._ledBackLight = led.backLight;
    this._ledDisplayDetails = led.displayDetails;
  }

  createLEDTv() {
    led.brand = this._ledBrand;
    led.channel = this._ledChannel;
    led.volume = this._ledVolume;
    led.price = this._ledPrice;
    led.inches = this._ledInches;
    led.screenThickness = this._ledScreenThickness;
    led.energy = this._ledEnergy;
    led.lifespan = this._ledLifespan;
    led.refreshRate = this._ledRefreshRate;
    led.viewingAngle = this._ledViewingAngle;
    led.backLight = this._ledBackLight;
    led.displayDetails = this._ledDisplayDetails;
    console.log(led);
  }

  status() {
    let stat = `${tv.brand} at channel ${localStorage.channelCount}, volume ${localStorage.volume}`;
    document.querySelector(".status").innerHTML = `<p>${stat}</p>`;
  }
}

let ledObj = new LED({
  brand: "Panasonic",
  channel: 0,
  price: 5000,
  inches: 50,
  status: "ON",
  volume: 30,
  screenThickness: 10,
  energy: 5,
  lifespan: 10,
  refreshRate: 120,
  viewingAngle: 360,
  backLight: "flash",
  displayDetails: "HD",
});

let plasma = {} as tv_info;
// Plasma
class Plasma extends TV {
  private _plasmaBrand;
  private _plasmaChannel;
  private _plasmaVolume;
  private _plasmaPrice;
  private _plasmaInches;
  private _plasmaScreenThickness;
  private _plasmaEnergy;
  private _plasmaLifespan;
  private _plasmaRefreshRate;
  private _plasmaViewingAngle;
  private _plasmaBackLight;
  private _plasmaDisplayDetails;
  constructor(plasma: tv_info) {
    super(plasma);
    this._plasmaBrand = plasma.brand;
    this._plasmaChannel = plasma.channel ? plasma.channel : 1;
    this._plasmaVolume = plasma.volume ? plasma.volume : 50;
    this._plasmaPrice = plasma.price;
    this._plasmaInches = plasma.inches;
    this._plasmaScreenThickness = plasma.screenThickness;
    this._plasmaEnergy = plasma.energy;
    this._plasmaLifespan = plasma.lifespan;
    this._plasmaRefreshRate = plasma.refreshRate;
    this._plasmaViewingAngle = plasma.viewingAngle;
    this._plasmaBackLight = plasma.backLight;
    this._plasmaDisplayDetails = plasma.displayDetails;
  }

  createPlasmaTv() {
    plasma.brand = this._plasmaBrand;
    plasma.channel = this._plasmaChannel;
    plasma.volume = this._plasmaVolume;
    plasma.price = this._plasmaPrice;
    plasma.inches = this._plasmaInches;
    plasma.screenThickness = this._plasmaScreenThickness;
    plasma.energy = this._plasmaEnergy;
    plasma.lifespan = this._plasmaLifespan;
    plasma.refreshRate = this._plasmaRefreshRate;
    plasma.viewingAngle = this._plasmaViewingAngle;
    plasma.backLight = this._plasmaBackLight;
    plasma.displayDetails = this._plasmaDisplayDetails;
    console.log(led);
  }

  displayPlasma(event) {
    if (plasmaCheck == null) {
      window.location.replace("/plasma.html");
    } else {
      window.location.replace("/index.html");
    }
  }

  status() {
    let stat = `${plasma.brand} at channel ${localStorage.channelCount}, volume ${localStorage.volume}`;
    document.querySelector(".status").innerHTML = `<p>${stat}</p>`;
  }
}

let plasmaObj = new Plasma({
  brand: "LG",
  channel: 30,
  price: 5000,
  inches: 80,
  status: "ON",
  volume: 30,
  screenThickness: 10,
  energy: 5,
  lifespan: 20,
  refreshRate: 120,
  viewingAngle: 360,
  backLight: "flash",
  displayDetails: "HD",
});

tvObj.createTv();
ledObj.createLEDTv();
plasmaObj.createPlasmaTv();

// Controls

const incVol = (event) => {
  event.target.setVolume(50);
};

// YOUTUBE
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

let idArray = [
  "d3dNyavyMOo",
  "rD_gmEw6ZyI",
  "0w2l5-FTD-0",
  "wIpBCFytMYI",
  "jpaHRQl6wG0",
  "saLcKOmPVlg",
  "KhZo6uAo_Ms",
  "Wd-RbXOktTs",
  "yEvQLl_AQNM",
  "a-zZkuGAVQY",
  "MkhoKeJlqwA",
  "W882C-l5s_s",
  "6xqvFsJHoHc",
  "Da-2h2B4faU",
  "JyECrGp-Sw8",
  "M7CkdB5z9PY",
  "h6fcK_fRYaI",
  "CWu29PRCUvQ",
];
let myRandom = Math.floor(Math.random() * (idArray.length - 0 + 1));
let ID = idArray[myRandom];

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: ID == null ? "WPoVRWx7ujg" : ID,
    playerVars: { autoplay: 1, controls: 0, mute: 0, enablejsapi: 1 },

    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

let done = false;
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  event.target.setVolume(VOLUME);
  done = true;
  volUp.addEventListener("click", () => {
    tvObj.increaseVolume(event);
    if (plasmaCheck == null) {
      ledObj.status();
    } else {
      plasmaObj.status();
    }
  });
  volDown.addEventListener("click", () => {
    tvObj.decreaseVolume(event);
    if (plasmaCheck == null) {
      ledObj.status();
    } else {
      plasmaObj.status();
    }
  });
  channelUp.addEventListener("click", () => {
    tvObj.increaseChannel(event);
    if (plasmaCheck == null) {
      ledObj.status();
    } else {
      plasmaObj.status();
    }
  });
  channelDown.addEventListener("click", () => {
    tvObj.decreaseChannel(event);
    if (plasmaCheck == null) {
      ledObj.status();
    } else {
      plasmaObj.status();
    }
  });

  changeTv.addEventListener("click", () => {
    console.log("Chneged TV");
    plasmaObj.displayPlasma(event);
    tvObj.status();
  });

  resetTv.addEventListener("click", () => {
    localStorage.channelCount = 0;
    alert("You 📺 is being reset :) ");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  });
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
  }
}
function stopVideo() {
  player.stopVideo();
}
