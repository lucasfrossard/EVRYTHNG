EVT.use(EVT.Scan);
    
var evtLastScannedProduct = '';

function scanSuccess (data){
    'use strict';
    $(document).ready(function () {
      $('#results').html('<h2>Scan Successful</h2>' + '<pre>' +
      JSON.stringify(data, null, 2) + '</pre>');
      evtLastScannedProduct = data.evrythngId;
      console.log('Last Scanned Product : ' + evtLastScannedProduct);
    });
}


function scanError (error){
    'use strict';
    $(document).ready(function () {
      $('#results').html('<h2>Error</h2>' + '<pre>' +
       JSON.stringify(error, null, 2) + '</pre>');
    });
}


// bar code (ean13) : 7806723188635
function scanProduct(scanType) {
    'use strict';
    // Config can be changed at scan time, eg a QR CODE -> scanThng.identify({scanType: 'QRCODE'});
    console.log('Scan Type : ' + scanType);
    console.log('Scan geolocation activated='+geoactive);
    currentProject.app.scan({redirect: false,
                     createScanAction : geoactive,
                     type : scanType})
        .then(
        scanSuccess,
        scanError
    );
}

function scanWithSnapShot(dataUri){
     currentProject.app.scan(dataUri).then(scanSuccess, scanError);
}


$(document).ready(function() {
         
    $("#koscan").click(function(){
        scanProduct('objpic');

    });
    
    /* Register event for taking an snap shot */
    $("#kosnap").click(function(){     
        image = takeSnapshot();
        scanWithSnapShot(image);
    });
    
});




