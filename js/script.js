var containerEl = document.querySelector(".imgPart");

var mixer = mixitup(containerEl, {
  multifilter: {
    enable: true,
  },
  animation: {
    effects: "fade translateZ(-100px)",
  },
});
