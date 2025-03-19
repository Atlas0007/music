const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const songTitle = document.getElementById("song-title");
const lyricsContainer = document.getElementById("lyrics");


// Song list
const songs = [
    
    { title: "I'm Your Angel", src: "/songs/I'm_Your_Angel(256k).mp3" },
    { title: "If_Viva_La_Vida_was_sad", src: "/songs/If_Viva_La_Vida_was_sad..._HENRY_MOODIE_X_LORYN_HANSEN_X_JOHN_DAVIS_MASON(256k).mp3" },
    { title: "Imagine Dragons - Dream", src: "/songs/Imagine Dragons - Dream (Lyrics).mp3" },
    { title: "It Will Rain - Bruno Mars", src: "/songs/It Will Rain - Bruno Mars (Lyrics).mp3" },
    { title: "James Arthur - Naked", src: "/songs/James Arthur - Naked.mp3" } ];

    let songIndex = 0;
    //Load Song
    function loadSong(index){
        audio.src = songs[index].src;
        songTitle.textContent = songs[index].title;
    }

    // Play or Pause
function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸"; // Change to pause icon
    } else {
        audio.pause();
        playBtn.textContent = "▶️"; // Change to play icon
    }
}

// Next Song
function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
    audio.play();
}

// Previous Song
function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
    audio.play();
}

// Autoplay next song
audio.addEventListener("ended", nextSong);


// Event Listeners
playBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

// Load the first song initially
loadSong(0);