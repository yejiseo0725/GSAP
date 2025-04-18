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

// .con01 GSAP
$(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con01",
        start: "0% 80%",
        end: "100% 100%",
        scrub: 1,
        markers: true,
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
});
