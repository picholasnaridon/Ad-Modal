var mapping = googletag.sizeMapping().
addSize([1024, 0], [970, 250]).
addSize([0, 0], [300, 250]).
build();
googletag.defineSlot('/33049290/PIANO', sizes, 'ad-1').defineSizeMapping(mapping).addService(googletag.pubads());


// and then you'll need to detect any changes to the viewport
// if the viewport passes one of the "threshold" values, then
// you will need to call "googletag.pubads().refresh()"
// 

// debounce, so we don't call 'resize' too quickly
// via https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
var timeout;
return function() {
  var context = this, args = arguments;
  var later = function() {
    timeout = null;
    if (!immediate) func.apply(context, args);
  };
  var callNow = immediate && !timeout;
  clearTimeout(timeout);
  timeout = setTimeout(later, wait);
  if (callNow) func.apply(context, args);
};
};

// detect changes to the viewport
var oldSize = 0;
var refreshOnSizeChange = debounce(function() {
var newWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var newHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

// if we crossed a threshold, call refresh() to get a new ad
console.log("debounce called")
if (oldWidth < 1024 && newWidth >= 1024) {
  oldWidth = newWidth;
  googletag.pubads().refresh();
} else if (oldWidth >= 1024 && newWidth < 1024) {
  oldWidth = newWidth;
  googletag.pubads().refresh();
}
}, 250);

// register the listener
window.addEventListener('resize', refreshOnSizeChange);