var titleContainer = document.getElementById('title-container');
disableScroll($('body'));
enableScroll($('#title-container'));
$('#title-container').scroll(function() {
  // console.log("hello");
  // console.log(this.scrollHeight);

  var scrollPosition = Math.floor($('#title-container').scrollTop());

  var bottomPoint = Math.abs($(window).height() - $('#title-text').height());

  if(scrollPosition == bottomPoint){
    console.log('bottom');
    enableScroll($('body'));
    disableScroll($('#title-container'));
  }
});

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault){
    e.preventDefault();
  }

  e.returnValue = false;
}

// function preventDefaultForScrollKeys(e) {
//     if (keys[e.keyCode]) {
//         preventDefault(e);
//         return false;
//     }
// }

function disableScroll(el) {
  if (el.addEventListener){
    el.addEventListener('DOMMouseScroll', preventDefault, false);
  }
  console.log('prevent scrolling')
  el.onwheel = preventDefault; // modern standard
  el.onmousewheel = preventDefault; // older browsers, IE
  el.ontouchmove  = preventDefault; // mobile
  // document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll(el) {
    if (el.removeEventListener){
      el.removeEventListener('DOMMouseScroll', preventDefault, false);
    }

    el.onmousewheel = null;
    el.onwheel = null;
    el.ontouchmove = null;
    // document.onkeydown = null;
}
// titleContainer.addEventListener('scroll', function(e){
//   console.log(e.target.scrollY);
// });
