const users = {
  "Alessio": "1234",
  "Marco": "pelopelo",
  "Alessia": "oceani",
  "Anna": "1234",
  "Alfonso": "1234",
  "Chiara": "iii"
};
// ... segue tutto il codice completo ricevuto



// 1. Sidebar toggle per mobile
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
}

// 2. Filter View
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

// 3. Continua a guardare
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
      iframe.src = item.src + "?enablejsapi=1";
      iframe.allowFullscreen = true;
      iframe.frameBorder = "0";
      applyResumeTime(iframe, item.src);
      setIframeResumeTime(iframe, item.src);
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

// 4. Resume video time
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

// Override per salvare e riprendere
const originalShowMovie = showMovie;
showMovie = function (movieName) {
  const movie = moviesData[movieName];
  saveToRecent(movieName, movie.src);
  const container = document.getElementById("episodes-container");
  container.innerHTML = "";
  const iframe = document.createElement("iframe");
  iframe.src = movie.src + "?enablejsapi=1";
  iframe.allowFullscreen = true;
  iframe.frameBorder = "0";
  applyResumeTime(iframe, movie.src);
  setIframeResumeTime(iframe, movie.src);
  container.appendChild(iframe);
  document.getElementById("episode-title").textContent = movieName;
  hideAllViews();
  document.getElementById("episode-list").style.display = "block";
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
