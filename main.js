$(document).ready(function () {
  $("#menu #menu-icon").click(function (e) {
    e.preventDefault();
    $("#menu").toggleClass("opened");
  });
});

// setTimeout(() => {
//   document.getElementById("hero").style.backgroundImage =
//     "url('./assets/images/bg-hero2.png')";
//   document.getElementById("hero").style.color = "#fff";
//   $(".hero-title").css("-webkit-text-fill-color", "initial");
// }, 1000);

// gsap.to("#hero", {
//   css:'background-image','url(./assets/images/bg-hero2.png)'
// });

const tl = gsap.timeline();

// tl.to("#hero", {
//   duration: 2,
//   backgroundImage: "url('./assets/images/bg-hero2.png')",
//   autoAlpha: 1,
// });
tl.to("#hero", {
  autoAlpha: 0.5,
  duration: 0.1,
});
tl.to("#hero", {
  duration: 0.7,
  ease: "power2.in",
  autoAlpha: 1,
  backgroundImage: "url('./assets/images/bg-hero.png')",
});
tl.to(".hero-title", {
  backgroundImage: "linear-gradient(45deg, #000 100%, #eee 200%, #000 300%)",
  duration: 0.5,
});

gsap.fromTo(
  ".main-header",
  {
    y: -1000,
  },
  {
    y: 0,
    autoAlpha: 1,
    delay: 0.5,
  }
);

gsap.to("#home-contact", {
  backgroundColor: "#080809",
  immediateRender: false,
  scrollTrigger: {
    trigger: "#home-contact",
    scrub: true,
    makers: true,
    start: "top bottom",
    end: "+=100%",
  },
});

gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".panels-container .panel");
// if (document.documentElement.clientWidth >= 768) {
//   gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".panels-container",
//       pin: true,
//       scrub: 1,
//       snap: 1 / (sections.length - 1),
//       end: () => "+=" + document.querySelector(".panel").offsetWidth,
//     },
//   });
// }

gsap.to("#home-contact", {
  backgroundColor: "#080809",
  immediateRender: false,
  scrollTrigger: {
    trigger: "#home-contact",
    scrub: true,
    start: "top bottom",
    end: "+=100%",
  },
});

const showAnim = gsap
  .from(".main-header", {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
  onEnter: () =>
    gsap.to(".main-header", {
      backgroundColor: "#000",
      duration: 1.4,
      opacity: 0.9,
    }),
  onEnterBack: () =>
    gsap.to(".main-header", {
      backgroundColor: "#fff",
    }),
});

// star effect Wait for images to load
var frag = document.createDocumentFragment();
var textures = document.querySelectorAll(".star");
var appearMin = 0.3;
var appearMax = 0.8;

var delayMin = 2;
var delayMax = 6;

var durationMin = 0.3;
var durationMax = 1;

var numAnimations = 20;
var numStars = 100;

var stars = [];
var eases = [];

for (var i = 0; i < numAnimations; i++) {
  var ease = new RoughEase({
    template: Linear.easeNone,
    strength: random(1, 3),
    points: random(50, 200) | 0,
    taper: "both",
    randomize: true,
    clamp: true,
  });

  eases.push(ease);
}

// Wait for images to load
window.addEventListener("load", onLoad);

function onLoad() {
  gsap.utils.toArray(".ellipse-effect").forEach((element) => {
    for (var i = 0; i < numStars; i++) {
      stars.push(createStar(element.clientWidth, element.clientHeight));
    }
    element.appendChild(frag);
  });
}

function createStar(vw, vh) {
  var index = random(textures.length) | 0;
  var star = textures[index].cloneNode(true);
  frag.appendChild(star);

  TweenLite.set(star, {
    rotation: random(360),
    xPercent: -50,
    yPercent: -vh * 0.25,
    scale: 0,
    x: random(vw),
    y: random(vh),
  });

  var tl = new TimelineMax({ repeat: -1, yoyo: true });

  for (var i = 0; i < numAnimations; i++) {
    var ease1 = eases[random(numAnimations) | 0];
    var ease2 = eases[random(numAnimations) | 0];

    var alpha = random(0.7, 1);
    var scale = random(0.15, 0.4);

    var appear = "+=" + random(appearMin, appearMax);
    var delay = "+=" + random(delayMin, delayMax);
    var duration1 = random(durationMin, durationMax);
    var duration2 = random(durationMin, durationMax);

    tl.to(
      star,
      duration1,
      { autoAlpha: alpha, scale: scale, ease: ease1 },
      delay
    ).to(star, duration2, { autoAlpha: 0, scale: 0, ease: ease2 }, appear);
  }

  tl.progress(random(1));

  return {
    element: star,
    timeline: tl,
  };
}

function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  if (min > max) {
    var tmp = min;
    min = max;
    max = tmp;
  }
  return min + (max - min) * Math.random();
}

// Text Effect
window.addEventListener("scroll", scrollEventListener);
function scrollEventListener() {
  var scrollY = window.pageYOffset || document.documentElement.scrollTop;

  document.querySelectorAll(".text-effect").forEach((current) => {
    const currentOffset =
      scrollY - current.offsetTop + document.documentElement.clientHeight - 200;

    if (currentOffset > 0 || currentOffset < 300) {
      current.style.webkitTextFillColor =
        "rgba(0,0,0," + currentOffset / 300 + ")";
    }
  });
}

// const mainHeader = document.querySelector(".main-header");
// mainHeader.classList.remove("-translate-y-full");
// mainHeader.classList.add("translate-y-0");

// class Gsap {
//   constructor() {
//     this.mainHeader = document.querySelector(".main-header");
//     this.events();
//   }

//   events() {
//     this.mainHeader.addEventListener("load", () => this.headerSlideIn());
//   }

//   // Custom methods
//   headerSlideIn() {
//     this.mainHeader.classList.add("translate-y-full");
//   }
// }

// const gsaps = new Gsap();
