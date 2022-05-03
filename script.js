// OPENING A TOGGLE MENU
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('nav-links li');
// TOGGLE NAV
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    // BURGER ANIMATION
    burger.classList.toggle('toggle');
  });
}
navSlide();


// Parallax Effect 
const appearOptions= {
  threshold: 0, 
  rootMargin: "0px 0px -100px 0px"
};
const sliders = document.querySelectorAll('.sliders');
// const sliders = document.querySelectorAll('.sliders');

const appearOnScroll = new IntersectionObserver (function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting){
      return;
    }
    else {
      entry.target.classList.add('slide');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});


// sliders.forEach(slider => {
//   appearOnScroll.observe(slider);
// });

// SETTING UP THE LOADER 
 document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                document.querySelector(
                  "body").style.visibility = "hidden";
                document.querySelector(
                  "#loader").style.visibility = "visible";
            } else {
                document.querySelector(
                  "#loader").style.display = "none";
                document.querySelector(
                  "body").style.visibility = "visible";
            }
        };


//Get the button
var mybutton = document.getElementById("myBtn");

//When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




// NAVIGATING DIFFERENT TAB CONTENT
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const subContents = document.querySelectorAll('[sub-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    //Getting the Targeted content
    const target = document.querySelector(tab.dataset.tabTarget) 
    // Removing The active class from all contents 
    tabContents.forEach(tabContent =>{
      tabContent.classList.remove('active')
    })
    // Adding active class to the targeted content
    target.classList.add('active')

    tabs.forEach(tab =>{
      tab.classList.remove('On')
    })
    tab.classList.add('On')
  })
})