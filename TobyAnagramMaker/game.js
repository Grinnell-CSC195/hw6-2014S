function change()
{
    var input = document.getElementById('word');
    var theInput = input.value; 
    document.getElementById('output34').innerHTML = theInput;
    var anagramcount = theInput.length + 33;

    for (var i = 34; i <= anagramcount + 1; i++)
    {
        var j = i + 1;
        var mydiv = document.getElementById('output' + i);
        if (i != anagramcount + 1)
        {
            if (theInput.charAt(i-34) == ' ')
                mydiv.innerHTML = '<anagram id="' + i +
                '" onClick="swapletters(' + i + ',' + j + 
                ')">&nbsp;</anagram>';
            else mydiv.innerHTML = '<anagram id="' + i + 
                '" onClick="swapletters(' + i  + ',' + j + 
                ')">' + theInput.charAt(i-34) + '</anagram>';
        }
        else mydiv.innerHTML = '<anagram id="' + i + '"></anagram>';
    }
}

function swapletters(lower, upper)
{
    var lcontent = document.getElementById(lower).innerHTML;
    var ucontent = document.getElementById(upper).innerHTML;
    document.getElementById(lower).innerHTML = ucontent;
    document.getElementById(upper).innerHTML = lcontent;
}

// Citations: http://stackoverflow.com/questions/5862489/
     //javascript-change-div-content-upon-a-click
// http://stackoverflow.com/questions/11044423/
//     writing-a-javascript-variable-from-user-input-to-the-document
// Attempting the customizable anagram maker: 
//     http://stackoverflow.com/questions/14369474/how-to-control-where-document-write-writes
  

/* Thought Process:
   Take a string, separate by character. 
   On click on the character, 
   switch that character with the one to the left of it.

   Example will be:
   I am Lord Voldemort/Tom Marvolo Riddle */
