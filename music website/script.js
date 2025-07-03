
 /* function playSong() {
    var select = document.getElementById("songSelect");
    var audio = document.getElementById("audioPlayer");
    const playButton = document.querySelector(".playlist-form button");
    var selectedSong = select.value;

    if (selectedSong) {
      audio.src = selectedSong;
      audio.play();
       playButton.innerText = "Playing... 🎵";
    }
  }


// Optional: support Enter key to play
songSelect.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    playSong();
  }
});*/
const playlist = [];

function addToPlaylist() {
  const select = document.getElementById("songSelect");
  const selectedValue = select.value;
  const selectedText = select.options[select.selectedIndex].text;

  if (!selectedValue) {
    alert("Please select a song first!");
    return;
  }

  // Check for duplicates
  if (playlist.find(song => song.path === selectedValue)) {
    alert("Song already in playlist!");
    return;
  }

  // Add to playlist array
  playlist.push({ name: selectedText, path: selectedValue });

  // Update display
  renderPlaylist();
}

function renderPlaylist() {
  const ul = document.getElementById("playlistItems");
  ul.innerHTML = "";

  playlist.forEach((song, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${index + 1}. ${song.name}
      <button onclick="playSong('${song.path}')">▶️ Play</button>
    `;
    ul.appendChild(li);
  });
}

function playSong(songPath) {
  const audio = document.getElementById("audioPlayer");
  audio.src = songPath;
  audio.play();
}

