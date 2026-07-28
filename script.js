/* ======================================================
   PERSONAL PROFILE - DINDA
   script.js Part 1
====================================================== */

/* =========================
   AOS INIT
========================= */

AOS.init({
    duration: 700,
    once: true,
    easing: "ease-in-out"
});

/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("loader-hide");

    }, 1800);

});

/* =========================
   DIGITAL CLOCK
========================= */

function updateClock() {

    const now = new Date();

    const hari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];

    const bulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];

    let jam = String(now.getHours()).padStart(2, "0");
    let menit = String(now.getMinutes()).padStart(2, "0");
    let detik = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("time").innerHTML =
        `${jam}:${menit}:${detik}`;

    document.getElementById("date").innerHTML =
        `${hari[now.getDay()]},
        ${now.getDate()} ${bulan[now.getMonth()]}
        ${now.getFullYear()}`;

}

setInterval(updateClock, 1000);

updateClock();

/* =========================
   MUSIC
========================= */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = () => {

    if (!playing) {

        music.play();

        playing = true;

        musicBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

    }

    else {

        music.pause();

        playing = false;

        musicBtn.innerHTML =
        '<i class="fa-solid fa-music"></i>';

    }

};

/* =========================
   NAVBAR
========================= */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    }

    else {

        navbar.classList.remove("scrolled");

    }

});

/* =========================
   PROGRESS BAR
========================= */

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent =
        (scrollTop / height) * 100;

    document.getElementById("progressBar")
        .style.width = percent + "%";

});

/* =========================
   BACK TO TOP
========================= */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/* ======================================================
   SCRIPT.JS PART 2
   Gallery, Lightbox, Stars
====================================================== */

/* =========================
   LIGHTBOX GALLERY
========================= */

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});

document.addEventListener("keydown", (e)=>{

    if(e.key === "Escape"){

        lightbox.style.display = "none";

    }

});

/* =========================
   FLOATING STARS
========================= */

const stars = document.getElementById("stars");

for(let i=0;i<100;i++){

    const star = document.createElement("span");

    star.style.position = "absolute";

    star.style.width = Math.random()*3+1+"px";

    star.style.height = star.style.width;

    star.style.background = "white";

    star.style.borderRadius = "50%";

    star.style.opacity = Math.random();

    star.style.left = Math.random()*100+"%";

    star.style.top = Math.random()*100+"%";

    star.style.animation = `twinkle ${Math.random()*4+3}s infinite`;

    stars.appendChild(star);

}

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('nav a').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

/* =========================
   IMAGE HOVER EFFECT
========================= */

galleryImages.forEach((img)=>{

    img.addEventListener("mousemove",(e)=>{

        img.style.transform = "scale(1.03)";
           
    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform = "scale(1)";

    });

});

/* =========================
   SCROLL REVEAL
========================= */

const revealItems = document.querySelectorAll(
".biodata-card,.about-card,.contact-card,.gallery img"
);

const reveal = ()=>{

    revealItems.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight-120){

            item.classList.add("fade-up");

        }

    });

}

const folderBtn=document.querySelectorAll(".folder-btn");

folderBtn.forEach(btn=>{

btn.addEventListener("click",()=>{

const content=btn.nextElementSibling;

if(content.style.display==="block"){

content.style.display="none";

}else{

content.style.display="block";

}

});

});

window.addEventListener("scroll",reveal);

reveal();
