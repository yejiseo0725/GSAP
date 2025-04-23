// a 속성제거 (a 클릭시 위로 튕기는 현상 제거) ---> 아무것도 없는 a 링크 클릭 방지
$(document).on("click", 'a[herf="#"]', function (e) {
  e.preventDefault();
});

// plugin setting
$(function () {
  // text animation effect
  Splitting();
  // svg animation effect
  $(".animate").scrolla({
    mobile: true,
    one: false,
  });
  // simplyScroll
  $(function () {
    $(".con03 .list").simplyScroll({
      speed: 4,
      pauseOnHover: false,
      pauseOnTouch: false,
    });
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

// .con01 GSAP
$(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con01",
        start: "0% 80%",
        end: "100% 100%",
        scrub: 1,
        // markers: true,
      },
    })

    .to(
      ".wrap",
      { backgroundColor: "#fff", color: "#000", ease: "none", duration: 5 },
      0
    )
    .to(
      ".visual",
      { backgroundColor: "#fff", color: "#000", ease: "none", duration: 5 },
      0
    )
    .to(".svg-ani path", { stroke: "#000", ease: "none", duration: 5 }, 0)
    .to(".scroll", { opacity: "0", ease: "none", duration: 5 }, 0)
    .fromTo(
      ".videoWrap video",
      {
        "clip-path": "inset(60% 60% 60% 60% round 30%)",
      },
      {
        "clip-path": "inset(0% 0% 0% 0% round 0%)",
        ease: "none",
        duration: 10,
      },
      0
    );

  // .con02 GSAP
  // title
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "0% 100%",
        end: "0% 20%",
        scrub: 1,
        // markers: true,
      },
    })

    .fromTo(
      ".con02 .title .a",
      {
        x: "-100%",
      },
      {
        x: "0%",
        ease: "none",
        duration: 5,
      },
      0
    )
    .fromTo(
      ".con02 .title .b",
      {
        x: "100%",
      },
      {
        x: "0%",
        ease: "none",
        duration: 5,
      },
      0
    );

  // worklist
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".workList",
        start: "0% 100%",
        end: "0% 100%",
        scrub: 1,
        // markers: true,
      },
    })
    .to(
      ".wrap",
      {
        backgroundColor: "#000",
        color: "#fff",
        ease: "none",
        duration: 5,
      },
      0
    )
    .to(
      ".con02 .title",
      {
        position: "fixed",
        ease: "none",
        left: "0",
        top: "0",
        width: "100%",
        duration: 5,
      },
      0
    )

    .fromTo(
      ".workList",
      {
        margin: "0 auto",
      },
      {
        margin: "100vh auto 0",
        position: "relative",
        zIndex: "10",
        duration: 1,
      },
      0
    );

  // workList 끝난 후 title 설정
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".workList",
        start: "100% 50%",
        end: "100% 0%",
        scrub: 1,
        // markers: true,
      },
    })

    .to(
      ".con02 .title .a",
      {
        x: "-100%",
        ease: "none",
        duration: 5,
      },
      0
    )
    .to(
      ".con02 .title .b",
      {
        x: "100%",
        ease: "none",
        duration: 5,
      },
      0
    );
});

// GNB menuOpen
$(function () {
  $(".menuOpen").on("click", function () {
    $(".gnb").toggleClass("menu-on");
    $(this).toggleClass("menu-on");
    $("body").toggleClass("menu-on"); // 스크롤 방지
  });
});
