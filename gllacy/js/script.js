//слайдер

var slideBody = document.querySelector("body");
var slideSwitchers = document.querySelectorAll(".slide-switcher");
var radioButtons = document.querySelectorAll("input[name='slide-switch']");
var slideSlogans = document.querySelectorAll(".slide");

//фон слайда при загрузке страницы


for (var i = 0; i< radioButtons.length; i++) {
	console.log(radioButtons[i].getAttribute("id") + " " + radioButtons[i].checked);
	radioButtons[i].checked = false;	
	slideBody.classList.remove("slide"+(i+1)+"-background");
	slideSwitchers[i].classList.remove("slide-switch-checked");
	slideSlogans[i].classList.remove("slide-view");	
}

radioButtons[0].checked = true;
slideBody.classList.add("slide1-background");
slideSwitchers[0].classList.add("slide-switch-checked");
slideSlogans[0].classList.add("slide-view");

//cлайдер

function switchSlide(number) {
	if(slideBody.className){			
		slideBody.classList.remove(slideBody.className);
	}
	
	for (var i = 0; i < radioButtons.length; i++) {
		slideSwitchers[i].classList.remove("slide-switch-checked");	
		slideSlogans[i].classList.remove("slide-view");		
		radioButtons[i].checked = false;
	}
	
	slideBody.classList.add("slide" + number + "-background");
	slideSwitchers[number-1].classList.add("slide-switch-checked");	
	slideSlogans[number-1].classList.add("slide-view");	
	radioButtons[number-1].checked= true;
}

document.querySelector('#slide1').addEventListener("change", function(event) {
	event.preventDefault();
	switchSlide(1);
});

document.querySelector('#slide2').addEventListener("change", function(event) {
	event.preventDefault();
	switchSlide(2);
});

document.querySelector('#slide3').addEventListener("change", function(event) {
	event.preventDefault();
	switchSlide(3);
});
	
window.addEventListener("beforeunload" , function() {
	for (var i = 0; i< radioButtons.length; i++) {
	radioButtons[i].checked = false;	
	slideBody.classList.remove("slide"+(i+1)+"-background");
	slideSwitchers[i].classList.remove("slide-switch-checked");
	slideSlogans[i].classList.remove("slide-view");	
}
});



//обратная связь
var feedbackOpen = document.querySelector(".feedback-btn");
var feedbackClose = document.querySelector(".close");
var feedbackForm = document.querySelector(".feedback-form");
var overlay = document.querySelector(".overlay");
var fields = document.querySelectorAll(".feedback-field");

feedbackOpen.addEventListener("click", function(event) {
	event.preventDefault();
	feedbackForm.classList.add("feedback-form-on");
	overlay.classList.add("overlay-on");
});

feedbackClose.addEventListener("click", function(event) {
	event.preventDefault();
	feedbackForm.classList.remove("feedback-form-on");
	overlay.classList.remove("overlay-on");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if(feedbackForm.classList.contains("feedback-form-on")) {
			feedbackForm.classList.remove("feedback-form-on");
		}
		
		if(overlay.classList.contains("overlay-on")){
			overlay.classList.remove("overlay-on");
		}
	}
});

document.querySelector("#feedback-name").addEventListener("focus", function(event) {
	document.querySelector(".name-placeholder").classList.add("placeholder-focus");
	this.classList.add("color-white");
});

document.querySelector("#feedback-name").addEventListener("input", function(event) {
	document.querySelector(".name-placeholder").classList.add("placeholder-change");
	this.classList.remove("color-white");
	document.querySelector(".name-placeholder").classList.remove("placeholder-focus");
	this.classList.add("feedback-form-change");
});

document.querySelector("#feedback-name").addEventListener("blur", function(event) {
	document.querySelector(".name-placeholder").classList.remove("placeholder-focus");
	this.classList.remove("color-white");
	this.classList.remove("feedback-form-change");
	document.querySelector(".name-placeholder").classList.remove("placeholder-change");
});
///---

document.querySelector("#feedback-email").addEventListener("focus", function(event) {
	document.querySelector(".email-placeholder").classList.add("placeholder-focus");
	this.classList.add("color-white");
});

document.querySelector("#feedback-email").addEventListener("input", function(event) {
	document.querySelector(".email-placeholder").classList.add("placeholder-change");
	this.classList.remove("color-white");
	document.querySelector(".email-placeholder").classList.remove("placeholder-focus");
	this.classList.add("feedback-form-change");
});

document.querySelector("#feedback-email").addEventListener("blur", function(event) {
	document.querySelector(".email-placeholder").classList.remove("placeholder-focus");
	this.classList.remove("color-white");
	this.classList.remove("feedback-form-change");
	document.querySelector(".email-placeholder").classList.remove("placeholder-change");
});

///---

document.querySelector("#feedback-message").addEventListener("focus", function(event) {
	document.querySelector(".message-placeholder").classList.add("placeholder-focus");
	this.classList.add("color-white");
});

document.querySelector("#feedback-message").addEventListener("input", function(event) {
	document.querySelector(".message-placeholder").classList.add("placeholder-change");
	this.classList.remove("color-white");
	document.querySelector(".message-placeholder").classList.remove("placeholder-focus");
	this.classList.add("feedback-form-change");
});

document.querySelector("#feedback-message").addEventListener("blur", function(event) {
	document.querySelector(".message-placeholder").classList.remove("placeholder-focus");
	this.classList.remove("color-white");
	this.classList.remove("feedback-form-change");
	document.querySelector(".message-placeholder").classList.remove("placeholder-change");
});