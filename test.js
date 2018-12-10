 var oldSize = 0;
          var refreshOnSizeChange = debounce(function() {
          var newWidth = document.getElementById("rec-modal").getBoundingClientRect().width
          // var newHeight = Math.max(document.getElementById("rec-modal"), window.innerHeight || 0);

          console.log(document.getElementById("rec-modal").getBoundingClientRect().width)
          // if we crossed a threshold, call refresh() to get a new ad
          console.log("debounce called")
          if (oldSize < 1300 && newWidth >= 1300) {
            oldSize = newWidth;
            console.log("AD REFRESH")

            googletag.pubads().refresh();
          } else if (oldSize >= 1300 && newWidth < 1300) {
            oldSize = newWidth;
            console.log("AD REFRESH")
            googletag.pubads().refresh();
          }
          }, 250);