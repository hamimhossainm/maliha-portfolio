/*=============== SHOW MENU ===============*/
let navMenu=document.getElementById("nav-menu");
let navToggle=document.getElementById("nav-toggle");
let navClose=document.getElementById("nav-close");

// ==== Menu Show ====
// validate if constant exist
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu");
    });
}

// ==== Menu hidden ====
// validate if constant exist
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu");
    });
}


/*=============== REMOVE MENU MOBILE ===============*/
let navLink=document.querySelectorAll(".nav__link");

let linkAction=()=>{
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click",linkAction));

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects= new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial= new Swiper(".testimonial__container",{
    grabCursor: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== EMAIL JS ===============*/
let contactForm = document.getElementById("contact-form");
let contactName = document.getElementById("contact-name");
let contactEmail = document.getElementById("contact-email");
let contactproject = document.getElementById("contact-project");
let contactMessage = document.getElementById("contact-message");

let sendEmail = (e) =>{
    e.preventDefault();
    if(contactName.value==='' || contactEmail.value==='' || contactproject.value==='')
        {
            contactMessage.classList.remove("color-blue");
            contactMessage.classList.add("color-red");
            contactMessage.textContent="Write all the input fields 📩";
        }else{
            // serviceID - templateID - #form - publicKey
            emailjs.sendForm('service_rmx0zuh','template_879ue4u','#contact-form','nr33aMMsu2LnadeMG')
                .then(()=>{
                    contactMessage.classList.add("color-blue");
                    contactMessage.textContent="Message sent ✅";


                    setTimeout(()=>{
                        contactMessage.textContent="";
                    },5000);
                },(error)=>{
                    alert("OOPS! SOMETHING HAS FAILED...", error);
                });
                contactName.value='';
                contactEmail.value='';
                contactproject.value='';
        }
}

contactForm.addEventListener("submit",sendEmail);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
let sections = document.querySelectorAll("section[id]");

let scrollActive = () =>{
    let scrollY = window.pageYOffset;

    sections.forEach(current =>{
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 58;
        let sectionID = current.getAttribute("id");
        let sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionID + "]");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add("active-link");
        }else{
            sectionsClass.classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);



/*=============== SHOW SCROLL UP ===============*/ 
let scrollUp = () =>{
    let scrollUp = document.getElementById("scroll-up");
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll"):scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll",scrollUp);

/*=============== DARK LIGHT THEME ===============*/ 
let themeButton = document.getElementById("theme-button");
let darkTheme = "dark-theme";
let iconTheme = "ri-sun-line";

let selectedTheme= localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");

let getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
let getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}


themeButton.addEventListener("click", ()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.secItem("selected-theme",getCurrentTheme());
    localStorage.secItem("selected-icon", getCurrentIcon());
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
let scrollHeader = () =>{
    let header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("bg-header"):header.classList.remove("bg-header");
}
window.addEventListener("scroll",scrollHeader);

/*=============== SCROLL REVEAL ANIMATION ===============*/
let sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container`);
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100});
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'});
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'});
sr.reveal(`.qualification__content, .services__card`, {interval: 100});