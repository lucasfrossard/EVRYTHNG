var oneProjectKey = "ONE_API_KEY";
var oneProjectApp = new EVT.App(oneProjectKey);

var anotheProjectKey = "ANOTHER_API_KEY";
var anotherProjectApp = new EVT.App(anotheProjectKey);

var oneProject = new project('Sample Project 1',oneProjectApp)
var anotherProject = new project('Sample Project 2',anotherProjectApp);
var currentProject = oneProject;

/**
 * Constructor for project object
 */
function project (name, anApp){
    this.type = name;
    this.app = anApp;
}    
    
/** 
 * Functions for switching the selected project
 */
function cleanResults(){
    $('#allResults').html("");
    $('#results').html("");
}

/**
 * Switch selected project
 */
function switchApp (){
   
   if (currentProject.type=="coke"){
      currentProject = anotherProject;
       $("#sproject").html('<pre>Sample Project 2</pre>');
      console.log("current project is now Sample Project 2");
   } else {
      currentProject = oneProject;
      $("#sproject").html('<pre>Sample Project 1</pre>');
      console.log("current project is now Sample Project 1");
   }
}

$(document).ready(function() {
    
    // Event for switchn selected project
    $("#projectSelector").click(function(){
        cleanResults();
        switchApp();
    });
    
    // The default select project is Sample Project 1 
    $("#sproject").html('<pre>Sample Project 1</pre>');
});