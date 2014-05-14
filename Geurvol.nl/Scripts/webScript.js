$(function () {
    // Facebook API
    function initFacebook() {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '775650959125852',
                xfbml: true,
                version: 'v2.0'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    // Google API
    function initGoogleMaps() {
        var var_location = new google.maps.LatLng(51.924456, 4.509992);

        var var_mapoptions = {
            center: var_location,
            zoom: 17
        };

        var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title: "Venice"
        });

        var var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);

        var_marker.setMap(var_map);
    }


    initFacebook();
    google.maps.event.addDomListener(window, 'load', initGoogleMaps);
})

function init_map() {
    

}





