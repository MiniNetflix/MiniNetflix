const users = {
  "utente1": "password1",
  "utente2": "password2",
  "utente3": "password3"
};

let currentUser = null;

// Funzione di login
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (users[user] && users[user] === pass) {
    currentUser = user;
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-app").style.display = "block";
    restoreVideoTime();
  } else {
    document.getElementById("login-error").innerText = "Credenziali errate";
  }
}

// Logout e ricarica pagina
function logout() {
  currentUser = null;
  location.reload();
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
