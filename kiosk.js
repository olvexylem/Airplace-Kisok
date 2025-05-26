function updateTime() {
    const now = new Date();
    const formatted = now.toLocaleString("en-UK", {
        weekday: "narrow",   // "Monday"
        year: "numeric",   // "2025"
        month: "numeric",     // "May"
        day: "2-digit",    // "20"
        hour: "2-digit",   // "04"
        minute: "2-digit", // "32"
        // second: "numeric", // "15"
        hour12: false      // 24-hour format
      });
    document.getElementById('timestamp').textContent = formatted;
  }
  // Update immediately and every second
  updateTime();
  setInterval(updateTime, 1000);



// type animation
const typed = new Typed("#typed", {
    strings: ["AIRPLACE"], // Texts to type
    typeSpeed: 80,          // Typing speed (ms per character)
    backSpeed: 80,          // Backspacing speed
    backDelay: 5000,        // Pause before backspacing
    startDelay: 1000,        // Delay before first typing
    loop: true              // Keep looping
  });



// Colophon toggle
const colophon = document.getElementById('colophon-btn');
const colophonContent = document.getElementById('colophon-content');

colophon.addEventListener('click', () => {
  const isOpen = colophonContent.classList.toggle('open');
  colophon.classList.toggle('rotated', isOpen);
});

// Blurb toggle
document.addEventListener("DOMContentLoaded", function () {
  const blurbBtn = document.getElementById("blurb-btn");
  const blurbContent = document.getElementById("blurb-content");

  blurbBtn.addEventListener("click", function () {
    const isHidden = blurbContent.style.display === "none";
    blurbContent.style.display = isHidden ? "block" : "none";
    blurbBtn.classList.toggle("open", isHidden);
  });
});



//   blackBox scroll
const bundle = document.querySelector('.bundle');
  const blackBox = document.querySelector('.blackBox');

  bundle.addEventListener('scroll', () => {
    const scrollTop = bundle.scrollTop;
    const scrollHeight = bundle.scrollHeight - bundle.clientHeight;

    const scrollPercent = scrollTop / scrollHeight;

    const maxBlackBoxHeight = 790; // change this to whatever "100%" height you want

    blackBox.style.height = (scrollPercent * maxBlackBoxHeight) + 'px';
  });

  // home button
  document.getElementById("code1").addEventListener("click", function () {
    document.querySelector("#p4").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("code2").addEventListener("click", function () {
    document.querySelector("#p8").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("code3").addEventListener("click", function () {
    document.querySelector("#p18").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("code4").addEventListener("click", function () {
    document.querySelector("#p23").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("code5").addEventListener("click", function () {
    document.querySelector("#p38").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("code6").addEventListener("click", function () {
    document.querySelector("#p55").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("code7").addEventListener("click", function () {
    document.querySelector("#p78").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("code8").addEventListener("click", function () {
    document.querySelector("#p81").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("codeIndex").addEventListener("click", function () {
    document.querySelector("#p3").scrollIntoView({ behavior: "smooth" });
  });

  // 
  document.getElementById("introBtn").addEventListener("click", function () {
    document.querySelector("#p4").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("chap1Btn").addEventListener("click", function () {
    document.querySelector("#p8").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("chap2Btn").addEventListener("click", function () {
    document.querySelector("#p18").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("chap3Btn").addEventListener("click", function () {
    document.querySelector("#p23").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("chap4Btn").addEventListener("click", function () {
    document.querySelector("#p38").scrollIntoView({ behavior: "smooth" });
  });
  
  document.getElementById("chap5Btn").addEventListener("click", function () {
    document.querySelector("#p55").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("chap5-subBtn").addEventListener("click", function () {
    document.querySelector("#p71").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("reflectionBtn").addEventListener("click", function () {
    document.querySelector("#p78").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("bibilographyBtn").addEventListener("click", function () {
    document.querySelector("#p81").scrollIntoView({ behavior: "smooth" });
  });

  