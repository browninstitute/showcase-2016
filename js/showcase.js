/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function(){
    $(this).blur();
})


function geocoder(address) {
    var geocoder = new google.maps.Geocoder();
    var geojsonMarkerOptions = {
        radius: 8,
        strokeColor: "D00441"
        // color: "D00441",
        // fillOpacity: 0.8
    };
    geocoder.geocode( {'address': address}, function(results, status) {

        var x = results[0].geometry.location.lat();
        var y = results[0].geometry.location.lng();

        var map = L.map('map').setView([x, y], 16);
        var CartoDB_Positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
            subdomains: 'abcd',
            maxZoom: 19
        });
        map.addLayer(CartoDB_Positron);
        map.scrollWheelZoom.disable();
        L.marker([x, y]).addTo(map)
            .bindPopup('Packard Electrical Engineering Building')
            .openPopup();
    });
};
