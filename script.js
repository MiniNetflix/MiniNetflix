


function filterView(type) {
  hideAllViews();
  document.getElementById("home-view").style.display = "block";

  if (type === 'movies') {
    showAll('movies');
  } else if (type === 'series') {
    showAll('series');
  } else if (type === 'recent') {
    showRecentViews();
  }
}

function showRecentViews() {
  const recent = JSON.parse(localStorage.getItem("recentlyWatched") || "[]");
  const container = document.getElementById("episodes-container");
  const title = document.getElementById("episode-title");
  container.innerHTML = "";

  if (recent.length === 0) {
    title.textContent = "Continua a guardare";
    container.innerHTML = "<p>Nessun contenuto recente.</p>";
  } else {
    title.textContent = "Continua a guardare";
    for (const item of recent) {
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      h3.textContent = item.title;
      const iframe = document.createElement("iframe");
      iframe.src = item.src;
      iframe.allowFullscreen = true;
      iframe.frameBorder = "0";
      div.appendChild(h3);
      div.appendChild(iframe);
      container.appendChild(div);
    }
  }
  document.getElementById("episode-list").style.display = "block";
}

function saveToRecent(title, src) {
  const recent = JSON.parse(localStorage.getItem("recentlyWatched") || "[]");
  const index = recent.findIndex(item => item.src === src);
  if (index !== -1) recent.splice(index, 1);
  recent.unshift({ title, src });
  if (recent.length > 5) recent.pop();
  localStorage.setItem("recentlyWatched", JSON.stringify(recent));
}

const originalShowMovie = showMovie;
showMovie = function (movieName) {
  const movie = moviesData[movieName];
  saveToRecent(movieName, movie.src);
  originalShowMovie(movieName);
};

const originalShowEpisodes = showEpisodes;
showEpisodes = function (seriesName, seasonNum) {
  const episodes = seriesData[seriesName].seasons[seasonNum];
  if (episodes.length > 0) {
    const lastEpisode = episodes[0];
    saveToRecent(`${seriesName} - Stagione ${seasonNum}`, lastEpisode.src);
  }
  originalShowEpisodes(seriesName, seasonNum);
};


// === Resume video position ===

function setIframeResumeTime(iframe, key) {
  iframe.onload = () => {
    const interval = setInterval(() => {
      try {
        const iframeWindow = iframe.contentWindow;
        iframeWindow.postMessage(
          '{"event":"listening","id":12345}', "*"
        );
      } catch (e) {}
    }, 500);

    window.addEventListener("message", function onMessage(event) {
      try {
        const data = JSON.parse(event.data);
        if (data && data.info && data.info.currentTime) {
          localStorage.setItem("resume-" + key, data.info.currentTime);
        }
      } catch (e) {}
    });
  };
}

function applyResumeTime(iframe, key) {
  const resumeTime = localStorage.getItem("resume-" + key);
  if (resumeTime) {
    iframe.src += `&start=${Math.floor(resumeTime)}`;
  }
}


const showMovieWithResume = showMovie;
showMovie = function (movieName) {
  const movie = moviesData[movieName];
  const key = movie.src;
  const container = document.getElementById("episodes-container");
  container.innerHTML = "";
  const iframe = document.createElement("iframe");
  iframe.src = movie.src + "?enablejsapi=1";
  iframe.allowFullscreen = true;
  iframe.frameBorder = "0";
  applyResumeTime(iframe, key);
  setIframeResumeTime(iframe, key);
  container.appendChild(iframe);
  document.getElementById("episode-title").textContent = movieName;
  hideAllViews();
  document.getElementById("episode-list").style.display = "block";
};

const showEpisodesWithResume = showEpisodes;
showEpisodes = function (seriesName, seasonNum) {
  const episodes = seriesData[seriesName].seasons[seasonNum];
  hideAllViews();
  document.getElementById("episode-title").textContent = `${seriesName} - Stagione ${seasonNum}`;
  const container = document.getElementById("episodes-container");
  container.innerHTML = "";

  for (const ep of episodes) {
    const key = ep.src;
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = `Episodio ${ep.episode}: ${ep.title}`;
    const iframe = document.createElement("iframe");
    iframe.src = ep.src + "?enablejsapi=1";
    iframe.allowFullscreen = true;
    iframe.frameBorder = "0";
    applyResumeTime(iframe, key);
    setIframeResumeTime(iframe, key);
    div.appendChild(h3);
    div.appendChild(iframe);
    container.appendChild(div);
  }

  document.getElementById("episode-list").style.display = "block";
};
