$(document).ready(function () {
  $(".navbar-toggle").on("click", function () {
    $(this).toggleClass("aniburger");
  });
});

$('head').append('<style> \
    .navbar-toggle .icon-bar {top: 0;} \
    .navbar-toggle .icon-bar {position: relative; transition: all 300ms ease-in-out;} \
    .navbar-toggle.aniburger .icon-bar:nth-of-type(2) {top: 6px; transform: rotate(-45deg); -webkit-transform: rotate(-45deg);} \
    .navbar-toggle.aniburger .icon-bar:nth-of-type(3) {background-color: transparent;} \
    .navbar-toggle.aniburger .icon-bar:nth-of-type(4) {top: -6px; transform: rotate(45deg); -webkit-transform: rotate(45deg);} \
    </style>');
