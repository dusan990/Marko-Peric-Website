var offset = 0;
var count = $(".slide-item-wrapper > * > *").length;
window.setInterval(
  function() {
    offset = (offset - 104) % (count * 104); // 104px div height (incl margin)
    $(".slide-item-wrapper > *").css({
      "transform": "translateY(" + offset + "px)",
    });
  }, 3000);