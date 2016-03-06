var geoactive = false;

/**
 * Request the navigator for the user geolocation 
 */
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        $("#location").html("Geolocation is not supported by this browser.");
    }
}

    
/**
 * Show the current position
 */
function showPosition(position) {
    $("#location").html( "<pre>Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude+"</pre>");
}

function printGeoStatus(){
    if (geoactive){
            $("#geostatus").html('<pre>Active</pre>');        
    } else {
            $("#geostatus").html('<pre>Inactive</pre>');
    }
}


$(document).ready(function() {  
    $("#kogeolocation").click(function(){
        getLocation();

    });
    
    $("#kogeoactive").click(function(){
        geoactive = !geoactive;    
        printGeoStatus();
    });
    
    printGeoStatus();
});