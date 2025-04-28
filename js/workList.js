// scroll animation
$(function () {
  $(".animate").scrolla({
    mobile: true,
    once: false,
  });
});

// $(function () {
//   gsap.registerPlugin(scrollTrigger);

//   ScrollTrigger.machMedia({
//     "(min-width: 1024px)": function () {
//       // horizontal scroll
//       let list = gsap.utils.toArray(".work ul li");
//       let scrollTween = gsap.to(list, {
//         xPercent: -100 * (list.length - 1),
//         // 기존 리스트의 갯수에서 1을 뺀 길이를 구한 뒤, 가로로 이동하는 공식
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".work",
//           pin: true,
//           scrub: 1,
//           start: "center center",
//           end: "300%", // 숫자가 클 수록 느려짐 (vh)
//           markers: true,
//         },
//       });
//     },
//   });
// });
