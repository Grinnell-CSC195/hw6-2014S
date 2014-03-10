function flipAround(id)
    {
      if (id == "A1"){
        colorFlip("A1");
        colorFlip("A2");
        colorFlip("B1");
      }
      else if (id == "A2"){
        colorFlip("A1");
        colorFlip("A2");
        colorFlip("A3");
        colorFlip("B2");
      }
      else if (id == "A3"){
        colorFlip("A2");
        colorFlip("A3");
        colorFlip("A4");
        colorFlip("B3");
      }
      else if (id == "A4"){
        colorFlip("A3");
        colorFlip("A4");
        colorFlip("B4");
      }

      else if (id == "B1"){
        colorFlip("A1");
        colorFlip("B1");
        colorFlip("B2");
        colorFlip("C1");
      }
      else if (id == "B2"){
        colorFlip("A2");
        colorFlip("B1");
        colorFlip("B2");
        colorFlip("B3");
        colorFlip("C2");
      }
      else if (id == "B3"){
        colorFlip("A3");
        colorFlip("B2");
        colorFlip("B3");
        colorFlip("B4");
        colorFlip("C3");
      }

      else if (id == "B4"){
        colorFlip("A4");
        colorFlip("B3");
        colorFlip("B4");
        colorFlip("C4");
      }

      else if (id == "C1"){
        colorFlip("B1");
        colorFlip("C1");
        colorFlip("C2");
        colorFlip("D1");
      }
      else if (id == "C2"){
        colorFlip("B2");
        colorFlip("C1");
        colorFlip("C2");
        colorFlip("C3");
        colorFlip("D2");
      }
      else if (id == "C3"){
        colorFlip("B3");
        colorFlip("C2");
        colorFlip("C3");
        colorFlip("C4");
        colorFlip("D3");
      }

      else if (id == "C4"){
        colorFlip("B4");
        colorFlip("C3");
        colorFlip("C4");
        colorFlip("D4");
      }

      else if (id == "D1"){
        colorFlip("C1");
        colorFlip("D1");
        colorFlip("D2");
      }
      else if (id == "D2"){
        colorFlip("C2");
        colorFlip("D1");
        colorFlip("D2");
        colorFlip("D3");
      }
      else if (id == "D3"){
        colorFlip("C3");
        colorFlip("D2");
        colorFlip("D3");
        colorFlip("D4");
      }

      else if (id == "D4"){
        colorFlip("C4");
        colorFlip("D3");
        colorFlip("D4");
      }

    } // flipAround(square)

function colorFlip (id){
  var place=document.getElementById(id);
  if (place.style.background=='yellow') place.style.background = 'blue';
  else place.style.background= 'yellow';

} // colorFlip (id)

function initiate (){
document.getElementById("A1").style.background=Math.floor(Math.random()*2) ? 'yellow' : 'blue' ;
document.getElementById("A2").style.background=Math.floor(Math.random()*2) ? 'yellow' : 'blue' ;
document.getElementById("A3").style.background=Math.floor(Math.random()*2) ? 'yellow' : 'blue' ;
document.getElementById("A4").style.background=Math.floor(Math.random()*2) ? 'yellow' : 'blue' ;

document.getElementById("B1").style.background=Math.floor(Math.random()*2) ? 'yellow' : 'blue' ;
document.getElementById("B2").style.background=Math.floor(Math.random()*2) ? 'yellow' : 'blue' ;
document.getElementById("B3").style.background=Math.floor(Math.random()*2) ? 'yellow' : 'blue' ;
document.getElementById("B4").style.background=Math.floor(Math.random()*2) ? 'yellow' : 'blue' ;

document.getElementById("C1").style.background=Math.floor(Math.random()*2) ? 'yellow' : 'blue' ;
document.getElementById("C2").style.background=Math.floor(Math.random()*2) ? 'yellow' : 'blue' ;
document.getElementById("C3").style.background=Math.floor(Math.random()*2) ? 'yellow' : 'blue' ;
document.getElementById("C4").style.background=Math.floor(Math.random()*2) ? 'yellow' : 'blue' ;

document.getElementById("D1").style.background=Math.floor(Math.random()*2) ? 'yellow' : 'blue' ;
document.getElementById("D2").style.background=Math.floor(Math.random()*2) ? 'yellow' : 'blue' ;
document.getElementById("D3").style.background=Math.floor(Math.random()*2) ? 'yellow' : 'blue' ;
document.getElementById("D4").style.background=Math.floor(Math.random()*2) ? 'yellow' : 'blue' ;

}
