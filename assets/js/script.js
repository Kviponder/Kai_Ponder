(function ($) {
  function createRandomColor() {
    var hex = "0123456789ABC".split(""),
      color = "#",
      i;

    for (var i = 0; i < 6; i++) {
      color = color + hex[Math.floor(Math.random() * 13)];
    }

    return color;
  }

  function setFontSize() {
    var maxFontSize = 30;
    var fontSize = Math.floor(Math.random() * maxFontSize + 14) + "px";

    return fontSize;
  }

  function setOffsets() {
    var offsets = {};

    var randTop = Math.floor(Math.random() * 10);
    var randLeft = Math.floor(Math.random() * 10);

    var maxTop = Math.floor(Math.random() * randTop) + "px";
    var maxLeft = Math.floor(Math.random() * randLeft) + "px";

    offsets.top = maxTop;
    offsets.left = maxLeft;

    return offsets;
  }

  $(function () {
    $("a", ".skills").each(function () {
      var $a = $(this);
      var cssColor = createRandomColor();
      var cssFontSize = setFontSize();
      var linkOffsets = setOffsets();

      $a.css({
        color: cssColor,
        fontSize: cssFontSize,
        top: linkOffsets.top,
        left: linkOffsets.left,
      });
    });
  });
});
