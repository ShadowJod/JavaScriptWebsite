const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

let miniCircle = document.querySelector("#minicircle");
let elem = document.querySelectorAll(".elem");

function circleCursor() {
  window.addEventListener("mousemove", (e) => {
    miniCircle.style.transform = `translate(${e.x}px, ${e.y}px)`;
  });
}
circleCursor();

elem.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    // sabkii images hide karo
    elem.forEach((e) => {
      e.children[0].style.opacity = 0;
    });
  });

  box.addEventListener("mousemove", (dets) => {
    let img = box.children[0];

    img.style.opacity = 1;
    img.style.transform = `translate(${dets.clientX - 150}px, ${
      dets.clientY - 150
    }px)`;
  });

  box.addEventListener("mouseleave", () => {
    box.children[0].style.opacity = 0;
  });
});
