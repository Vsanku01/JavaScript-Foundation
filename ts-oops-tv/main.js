var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var power = document.getElementById("power");
var volUp = document.getElementById("volUp");
var volDown = document.getElementById("volDown");
var channelUp = document.getElementById("channelUp");
var channelDown = document.getElementById("channelDown");
var changeTv = document.getElementById("changeTv");
var resetTv = document.getElementById("resetTv");
var tvDisplay = document.getElementById("player");
var plasmaCheck = document.getElementById("plasma");
console.log("check", localStorage.channelCount);
if (!localStorage.channelCount || localStorage.channelCount < 0) {
    localStorage.channelCount = 0;
}
localStorage.volume = 50;
if (plasmaCheck == null) {
    document.querySelector(".status").innerHTML = "<p>Panasonic at channel " + localStorage.channelCount + ", volume " + localStorage.volume + "</p>";
}
else {
    document.querySelector(".status").innerHTML = "<p>LG at channel " + localStorage.channelCount + ", volume " + localStorage.volume + "</p>";
}
function clickCounter() {
    if (typeof Storage !== "undefined") {
        if (localStorage.channelCount) {
            localStorage.channelCount = Number(localStorage.channelCount) + 1;
        }
        else {
            localStorage.channelCount = 1;
        }
    }
}
// CONSTANTS
var VOLUME = localStorage.volume;
var CHANNEL = localStorage.channelCount;
// Lazy Object Literal Initialization
var tv = {};
var TV = /** @class */ (function () {
    function TV(tv) {
        this._brand = tv.brand;
        this._channel = tv.channel ? tv.channel : 1;
        this._volume = tv.volume ? tv.volume : 50;
        this._price = tv.price;
        this._inches = tv.inches;
    }
    TV.prototype.createTv = function () {
        tv.brand = this._brand;
        tv.channel = this._channel;
        tv.volume = this._volume;
        tv.price = this._price;
        tv.inches = this._inches;
        console.log(tv);
    };
    TV.prototype.increaseVolume = function (event) {
        if (localStorage.volume >= 0 && localStorage.volume <= 100) {
            localStorage.volume = Number(localStorage.volume) + 10;
            event.target.setVolume(VOLUME);
        }
        else {
            alert("Max Vol Reached !!!");
        }
    };
    TV.prototype.decreaseVolume = function (event) {
        if (localStorage.volume >= 10 && localStorage.volume <= 100) {
            localStorage.volume = Number(localStorage.volume) - 10;
            event.target.setVolume(localStorage.volume);
        }
        else {
            alert("Mutted 📳");
        }
    };
    TV.prototype.increaseChannel = function (event) {
        if (CHANNEL <= 50) {
            clickCounter();
            window.location.reload();
        }
        else {
            alert("You have reached the last Channel");
        }
    };
    TV.prototype.decreaseChannel = function (event) {
        if (localStorage.channelCount > 0) {
            localStorage.channelCount = Number(localStorage.channelCount) - 1;
            window.location.reload();
        }
        else {
            alert("Reached First Channel");
        }
    };
    TV.prototype.resetTV = function () {
        tv.channel = 1;
    };
    TV.prototype.status = function () {
        var stat = tv.brand + " at channel " + tv.channel + ", volume " + tv.volume;
        document.querySelector(".status").innerHTML = "<p>" + stat + "</p>";
    };
    return TV;
}());
var tvObj = new TV({
    brand: "Panasonic",
    channel: 0,
    price: 5000,
    inches: 50,
    status: "ON",
    volume: 30
});
// **** PLAYER CONTROLS *******
// **** PLAYER CONTROLS *******
var led = {};
// Cause it extends is should also have parent props
// LED
var LED = /** @class */ (function (_super) {
    __extends(LED, _super);
    function LED(led) {
        var _this = _super.call(this, led) || this;
        _this._ledBrand = led.brand;
        _this._ledChannel = led.channel ? led.channel : 1;
        _this._ledVolume = led.volume ? led.volume : 50;
        _this._ledPrice = led.price;
        _this._ledInches = led.inches;
        _this._ledScreenThickness = led.screenThickness;
        _this._ledEnergy = led.energy;
        _this._ledLifespan = led.lifespan;
        _this._ledRefreshRate = led.refreshRate;
        _this._ledViewingAngle = led.viewingAngle;
        _this._ledBackLight = led.backLight;
        _this._ledDisplayDetails = led.displayDetails;
        return _this;
    }
    LED.prototype.createLEDTv = function () {
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
    };
    LED.prototype.status = function () {
        var stat = tv.brand + " at channel " + localStorage.channelCount + ", volume " + localStorage.volume;
        document.querySelector(".status").innerHTML = "<p>" + stat + "</p>";
    };
    return LED;
}(TV));
var ledObj = new LED({
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
    displayDetails: "HD"
});
var plasma = {};
// Plasma
var Plasma = /** @class */ (function (_super) {
    __extends(Plasma, _super);
    function Plasma(plasma) {
        var _this = _super.call(this, plasma) || this;
        _this._plasmaBrand = plasma.brand;
        _this._plasmaChannel = plasma.channel ? plasma.channel : 1;
        _this._plasmaVolume = plasma.volume ? plasma.volume : 50;
        _this._plasmaPrice = plasma.price;
        _this._plasmaInches = plasma.inches;
        _this._plasmaScreenThickness = plasma.screenThickness;
        _this._plasmaEnergy = plasma.energy;
        _this._plasmaLifespan = plasma.lifespan;
        _this._plasmaRefreshRate = plasma.refreshRate;
        _this._plasmaViewingAngle = plasma.viewingAngle;
        _this._plasmaBackLight = plasma.backLight;
        _this._plasmaDisplayDetails = plasma.displayDetails;
        return _this;
    }
    Plasma.prototype.createPlasmaTv = function () {
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
    };
    Plasma.prototype.displayPlasma = function (event) {
        if (plasmaCheck == null) {
            window.location.replace("/plasma.html");
        }
        else {
            window.location.replace("/index.html");
        }
    };
    Plasma.prototype.status = function () {
        var stat = plasma.brand + " at channel " + localStorage.channelCount + ", volume " + localStorage.volume;
        document.querySelector(".status").innerHTML = "<p>" + stat + "</p>";
    };
    return Plasma;
}(TV));
var plasmaObj = new Plasma({
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
    displayDetails: "HD"
});
tvObj.createTv();
ledObj.createLEDTv();
plasmaObj.createPlasmaTv();
// Controls
var incVol = function (event) {
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
var idArray = [
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
var myRandom = Math.floor(Math.random() * (idArray.length - 0 + 1));
var ID = idArray[myRandom];
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: ID == null ? "WPoVRWx7ujg" : ID,
        playerVars: { autoplay: 1, controls: 0, mute: 0, enablejsapi: 1 },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}
var done = false;
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
    event.target.setVolume(VOLUME);
    done = true;
    volUp.addEventListener("click", function () {
        tvObj.increaseVolume(event);
        if (plasmaCheck == null) {
            ledObj.status();
        }
        else {
            plasmaObj.status();
        }
    });
    volDown.addEventListener("click", function () {
        tvObj.decreaseVolume(event);
        if (plasmaCheck == null) {
            ledObj.status();
        }
        else {
            plasmaObj.status();
        }
    });
    channelUp.addEventListener("click", function () {
        tvObj.increaseChannel(event);
        if (plasmaCheck == null) {
            ledObj.status();
        }
        else {
            plasmaObj.status();
        }
    });
    channelDown.addEventListener("click", function () {
        tvObj.decreaseChannel(event);
        if (plasmaCheck == null) {
            ledObj.status();
        }
        else {
            plasmaObj.status();
        }
    });
    changeTv.addEventListener("click", function () {
        console.log("Chneged TV");
        plasmaObj.displayPlasma(event);
        tvObj.status();
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
