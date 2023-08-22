var randno1=Math.floor(Math.random()*6)+1;
var newimg="images/dice_"+randno1+".png";
document.querySelectorAll("img")[0].setAttribute("src",newimg);

var randno2=Math.floor(Math.random()*6)+1;
var newimg="images/dice_"+randno2+".png";
document.querySelectorAll("img")[1].setAttribute("src",newimg);

if(randno1>randno2)
{
    document.querySelector(".refresh").innerHTML="Player 1 wins !";
}
else if(randno2>randno1)
{
    document.querySelector(".refresh").innerHTML="Player 2 wins !";
}
else
{
    document.querySelector(".refresh").innerHTML="Draw";
}