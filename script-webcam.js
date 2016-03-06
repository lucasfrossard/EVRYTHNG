function takeSnapshot (){
    var base64Img;
     Webcam.snap( function(data_uri) {
         // display results in page
         shot = '<img src="'+data_uri+'"/>';
         $('#kocanvas').html(shot);
         base64Img = data_uri;
      });
    return base64Img;
}


$(document).ready(function() {
    
    /* Start Webcam */
    Webcam.set({
			width: 320,
			height: 240,
			image_format: 'png'
    });
	Webcam.attach( '#kocam' );
 
});