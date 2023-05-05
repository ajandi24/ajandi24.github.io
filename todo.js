"use strict";

const entries = [];
var numEntries = 0;

window.onload = function()
{
    document.getElementById("numTasks").innerHTML = 0;
}

function btnAdd(event)
{
    var number = entries.length + 1;
    console.log("Added " + number);
    entries.push(number);


    document.getElementById("entireTodoList").innerHTML +=
    "<tr id=\"row " + number + "\">" + 
    
    // Number
    //"<td>" + number + ".</td>" + 

    // Text Boxes

    "<td><input/></td>" + 

    // Checkbox
    "<td><input id=\"checkBox " + number + "\" type=\"checkbox\"/></td>" +

    "</tr>";

    // Updates the Number of tasks
    numEntries++;
    updateInformation();
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
                numEntries--;
            }
        }
    }
    updateInformation();
}

function updateInformation()
{
    document.getElementById("numTasks").innerHTML = numEntries;
}