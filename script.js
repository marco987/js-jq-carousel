//Ricreare il carousel (o slideshow se preferite).
// Quindi frecce next prev + pallini.

$(document).ready(function(){

  $(".next").click(nextimg);

  function nextimg() {
    var imgActive = $(".img img.active");
    imgActive.removeClass("active");

    if(imgActive.hasClass("last")) {
      $(".first").addClass("active");
    } else {
      imgActive.next("img").addClass("active");
    }
  }

  $(".prev").click(previmg);

  function previmg() {
    var imgActive = $(".img img.active");
    imgActive.removeClass("active");

    if(imgActive.hasClass("first")) {
      $(".last").addClass("active");
    } else {
      imgActive.prev("img").addClass("active");
    }
  }














});
