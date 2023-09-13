let actualSlide = 2;
let viewWidth = "1380px";
let roundFinish = false;
let stopAnimation = false;
let waintingTime = 3000;

let butSlideLeft = document.getElementById("but_slide_left");
let butSlideRight = document.getElementById("but_slide_right");
let slideGroup = document.getElementById("slide_group");

function checkViewWidth() {
  if (window.innerWidth <= 1000) {
    viewWidth = "520px";
  } else if (window.innerWidth <= 1460) {
    viewWidth = "920px";
  } else if (window.innerWidth <= 1700) {
    viewWidth = "1220px";
  } else {
    viewWidth = "1380px";
  }

  actualSlide = 2;
  slideGroup.style.left = "-" + viewWidth;
}

function checkViewLeft() {
  let numSlideGroupLeft = -parseInt(
    getComputedStyle(slideGroup).left.substring(
      0,
      getComputedStyle(slideGroup).left.length - 2
    )
  );
  let numViewWidth = parseInt(viewWidth.substring(0, viewWidth.length - 2));
  if (numSlideGroupLeft % numViewWidth != 0) {
    actualSlide = 2;
    slideGroup.style.left = "-" + viewWidth;
  }
}

checkViewWidth();
butSlideLeft.addEventListener("click", () => {
  stopAnimation = true;
  if (actualSlide < 4) {
    let val =
      "calc(" + getComputedStyle(slideGroup).left + " - " + viewWidth + ")";
    slideGroup.style.left = val;
    actualSlide += 1;
    if (actualSlide > 3) {
      roundFinish = true;
    }
  }
  checkViewLeft();
});

butSlideRight.addEventListener("click", () => {
  stopAnimation = true;
  if (actualSlide > 1) {
    let val =
      "calc(" + getComputedStyle(slideGroup).left + " + " + viewWidth + ")";
    slideGroup.style.left = val;
    actualSlide -= 1;
    if (actualSlide < 2) {
      roundFinish = false;
    }
  }
  checkViewLeft();
});

window.addEventListener("resize", () => {
  checkViewWidth();
});

function animation() {
  if (!stopAnimation) {
    if (!roundFinish) {
      let val =
        "calc(" + getComputedStyle(slideGroup).left + " - " + viewWidth + ")";
      slideGroup.style.left = val;
      actualSlide += 1;
      if (actualSlide > 3) {
        roundFinish = true;
      }
    } else {
      let val =
        "calc(" + getComputedStyle(slideGroup).left + " + " + viewWidth + ")";
      slideGroup.style.left = val;
      actualSlide -= 1;
      if (actualSlide < 2) {
        roundFinish = false;
      }
    }
    checkViewLeft();
    setTimeout("animation()", waintingTime);
  } else {
    stopAnimation = false;
    setTimeout("animation()", waintingTime);
  }
}

animation();
