// FULL PAGE
let isScroll = true;
const phones = {
    width: 480,
    heigth: 800
  },
  tablets = {
    width: 768,
    heigth: 1024
  },
  desktops = {
    width: 992,
    heigth: 650
  };

$("#fullpage").fullpage({
  //Навигация
  licenseKey: "D2DB0F76-42B04C3A-938789B7-AE7D1A8F",
  menu: "#menu",
  anchors: [
    "hero",
    "best",
    "burgers",
    "team",
    "menu",
    "reviews",
    "order",
    "video",
    "map"
  ],
  navigation: true,
  scrollBar: true,
  navigationPosition: "right",
  showActiveTooltip: true,
  slidesNavigation: false,

  //Скроллинг
  css3: false,
  scrollingSpeed: 900,
  fitToSection: false,
  fitToSectionDelay: 200,

  afterResize: function() {
    checkDevice();
  }
});

function media_(device) {
  return (
    $(window).width() <= device.width && $(window).height() < device.heigth
  );
}

function checkDevice() {
  isScroll =
    ($(window).width() > desktops.width &&
      $(window).height() < desktops.heigth) ||
    (media_(desktops) || media_(tablets) || media_(phones))
      ? false
      : true;

  $.fn.fullpage.setAutoScrolling(isScroll);
}

$("#fp-nav").removeAttr("style");

checkDevice();
$(window).resize(function() {
  checkDevice();
});

// YANDEX MAP
ymaps.ready(init);

function init() {
  var myMap, myPlacemark1, myPlacemark2, myPlacemark3, myPlacemark4;

  myMap = new ymaps.Map("map-m", {
    center: [59.91502556, 30.486548],
    zoom: 10
  });

  myPlacemark1 = new ymaps.Placemark(
    [59.91502556, 30.486548],
    {
      hintContent: "Mr.Burger на Товарищеском",
      balloonContentHeader: "Mr.Burger на Товарищеском",
      balloonContentBody:
        "Бургеры у нас - быстро, вкусно, сытно, ждем по адресу:",
      balloonContentFooter: "Санкт-Петербург, Товарищеский проспект, 20/27"
    },
    {
      iconLayout: "default#image",
      iconImageHref: "http://burger-landding.reyzele.com/img/map-marker.png",
      iconImageSize: [46, 57],
      iconImageOffset: [-3, -42]
    }
  );
  myPlacemark2 = new ymaps.Placemark(
    [59.94704056, 30.3850385],
    {
      hintContent: "Mr.Burger на Тверской",
      balloonContentHeader: "Mr.Burger на Тверской",
      balloonContentBody:
        "Бургеры у нас - быстро, вкусно, сытно, ждем по адресу:",
      balloonContentFooter: "Санкт-Петербург, Товарищеский проспект, 20/27"
    },
    {
      iconLayout: "default#image",
      iconImageHref: "http://burger-landding.reyzele.com/img/map-marker.png",
      iconImageSize: [46, 57],
      iconImageOffset: [-3, -42]
    }
  );
  myPlacemark3 = new ymaps.Placemark(
    [59.89125906, 30.316892],
    {
      hintContent: "Mr.Burger на Московском",
      balloonContentHeader: "Mr.Burger на Московском",
      balloonContentBody:
        "Бургеры у нас - быстро, вкусно, сытно, ждем по адресу:",
      balloonContentFooter: "Санкт-Петербург, Товарищеский проспект, 20/27"
    },
    {
      iconLayout: "default#image",
      iconImageHref: "http://burger-landding.reyzele.com/img/map-marker.png",
      iconImageSize: [46, 57],
      iconImageOffset: [-3, -42]
    }
  );
  myPlacemark4 = new ymaps.Placemark(
    [59.97356806, 30.3112775],
    {
      hintContent: "Mr.Burger на Чапыгина",
      balloonContentHeader: "Mr.Burger на Чапыгина",
      balloonContentBody:
        "Бургеры у нас - быстро, вкусно, сытно, ждем по адресу:",
      balloonContentFooter: "Санкт-Петербург, Товарищеский проспект, 20/27"
    },
    {
      iconLayout: "default#image",
      iconImageHref: "http://burger-landding.reyzele.com/img/map-marker.png",
      iconImageSize: [46, 57],
      iconImageOffset: [-3, -42]
    }
  );

  myMap.geoObjects
    .add(myPlacemark1)
    .add(myPlacemark2)
    .add(myPlacemark3)
    .add(myPlacemark4);

  myMap.behaviors.disable("scrollZoom");
}

// ACORDION SECTION TEAM
$(".team-acco__trigger").on("click", function(e) {
  e.preventDefault();
  const thisItem = this.parentNode;
  const thisPanel = this.nextElementSibling;
  if (thisItem.classList.contains("active")) {
    return null;
  }
  $(".team-acco__item").removeClass("active");
  thisItem.classList.add("active");
  $(".team-acco__content").removeAttr("style");
  thisPanel.style.maxHeight = "fit-content";
});

// ACORDION SECTION REVIEWS
$(".menu-acco__trigger").on("click", e => {
  e.preventDefault();
  const thisTarget = e.currentTarget;
  const thisItem = thisTarget.parentNode;
  if (thisItem.classList.contains("active")) {
    return null;
  }
  $(".menu-acco__item").removeClass("active");
  thisItem.classList.add("active");
});

$(".menu-close").on("click", e => {
  e.preventDefault();
  $(".menu-acco__item").removeClass("active");
});

// HAMBURGER MENU
$("#hamburger-menu").on("click", e => {
  e.preventDefault();
  const this_ = e.currentTarget;
  $(this_).toggleClass("open");
  if (!this_.classList.contains("open")) {
    fullpage_api.setAllowScrolling(true);
    $("#hamburger-menu-overlay").removeClass("active");
  } else {
    fullpage_api.setAllowScrolling(false);
    $("#hamburger-menu-overlay").addClass("active");
  }
});
$(".nav__link").on("click", e => {
  setTimeout(() => {
    $("#hamburger-menu").toggleClass("open");
    fullpage_api.setAllowScrolling(true);
    $("#hamburger-menu-overlay").removeClass("active");
  }, 1300);
});

// Slider settings
$(".owl-carousel").owlCarousel({
  items: 1,
  dots: false,
  smartSpeed: 600,
  loop: true,
  nav: true,
  navText: [
    "<svg class='burgers__arrow burgers__arrow-left'><use xlink:href='./img/sprite.svg#arrow-scroll'></use></svg>",
    "<svg class='burgers__arrow burgers__arrow-right'><use xlink:href='./img/sprite.svg#arrow-scroll' ></use></svg>"
  ]
});

// Slider menu on hover & click
const checkPossition = () =>
  window.matchMedia(`(min-width: ${tablets.width}px)`).matches;

function compositionMenu() {
  if (checkPossition()) {
    $(".burgers-compos")
      .mouseenter(e => {
        $(".burgers__menu-btn").css("background-color", "#e45028");
      })
      .mouseleave(e => {
        $(".burgers__menu-btn").removeAttr("style");
      });
  } else {
    $(".burgers__menu-btn").on("click", e => {
      $(e.currentTarget)
        .css("background-color", "#e45028")
        .closest(".burgers__item")
        .find(".burgers-compos")
        .css({ display: "flex" });
    });
    $(".burgers-compos__close").on("click", e => {
      e.preventDefault();
      $(e.currentTarget)
        .closest(".burgers-compos")
        .removeAttr("style")
        .closest(".burgers__item")
        .find(".burgers__menu-btn")
        .css("background-color", "#f08c33");
    });
  }
}
compositionMenu();

// Reviews overlay
const openButton = $(".review__view");
const template = document.querySelector("#overlayTemplate").innerHTML;
const overlay = createOverlay(template);

$(openButton).on("click", e => {
  e.preventDefault();
  const item = $(e.currentTarget).closest(".reviews__item");
  const name = $(item)
    .find(".review__title")
    .text();
  const text = $(item)
    .find(".review__shorttext p")
    .text();
  overlay.open();
  overlay.setContent(name, text);
});

function createOverlay(template) {
  let fragment = document.createElement("div");

  fragment.innerHTML = template;

  const overlayElement = fragment.querySelector(".overlay");
  const title = fragment.querySelector(".overlay__title");
  const text = fragment.querySelector(".overlay__text");
  const closeElement = fragment.querySelector(".close");

  fragment = null;

  overlayElement.addEventListener("click", e => {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  });
  closeElement.addEventListener("click", e => {
    document.body.removeChild(overlayElement);
  });

  return {
    open() {
      document.body.appendChild(overlayElement);
    },
    close() {
      closeElement.click();
    },
    setContent(title_, text_) {
      title.innerHTML = title_;
      text.innerHTML = text_;
    }
  };
}

// SUBMIT FORM
$("#order-form").on("submit", submitForm);

function submitForm(ev) {
  console.log("in submitForm");
  ev.preventDefault();

  var form = $(ev.target),
    data = form.serialize(),
    url = form.attr("action"),
    type = form.attr("method");

  ajaxForm(form)
    .done(function(msg) {
      var mesaage = msg.mes,
        status = msg.status;
      if (status === "OK") {
        overlay.open();
        overlay.setContent("Спасибо за заказ", mesaage);
      } else {
        overlay.open();
        overlay.setContent("Произошла ошибка", mesaage);
      }
    })
    .fail(function(jqXHR, textStatus) {
      alert("Request failed: " + textStatus);
    });
}

// Универсальная функция для работы с формами
var ajaxForm = function(form) {
  var data = form.serialize(),
    url = form.attr("action");

  return $.ajax({
    type: "POST",
    url: url,
    dataType: "JSON",
    data: data
  });
};
// YOUTUBE PLAYER
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    width: "100%",
    height: "370",
    videoId: "zmg_jOwa9Fc",
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  const duration = player.getDuration();
  let interval;
  updateTimerDisplay();

  $(".player").removeClass("hidden");

  clearInterval(interval);

  interval = setInterval(() => {
    const completed = player.getCurrentTime();
    const percents = (completed / duration) * 100;

    changeButtonPosition(percents);

    updateTimerDisplay();
  }, 1000);
}

function onPlayerStateChange(event) {
  const playerButton = $(".player__start");
  switch (event.data) {
    case 1:
      $(".player__wrapper").addClass("active");
      playerButton.addClass("paused");
      break;
    case 2:
      playerButton.removeClass("paused");
      break;
  }
}

function changeButtonPosition(percents) {
  $(".player__playback-button").css({
    left: `${percents}%`
  });
}

function updateTimerDisplay() {
  $(".player__duration-completed").text(formatTime(player.getCurrentTime()));
  $(".player__duration-estimate").text(formatTime(player.getDuration()));
}

function formatTime(time) {
  const roundTime = Math.round(time);

  const minutes = Math.floor(roundTime / 60);
  const seconds = roundTime - minutes * 60;
  const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return minutes + ":" + formatedSeconds;
}

$(".player__start").on("click", e => {
  const playerStatus = player.getPlayerState(); // 0 - ended, 1 - played, 2 - paused ...

  if (playerStatus !== 1) {
    player.playVideo();
  } else {
    player.pauseVideo();
  }
});

$(".player__playback").on("click", e => {
  e.preventDefault();
  const bar = $(e.currentTarget);
  const newButtonPosition = e.pageX - bar.offset().left;
  const clickedPercents = (newButtonPosition / bar.width()) * 100;
  const newPlayerTime = (player.getDuration() / 100) * clickedPercents;

  changeButtonPosition(clickedPercents);
  player.seekTo(newPlayerTime);
});

$(".player__splash").on("click", e => {
  player.playVideo();
});

$(".player__volume-button").on("click", function() {
  var mute_toggle = $(this);

  if (player.isMuted()) {
    player.unMute();
    mute_toggle.removeClass("mute");
  } else {
    player.mute();
    mute_toggle.addClass("mute");
  }
});
