// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
  easing: "easeOutQuad"
});

// copy email to clipboard
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

// $(".card1").on("click", function() {
//   $(".popup1").addClass("active");
//   $(".card").addClass("active");
// });

// $(".card2").on("click", function() {
//   $(".popup2").addClass("active");
//   $(".card").addClass("active");
// });

// $(".card3").on("click", function() {
//   $(".popup3").addClass("active");
//   $(".card").addClass("active");
// });

// $(".card4").on("click", function() {
//   $(".popup4").addClass("active");
//   $(".card").addClass("active");
// });

// $(".close").on("click", function() {
//   $(".popup").removeClass("active");
//   $(".card").removeClass("active");
// });

// card fade out
// $(".card1").on("click", function() {
//   // $(".card2").toggleClass("cardfade");
//   // $(".card3").toggleClass("cardfade");
//   // $(".card4").toggleClass("cardfade");

// $(".card2").on("click", function() {
//   $(".card1").toggleClass("cardfade");
//   $(".card3").toggleClass("cardfade");
//   $(".card4").toggleClass("cardfade");
// });

// $(".card3").on("click", function() {
//   $(".card1").toggleClass("cardfade");
//   $(".card2").toggleClass("cardfade");
//   $(".card4").toggleClass("cardfade");
// });

// $(".card4").on("click", function() {
//   $(".card1").toggleClass("cardfade");
//   $(".card2").toggleClass("cardfade");
//   $(".card3").toggleClass("cardfade");
// });
