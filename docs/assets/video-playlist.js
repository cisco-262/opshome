(function () {
  var iframe = document.getElementById("product-video");
  var items = Array.prototype.slice.call(document.querySelectorAll(".video-item"));
  if (!iframe || !items.length) return;

  var platform = "youtube";
  var currentIndex = 0;
  var youtubePlayer = null;

  function markActive(index) {
    items.forEach(function (item, itemIndex) {
      var active = itemIndex === index;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function youtubeUrl(id, autoplay) {
    return "https://www.youtube.com/embed/" + id +
      "?enablejsapi=1&playsinline=1&rel=0&autoplay=" + (autoplay ? "1" : "0");
  }

  function selectVideo(index, autoplay) {
    currentIndex = (index + items.length) % items.length;
    var item = items[currentIndex];
    markActive(currentIndex);
    iframe.title = item.dataset.title;

    if (platform === "bilibili") {
      youtubePlayer = null;
      iframe.src = item.dataset.bilibiliSrc + "&autoplay=" + (autoplay ? "1" : "0");
      return;
    }

    var videoId = item.dataset.youtubeId;
    if (youtubePlayer && youtubePlayer.loadVideoById) {
      if (autoplay) youtubePlayer.loadVideoById(videoId);
      else youtubePlayer.cueVideoById(videoId);
      return;
    }
    iframe.src = youtubeUrl(videoId, autoplay);
  }

  function startYouTube() {
    platform = "youtube";
    iframe.src = youtubeUrl(items[currentIndex].dataset.youtubeId, false);

    window.onYouTubeIframeAPIReady = function () {
      youtubePlayer = new YT.Player("product-video", {
        events: {
          onStateChange: function (event) {
            if (event.data === YT.PlayerState.ENDED) {
              selectVideo(currentIndex + 1, true);
            }
          }
        }
      });
    };

    var script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);
  }

  function startBilibili() {
    platform = "bilibili";
    selectVideo(currentIndex, false);
  }

  items.forEach(function (item, index) {
    item.addEventListener("click", function () {
      selectVideo(index, true);
    });
  });

  fetch("/cdn-cgi/trace", { cache: "no-store" })
    .then(function (response) { return response.ok ? response.text() : ""; })
    .then(function (text) {
      var match = text.match(/^loc=([A-Z]{2})$/m);
      if (match && match[1] === "CN") startBilibili();
      else startYouTube();
    })
    .catch(startYouTube);
})();
