// slider

function Slider(slider) {
  // if (!(slider instanceof Element)) {
  //   throw new Error("No slider passed in");
  // }
  let prev, current, next;
  // select the elements needed for the slider
  const slides = slider.querySelector(".slider");
  const prevButton = slider.querySelector(".goToPrev");
  const nextButton = slider.querySelector(".goToNext");
  const bullets = Array.from(
    slider.querySelector(".slider__controls").children
  );
  const arrSlides = [...slides.children];

  let x1 = null;

  function fillBullets() {
    for (let i = 0; i < arrSlides.length; i++) {
      bullets[i].classList.remove("active");
      if (arrSlides[i].classList.contains("current")) {
        bullets[i].classList.add("active");
      }
    }
  }

  function handleTouchStart(e) {
    const firstTouch = e.touches[0];
    x1 = e.touches[0].clientX;

    // console.log(x1, y1);
  }
  function handleTouchMove(e) {
    if (!x1) {
      return false;
    }
    let x2 = e.touches[0].clientX;

    console.log(x2);
    let xDif = x2 - x1;

    if (xDif > 0) {
      console.log("right");
      move("next");
    } else {
      console.log("left");
      move("prev");
    }
  }
  function startSlider() {
    current = slider.querySelector(".current") || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log({ current, prev, next });
    fillBullets();
  }
  function applyClasses() {
    current.classList.add("current");
    prev.classList.add("prev");
    next.classList.add("next");
  }

  function move(direction) {
    // first strip all the classes off the current slides
    const classesToRemove = ["prev", "current", "next"];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if (direction === "back") {
      // make an new array of the new values, and destructure them over and into the prev, current and next variables
      [prev, current, next] = [
        // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        // get the next slide, or if it's at the end, loop around and grab the first slide
        next.nextElementSibling || slides.firstElementChild,
      ];
    }

    applyClasses();
    fillBullets();
  }
  // Event listeners
  prevButton.addEventListener("click", () => move("back"));
  nextButton.addEventListener("click", move);
  slides.addEventListener("touchstart", handleTouchStart, false);
  slides.addEventListener("touchmove", handleTouchMove, false);
  startSlider();
  applyClasses();
}

const mySlider = Slider(document.querySelector(".slider__wrapper"));
