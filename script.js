//carousel
const slide = document.querySelectorAll(".slide");
const trailer = document.querySelectorAll(".img");
let count = 0;

//console.log(slide);
console.log(trailer);

slide.forEach((slide, Index) => {
  slide.style.left = `${Index * 100}%`;
});

const last = document.getElementById("last");
const next = document.getElementById("next");

last.addEventListener("click", () => {
  //console.log("clicked last")
  if (count === 0) {
    count = slide.length - 1;
    slideImage();
    vanishImage();
    trailer[count].style.display = "block";
  } else {
    count--;
    slideImage();
    vanishImage();
    trailer[count].style.display = "block";
  }
});

next.addEventListener("click", () => {
  //console.log("clicked next")
  if (count === slide.length - 1) {
    count = 0;
    slideImage();
    vanishImage();
    trailer[count].style.display = "block";
  } else {
    count++;
    slideImage();
    vanishImage();
    trailer[count].style.display = "block";
  }
});

const slideImage = () => {
  slide.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
};
const vanishImageOne = () => {
  setTimeout(() => {
    trailer[0].style.display = "none";
  }, 1000);
};
const vanishImage = () => {
  setTimeout(() => {
    trailer[count].style.display = "none";
  }, 1000);
};

gsap.to(".caraosel", {
  opacity: 0,
  display: "none",
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    target: ".caraosel",
    scroller: "body",
    //      markers:true,
    start: "top -10%",
    end: "top -12%",
    scrub: 3,
  },
});

gsap.to("#layer", {
    opacity: 0,
    display: "none",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      target: "#layer",
      scroller: "body",
      //      markers:true,
      start: "top -10%",
      end: "top -12%",
      scrub: 3,
    },
  });

//navbar

gsap.to("nav", {
  backgroundColor: "#000",
  height: "130px",
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    target: "nav",
    scroller: "body",
    //markers:true,
    start: "top -10%",
    end: "top -12%",
    scrub: 1,
  },
});
