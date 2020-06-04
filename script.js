

function a(){
    randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    x = Math.floor(Math.random()*360);
    document.getElementById("gradient").style.background="linear-gradient("+x+"deg, #"+ randomColor1 + " 30%, #"+randomColor2+" 70%)";
    document.getElementById("main-header-id").style.color="linear-gradient("+x+"deg, #"+ randomColor1 + " 30%, #"+randomColor2+" 70%)";
    document.getElementById("text-grad-id").innerHTML="background : linear-gradient("+x+"deg, #"+ randomColor1 + " 30%, #"+randomColor2+" 70%)"
  }


function b(){
  x = Math.floor(Math.random()*360);
  document.getElementById("gradient").style.background="linear-gradient("+x+"deg, #"+ randomColor1 + " 30%, #"+randomColor2+" 70%)";
  document.getElementById("gradient").setAttribute("title","linear-gradient("+x+"deg, #"+ randomColor1 + " 30%, #"+randomColor2+" 70%)");
  document.getElementById("text-grad-id").innerHTML="background : linear-gradient("+x+"deg, #"+ randomColor1 + " 30%, #"+randomColor2+" 70%)"

}


document.getElementsByClassName("generate")[0].addEventListener("click", a);


