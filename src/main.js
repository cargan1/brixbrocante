import Lenis from "@studio-freight/lenis";
import "./css/style.css";
import "./js/scripts.js";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const paraImages = document.querySelectorAll(".content-section-image");

paraImages.forEach((paraImage) => {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: paraImage,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  tl2.to(paraImage, {
    backgroundPosition: "50% 0%",
    ease: "none",
  });
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home-hero-wrapper",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

tl.to(".hero-title", { y: "-30%", ease: "none", opacity: "0" }, 0);
tl.to(".bottom-content", { y: "-5%", ease: "none", opacity: "0" }, 0);

// const fixedContainers = document.querySelectorAll(".fixed-container");
// fixedContainers.forEach((fixedCont) => {
//   let tl3 = gsap.timeline({
//     scrollTrigger: {
//       trigger: fixedCont,
//       start: "top 55%",
//       toggleActions: "play none none reverse",
//     },
//   });
//   tl3.from(fixedCont, { scale: "0.97", duration: "0.8", ease: "power4.out" });
// });

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".privat",
    start: "top 55%",
    toggleActions: "play none none reverse",
  },
});
tl3.from(".privat", { scale: "0.96", duration: "0.5", ease: "none" });

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".big-text",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

tl4.from(".image1", { y: "40%", x: "-40%", ease: "none" }, 0);
tl4.from(".image2", { y: "50%", x: "100%", ease: "none" }, 0);
tl4.from(".image3", { y: "-70%", x: "-40%", ease: "none" }, 0);

/* Smaller logo */

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top 85%",
    toggleActions: "play none none reverse",
    scrub: true,
  },
});

tl5.to(".logo", { scale: "0.75", ease: "none" }, 0);
tl5.to(".navbar", { gap: ".4rem", height: "3.8rem", ease: "none" }, 0);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    lenis.scrollTo(this.getAttribute("href"));
  });
});

function removeWatermark() {
  let thing = document.querySelector(".eapps-instagram-feed-container")
    .nextElementSibling.nextElementSibling.nextElementSibling;
  thing.style.display = "none";
}
setTimeout(removeWatermark, 2000);
