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

  // Add loading animation
  document.body.classList.add("loading")

  // Smooth scroll for buttons
  document.querySelector('button[class*="MORE ABOUT ME"]')?.addEventListener("click", () => {
    // Add your navigation logic here
    console.log("More about me clicked")
  })
})

// Add some interactive effects
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor")
  if (cursor) {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
  }
})
