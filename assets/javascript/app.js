$(document).ready(function(){

// YouTube API
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var randomVideo = ["motivation", "inspiration", "success"];

for (var i=0; i<randomVideo.length; i++) {
	//grab video id based on this randomVideo name

};

function onYouTubeIframeAPIReady() {

	player = new YT.Player('player', {
  		height: '390',
  		width: '640',
  		listProperty: search,
  		list: randomVideo,
  		events: {
    		'onReady': onPlayerReady,
    		'onStateChange': onPlayerStateChange
  }
});
}

// They Said So API


// Variables

// Functions






});