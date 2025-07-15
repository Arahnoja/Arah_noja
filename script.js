// Theme toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle")
  const html = document.documentElement

  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem("theme") || "dark"
  html.classList.toggle("dark", currentTheme === "dark")

  themeToggle.addEventListener("click", () => {
    const isDark = html.classList.contains("dark")
    html.classList.toggle("dark", !isDark)
    localStorage.setItem("theme", !isDark ? "dark" : "light")

    // Update icon
    const icon = themeToggle.querySelector("svg")
    if (!isDark) {
      // Switch to moon icon for dark mode
      icon.innerHTML =
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>'
    } else {
      // Switch to sun icon for light mode
      icon.innerHTML =
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>'
    }
  })

  // Navigation functionality
  const navButtons = document.querySelectorAll(".nav-btn")
  navButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      navButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      this.classList.add("active")

      // You can add navigation logic here
      console.log(`Navigation ${index} clicked`)
    })
  })

  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((n) =>
      n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
      }),
    )
  }

  // Contact Form Handling
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)

      // Simple validation
      if (!data.name || !data.email || !data.service || !data.message) {
        alert("Please fill in all required fields.")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        alert("Please enter a valid email address.")
        return
      }

      // Simulate form submission
      const submitBtn = contactForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent
      submitBtn.textContent = "Sending..."
      submitBtn.disabled = true

      // Simulate API call
      setTimeout(() => {
        alert("Thank you for your message! I will get back to you within 24 hours.")
        contactForm.reset()
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }, 2000)
    })
  }

  // Smooth scroll for buttons
  document.querySelector('button[class*="MORE ABOUT ME"]')?.addEventListener("click", () => {
    // Add your navigation logic here
    console.log("More about me clicked")
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add scroll effect to navbar
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.95)"
      navbar.style.backdropFilter = "blur(10px)"
    } else {
      navbar.style.background = "#ffffff"
      navbar.style.backdropFilter = "none"
    }
  })

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document.querySelectorAll(".service-card, .testimonial-card, .qual-card, .package-card, .faq-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.3s ease"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})

// Add some interactive effects
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor")
  if (cursor) {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
  }
})
