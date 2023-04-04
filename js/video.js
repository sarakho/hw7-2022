var video = document.getElementById("player1");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var slowButton = document.getElementById("slower");
var speedButton = document.getElementById("faster");
var skipButton = document.getElementById("skip");
var volume = document.getElementById("slider");
var muteButton = document.getElementById("mute");


window.addEventListener("load", function() {
	console.log("Good job opening the window");
	this.document.querySelector(".video").autoplay = false;
});

playButton.addEventListener("click", function() {
	if (video.paused == true) {
		video.play();
		playButton.innerHTML = "Play Video";
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	} 
});

pauseButton.addEventListener("click", function () {
	if (video.paused == false) {
		video.pause();
		playButton.innerHTML = "Play Video";
	}
});

slowButton.addEventListener("click", function () {
	if (video.paused == false) {
		video.playbackRate = video.playbackRate - video.playbackRate*0.1;
		console.log("new speed = " + video.playbackRate);
	}
});

speedButton.addEventListener("click", function () {
	if (video.paused == false) {
		video.playbackRate = video.playbackRate + video.playbackRate*0.1;
		console.log("new speed " + video.playbackRate);
	}
});

skipButton.addEventListener("click", function () {
	video.currentTime = video.currentTime + 10;
	console.log("skip ahead")
});

muteButton.addEventListener("click", function() {
	if (video.muted === false) {
		video.muted = true
		muteButton.innerHTML = "Unmute"
	} else {
		video.muted = false
		muteButton.innerHTML = "Mute"
	}
});

document.querySelector('#slider').addEventListener("change", function () {
	console.log("I'm the slider");
	console.log(this.value)
	video.volume = this.value /100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

vintage.addEventListener("click", function () {
	video.classList.add("oldSchool");
});

orig.addEventListener("click", function () {
	video.classList.remove("oldSchool");
});

// 	console.log("Play Video");
// });

