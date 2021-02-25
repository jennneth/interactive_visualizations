//make sure you get a connection  to the dataset
d3.json("samples.json").then(data=>{
    console.log(data)
    //build an array of valid input by reading each value in names field and storing  to an array
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
function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }

//when the user input selection is made, run the optionChanged function 
function optionChanged(value){
    console.log("value selected: ",value);

    //read the json file and filter for the data that matches the selection passed as value
    d3.json("samples.json").then(data => {
        var samples = data.samples;
        console.log("samples: ", samples);
        var result = samples.filter(idtag => idtag.id.toString() === value)[0];
        console.log("result: ", result);
        //store all of the needed data points for graphing
        var otu_ids = result.otu_ids;
        console.log("otu_ids", otu_ids);
        var sample_values = result.sample_values;
        console.log("sample_values: ", sample_values)
        var otu_labels = result.otu_labels;
        console.log("otu labels: ", otu_labels);
        // then  you would call a function to build the table
        //buildTable(dates, openPrices, highPrices, lowPrices, closingPrices, volume);
   
    
    });
};


