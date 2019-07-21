//Ricreare il carousel (o slideshow se preferite).
// Quindi frecce next prev + pallini.

$(document).ready(function(){

  $(".next").click(nextimg);

  function nextimg() {
    var imgActive = $(".img img.active");
    var pallActive = $(".pallini span.active");

    imgActive.removeClass("active");
    pallActive.removeClass("active");

    if(imgActive.hasClass("last") && pallActive.hasClass("last")) {
      $(".first").addClass("active");
      $(".pallini span.first").addClass("active");
    } else {
      imgActive.next("img").addClass("active");
      pallActive.next("span").addClass("active");
    }
  }

  $(".prev").click(previmg);

  function previmg() {
    var imgActive = $(".img img.active");
    var pallActive = $(".pallini span.active");

    imgActive.removeClass("active");
    pallActive.removeClass("active");

    if(imgActive.hasClass("first")) {
      $(".last").addClass("active");
      $(".pallini span.last").addClass("active");
    } else {
      imgActive.prev("img").addClass("active");
      pallActive.prev("span").addClass("active");
    }
  }














});
