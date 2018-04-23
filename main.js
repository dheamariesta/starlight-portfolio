// var scrollableElement = document.getElementById('scrollableElement');
var el = document.getElementById('project-title-row');
document.addEventListener('wheel', findScrollDirectionOtherBrowsers);

function findScrollDirectionOtherBrowsers(event){
    var delta;

    if (event.wheelDelta){
        delta = event.wheelDelta;
    }else{
        delta = -1 * event.deltaY;
    }

    if (delta < 0){
        console.log("DOWN");
        if (elementInViewport2(el)){
          el.classList.remove('fadeOut');
          el.classList.add('fadeIn');
          $('#title').removeClass('slideInUp');
          $('#title').addClass('fadeOut');
        }
    }else if (delta > 0){
        console.log("UP");
        if (!elementInViewport2(el)){
          el.classList.remove('fadeIn');
          el.classList.add('fadeOut');
          $('#title').removeClass('fadeOut');
          $('#title').addClass('fadeIn');
          // $('#title').addClass('animated fadeOut');
        }
    }

}
function elementInViewport2(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}
function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}
$(document).ready(function(){


  $(window).on('scroll', function() {
    // console.log(elementInViewport(el));


  });


})
