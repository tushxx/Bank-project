'use strict';

const modal = document.getElementById("auth-modal");

const login = document.getElementById("contact-btn");

const close = document.getElementById("modal-close");

const logintab = document.getElementById("tab-login");
const signuptab = document.getElementById("tab-signup");

const loginform = document.getElementById("login-form");
const signupform = document.getElementById("signup-form");



//open-close
login.addEventListener("click", function(e){
    
    modal.classList.remove("hidden");
})
close.addEventListener("click", function(e){
    modal.classList.add("hidden");
})


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
 

//
{/* <script>
  function showTab(event, id) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');

    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('bg-purple-700', 'shadow-lg');
      btn.classList.add('bg-gray-700', 'shadow');
    });

    event.target.classList.remove('bg-gray-700', 'shadow');
    event.target.classList.add('bg-purple-700', 'shadow-lg');
  }
</script> */}







