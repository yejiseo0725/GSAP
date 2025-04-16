// plugin setting
$(function () {
  // text animation effect
  Splitting();
  // svg animation effect
  $(".animate").scrolla({
    mobile: true,
    one: false,
  });
});

$(function () {
  let prevScrollTop = 0;

  document.addEventListener("scroll", function () {
    let nowScrollTop = $(window).scrollTop();

    if (nowScrollTop > prevScrollTop) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
    prevScrollTop = nowScrollTop;
  });
});
