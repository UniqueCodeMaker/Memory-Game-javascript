var x;
var y;
var c;
var pos;	
/*Timer function*/
function timer() {
document.getElementById("demo").innerHTML="ALL THE BEST ";
var tim;
pos=40;
tim=setInterval(frame,1000);
    function frame() {
    if(pos==0)
    {
    clearInterval(tim);
   window.alert("TIME UP PLAY again or You can go to the next level ");
   document.getElementById("para").innerHTML="time up PLAY again or You can go to the next level ";
   history.go(0);
    } else {
    pos-=1;
    document.getElementById("para").innerHTML="TIME LEFT="+pos;
    }
 }
}

var faces = []; 
onload=init;
	var a=0,b=1,c=2,d=3,e=4,f=5,g=6,h=7,i=8,j=9,k=10,l=11,m=12,n=13,o=14,p=15,rr;
	function init() {
faces[0] = 'images/image1.png';  //1
    faces[1] = 'images/image2.png'; //3
    faces[2] = 'images/image8.png'; //16
    faces[3] = 'images/image2.png'; //4
    faces[4] = 'images/image3.png'; //6
    faces[5] = 'images/image4.png'; //7
	faces[6] = 'images/image6.png';//12
    faces[7] = 'images/image5.png';//9
    faces[8] = 'images/image7.png'; //14
    faces[9] = 'images/image1.png';   //2
    faces[10] = 'images/image6.png';//11
    faces[11] = 'images/image5.png';//10
	faces[12] = 'images/image7.png';//13
    faces[13] = 'images/image4.png';//8
    faces[14] = 'images/image8.png';//15
    faces[15] = 'images/image3.png';//5
	rr=Math.random()*15;
	rr=parseInt(rr);
//	document.getElementById("demo").innerHTML=rr;
	if(rr<10)
	{
	faces[rr-0] = 'images/image1.png';  //1
    faces[rr-1] = 'images/image2.png'; //3
    faces[rr-2] = 'images/image8.png'; //16
    faces[rr-3] = 'images/image2.png'; //4
    faces[rr-4] = 'images/image3.png'; //6
    faces[rr-5] = 'images/image4.png'; //7
	faces[rr-6] = 'images/image6.png';//12
    faces[rr-7] = 'images/image5.png';//9
    faces[rr-8] = 'images/image7.png'; //14
    faces[rr-9] = 'images/image1.png'; //2
    faces[10] = 'images/image6.png';//11
    faces[11] = 'images/image5.png';//10
	faces[12] = 'images/image7.png';//13
    faces[13] = 'images/image4.png';//8
    faces[14] = 'images/image8.png';//15
    faces[15] = 'images/image3.png';//5
	}
	else if(rr>10)
	{
	faces[0] = 'images/image8.png';//15 
    faces[2] =   'images/image7.png'; //14
    faces[3] = 'images/image2.png'; //4
    faces[4] = 'images/image3.png'; //6
    faces[1] = 'images/image2.png'; //3
    faces[5] = 'images/image4.png'; //7
	faces[6] = 'images/image6.png';//12
    faces[7] = 'images/image5.png';//9
    faces[8] = 'images/image8.png'; //16
    faces[9] = 'images/image1.png';   //2   
    faces[10] = 'images/image4.png';//8
    faces[11] = 'images/image5.png';//10
	faces[12] = 'images/image7.png';//13
    faces[13] = 'images/image6.png';//11
    faces[14] = 'images/image1.png';  //1
    faces[15] = 'images/image3.png';//5
	}
}
    var moves = 0;
    var clicks = 0; 
    var firstchoice; 
    var secondchoice; 
    var match = 0; 
    var backcard = "images/guess.png"; 
function choose(card) {
moves++;
if(moves==1)
{
timer();
}
document.getElementById("mov").innerHTML=moves;
c=card;
if (clicks == 0) 
{
if(card==x||card==y)
{
window.alert("!!!!!sorry you can only click  on the ? mark");
moves--;
}
else{
                firstchoice = card;
                document.images[card].src = faces[card];
                clicks = 1;
  }
  }
 else
 {
	if(firstchoice !== card)
{
                clicks = 2;
                secondchoice = card;
                document.images[card].src = faces[card];
                timer = setInterval("check()", 400);
 }
}
}  
function check() {
clearInterval(timer);
if (faces[secondchoice] == faces[firstchoice]) {
match++;
y=secondchoice;
x=firstchoice;
document.images[firstchoice].src = 'images/v1.png';
document.images[secondchoice].src ='images/v2.png';
if(match<=8)
document.getElementById("matches").innerHTML = match;
if(match==8)
{
window.alert("Congratulations you have finished level 1 with  "+moves+" moves");
document.getElementById("demo").innerHTML="Congratulations you have finished level 1 with "+moves+"moves";
history.go();
}
else if(match<=8)
{
document.getElementById("demo").innerHTML = ">>Carry on";
}		
clicks=0;
} 
	   else{
document.images[firstchoice].src = backcard;
document.images[secondchoice].src = backcard;
clicks = 0;
return;
	   	   
       }
}
