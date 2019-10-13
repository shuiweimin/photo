function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function slid(e) {
  slideImgs.forEach(slideImg => {
    const Img = slideImg.querySelector("img");
    const rect = Img.getBoundingClientRect().top + window.scrollY;
    const checkH = window.scrollY + window.innerHeight;
    const slidH = Img.height / 2 + rect;
    // console.log(checkH, slidH, rect);
    // console.log(Img.offsetTop);
    if (checkH > slidH && window.scrollY < Img.height + rect) {
      slideImg.classList.add("slide", "tag-active");
    } else {
      slideImg.classList.remove("slide", "tag-active");
    }
  });
}

function showStep(entries) {
  if (entries[0].intersectionRatio <= 0) return;
  // entries.forEach(ele =>
  //   ele.intersectionRatio > 0.2 ? ele.target.classList.add("active-step") : ""
  // );
  console.log(entries[0].intersectionRatio);
  entries[0].target.classList.add("active-step");
}

//  register slide
const slideImgs = document.querySelectorAll(".more-scheme a");
console.log(slideImgs);
window.addEventListener("scroll", debounce(slid));

// register observer
// const observer = new IntersectionObserver(showStep);
const targets = document.querySelectorAll(".medical-step");
targets.forEach(target => {
  const observer = new IntersectionObserver(showStep);
  observer.observe(target, { threshold: 1.0 });
});
