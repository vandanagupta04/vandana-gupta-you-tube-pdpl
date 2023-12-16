const apiKey = "AIzaSyBdjjKkRla02GbohH8Egp38-KlMuctxiKM";


const videoId = "tjQIO1rqTBE";


function onYouTubeIframeAPIReady() {
  const player = new YT.Player("video-container", {
    height: "100%",
    width: "100%",
    videoId: videoId,
    playerVars: {
      modestbranding: 1,
      controls: 1,
      autoplay: 0,
      fs: 1,
      rel: 0,
      showinfo: 0,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  
    console.log("On Play this event will be resumed")
}

function onPlayerStateChange(event) {
    console.log("This will be working on  play state change")
}


const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);