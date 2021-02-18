//make sure you get a connection  to the dataset
d3.json("samples.json").then(data=>{
    console.log(data)
    //build an array of valid input
    var idNames = data.names;
    //add the valid options to the html
    var dropDown=d3.select("#selDataset");
    idNames.forEach(id => {
        var option= dropDown.append("option");
        option.text(id);
        option.property("value",id);
    })
});

//populate the selection box with valid options
// function init(){
//     d3.json("samples.json").then(data=>{
//         console.log(data)
//         //build an array of valid input
//         var inputOptions = [];
//         inputOptions = data.names;
//         console.log(inputOptions);
//         var dropDown = d3.select("#selDataset")
//         idValues.forEach(id => {
//             var option = dropdown.append
//         })
        
//         // document.getElementById("ddlCustomers");
        
//         //  //Add the Options to the DropDownList.
//         //  for (var i = 0; i < customers.length; i++) {
//         //      var option = document.createElement("OPTION"); 

//     });
        
         
// };

function optionChanged(value){
    //console.log(value)
    //use d3 to select the user input field
    var selectionBox = d3.select("#selDataset");
    // assign the value to a variable
    var selectionID = selectionBox.property("value");
    console.log("saelection ID", selectionID);
    //once you have the user input...
    //store the sample_values 
    var sample_values = [];
    d3.json("samples.json").then>{(data=
        samples = data.samples
        do for each loop on samples to find the id that matches
            if (samples.id === selectionID){
                sample_values = data.sample_values
                console.log(sample_Values)};
                
    });
    
    //store the otu_ids

    //store the otu_labels

    
};
