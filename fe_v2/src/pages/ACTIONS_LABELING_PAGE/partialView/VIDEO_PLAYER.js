import React from "react";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
const VIDEO_PLAYER = () => {
  var slider;
  var player;
  var duration;
  var fromOld = 0;
  var toOld = duration;
  var tag = document.createElement("script");

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  function setIONrangeSlider() {
    var slider = document.getElementById("range");

    noUiSlider.create(slider, {
      start: [0, duration], // Handle start position
      step: 1, // Slider moves in increments of '1'
      margin: 3, // Handles must be more than '3' apart
      connect: true, // Display a colored bar between the handles
      behaviour: "tap-drag", // Move handle on tap, bar is draggable
      range: {
        // Slider can select '0' to 'duration'
        "min": 0,
        "max": duration
      }
    });

    var valueInput = document.getElementById("value-input"),
      valueSpan = document.getElementById("value-span");
    var readValue;
    // When the slider value changes, update the input and span
    slider.noUiSlider.on("update", function(values, handle) {
      if (handle) {
        readValue = values[handle] | 0;
        valueSpan.innerHTML = toHHMMSS(values[handle]);

        if (toOld != readValue) {
          toOld = readValue;
        }
      } else {
        readValue = values[handle] | 0;
        valueInput.innerHTML = toHHMMSS(values[handle]);

        if (fromOld != readValue) {
          fromOld = readValue;
          player.seekTo(readValue, true);
          player.pauseVideo();
          player.playVideo();
        }
      }
    });

    // When the input changes, set the slider value
    valueInput.addEventListener("change", function() {
      slider.noUiSlider.set([null, this.value]);
    });
  }

  function toHHMMSS(val) {
    var sec_num = parseInt(val, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    // only mm:ss
    if (hours == "00") {
      var time = minutes + ":" + seconds;
    } else {
      var time = hours + ":" + minutes + ":" + seconds;
    }

    return time;
  }
  //https://codepen.io/daftmonk/pen/gMjpXJ?editors=1010
  // https://yarnpkg.com/package/youtube-player dùng để đọc video youtube
  /* function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "360",
      width: "640",
      videoId: "CSvFpBOe8eY",
      playerVars: { "start": 0, "autoplay": 0, "controls": 0 },
      events: {
        "onReady": onPlayerReady,
        "onStateChange": onytplayerStateChange
      }
    });
  }*/
};
