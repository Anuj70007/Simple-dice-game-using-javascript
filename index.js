var ran=Math.floor(Math.random()*6)+1;
var randomsrc="images/dice"+ran+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomsrc);

var ran1=Math.floor(Math.random()*6)+1;
var randomsrc1="images/dice"+ran1+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomsrc1);

if(ran>ran1)
{
  document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else if(ran1>ran)
{
  document.querySelector("h1").innerHTML="Player 2 wins🚩";
}
else
{
  document.querySelector("h1").innerHTML="Draw";
}
