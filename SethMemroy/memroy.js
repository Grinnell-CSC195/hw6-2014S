function select(obj)
{
    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/cell.png") 
    {  
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/cell2.png" ;
    }
    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/celltwist.png") 
    {  
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/celltwist2.png" ;
    }

    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/regular.png")
    {
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/regulars.png" ;
    }
    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/twisted.png")
    {
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/twisteds.png" ;
    }
    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/playreg.png")
    {
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/playregs.png" ;
    }
    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/playtwist.png")
    {
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/playtwists.png" ;
    }
    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/hint.png")
    {
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/hints.png" ;
    }
    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/hide.png")
    {
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/hides.png" ;
    }
    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/peek.png")
    {
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/peeks.png" ;
    }
}
    
function deselect(obj)
{
    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/cell2.png")
    { 
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/cell.png" ;
    }
    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/celltwist2.png")
    { 
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/celltwist.png" ;
    }

    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/regulars.png")
    {
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/regular.png" ;
    }
    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/twisteds.png")
    {
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/twisted.png" ;
    }
    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/playregs.png")
    {
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/playreg.png" ;
    }
    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/playtwists.png")
    {
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/playtwist.png" ;
    }
    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/hints.png")
    {
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/hint.png" ;
    }
    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/hides.png")
    {
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/hide.png" ;
    }
    if (obj.src == "http://www.cs.grinnell.edu/~hansonse17/memroy/peeks.png")
    {
        obj.src = "http://www.cs.grinnell.edu/~hansonse17/memroy/peek.png" ;
    }
}

function peek(power) //0 is show, 1 is hide
{
    var i;
    var temp;
    for (i = 0; i < 16; i++)
    {
        temp = idarray[i] ;
        if (power == 1)
        {
            document.getElementById(temp).src = "http://www.cs.grinnell.edu/~hansonse17/memroy/celltwist.png" ;
        }
        else
        {
            document.getElementById(temp).src =  sources[thisgameindex[temp]];
        }
    }
}

function hint()
{
    document.getElementById("hint1").src="http://www.cs.grinnell.edu/~hansonse17/memroy/thehelp1.png" ;
    document.getElementById("hint2").src="http://www.cs.grinnell.edu/~hansonse17/memroy/thehelp2.png" ;
    document.getElementById("hint3").src="http://www.cs.grinnell.edu/~hansonse17/memroy/thehelp3.png" ;    
    document.getElementById("dahint").src="http://www.cs.grinnell.edu/~hansonse17/memroy/hide.png" ;
    document.getElementById("dahint").setAttribute("onclick", "hide()") ;
    document.getElementById("hint4").src="http://www.cs.grinnell.edu/~hansonse17/memroy/peek.png" ;
    document.getElementById("hint4").setAttribute("onmouseover", "peek(0)") ;
    document.getElementById("hint4").setAttribute("onmouseout", "peek(1)") ;
}

function hide()
{
    document.getElementById("hint1").src="http://www.cs.grinnell.edu/~hansonse17/memroy/buffer.png" ;
    document.getElementById("hint2").src="http://www.cs.grinnell.edu/~hansonse17/memroy/buffer.png" ;
    document.getElementById("hint3").src="http://www.cs.grinnell.edu/~hansonse17/memroy/buffer.png" ;
    document.getElementById("dahint").src="http://www.cs.grinnell.edu/~hansonse17/memroy/hint.png" ;
    document.getElementById("dahint").setAttribute("onclick", "hint()") ;
    document.getElementById("hint4").src="http://www.cs.grinnell.edu/~hansonse17/memroy/buffer.png" ;
    document.getElementById("hint4").setAttribute("onmouseover", "") ;
    document.getElementById("hint4").setAttribute("onmouseout", "") ;
}


function shuffle(array) //Based on code by BYossarian on stackoverflow.com
{
    var i = array.length ;
    var j = 0 ; 
    var temp ;

    while (i--)
    {
        j = Math.floor(Math.random() * (i+1) ) ;
        temp = array[i] ;
        array[i] = array[j] ;    
        array[j] = temp ;
    }
    return array;
}

var csources = new Array ();
var sources = new Array ();
var thisgame = new Array();
var thisgameindex = new Array();
var thisgamecolor = new Array();
var idarray = new Array ();

function newgame(game) //regular game = 0, twisted game = 1
{
    if (game == 1)
    {
    document.getElementById("dahint").src = "http://www.cs.grinnell.edu/~hansonse17/memroy/hint.png" ;
    document.getElementById("dahint").setAttribute("onclick", "hint()") ;
    }
    else {}

    var sourceindex = new Array ();
    sourceindex[0] = 0 ;
    sourceindex[1] = 1 ;
    sourceindex[2] = 2 ;
    sourceindex[3] = 3 ;
    sourceindex[4] = 4 ;
    sourceindex[5] = 5 ;
    sourceindex[6] = 6 ;
    sourceindex[7] = 7 ;
    sourceindex[8] = 8 ;
    sourceindex[9] = 9 ;
    sourceindex[10] = 10 ;
    sourceindex[11] = 11 ;
    sourceindex[12] = 12 ;
    sourceindex[13] = 13 ;
    sourceindex[14] = 14 ;
    sourceindex[15] = 15 ;
    sourceindex[16] = 16 ;
    sourceindex[17] = 17 ;
    sourceindex[18] = 18 ;
    sourceindex[19] = 19 ;
    sourceindex[20] = 20 ;
    sourceindex[21] = 21 ;
    sourceindex[22] = 22 ;
    sourceindex[23] = 23 ;
    sourceindex[24] = 24 ;
    sourceindex[25] = 25 ;

   
    sources[0] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/A.png" ;
    sources[1] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/B.png" ;
    sources[2] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/C.png" ;
    sources[3] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/D.png" ;
    sources[4] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/E.png" ; 
    sources[5] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/F.png" ;
    sources[6] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/G.png" ;
    sources[7] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/H.png" ;
    sources[8] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/I.png" ;
    sources[9] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/J.png" ;
    sources[10] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/K.png" ;
    sources[11] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/L.png" ;
    sources[12] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/M.png" ;
    sources[13] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/N.png" ;
    sources[14] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/O.png" ;
    sources[15] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/P.png" ;
    sources[16] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/Q.png" ;
    sources[17] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/R.png" ;
    sources[18] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/S.png" ;
    sources[19] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/T.png" ;
    sources[20] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/U.png" ;
    sources[21] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/V.png" ;
    sources[22] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/W.png" ;
    sources[23] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/X.png" ;
    sources[24] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/Y.png" ;
    sources[25] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/Z.png" ;

   
    csources[0] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/AC.png" ;
    csources[1] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/BC.png" ;
    csources[2] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/CC.png" ;
    csources[3] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/DC.png" ;
    csources[4] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/EC.png" ; 
    csources[5] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/FC.png" ;
    csources[6] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/GC.png" ;
    csources[7] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/HC.png" ;
    csources[8] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/IC.png" ;
    csources[9] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/JC.png" ;
    csources[10] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/KC.png" ;
    csources[11] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/LC.png" ;
    csources[12] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/MC.png" ;
    csources[13] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/NC.png" ;
    csources[14] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/OC.png" ;
    csources[15] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/PC.png" ;
    csources[16] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/QC.png" ;
    csources[17] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/RC.png" ;
    csources[18] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/SC.png" ;
    csources[19] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/TC.png" ;
    csources[20] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/UC.png" ;
    csources[21] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/VC.png" ;
    csources[22] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/WC.png" ;
    csources[23] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/XC.png" ;
    csources[24] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/YC.png" ;
    csources[25] = "http://www.cs.grinnell.edu/~hansonse17/memroy/letters/ZC.png" ;

    idarray[0] = "0" ;
    idarray[1] = "1" ;
    idarray[2] = "2" ;
    idarray[3] = "3" ;
    idarray[4] = "4" ;
    idarray[5] = "5" ;
    idarray[6] = "6" ;
    idarray[7] = "7" ;
    idarray[8] = "8" ;
    idarray[9] = "9" ;
    idarray[10] = "10" ;
    idarray[11] = "11" ;
    idarray[12] = "12" ;
    idarray[13] = "13" ;
    idarray[14] = "14" ;
    idarray[15] = "15" ;
    
    var thisgamet ;
    thisgamet = shuffle(sourceindex) ;

    var thisgamet2 = new Array() ;    
    thisgamet2[0] = thisgamet[0] ;
    thisgamet2[1] = thisgamet[1] ;
    thisgamet2[2] = thisgamet[2] ;
    thisgamet2[3] = thisgamet[3] ;
    thisgamet2[4] = thisgamet[4] ;
    thisgamet2[5] = thisgamet[5] ;
    thisgamet2[6] = thisgamet[6] ;
    thisgamet2[7] = thisgamet[7] ;
    thisgamet2[8] = thisgamet[0] ;
    thisgamet2[9] = thisgamet[1] ;
    thisgamet2[10] = thisgamet[2] ;
    thisgamet2[11] = thisgamet[3] ;
    thisgamet2[12] = thisgamet[4] ;
    thisgamet2[13] = thisgamet[5] ;
    thisgamet2[14] = thisgamet[6] ;
    thisgamet2[15] = thisgamet[7] ;

    thisgameindex = shuffle(thisgamet2) ; 
  
    thisgame[0] = sources[thisgameindex[0]] ;
    thisgame[1] = sources[thisgameindex[1]] ;
    thisgame[2] = sources[thisgameindex[2]] ;
    thisgame[3] = sources[thisgameindex[3]] ;
    thisgame[4] = sources[thisgameindex[4]] ;
    thisgame[5] = sources[thisgameindex[5]] ;
    thisgame[6] = sources[thisgameindex[6]] ;
    thisgame[7] = sources[thisgameindex[7]] ;
    thisgame[8] = sources[thisgameindex[8]] ;
    thisgame[9] = sources[thisgameindex[9]] ;
    thisgame[10] = sources[thisgameindex[10]] ;
    thisgame[11] = sources[thisgameindex[11]] ;
    thisgame[12] = sources[thisgameindex[12]] ;
    thisgame[13] = sources[thisgameindex[13]] ;
    thisgame[14] = sources[thisgameindex[14]] ;
    thisgame[15] = sources[thisgameindex[15]] ;

    thisgamecolor[0] = csources[thisgameindex[0]] ;
    thisgamecolor[1] = csources[thisgameindex[1]] ;
    thisgamecolor[2] = csources[thisgameindex[2]] ;
    thisgamecolor[3] = csources[thisgameindex[3]] ;
    thisgamecolor[4] = csources[thisgameindex[4]] ;
    thisgamecolor[5] = csources[thisgameindex[5]] ;
    thisgamecolor[6] = csources[thisgameindex[6]] ;
    thisgamecolor[7] = csources[thisgameindex[7]] ;
    thisgamecolor[8] = csources[thisgameindex[8]] ;
    thisgamecolor[9] = csources[thisgameindex[9]] ;
    thisgamecolor[10] = csources[thisgameindex[10]] ;
    thisgamecolor[11] = csources[thisgameindex[11]] ;
    thisgamecolor[12] = csources[thisgameindex[12]] ;
    thisgamecolor[13] = csources[thisgameindex[13]] ;
    thisgamecolor[14] = csources[thisgameindex[14]] ;
    thisgamecolor[15] = csources[thisgameindex[15]] ;

    var i;
    var temp;
    for (i = 0; i < 16; i++)
    {
        temp = idarray[i] ;
        if (game == 0)
        {
            document.getElementById(temp).src = "http://www.cs.grinnell.edu/~hansonse17/memroy/cell.png" ;
        }
        else
        {
            document.getElementById(temp).src = "http://www.cs.grinnell.edu/~hansonse17/memroy/celltwist.png" ;
        }
        document.getElementById(temp).name = "" ;
    }
}

function shutter(obj, game) //regular game = 0, twisted game = 1
{
    var i;
    var temp;
    var temp2;
    var temp3;
    var temp4;
    var temp5;
    var temp6;
    var temp7;
    var check;
    var thissrc;
    var lastsrc; 
    var tempsrc1;
    var numbopen = 0 ;
    for (i = 0; i < 16; i++)
    {
        temp = idarray[i] ;
        if ( (document.getElementById(temp).src !== "http://www.cs.grinnell.edu/~hansonse17/memroy/cell.png") &&
             (document.getElementById(temp).src !== "http://www.cs.grinnell.edu/~hansonse17/memroy/cell2.png") )
        {
            numbopen = numbopen + 1 ;
        }
    }
    if (numbopen == 0)
    {
        temp2 = obj.id ;
        obj.src =  thisgame[temp2] ;
    }
    else 
    {    
        var lastcellindex = 100 ;   
        var j ;     
        for (j = 0; j< 16; j++) 
        {
            temp3 = idarray[j]
            check = document.getElementById(temp3) ;            
            if ( (check.src !== "http://www.cs.grinnell.edu/~hansonse17/memroy/cell.png") &&
                 (check.src !== "http://www.cs.grinnell.edu/~hansonse17/memroy/cell2.png") &&
                 (check.name !== "fixed") && 
                 (check.id !== obj.id) )
            {
                lastcellindex = j ;
            }
        }
        if (lastcellindex > 99)
        {
            temp4 = obj.id ;
            obj.src = thisgame[temp4] ;
        }
        else 
        {
            temp5 = obj.id ;
            thissrc = thisgame[temp5];
            lastsrc = thisgame[lastcellindex];            
            if (thissrc == lastsrc)
            {                
                temp6 = idarray[lastcellindex] ;              
                obj.src = thisgamecolor[temp5] ;
                document.getElementById(temp6).src = thisgamecolor[temp5] ;               
                obj.name = "fixed" ;
                document.getElementById(temp6).name = "fixed" ;
            }
            else
            {                
                temp7 = idarray[lastcellindex];
                document.getElementById(temp7).src = "http://www.cs.grinnell.edu/~hansonse17/memroy/cell.png" ;
                obj.src = thisgame[temp5] ;
            }
        }
    }
}


function twistedshutter(obj)
{
    var i;
    var temp;
    var temp2;
    var temp3;
    var temp4;
    var temp5;
    var temp6;
    var temp7;
    var temp8;
    var check;
    var thissrc;
    var lastsrc; 
    var tempsrc1;
    var numbopen = 0 ;
    for (i = 0; i < 16; i++)
    {
        temp = idarray[i] ;
        if ( (document.getElementById(temp).src !== "http://www.cs.grinnell.edu/~hansonse17/memroy/celltwist.png") &&
             (document.getElementById(temp).src !== "http://www.cs.grinnell.edu/~hansonse17/memroy/celltwist2.png") )
        {
            numbopen = numbopen + 1 ;
        }
    }
    if (numbopen == 0)
    {
        temp2 = obj.id ;
        obj.src =  sources[thisgameindex[temp2]] ;
    }
    else 
    {    
        var lastcellindex = 100 ;   
        var j ;     
        for (j = 0; j< 16; j++) 
        {
            temp3 = idarray[j] ;
            check = document.getElementById(temp3) ;            
            if ( (check.src !== "http://www.cs.grinnell.edu/~hansonse17/memroy/celltwist.png") &&
                 (check.src !== "http://www.cs.grinnell.edu/~hansonse17/memroy/celltwist2.png") &&
                 (check.name !== "fixed") && 
                 (check.id !== obj.id) )
            {
                lastcellindex = j ;
            }
        }
        if (lastcellindex > 99)
        {
            temp4 = obj.id ;
            obj.src = sources[thisgameindex[temp4]] ;
        }
        else 
        {
            temp5 = obj.id ;
            thissrc = sources[thisgameindex[temp5]];
            lastsrc = sources[thisgameindex[lastcellindex]];            
            if (thissrc == lastsrc)
            {                
                temp6 = idarray[lastcellindex] ;
                obj.src = csources[thisgameindex[temp5]] ; 
                document.getElementById(temp6).src = csources[thisgameindex[temp5]] ;
                obj.name = "fixed" ;
                document.getElementById(temp6).name = "fixed" ;
            }
            else
            {                
                temp7 = idarray[lastcellindex];
                document.getElementById(temp7).src = "http://www.cs.grinnell.edu/~hansonse17/memroy/celltwist.png" ;
                obj.src = sources[thisgameindex[temp5]] ;
                var k;
                var currentindex ;
                for (k = 0; k < 16; k++)
                {
                    temp8 = idarray[k] ;
                    currentindex = thisgameindex[temp8] ;
                    if (currentindex == 25)
                    {
                        thisgameindex[temp8] = 0;
                    }
                    else if (currentindex == thisgameindex[temp5]) {}
                    else
                    {                   
                        thisgameindex[temp8] = currentindex + 1 ;
                    }
                    
                }                                

            }
        }
    }
}




function turnRed(obj)
{
    obj.style.color = "red";
}

function turnBack(obj)
{
    obj.style.color = "white" ;
}


