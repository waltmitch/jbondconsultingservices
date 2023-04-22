document.addEventListener('DOMContentLoaded', () => {
    // Select all links with hashes
    const links = document.querySelectorAll('a[href*="#"]');
  
    // Add smooth scrolling behavior to links with hashes
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
  
        const target = document.querySelector(link.getAttribute('href'));
  
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const aboutElements = document.querySelectorAll(".about-element");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
  
    aboutElements.forEach((element) => {
      observer.observe(element);
    });
  });
  
  // Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= windowHeight &&
      rect.right <= windowWidth
    );
  }
  
  // Function to handle the scroll event
  function handleScroll() {
    const aboutElements = document.querySelectorAll('.about-element');
    const backgroundBox = document.querySelector('.background-box');
  
    aboutElements.forEach(element => {
      if (isInViewport(element) && !element.classList.contains('visible')) {
        element.classList.add('visible');
      } else if (!isInViewport(element) && element.getBoundingClientRect().top > 0) {
        element.classList.remove('visible');
      }
    });
  
    if (isInViewport(backgroundBox) && !backgroundBox.classList.contains('visible')) {
      backgroundBox.classList.add('visible');
    } else if (!isInViewport(backgroundBox) && backgroundBox.getBoundingClientRect().top > 0) {
      backgroundBox.classList.remove('visible');
    }
  }
  
  
  // Event listener for scrolling
  window.addEventListener('scroll', handleScroll);
  
  // Initial call to handle the case when elements are in the viewport on page load
  handleScroll();
  
  