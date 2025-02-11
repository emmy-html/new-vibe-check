// check width to choose if content will display, if screen is too small, user will be alerted. thanks brittney for this idea! ^_^
function checkWidth() {
  const w = window.innerWidth;
  if (w < 768) {
    document.body.style.visibility = "hidden";
    alert(
      "Please view on a screen size that is at least 768px wide! Thank you!"
    );
  } else {
    document.body.style.visibility = "visible";
  }
}
setInterval(checkWidth, 2000);
// get time & date and display them in the top bar of the ePod
function updateTime() {
  // declare variables for am/pm & the symbols that go with them
  var timeIndicator, timeIndicatorSymbol;
  // grab the container for the date & time to be plugged into
  const dateContainer = document.getElementById("time-date");
  // declare date & the time/date methods to go along with them
  var today = new Date();
  var todayMonth = today.getMonth();
  var todayDay = today.getDate();
  var todayYear = today.getFullYear();
  var todayHour = today.getHours();
  var todayMins = today.getMinutes();
  // switch months from 0 index to traditional 1-12 month format
  switch (todayMonth) {
    case 0:
      todayMonth = "01";
      break;
    case 1:
      todayMonth = "02";
      break;
    case 2:
      todayMonth = "03";
      break;
    case 3:
      todayMonth = "04";
      break;
    case 4:
      todayMonth = "05";
      break;
    case 5:
      todayMonth = "06";
      break;
    case 6:
      todayMonth = "07";
      break;
    case 7:
      todayMonth = "08";
      break;
    case 8:
      todayMonth = "09";
      break;
    case 9:
      todayMonth = "10";
      break;
    case 10:
      todayMonth = "11";
      break;
    case 11:
      todayMonth = "12";
      break;
    default:
      todayMonth = "Error";
  }
  // am/pm  indicator
  if (todayHour <= 10) {
    timeIndicator = "AM";
  } else {
    timeIndicator = "PM";
  }
  // day or night time indicator symbol
  if (todayHour >= 18) {
    timeIndicatorSymbol = "&#9789;";
  } else {
    timeIndicatorSymbol = "&#9728;";
  }
  // convert hours from military time into US standard time
  switch (todayHour) {
    case 0:
      todayHour = "12";
      break;
    case 1:
      todayHour = "01";
      break;
    case 2:
      todayHour = "02";
      break;
    case 3:
      todayHour = "03";
      break;
    case 4:
      todayHour = "04";
      break;
    case 5:
      todayHour = "05";
      break;
    case 6:
      todayHour = "06";
      break;
    case 7:
      todayHour = "07";
      break;
    case 8:
      todayHour = "08";
      break;
    case 9:
      todayHour = "09";
      break;
    case 10:
      todayHour = "10";
      break;
    case 11:
      todayHour = "11";
      break;
    case 12:
      todayHour = "12";
      break;
    case 13:
      todayHour = "01";
      break;
    case 14:
      todayHour = "02";
      break;
    case 15:
      todayHour = "03";
      break;
    case 16:
      todayHour = "04";
      break;
    case 17:
      todayHour = "05";
      break;
    case 18:
      todayHour = "06";
      break;
    case 19:
      todayHour = "07";
      break;
    case 20:
      todayHour = "08";
      break;
    case 21:
      todayHour = "09";
      break;
    case 22:
      todayHour = "10";
      break;
    case 23:
      todayHour = "11";
      break;
    default:
      todayHour = "404";
  }
  // force minutes to always display as double digits
  if (todayMins < 10) {
    todayMins = "0" + todayMins;
  } else {
    todayMins = todayMins;
  }
  // plug the date & time into the inner HTML of the container
  dateContainer.innerHTML =
    todayMonth +
    "/" +
    todayDay +
    "/" +
    todayYear +
    " " +
    todayHour +
    ":" +
    todayMins +
    timeIndicator +
    " " +
    timeIndicatorSymbol;
}
// update time continuously
setInterval(updateTime);
// audio element container
const audioElement = document.getElementById("song-container");
// access song data on the page
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");
const songAlbum = document.getElementById("song-album");
const songLength = document.getElementById("song-length");
const songAlbumArt = document.getElementById("album-art");
// counter to count how many times button has been pressed
var counter = 0;
// audio player
function playSong() {
  const playButton = document.getElementById("play");
  // define audio element
  audioElement.play();
  // alternate between pause & play depending on if the song is playing or not
  counter++;
  if (counter % 2 == 0) {
    playButton.innerHTML = "&#9658;"; // play symbol unicode
    audioElement.pause();
    playButton.classList.add("play-adjustments"); // adjust position & styles of pause/play button depending on which is on display
    playButton.classList.remove("pause-adjustments");
    // toggle between displaying play & pause symbols
  } else if (counter == 1) {
    playButton.innerHTML = "&#65372;&#65372;"; // pause symbol unicode
    playButton.classList.remove("play-adjustments");
    playButton.classList.add("pause-adjustments");
  } else {
    playButton.innerHTML = "&#65372;&#65372;";
    playButton.classList.remove("play-adjustments");
    playButton.classList.add("pause-adjustments");
  }
}
// available songs
let songs = [
  {
    name: "Binz",
    artist: "Solange",
    album: "When I Get Home",
    length: "1:51",
    source: "songs/binz.mp3",
    albumArt:
      "url('img/album-art-solange.png')",
    vibe: "early-riser",
  },
  {
    name: "Distance",
    artist: "Yebba",
    album: "Distance",
    length: "4:15",
    source: "songs/distance.mp3",
    albumArt: "url('img/album-art-yebba.png')",
    vibe: "sunday-afternoon",
  },
  {
    name: "Coffee For Dinner",
    artist: "Orion Sun",
    album: "Hold Space For Me",
    length: "2:53",
    source: "songs/coffee_for_dinner.mp3",
    albumArt: "url('img/album-art-orion-sun.png')",
    vibe: "wednesday-evening",
  },
  {
    name: "Drive & Disconnect",
    artist: "NAO",
    album: "Saturn",
    length: "3:30",
    source: "songs/drive_and_disconnect.mp3",
    albumArt: "url('img/album-art-nao.jpeg')",
    vibe: "noon",
  }, /*
  {
    name: "Prisoner",
    artist: "Miley Cyrus <br>ft. Dua Lipa",
    album: "Plastic Hearts",
    length: "2:49",
    source: "songs/prisoner.mp3",
    albumArt: "url('img/album-art-plastic-hearts.png')",
    vibe: "late-night-drive",
  },
  {
    name: "Find An Island",
    artist: "BENEE",
    album: "STELLA & STEVE",
    length: "3:12",
    source: "songs/find_an_island.mp3",
    albumArt: "url('img/album-art-benee.png')",
    vibe: "friday-morning",
  },
  {
    name: "Fake ID",
    artist: "Kah-Lo ft. Riton",
    album: "Foreign Ororo<br>(Special Edition)",
    length: "4:06",
    source: "songs/fake_id.mp3",
    albumArt: "url('img/album-art-kah-lo.png')",
    vibe: "nightclub",
  }, */
  {
    name: "Headaches",
    artist: "Raveena",
    album: "Headaches",
    length: "5:11",
    source: "songs/headaches.mp3",
    albumArt: "url('img/album-art-headaches.jpg')",
    vibe: "dinner-with-her",
  },
  {
    name: "Touch Me",
    artist: "Victoria Monét <br> ft. Kehlani",
    album: "Jaguar",
    length: "3:11",
    source: "songs/touch_me.mp3",
    albumArt:
      "url('img/album-art-jaguar.png')",
    vibe: "midnight",
  },
];
function vibeDefault() {
  const vibeSelect = document.getElementById("vibe-selection");
  const selected = vibeSelect.value;
  document.body.className = "";
  document.body.classList.add(selected);
  // function to filter through songs and return the appropriate data for each color scheme
  let foundSong = songs.find((song) => song.vibe === selected);
  // set song data
  setSongData(foundSong);
}
function setSongData(song) {
  songName.innerHTML = song.name;
  songArtist.innerHTML = song.artist;
  songAlbum.innerHTML = song.album;
  songLength.innerHTML = song.length;
  songAlbumArt.style.backgroundImage = song.albumArt;
  // set audio source
  audioElement.src = song.source;
}
/* vibe checker (color scheme/moodboard switcher), nested function so the color scheme switcher can be referenced from the shuffle song
   function and the dropdown selection menu   */
function vibeChecker() {
  function updateSelection() {
    const vibeSelect = document.getElementById("vibe-selection");
    const selected = vibeSelect.value;
    // function to update class names so it'll apply the new color scheme to a clean body
    function updateClass(selected) {
      document.body.className = "";
      document.body.classList.add(selected);
      // function to filter through songs and return the appropriate data for each color scheme
      let foundSong = songs.find((song) => song.vibe === selected);
      // set song data
      setSongData(foundSong);
    }
    // call the update class function on each selection
    switch (selected) {
      case "early-riser":
        updateClass(selected);
        break;
      case "sunday-afternoon":
        updateClass(selected);
        break;
      case "wednesday-evening":
        updateClass(selected);
        break;
      case "noon":
        updateClass(selected);
        break;
      case "late-night-drive":
        updateClass(selected);
        break;
      case "friday-morning":
        updateClass(selected);
        break;
      case "nightclub":
        updateClass(selected);
        break;
      case "dinner-with-her":
        updateClass(selected);
        break;
      case "midnight":
        updateClass(selected);
        break;
      default:
        document.body.className = "";
        document.body.classList.add("early-riser");
    }
  }
  updateSelection();
}
// shuffle song function
function shuffleSongs() {
  const vibeSelect = document.getElementById("vibe-selection");
  // select random song
  var shuffled = songs[Math.floor(Math.random() * songs.length)];
  // check to make sure song shuffled is not the song playing, if so, skip it
  while (shuffled.name === songName.innerHTML) {
    shuffled = songs[Math.floor(Math.random() * songs.length)];
  }
  // continue
  // set song data & audio source
  setSongData(shuffled);
  // update the dropdown selection on shuffle
  vibeSelect.value = shuffled.vibe;
  // run color scheme switcher
  vibeChecker();
}