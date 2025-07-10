// media.js

function showMovie(movieName) {
  hideAllViews();
  document.getElementById("episode-title").textContent = movieName;
  const container = document.getElementById("episodes-container");
  container.innerHTML = "";

  const movie = moviesData[movieName];
  const iframe = document.createElement("iframe");
  iframe.src = movie.src;
  iframe.allowFullscreen = true;
  iframe.frameBorder = "0";
  iframe.width = "560";
  iframe.height = "315";
  container.appendChild(iframe);

  localStorage.setItem('lastWatched', JSON.stringify({
    title: movieName,
    src: movie.src,
    time: 0
  }));

  document.getElementById("episode-list").style.display = "block";
}

function showSeasons(seriesName) {
  hideAllViews();
  document.getElementById("season-title").textContent = seriesName;
  const seasonsUl = document.getElementById("seasons-ul");
  seasonsUl.innerHTML = "";

  const seasons = seriesData[seriesName].seasons;
  for (const seasonNum in seasons) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = `Stagione ${seasonNum}`;
    btn.onclick = () => showEpisodes(seriesName, seasonNum);
    li.appendChild(btn);
    seasonsUl.appendChild(li);
  }

  document.getElementById("season-list").style.display = "block";
}

function showEpisodes(seriesName, seasonNum) {
  hideAllViews();
  document.getElementById("episode-title").textContent = `${seriesName} - Stagione ${seasonNum}`;
  const container = document.getElementById("episodes-container");
  container.innerHTML = "";

  const episodes = seriesData[seriesName].seasons[seasonNum];
  for (const ep of episodes) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = `Episodio ${ep.episode}: ${ep.title}`;
    const iframe = document.createElement("iframe");
    iframe.src = ep.src;
    iframe.allowFullscreen = true;
    iframe.frameBorder = "0";
    div.appendChild(h3);
    div.appendChild(iframe);
    container.appendChild(div);
  }

  document.getElementById("episode-list").style.display = "block";
}
// media.js
window.showMovie = showMovie;
window.showSeasons = showSeasons;
window.showEpisodes = showEpisodes;
