//<![CDATA[
// Sticky widget
$(function(){if($("#Label2").length){var o=$("#Label2"),t=$("#Label2").offset().top,i=$("#Label2").height();$(window).scroll(function(){var s=$("#comments").offset().top-i-20,f=$(window).scrollTop();if(f>t?o.css({position:"fixed",top:83}):o.css("position","static"),f>s){var n=s-f;o.css({top:n})}})}});
//]]>
