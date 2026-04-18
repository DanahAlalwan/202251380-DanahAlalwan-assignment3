
// Theme Toggle with localStorage

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});


// Project Filtering + Sorting + Search

const categoryFilter = document.getElementById("categoryFilter");
const sortProjects = document.getElementById("sortProjects");
const searchInput = document.getElementById("searchInput");
const projectsContainer = document.getElementById("projects-container");
const noResultsMessage = document.getElementById("noResultsMessage");

const allProjectCards = Array.from(document.querySelectorAll(".project-card"));

function updateProjects() {
  const selectedCategory = categoryFilter.value;
  const selectedSort = sortProjects.value;
  const searchText = searchInput.value.trim().toLowerCase();

  let filteredProjects = allProjectCards.filter((card) => {
    const category = card.dataset.category.toLowerCase();
    const title = card.dataset.title.toLowerCase();
    const description = card.querySelector("p").textContent.toLowerCase();

    const matchesCategory =
      selectedCategory === "all" || category === selectedCategory;

    const matchesSearch =
      title.includes(searchText) || description.includes(searchText);

    return matchesCategory && matchesSearch;
  });

  if (selectedSort === "title") {
    filteredProjects.sort((a, b) =>
      a.dataset.title.localeCompare(b.dataset.title)
    );
  } else if (selectedSort === "date-new") {
    filteredProjects.sort(
      (a, b) => new Date(b.dataset.date) - new Date(a.dataset.date)
    );
  } else if (selectedSort === "date-old") {
    filteredProjects.sort(
      (a, b) => new Date(a.dataset.date) - new Date(b.dataset.date)
    );
  }

  projectsContainer.innerHTML = "";

  if (filteredProjects.length === 0) {
    noResultsMessage.textContent = "No matching projects found.";
  } else {
    noResultsMessage.textContent = "";
    filteredProjects.forEach((card) => projectsContainer.appendChild(card));
  }
}

categoryFilter.addEventListener("change", updateProjects);
sortProjects.addEventListener("change", updateProjects);
searchInput.addEventListener("input", updateProjects);


// GitHub API Integration

async function fetchGitHubRepos() {
  const repoContainer = document.getElementById("repo-container");
  const repoMessage = document.getElementById("repo-message");

  repoMessage.textContent = "Loading repositories...";

  try {
    const response = await fetch("https://api.github.com/users/DanahAlalwan/repos");

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub repositories.");
    }

    const repos = await response.json();

    const filteredRepos = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 6);

    repoContainer.innerHTML = "";

    if (filteredRepos.length === 0) {
      repoMessage.textContent = "No repositories found.";
      return;
    }

    filteredRepos.forEach((repo) => {
      const repoCard = document.createElement("div");
      repoCard.className = "repo-card";

      repoCard.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description ? repo.description : "No description available."}</p>
        <p><strong>Language:</strong> ${repo.language ? repo.language : "Not specified"}</p>
        <a href="${repo.html_url}" target="_blank">View Repository</a>
      `;

      repoContainer.appendChild(repoCard);
    });

    repoMessage.textContent = "";
  } catch (error) {
    repoMessage.textContent = "Unable to load GitHub repositories right now. Please try again later.";
    console.error("GitHub API error:", error);
  }
}


// Visitor Name State Management

const visitorNameInput = document.getElementById("visitorName");
const saveNameBtn = document.getElementById("saveNameBtn");
const clearNameBtn = document.getElementById("clearNameBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

function loadVisitorName() {
  const savedName = localStorage.getItem("visitorName");

  if (savedName) {
    welcomeMessage.textContent = `Welcome back, ${savedName}!`;
  } else {
    welcomeMessage.textContent = "No name saved yet.";
  }
}

saveNameBtn.addEventListener("click", () => {
  const name = visitorNameInput.value.trim();

  if (name === "") {
    welcomeMessage.textContent = "Please enter a valid name.";
    return;
  }

  localStorage.setItem("visitorName", name);
  welcomeMessage.textContent = `Welcome, ${name}! Your name has been saved.`;
  visitorNameInput.value = "";
});

clearNameBtn.addEventListener("click", () => {
  localStorage.removeItem("visitorName");
  welcomeMessage.textContent = "Saved name cleared.";
});


// Contact Form Validation

const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    feedback.textContent = "Please fill in all fields.";
    return;
  }

  if (!emailPattern.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    return;
  }

  if (message.length < 10) {
    feedback.textContent = "Message must be at least 10 characters long.";
    return;
  }

  feedback.textContent = "Form submitted successfully!";
  contactForm.reset();
});


// Run on page load

updateProjects();
fetchGitHubRepos();
loadVisitorName();