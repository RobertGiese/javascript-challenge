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
var filters = {}

function filterUpdate(){
    var element = d3.select(this).select("input");
    var inputValue = element.property("value");
    var filterId = element.attr("id");
    if (element)
    {
        filters[filterId]=inputValue;
    }
    else
    {
        delete filters[filterId]
    }
    filterData()
}

function filterData(){
    var filterData = tableData;
    Object.entries(filters).forEach(([key, value])=>{
        filterData=filterData.filter(row=>row[key]===value);
    });
    dataTable(filterData);
}

d3.selectAll(".filter").on("change", filterUpdate); 