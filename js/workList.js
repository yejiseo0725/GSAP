// scroll animation
$(function () {
  $(".animate").scrolla({
    mobile: true,
    once: false,
  });
});

$(function () {
  // GSAP Plugin
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    "(min-width: 300px)": function () {
      // horizontal scroll
      let list = gsap.utils.toArray(".work ul li");
      let scrollTween = gsap.to(list, {
        xPercent: -100 * (list.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".work",
          pin: true,
          scrub: 1,
          start: "center center",
          end: "300%",
          // markers: true,
        },
      });

      // .imgBox motion
      gsap.utils.toArray(".imgBox").forEach(function (imgBox) {
        // imgBox 커지는 animation (우측 -> 좌측)
        gsap
          .timeline({
            scrollTrigger: {
              trigger: imgBox,
              containerAnimation: scrollTween,
              start: "center right",
              end: "center center",
              scrub: true,
              // markers: true,
            },
          })
          .to(
            imgBox,
            { "clip-path": "inset(0%)", ease: "none", duration: 1 },
            0
          );

        // imgBox 작아지는 animation (중간 -> 좌측)
        gsap
          .timeline({
            scrollTrigger: {
              trigger: imgBox,
              containerAnimation: scrollTween,
              start: "center center",
              end: "center left",
              scrub: true,
              // markers: true,
            },
          })
          .to(
            imgBox,
            { "clip-path": "inset(30%)", ease: "none", duration: 1 },
            0
          );
      });

      // .textBox motion
      gsap.utils.toArray(".work ul li .textBox").forEach(function (textBox) {
        // textBox 커지는 animation (우측 -> 좌측)
        gsap
          .timeline({
            scrollTrigger: {
              trigger: textBox,
              containerAnimation: scrollTween,
              start: "center 70%",
              end: "center 40%",
              scrub: true,
              // markers: true,
            },
          })
          .to(textBox, { opacity: "1", x: "-5%" }, 0);

        // textBox 작아지는 animation (중간 -> 좌측)
        gsap
          .timeline({
            scrollTrigger: {
              trigger: textBox,
              containerAnimation: scrollTween,
              start: "center 30%",
              end: "center 20%",
              scrub: true,
              // markers: true,
            },
          })
          .to(textBox, { opacity: "0" }, 0);

        // change counter text
        gsap.utils.toArray(".num").forEach(function (text) {
          let num = text.getAttribute("data-text");
          let counter = document.querySelector(".counter .now");

          ScrollTrigger.create({
            trigger: text,
            start: "0% center",
            end: "100% center",
            scrub: true,
            containerAnimation: scrollTween,
            onEnter: (self) => (counter.innerText = num),
            // scroll 위치가 start 를 지나 앞으로 이동할 때, .counter .now 에 적어준다
            onEnterBack: (self) => (counter.innerText = num),
            // scroll 위치가 end 를 지나 뒤로 이동할 때, .counter .now 에 적어준다
          });
        });
      });
    },
  });
});
