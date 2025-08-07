// scripts.js

// Developer Info
const devName = "Sujith Kasthuri";
const devTitle = "Automation Workflow Specialist";

// Projects Array
const projects = [
  {
    name: "Digital Marketing Automation",
    description: "Created internal workflows for automation and reporting, increasing team productivity.",
    link: null,
  },
  {
    name: "Chatbot with Voice Assistant",
    description: "Developed a voice-capable chatbot for bristletech.com.",
    link: "https://bristletech.com/",
  },
];

// Certifications Array
const certifications = [
  "Google Ads Certification",
  "Fundamentals of Digital Marketing – Google",
  "Python for Data Science – Udemy",
  "Internal n8n Workflow Certification (Company-level)",
  "Udemy: n8n Course on AI Agents and Workflows",
];

// Simple Skill class for generating skill tags
class Skill {
  constructor(name) {
    this.name = name;
  }

  createTag() {
    const span = document.createElement("span");
    span.className = "skill-tag";
    span.textContent = this.name;
    return span;
  }
}

// DOM Elements
const navButtons = document.querySelectorAll(".nav-buttons button");
const projectsList = document.getElementById("projects-list");
const certificationsList = document.getElementById("certifications-list");
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

// Show messages below form
function showMessage(msg, type) {
  formStatus.textContent = msg;
  formStatus.className = type; // e.g. 'success' or 'error'
}

// Validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

// Handle form submit and open WhatsApp chat with user inputs
function handleFormSubmit(event) {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    showMessage("Please fill out all fields.", "error");
    return;
  }

  if (!validateEmail(email)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }

  // Your WhatsApp number in international format WITHOUT '+' or spaces
  const whatsappNumber = "919618660539";

  // Format message text with URL encoded newlines
  const whatsappMessage = 
    `*Contact Form Submission*%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Open WhatsApp chat in new tab
  window.open(whatsappURL, "_blank");

  showMessage(`Thanks, ${name}! WhatsApp window opened to send your message.`, "success");
  form.reset();
}

// Set active nav button style
function setActiveButton(button) {
  navButtons.forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
}

// Populate projects list dynamically
function populateProjects() {
  projectsList.innerHTML = ""; // Clear existing
  projects.forEach(p => {
    const li = document.createElement("li");
    if (p.link) {
      li.innerHTML = `${p.name} - ${p.description} <a href="${p.link}" target="_blank" rel="noopener noreferrer">Learn more</a>`;
    } else {
      li.textContent = `${p.name} - ${p.description}`;
    }
    projectsList.appendChild(li);
  });
}

// Populate certifications list dynamically
function populateCertifications() {
  certificationsList.innerHTML = "";
  certifications.forEach(cert => {
    const li = document.createElement("li");
    li.textContent = cert;
    certificationsList.appendChild(li);
  });
}

// Display example skill tags
function displaySkills() {
  const techSkills = ["n8n", "Make.com", "Airtable", "Slack", "Python", "REST API", "Google Ads"];
  const personalitySkills = ["Communication", "Documentation", "Problem Solving", "Critical Thinking", "Team Collaboration", "Adaptability"];

  const skillsSection = document.getElementById("skills");
  const techDiv = skillsSection.querySelector(".skill-category:nth-child(1)");
  const persDiv = skillsSection.querySelector(".skill-category:nth-child(2)");

  // Hide original paragraphs for skills
  techDiv.querySelector("p").style.display = "none";
  persDiv.querySelector("p").style.display = "none";

  // Create containers for skill tags
  const techContainer = document.createElement("div");
  techContainer.className = "skills-tags";
  techSkills.forEach(skillName => techContainer.appendChild(new Skill(skillName).createTag()));
  techDiv.appendChild(techContainer);

  const persContainer = document.createElement("div");
  persContainer.className = "skills-tags";
  personalitySkills.forEach(skillName => persContainer.appendChild(new Skill(skillName).createTag()));
  persDiv.appendChild(persContainer);
}

// Set up event listeners
document.addEventListener("DOMContentLoaded", () => {
  populateProjects();
  populateCertifications();
  displaySkills();

  // Smooth scroll & active button for nav buttons
  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      const sectionId = button.getAttribute("data-section");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveButton(button);
      }
    });
  });

  // Update nav active state on scroll
  window.addEventListener("scroll", () => {
    let currentSection = "";
    document.querySelectorAll("main > section").forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom >= 80) {
        currentSection = section.id;
      }
    });
    if (currentSection) {
      navButtons.forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-section") === currentSection);
      });
    }
  });

  // Contact form submit handler
  form.addEventListener("submit", handleFormSubmit);
});
function sendToWhatsApp(event) {
    event.preventDefault(); // prevent real form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        document.getElementById("form-status").textContent = "Please fill all fields.";
        return;
    }

    // 🔁 Replace with your real number (no + or dashes)
    const phoneNumber = "919618660539"; 

    const fullMessage = `Hello!%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${fullMessage}`;

    window.open(whatsappURL, "_blank");
}
