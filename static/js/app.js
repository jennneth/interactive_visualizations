
function init() {
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
        });

        //display the initial data and plots
        drawInfo(data.names[0]);
        drawGraphsBar(data.names[0]);
        drawGraphsBubble(data.names[0]);
    });
}

function optionChanged(value){
    //when the value in the drop down menu changes
    //pass the selected value to the drawing functions
    drawInfo(value);
    drawGraphsBar(value);
    drawGraphsBubble(value);
}


//when the user input selection is made, run the optionChanged function 
function drawGraphsBar(value){
    console.log("value selected: ",value);

    //read the json file and filter for the data that matches the selection passed as value
    d3.json("samples.json").then(data => {
        var samples = data.samples;
        console.log("samples: ", samples);
        var result = samples.filter(idtag => idtag.id.toString() === value)[0];
        console.log("result: ", result);
        //store all of the needed data points for graphing
        var otu_ids = result.otu_ids.slice(0,10).reverse();
        console.log("otu_ids", otu_ids);
        var otu_ids_formatted = otu_ids.map(d => "OTU " + d + " ");
        var sample_values = result.sample_values.slice(0,10).reverse();
        console.log("sample_values: ", sample_values)
        var otu_labels = result.otu_labels.slice(0,10).reverse();
        console.log("otu labels: ", otu_labels);
        
        //now draw the bar graph
            //create trace variable
            var trace = {
                x: sample_values,
                y: otu_ids_formatted,
                text: otu_labels,
                type: "bar",
                orientation: "h",
            };
            //create data variable
            var data = [trace];
            //create layout variable
            var layout = {
                title: "Top 10 OTU",
                yaxis: {tickmode: "linear"},
                margin: {
                    l:100,
                    r: 100,
                    t:30,
                    b:20
                }
            };
            //plot it
            Plotly.newPlot("bar", data, layout);

        //now draw the bubble graph
   
    
    });
};

function drawGraphsBubble(value){
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
        // var otu_ids_formatted = otu_ids.map(d => "OTU " + d + " ");
        var sample_values = result.sample_values
        console.log("sample_values: ", sample_values)
        var otu_labels = result.otu_labels
        console.log("otu labels: ", otu_labels);
        
        //now draw the bubble graph
            //create trace variable
            var trace = {
                x: otu_ids,
                y: sample_values,
                mode: "markers",
                marker: {
                    size: sample_values,
                    color: otu_ids
                },
                text: otu_labels
            };
            //create data variable
            var data = [trace];
            //create layout variable
            var layout = {
                xaxis: {title: "OTU ID"},
                height: 600,
                width: 1300
            };
            //plot it
            Plotly.newPlot("bubble", data, layout);

        
   
    
    });
};

function drawInfo(value) {
    //display the sample metadata for the selected sample

    //select the location on the html page to append the information
    var dInfo = d3.select("#sample-metadata");
    
    //initialize the area
    dInfo.html("");

    //read the json file and filter for the data that matches the value
    d3.json("samples.json").then(data => {
        var meta = data.metadata;
        console.log("meta: ", meta);
        var result = meta.filter(idtag => idtag.id.toString() === value)[0];
        console.log("result: ", result);
        Object.entries(result).forEach((key) => {
            dInfo.append("h5").text(key[0].toUpperCase() + ": " +key[1] + "\n");
        });
    });
}

init();