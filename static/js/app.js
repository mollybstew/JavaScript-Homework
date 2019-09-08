// from data.js
var tableData = data;

var tbody = d3.select("tbody");

var tableData = data;

function buildTable(data){
    tbody.html("");
    
    data.forEach((dataRow) => {
        var row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            var cell = row.append("td");
            cell.text(val);
        });
    })
}

function handleClick(){
    d3.event.preventDefault();
    
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;

    if(date) {
        filterData = filterData.filter((row) => row.datetime === date);
    }
    buildTable(filterData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);
