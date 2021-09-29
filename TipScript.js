function calculateTip()
{
  var billamt =document.getElementById("billamt").value;
  var servicequal=document.getElementById("servicequal").value;
  var peopleamt=document.getElementById("peopleamt").value;

  //validate input
  if(billamt===" " || servicequal==0)
  {
  	alert("Please Enter Value");
  return;
   }
  //check the input
  if(peopleamt===" " || peopleamt<=1)
  {
  	peopleamt=1;
  	document.getElementById("each").style.display="none";
  }
  else
  {
  	document.getElementById("each").style.display="block";
  }
  //calculate tip
  var total=(billamt*servicequal)/peopleamt;
  total=Math.round(total);

  document.getElementById("totalTip").style.display="block";
  document.getElementById("tip").innerHTML=total;
}

//Hide the tip on load
document.getElementById("totalTip").style.display="none";

  document.getElementById("calculate").onclick=function()
  {
  	calculateTip();
  };