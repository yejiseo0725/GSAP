$(function () {
  gsap.registerPlugin(ScrollTrigger);
});

$(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con02 ul",
        start: "top 90%",
        end: "20% 100%",
        scrub: 2,
        // markers: true,
      },
    })
    .to(
      ".con02 li:nth-child(1)",
      { y: "-400px", duration: 1, ease: "none" },
      0.2
    )
    .to(
      ".con02 li:nth-child(2)",
      { y: "-400px", duration: 1, ease: "none" },
      0.4
    )
    .to(
      ".con02 li:nth-child(3)",
      { y: "-400px", duration: 1, ease: "none" },
      0.6
    )
    .to(
      ".con02 li:nth-child(4)",
      { y: "-400px", duration: 1, ease: "none" },
      0.8
    );

  // con03
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con03",
        start: "top 100%",
        end: "100% 100%",
        scrub: 2,
        markers: true,
      },
    })
    .fromTo(".con03 span.a", { y: "400%" }, { y: "0" }, 1.2)
    .fromTo(".con03 span.b", { y: "400%" }, { y: "0" }, 1.4)
    .fromTo(".con03 span.c", { y: "400%" }, { y: "0" }, 1.6)
    .fromTo(".con03 span.d", { y: "400%" }, { y: "0" }, 1.8)
    .fromTo(".con03 span.e", { y: "400%" }, { y: "0" }, 2);
});
