'use strict';

// DOM references
const modal = document.getElementById("auth-modal");
const loginBtn = document.getElementById("contact-btn");
const closeBtn = document.getElementById("modal-close");

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

const loginTab = document.getElementById("tab-login");
const signupTab = document.getElementById("tab-signup");

const pricingModal = document.getElementById("credit-card-pricing-modal");

let isLoggedIn = false;

// Open modal
loginBtn.addEventListener("click", () => {
  if (isLoggedIn) {
    // Logout flow
    isLoggedIn = false;
    loginBtn.textContent = "Login / Signup";
    document.getElementById("transaction-page").classList.add("hidden");
    document.getElementById("allpage").classList.remove("hidden");
    modal.classList.add("hidden");
  } else {
    modal.classList.remove("hidden");
  }
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Login form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;

  if (email === "user@credman.com" && password === "123456") {
    isLoggedIn = true;
    loginBtn.textContent = "Logout";
    modal.classList.add("hidden");
    document.getElementById("transaction-page").classList.remove("hidden");
    document.getElementById("allpage").classList.add("hidden");
  } else {
    alert("Invalid credentials. Try user@credman.com / 123456");
  }
});

//tab change
function toggleForm(form) {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const tabLogin = document.getElementById("tab-login");
  const tabSignup = document.getElementById("tab-signup");

  const activeClasses = [
    "text-purple-600",
    "font-semibold",
    "border-b-2",
    "border-purple-600",
  ];
  const inactiveClasses = ["text-gray-500", "hover:text-purple-600"];

  // Toggle forms
  loginForm.classList.toggle("hidden", form !== "login");
  signupForm.classList.toggle("hidden", form !== "signup");

  // Reset both tabs
  tabLogin.classList.remove(...activeClasses);
  tabLogin.classList.add(...inactiveClasses);
  tabSignup.classList.remove(...activeClasses);
  tabSignup.classList.add(...inactiveClasses);

  // Activate selected tab
  if (form === "login") {
    tabLogin.classList.add(...activeClasses);
    tabLogin.classList.remove(...inactiveClasses);
  } else {
    tabSignup.classList.add(...activeClasses);
    tabSignup.classList.remove(...inactiveClasses);
  }
}




//product modal
const productmodal = document.getElementById("credit-card-pricing-modal");

const closeproducts = document.getElementById("close-modal");

const pricing = document.getElementById("nav-pricing");

pricing.addEventListener("click", function(){
   productmodal.classList.remove('hidden')
})
closeproducts.addEventListener("click", function () {
  productmodal.classList.add("hidden");
});

//get started -->.scrolling

const start = document.querySelector("#get-started-btn");
const working = document.querySelector("#works"); // i added above section because my wotking section is going up so 

start.addEventListener("click", function(e){
    const workingcoordi = working.getBoundingClientRect() //gives a section rectangle coordinates
    
    // window.scrollTo(workingcoordi.left, workingcoordi.top)
    // becuase of this you will relative to clicked point so to reached correct position ,do below step 
    // window.scrollTo({
    //     left: workingcoordi.left + window.screenX, 
    //     top: workingcoordi.top + window.scrollY, 
    //     behavior : 'smooth'})

 //modern way
  working.scrollIntoView({behavior: 'smooth'}) 
})

// lets do this in loop
// (1) add event listener to common parent elemnt
// (2) determine what element originated the event

document.querySelector("#nav-menu").addEventListener("click", function(e){
    e.preventDefault()
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView(
        {behavior : 'smooth'})
})
 

// tab changing
const tabbtn = document.querySelectorAll(".tab-btn");
const tabcontent = document.querySelectorAll(".tab-content");
document.querySelector("#user-types").addEventListener("click", function(e){
  e.preventDefault();
  console.log(e.target);
  const targetBtn = e.target.closest("[href]");
  //It searches for the closest ancestor (or the element itself) that matches a specified CSS selector. If a matching ancestor is found, the method returns that element; otherwise, it returns null.

  //guard clause
  if (!targetBtn) return;

  // Remove active style from all buttons
  tabbtn.forEach((btn) => {
    btn.classList.remove("bg-purple-700");
    btn.classList.add("bg-gray-700");
  });

  // Hide all content sections
  tabcontent.forEach((section) => {
    section.classList.add("hidden");
  });

  // Activate the clicked button
  targetBtn.classList.remove("bg-gray-700");
  targetBtn.classList.add("bg-purple-700");

  //activate content section  area
  const id = targetBtn.getAttribute("href");
  document.querySelector(id).classList.remove("hidden");
})


////testimonal sliding


  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("hidden", i !== index);
      dots[i].classList.toggle("bg-purple-700", i === index);
      dots[i].classList.toggle("bg-gray-500", i !== index);
    });
    currentSlide = index;
  }

  document.getElementById("next").addEventListener("click", () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  });

  document.getElementById("prev").addEventListener("click", () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });

  // Initialize
  showSlide(0);




  















