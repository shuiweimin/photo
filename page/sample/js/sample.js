//导入轮播图片
function createSlideImgs(imgNumber, imgRows) {
  const imgsContainer = document.querySelector(".sample-image");
  for (let n = 1; n <= imgNumber; n++) {
    let head = "",
      foot = "";
    if (n % imgRows === 1) {
      head = "<div class='swiper-container'><div class='swiper-wrapper'>";
    } else if (n % imgRows == 0) {
      foot = "</div><div class='swiper-pagination'></div></div>";
    }
    let img = `img/${n}.png`;
    imgs.push(head + ` <img src=${img} class="swiper-slide" />` + foot);
  }
  imgsContainer.innerHTML = imgs.join("");
}

function reponsiveSwiper() {
  if (window.innerWidth < 756 && mySwiper[0].params.effect) {
    mySwiper[0].params.effect = false;
    mySwiper[0].params.slidesPerView = 1;
  } else if (window.innerWidth > 756 && !mySwiper[0].params.effect) {
    console.log(mySwiper[0].effects.coverflow);
    mySwiper.forEach(element => {
      element.destroy();
    });
    mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      loop: true,
      pagination: ".swiper-pagination",
      paginationClickable: true,
      // 如果需要分页器
      prevButton: ".swiper-button-prev",
      nextButton: ".swiper-button-next",
      effect: "coverflow",
      slidesPerView: 3,
      centeredSlides: true
    });
  }
}
// 绑定btn切换事件
function btnAlter(index) {
  return function() {
    mySwiper.forEach(sw => sw.slideTo(index + 1));
  };
}
window.onload = reponsiveSwiper;
window.onresize = reponsiveSwiper;
const imgNumber = 12;
const imgRows = 4;
const imgs = [];
const btns = document.querySelectorAll(".meum div");
btns.forEach((btn, index) => btn.addEventListener("click", btnAlter(index)));
createSlideImgs(imgNumber, imgRows);
let mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  pagination: ".swiper-pagination",
  paginationClickable: true,
  // 如果需要分页器
  prevButton: ".swiper-button-prev",
  nextButton: ".swiper-button-next"
});
