const users = {
  "utente1": "password1",
  "utente2": "password2",
  "utente3": "password3"
};

let currentUser = null;

// Funzione di login con animazione
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (users[user] && users[user] === pass) {
    currentUser = user;

    const loginScreen = document.getElementById("login-screen");
    const mainApp = document.getElementById("main-app");

    // Animazione uscita login
    loginScreen.style.opacity = '0';
    loginScreen.style.transform = 'scale(0.95)';
    setTimeout(() => {
      loginScreen.style.display = "none";

      // Mostra main app con animazione
      mainApp.style.display = "block";
      setTimeout(() => {
        mainApp.classList.add("show");
      }, 50);

      restoreVideoTime();
    }, 600);  // deve corrispondere alla durata della transizione in CSS
  } else {
    document.getElementById("login-error").innerText = "Credenziali errate";
  }
}

// Logout con animazione e reload pagina
function logout() {
  const loginScreen = document.getElementById("login-screen");
  const mainApp = document.getElementById("main-app");

  // Animazione uscita main app
  mainApp.classList.remove("show");
  setTimeout(() => {
    mainApp.style.display = "none";

    // Mostra login con animazione
    loginScreen.style.display = "block";
    setTimeout(() => {
      loginScreen.style.opacity = '1';
      loginScreen.style.transform = 'scale(1)';
    }, 50);

    // Reset campi e stato
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("login-error").innerText = "";
  }, 600);

  currentUser = null;
}

// Salva il tempo del video ogni 3 secondi
setInterval(() => {
  document.querySelectorAll("iframe").forEach((iframe) => {
    const id = iframe.dataset.id;
    const message = { event: "getCurrentTime" };
    iframe.contentWindow.postMessage(message, "*");
  });
}, 3000);

// Riceve tempo corrente dal player e lo salva
window.addEventListener("message", (event) => {
  if (!currentUser || !event.data) return;
  if (event.data.event === "currentTime" && event.data.time) {
    const key = `${currentUser}-${event.data.id}-time`;
    localStorage.setItem(key, event.data.time);
  }
});

// Ripristina il tempo salvato nei video
function restoreVideoTime() {
  document.querySelectorAll("iframe").forEach((iframe) => {
    const id = iframe.dataset.id;
    const time = localStorage.getItem(`${currentUser}-${id}-time`);
    if (time) {
      const src = new URL(iframe.src);
      src.searchParams.set("start", Math.floor(time));
      iframe.src = src.toString();
    }
  });
}

// Funzione di ricerca video per titolo
function filterVideos() {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const videos = document.querySelectorAll(".video-item");
  videos.forEach((video) => {
    const title = video.querySelector("h3").textContent.toLowerCase();
    video.style.display = title.includes(query) ? "block" : "none";
  });
}

// --- FUNZIONE PER RESETTARE GLI ALTRI IFRAME GOOGLE DRIVE ---
const iframes = document.querySelectorAll("iframe");

iframes.forEach((iframe) => {
  // Assumiamo che il contenitore dell'iframe sia il genitore diretto
  iframe.parentElement.addEventListener("click", () => {
    iframes.forEach((otherIframe) => {
      if (otherIframe !== iframe) {
        const src = otherIframe.src;
        otherIframe.src = "";        // Svuota src per fermare il video
        setTimeout(() => {
          otherIframe.src = src;     // Ripristina src dopo 100ms
        }, 100);
      }
    });
  });
});
