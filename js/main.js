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

// header: scroll 반응에 따라 사라지게 하기
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

// svg.path 길이 구하기
$(function () {
  $(".svg-ani")
    .find("#svg-ani01")
    .each(function (i, path) {
      let length = path.getTotalLength();
      // alert(length);
    });
});

// * each(): object, 배열 모두 사용할 수 있는 반복함수로
// length 속성을 갖는 배열과 유사배열객체들의 index를 기준으로
// 첫 번째 매개변수로 배열이나 객체를 받고,
// 두 번째 매개변수로 콜백함수 값을 인자로 받음
