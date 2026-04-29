/* =========================
   LINK DATA
========================= */
const links = [
  {
    name: "Lunar",
    url: "https://linewize.rachelsfinds.com/",
    show: true
  },
  {
    name: "Utopia",
    url: "https://bum.education",
    show: true
  },
  {
    name: "Lucide",
    url: "https://cdn.jsdelivr.net/gh/lucideproxy/svg@latest/logo.svg#/",
    show: true
  },
  {
    name: "Velara",
    url: "https://usevelara.xyz/",
    show: true
  },
  {
    name: "Galaxy",
    url: "https://youareagooner.ovie.gob.mx/onboarding/",
    show: true
  }
];

/* =========================
   ELEMENTS
========================= */
const container = document.getElementById("linkContainer");
const toggleButton = document.getElementById("toggleButton");

let linksVisible = false;

/* =========================
   BUILD LINKS
========================= */
function createLinks() {
  container.innerHTML = ""; // safety reset

  links.forEach(link => {
    if (!link.show) return;

    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.textContent = link.name;
    a.className = "link";

    container.appendChild(a);
  });
}

/* =========================
   TOGGLE FUNCTION
========================= */
function toggleLinks() {
  linksVisible = !linksVisible;

  if (linksVisible) {
    container.classList.add("show");
    container.classList.remove("hide");
    toggleButton.textContent = "Hide Links";
  } else {
    container.classList.remove("show");
    container.classList.add("hide");
    toggleButton.textContent = "Show Links";
  }
}

/* =========================
   INIT
========================= */
createLinks();
toggleButton.addEventListener("click", toggleLinks);
