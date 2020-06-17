// from data.js
var tableData = data;

// YOUR CODE HERE!
function dataTable(data){
    var tBody = d3.select("tbody");
    tBody.html("");
    data.forEach((datarow)=>{
        var row = tBody.append("tr");
        Object.values(datarow).forEach((value)=>{
            var cell = row.append("td");
            cell.text(value);
        })
    })
}
dataTable(tableData);

function filterData(){
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;
    filterData = filterData.filter(row=>row.datetime === date);
    dataTable(filterData);
}

d3.selectAll("#filter-btn").on("click", filterData); 

d3.selectAll("#reset-btn").on("click", function() { dataTable(tableData); }); 
