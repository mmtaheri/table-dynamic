//Call json file
import listPerson from './Json.js';

// Button Make Table
let btn = document.getElementById("btnClick");
btn.addEventListener("click", MakeTableByJson)

//Add Attr data-th to td
function responsive() {
    $('table td').each(function () {
        let th = $(this).closest('table').find('th').eq(this.cellIndex);
        let thText = $(th).html();
        $(this).attr('data-th', thText);
    })
}



function MakeTableByJson() {

    // Get First Index of Property
    let keys = Object.keys(listPerson[0]);

    // Make Table
    let table = document.createElement("table");

    // Make Table Header Row
    let tr = table.insertRow(-1);

    // Insert Data in th Header
    for (let i = 0; i < keys.length; i++) {
        let th = document.createElement("th");
        th.innerHTML = keys[i];
        tr.appendChild(th);
    }

    //Add Json Data To table Row
    for (let i = 0; i < listPerson.length; i++) {
        tr = table.insertRow(-1);
        for (let j = 0; j < keys.length; j++) {
            let Cell = tr.insertCell(-1);
            Cell.innerHTML = listPerson[i][keys[j]];

        }
    }


    // Add Table to Body
    let dataBox = document.getElementById("dataBox");
    // Empty Html
    dataBox.innerHTML = "";
    dataBox.appendChild(table);
    //
    responsive()

}

