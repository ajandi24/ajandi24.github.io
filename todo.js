"use strict";

const entries = [];
const checkBoxes = [];



function btnAdd(event)
{
    var number = entries.length + 1;
    console.log("Added " + number);
    entries.push(number);


    /*
    document.getElementById("todoList").innerHTML +=
    "<li id=\"".concat(number, "\">", number, "</li>");

    // Each checkBox has the id of "checkBox " + number.
    document.getElementById("checkBox").innerHTML += 
    "<input type=\"checkbox\" id=\"checkBox ".concat(number, "\"></input><br\/>");
    */

    /*
    document.getElementById("table").innerHTML +=
    "<tr>" + 
    "<td id=\"element ".concat(number, "\">", number, "</td>") +
    "<td><input type=\"checkbox\" id=\"checkBox ".concat(number, "\"></input></td>") + 
    "</tr>";
    */

    document.getElementById("entireTodoList").innerHTML +=
    "<tr id=\"row " + number + "\">" + 
    
    // Number
    "<td>" + number + ".</td>" + 

    // Text Boxes

    "<td><input/></td>" + 

    // Checkbox
    "<td><input id=\"checkBox " + number + "\" type=\"checkbox\"/></td>" +

    "</tr>";
}

function btnRemove(event)
{
    for (var i = 1; i <= entries.length; i++)
    {

        const currentCheckBox = document.getElementById("checkBox ".concat(i));
        if (currentCheckBox == null || currentCheckBox == "") 
        {
            console.log(i, " is null");
        }
        else
        {
            const isChecked = document.getElementById("checkBox " + i).checked;
            //console.log(isChecked);

            if(isChecked)
            {
                document.getElementById("row " + i).remove();
            }
        }
    }
}