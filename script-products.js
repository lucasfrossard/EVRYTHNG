/**
  * Show a list of products in json format
  */
function showProducts (products){   
        console.log("Reading products ...");
        var products = '<h2>Retrieve products successful</h2>' + '<pre>' +
           JSON.stringify(products, null, 2) + '</pre>';
        $('#allResults').html(products);
            console.log(products);
}

$(document).ready(function() {
     $("#koproducts").click(function(){
         currentProject.app.product().read().then(showProducts);
     });
});