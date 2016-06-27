'use strict';
//меню

var navMain = document.querySelector('.main-header');
var navBtn = document.querySelector('.main-menu__btn');

navMain.classList.add('main-header--close');

navBtn.addEventListener('click', function () {
  if (navMain.classList.contains('main-header--close')) {
    navMain.classList.remove('main-header--close');
    navMain.classList.add('main-header--open');
  } else {
    navMain.classList.add('main-header--close');
    navMain.classList.remove('main-header--open');
  }
});

//карта

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.9387, 30.3236],
      zoom: 16
    }, {
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark([59.938600, 30.322629], {
      hintContent: 'Pink',
      balloonContent: 'Pink'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/icon-map-marker.svg',
      iconImageSize: [36, 46]
    });
  myMap.geoObjects.add(myPlacemark);
});

//валидатор формы

var contestRequest = document.querySelector('.contest-request');
var popupFailure = document.querySelector('.popup__message--failure');
var popupSuccess = document.querySelector('.popup__message--success');
var closeFailure = document.querySelector('.popup__btn--failure');
var closeSuccess = document.querySelector('.popup__btn--success');
var lastname = document.querySelector('#lastname');
var firstname = document.querySelector('#name');
var telephone = document.querySelector('#telephone');
var email = document.querySelector('#email');
var message = document.querySelector('#story');

contestRequest.addEventListener('submit', function (event) {
  if (!lastname.value || !firstname.value || !telephone.value || !email.value || !message.value) {
    event.preventDefault();
    popupFailure.classList.add('popup__message--on');
  } else {
    popupSuccess.classList.add('popup__message--on');
  }
});

closeFailure.addEventListener('click', function (event) {
  event.preventDefault();
  popupFailure.classList.remove('popup__message--on');
});

closeSuccess.addEventListener('click', function (event) {
  event.preventDefault();
  popupSuccess.classList.remove('popup__message--on');
});
