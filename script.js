function toggleSearch(event) {
  event.preventDefault();
  const bar = document.getElementById("search-bar");
  bar.style.display = bar.style.display === "none" ? "block" : "none";
}

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}


function openSlideMenu() {
  document.getElementById("fullScreenMenu").style.width = "100%";
}

function closeFullScreenMenu() {
  document.getElementById("fullScreenMenu").style.width = "0%";
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    const menu = document.getElementById("fullScreenMenu");
    menu.style.transition = "none"; // Remove delay
    menu.style.width = "0%";

    // After closing, re-enable transition after a short delay
    setTimeout(() => {
      menu.style.transition = ""; // Reset to CSS transition
    }, 200);
  }
});
function scrollToNext() {
  document.querySelector('.bottom-services').scrollIntoView({ 
    behavior: 'smooth' 
  });
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
  const backToTop = document.getElementById('backToTop');
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

function openModal() {
  document.getElementById('contactModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('contactModal').style.display = 'none';
}

function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');
  
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    themeToggle.innerHTML = '🌙 Dark Mode';
  } else {
    body.classList.add('dark-theme');
    themeToggle.innerHTML = '☀️ Light Mode';
  }
}
// Enable submenu toggle on mobile
document.querySelectorAll('.has-submenu > a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    }
  });
});

// Auto-change page title based on current section
function updatePageTitle() {
  const sections = [
    { element: '.hero', title: 'Chartwell Partners - Executive Search Firm' },
    { element: '.bottom-services', title: 'Our Services - Chartwell Partners' },
    { element: '.industry-expertise', title: 'Industry Expertise - Chartwell Partners' },
    { element: '.team-section', title: 'Our Team - Chartwell Partners' },
    { element: '.trust-section', title: 'Why Trust Us - Chartwell Partners' },
    { element: '.footer', title: 'Contact Us - Chartwell Partners' }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = sections.find(s => entry.target.matches(s.element));
        if (section) {
          document.title = section.title;
        }
      }
    });
  }, { threshold: 0.3 });

  // Observe all sections
  sections.forEach(section => {
    const element = document.querySelector(section.element);
    if (element) {
      observer.observe(element);
    }
  });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', updatePageTitle);