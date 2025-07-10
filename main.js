// main.js

function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  if (users[user] && users[user] === pass) {
    currentUser = user;
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-app").style.display = "block";
    loadHome();
  } else {
    document.getElementById("login-error").innerText = "Credenziali errate";
  }
}

function logout() {
  currentUser = null;
  location.reload();
}

function loadHome() {
  hideAllViews();
  document.getElementById("home-view").style.display = "block";

  const seriesDiv = document.getElementById("series-list-div");
  seriesDiv.innerHTML = "";
  let seriesCount = 0;
  for (const serie in seriesData) {
    if (seriesCount >= 24) break;
    const card = createCard(serie, seriesData[serie].img, () => showSeasons(serie));
    seriesDiv.appendChild(card);
    seriesCount++;
  }

  const moviesDiv = document.getElementById("movies-list-div");
  moviesDiv.innerHTML = "";
  let moviesCount = 0;
  for (const movie in moviesData) {
    if (moviesCount >= 24) break;
    const card = createCard(movie, moviesData[movie].img, () => showMovie(movie));
    moviesDiv.appendChild(card);
    moviesCount++;
  }
}

function createCard(title, imgUrl, onClick) {
  const div = document.createElement("div");
  div.className = "card";
  div.onclick = onClick;

  const img = document.createElement("img");
  img.src = imgUrl;
  const titleDiv = document.createElement("div");
  titleDiv.className = "card-title";
  titleDiv.textContent = title;

  div.appendChild(img);
  div.appendChild(titleDiv);
  return div;
}

function showAll(type) {
  hideAllViews();
  document.getElementById("home-view").style.display = "block";

  const container = type === "series" ? document.getElementById("series-list-div") : document.getElementById("movies-list-div");
  const data = type === "series" ? seriesData : moviesData;

  container.innerHTML = "";
  for (const key in data) {
    const card = createCard(key, data[key].img, () => {
      type === "series" ? showSeasons(key) : showMovie(key);
    });
    container.appendChild(card);
  }
}

function toggleView(type) {
  const contentView = document.getElementById('content-view');
  contentView.innerHTML = '';
  document.getElementById('home-view').style.display = 'none';

  if (type === 'movies') {
    contentView.innerHTML = '<h2>Film</h2>';
    for (let [title, movie] of Object.entries(moviesData)) {
      contentView.innerHTML += `
        <div>
          <p>${title}</p>
          <iframe src="${movie.src}" width="560" height="315" allowfullscreen></iframe>
        </div>
      `;
    }
  } else if (type === 'series') {
    contentView.innerHTML = '<h2>Serie TV</h2>';
    for (let [title, serie] of Object.entries(seriesData)) {
      contentView.innerHTML += `
        <div>
          <p>${title}</p>
          <img src="${serie.img}" width="200" />
        </div>
      `;
    }
  } else if (type === 'continue') {
    contentView.innerHTML = '<h2>Continua a guardare</h2>';
    const lastWatched = JSON.parse(localStorage.getItem('lastWatched')) || null;

    if (lastWatched) {
      contentView.innerHTML += `
        <div>
          <p>${lastWatched.title}</p>
          <iframe src="${lastWatched.src}#t=${lastWatched.time}" width="560" height="315" allowfullscreen></iframe>
        </div>
      `;
    } else {
      contentView.innerHTML += '<p>Non hai contenuti recenti.</p>';
    }
  }
}

function hideAllViews() {
  document.querySelectorAll(".view").forEach(v => v.style.display = "none");
}

function backToHome() {
  loadHome();
}

function filterContent() {
  const query = document.getElementById("search-bar").value.trim().toLowerCase();
  if (!query) return loadHome();

  hideAllViews();
  const ul = document.getElementById("search-results-ul");
  ul.innerHTML = "";

  for (const serie in seriesData) {
    if (serie.toLowerCase().includes(query)) {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.textContent = `Serie TV: ${serie}`;
      btn.onclick = () => showSeasons(serie);
      li.appendChild(btn);
      ul.appendChild(li);
    }
  }

  for (const movie in moviesData) {
    if (movie.toLowerCase().includes(query)) {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.textContent = `Film: ${movie}`;
      btn.onclick = () => showMovie(movie);
      li.appendChild(btn);
      ul.appendChild(li);
    }
  }

  if (ul.children.length === 0) {
    ul.innerHTML = "<li>Nessun risultato trovato.</li>";
  }

  document.getElementById("search-results").style.display = "block";
}
