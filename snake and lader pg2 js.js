//single player mode

//shows the position of the player one
var pyr1 = 0

//shows the position of the player two
var pyr2 = 0

//verifies the turn of the players
var pc1 = 1

//function for dice of player
function dice1()
{
	
	var ran=Math.floor((Math.random()*6)+1)

	
	if(ran==1)
	{
		var d1 = document.getElementById("dice1").style.display="block";
		
		setTimeout(()=>{
			var d1 = document.getElementById("dice1").style.display="none";
		},1100);
		
	}
	else if(ran==2)
	{
		var d1 = document.getElementById("dice2").style.display="block";
		
		setTimeout(()=>{
			var d1 = document.getElementById("dice2").style.display="none";
		},1100);
	}
	else if(ran==3)
	{
		var d1 = document.getElementById("dice3").style.display="block";
		
		setTimeout(()=>{
			var d1 = document.getElementById("dice3").style.display="none";
		},1100);
	}
	else if(ran==4)
	{
		var d1 = document.getElementById("dice4").style.display="block";
		
		setTimeout(()=>{
			var d1 = document.getElementById("dice4").style.display="none";
		},1100);
	}
	else if(ran==5)
	{
		var d1 = document.getElementById("dice5").style.display="block";
		
		setTimeout(()=>{
			var d1 = document.getElementById("dice5").style.display="none";
		},1100);
	}
	else if(ran==6)
	{
		var d1 = document.getElementById("dice6").style.display="block";
		
		setTimeout(()=>{
			var d1 = document.getElementById("dice6").style.display="none";
		},1100);
	}
	
	pyr1+=ran
	
	//defines the previous position of the player
	pre = pyr1-ran
	
	//setting time out for delay
	setTimeout(()=>{
	
	var one = document.getElementById("1")
	
	var one1 = one.getElementsByTagName("span")
	
	one1[0].style.display="none";
	
	
	//conditional statements for placing the pieces
	if(pyr1==2)
	{
		
		pyr1=23
		
		window.alert("player got a ladder from 2 to 23");
		
		//selecting the cell 23 for placing the piece
		var ts = document.getElementById("23")
		
		//selecting the span tag within the cell 23
		ts2 = ts.getElementsByTagName("span")
		
		//indexing the span tag since we have two span tags (i.e. one for player and another for computer)
		ts2[0].style.display="block";	
		
		//selecting the cell occupied by the piece previously 
		var tts = document.getElementById(pre)
		
		//selecting the span tag within the previous cell
		var tts1 = tts.getElementsByTagName("span")
		
		//indexing the span tag as did before
		tts1[0].style.display="none";
		
		
		//reconfirmation for avoiding mistakes
		var ts = document.getElementById("23")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		
		/*
		const audio = document.getElementById("aup");
		
		audio.volume=1;
		
		audio.play();
		*/
		
	}
	else if(pyr1==6)
	{
		
		pyr1=45
		
		window.alert("player got a ladder from 6 to 45");
	
		var ts = document.getElementById("45")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		
		var tts = document.getElementById(pre)
		
		var tts1 = tts.getElementsByTagName("span")
		
		tts1[0].style.display="none";

		var ts = document.getElementById("45")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";
		
		/*
		var audio = document.getElementById("aup")
		
		audio.muted=false
		
		audio.play();
		*/
		
	}
	else if(pyr1==20)
	{
			
		var tvar1 = 20-ran
			
		pyr1=59
		
		window.alert("player got a ladder from 20 to 59");
		
		var ts = document.getElementById("59")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		
		var tts = document.getElementById(tvar1)
		
		var tts1 = tts.getElementsByTagName("span")
		
		tts1[0].style.display="none";

		var ts = document.getElementById("59")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		
	}
	else if(pyr1==52)
	{
		
		var tvar1 = 52-ran
		
		pyr1=72
		
		window.alert("player got a ladder from 52 to 72");
		
		var ts = document.getElementById("72")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		
		var tts = document.getElementById(tvar1)
		
		var tts1 = tts.getElementsByTagName("span")
		
		tts1[0].style.display="none";

		var ts = document.getElementById("72")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		

	}
	else if(pyr1==57)
	{
		
		var tvar1 = 57-ran
		
		pyr1=96
		
		window.alert("player got a ladder from 57 to 96");
		
		var ts = document.getElementById("96")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		
		var tts = document.getElementById(tvar1)
		
		var tts1 = tts.getElementsByTagName("span")
		
		tts1[0].style.display="none";

		var ts = document.getElementById("96")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		

	}
	else if(pyr1==77)
	{
		
		var tvar1 = 77-ran
		
		pyr1=92
		
		window.alert("player got a ladder from 77 to 92");
		
		var ts = document.getElementById("92")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		
		var tts = document.getElementById(tvar1)
		
		var tts1 = tts.getElementsByTagName("span")
		
		tts1[0].style.display="none";

		var ts = document.getElementById("92")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		

	}
	else if(pyr1>100)
	{
		pyr1=pre
	}
	
	
	else if(pyr1==43)
	{
	
		var tvar1 = 43-ran
		
		pyr1=17
		
		window.alert("Oops..! player got a bite (from 43 to 17)");
		
		var ts = document.getElementById("17")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		
		var tts = document.getElementById(tvar1)
		
		var tts1 = tts.getElementsByTagName("span")
		
		tts1[0].style.display="none";

		var ts = document.getElementById("17")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
	}
	else if(pyr1==50)
	{
		
		var tvar1 = 50-ran
		
		
		pyr1=5
		
		window.alert("Oops..! player got a bite (from 50 to 5)");
		
		var ts = document.getElementById("5")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		
		var tts = document.getElementById(tvar1)
		
		var tts1 = tts.getElementsByTagName("span")
		
		tts1[0].style.display="none";

		var ts = document.getElementById("5")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
	}
	else if(pyr1==56)
	{
		
		var tvar1 = 56-ran
		
		pyr1=8
		
		window.alert("Oops..! player got a bite (from 56 to 8)");
		
		var ts = document.getElementById("8")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		
		var tts = document.getElementById(tvar1)
		
		var tts1 = tts.getElementsByTagName("span")
		
		tts1[0].style.display="none";

		var ts = document.getElementById("8")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
	}
	else if(pyr1==73)
	{
		
		var tvar1 = 73-ran
		
		pyr1=15
		
		window.alert("Oops..! player got a bite (from 73 to 15)");
		
		var ts = document.getElementById("15")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		
		var tts = document.getElementById(tvar1)
		
		var tts1 = tts.getElementsByTagName("span")
		
		tts1[0].style.display="none";

		var ts = document.getElementById("15")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
	}
	else if(pyr1==84)
	{
		
		var tvar1 = 84-ran
		
		pyr1=58
		
		window.alert("Oops..! player got a bite (from 84 to 58)");
		
		var ts = document.getElementById("58")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		
		var tts = document.getElementById(tvar1)
		
		var tts1 = tts.getElementsByTagName("span")
		
		tts1[0].style.display="none";

		var ts = document.getElementById("58")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
	}
	else if(pyr1==87)
	{
		
		var tvar1 = 87-ran
		
		pyr1=49
		
		window.alert("Oops..! player got a bite (from 87 to 49)");
		
		var ts = document.getElementById("49")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		
		var tts = document.getElementById(tvar1)
		
		var tts1 = tts.getElementsByTagName("span")
		
		tts1[0].style.display="none";

		var ts = document.getElementById("49")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
	}
	else if(pyr1==98)
	{
		
		var tvar1 = 98-ran
		
		pyr1=40
		
		window.alert("Oops..! player got a bite (from 98 to 40)");
		
		var ts = document.getElementById("40")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		
		var tts = document.getElementById(tvar1)
		
		var tts1 = tts.getElementsByTagName("span")
		
		tts1[0].style.display="none";

		var ts = document.getElementById("40")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
	}
	
	
	else if(pyr1==100)
	{
	
		var result = document.getElementById("rt")
		
		result.textContent="Player Won"
		
		var btn1 = document.getElementById("rld").style.display="none";
		
		
		
		var tvar11 = 100-ran
		
				
		var ts = document.getElementById("100")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		
		var tts = document.getElementById(tvar11)
		
		var ts1 = tts.getElementsByTagName("span")
		
		ts1[0].style.display="none";

		var ts = document.getElementById("100")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";
	}
	
	
	else
	{
		var ts = document.getElementById(pyr1)

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		
		var tts = document.getElementById(pre)
		
		//console.log(tts)
		
		var tts1 = tts.getElementsByTagName("span")
		
		tts1[0].style.display="none";

		var ts = document.getElementById(pyr1)

		ts2 = ts.getElementsByTagName("span")
		
		ts2[0].style.display="block";	
		
	}

},1000);//timeout ends

		tout()
}


//delay function that calls the dice function of computer after a delay
function tout()
{
	pc1++

	setTimeout(()=>{
			
		dice2()
			
	},2500);
}

//function for dice of computer
function dice2()
{
	var rann=Math.floor((Math.random()*6)+1)
	
	
	if(rann==1)
	{
		var c = document.getElementById("comp").style.display="block";
		
		var d1 = document.getElementById("dice1").style.display="block";
		
		setTimeout(()=>{
			
			var c = document.getElementById("comp").style.display="none";
			
			var d1 = document.getElementById("dice1").style.display="none";
		},1100);
		
	}
	else if(rann==2)
	{
		var c = document.getElementById("comp").style.display="block";
		
		var d1 = document.getElementById("dice2").style.display="block";
		
		setTimeout(()=>{
			
			var c = document.getElementById("comp").style.display="none";
			
			var d1 = document.getElementById("dice2").style.display="none";
		},1100);
	}
	else if(rann==3)
	{
		var c = document.getElementById("comp").style.display="block";
		
		var d1 = document.getElementById("dice3").style.display="block";
		
		setTimeout(()=>{
			
			var c = document.getElementById("comp").style.display="none";
			
			var d1 = document.getElementById("dice3").style.display="none";
		},1100);
	}
	else if(rann==4)
	{
		var c = document.getElementById("comp").style.display="block";
		
		var d1 = document.getElementById("dice4").style.display="block";
		
		setTimeout(()=>{
			
			var c = document.getElementById("comp").style.display="none";
			
			var d1 = document.getElementById("dice4").style.display="none";
		},1100);
	}
	else if(rann==5)
	{
		var c = document.getElementById("comp").style.display="block";
		
		var d1 = document.getElementById("dice5").style.display="block";
		
		setTimeout(()=>{
			
			var c = document.getElementById("comp").style.display="none";
			
			var d1 = document.getElementById("dice5").style.display="none";
		},1100);
	}
	else if(rann==6)
	{
		var c = document.getElementById("comp").style.display="block";
		
		var d1 = document.getElementById("dice6").style.display="block";
		
		setTimeout(()=>{
			
			var c = document.getElementById("comp").style.display="none";
			
			var d1 = document.getElementById("dice6").style.display="none";
		},1100);
	}
	
	
	pyr2+=rann
	
	console.log(pyr2)
	
	pree = pyr2-rann

	
	var onee = document.getElementById("1")
	
	var onee1 = onee.getElementsByTagName("span")
	
	onee1[1].style.display="none";
	
	
	
	setTimeout(()=>{
	
	if(pyr2==2)
	{
		
		pyr2=23
		
		window.alert("Computer got a ladder from 2 to 23");
		
		var tss = document.getElementById("23")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		
		var ttss = document.getElementById(pree)
		
		var ttss1 = ttss.getElementsByTagName("span")
		
		ttss1[1].style.display="none";

		var tss = document.getElementById("23")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		

	}
	
	else if(pyr2==6)
	{
		
		pyr2=45
		
		window.alert("Computer got a ladder from 6 to 45");
		
		var tss = document.getElementById("45")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		
		var ttss = document.getElementById(pree)
		
		var ttss1 = ttss.getElementsByTagName("span")
		
		ttss1[1].style.display="none";

		var tss = document.getElementById("45")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		

	}
	else if(pyr2==20)
	{
		
		var tvar2 = 20-rann
		
		
		pyr2=59
		
		window.alert("Computer got a ladder from 20 to 59");
		
		var tss = document.getElementById("59")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		
		var ttss = document.getElementById(tvar2)
		
		var ttss1 = ttss.getElementsByTagName("span")
		
		ttss1[1].style.display="none";

		var tss = document.getElementById("59")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		
	}
	else if(pyr2==52)
	{
		
		var tvar2 = 52-rann
		
		pyr2=72
		
		window.alert("Computer got a ladder from 52 to 72");
		
		var tss = document.getElementById("72")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		
		var ttss = document.getElementById(tvar2)
		
		var ttss1 = ttss.getElementsByTagName("span")
		
		ttss1[1].style.display="none";

		var tss = document.getElementById("72")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		

	}
	else if(pyr2==57)
	{
	
		var tvar2 = 57-rann
		
		pyr2=96
		
		window.alert("Computer got a ladder from 57 to 96");
		
		var tss = document.getElementById("96")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		
		var ttss = document.getElementById(tvar2)
		
		var ttss1 = ttss.getElementsByTagName("span")
		
		ttss1[1].style.display="none";

		var tss = document.getElementById("96")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		

	}
	else if(pyr2==77)
	{
		
		var tvar2 = 77-rann
		
		pyr2=92
		
		window.alert("Computer got a ladder from 77 to 92");
		
		var tss = document.getElementById("92")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		
		var ttss = document.getElementById(tvar2)
		
		var ttss1 = ttss.getElementsByTagName("span")
		
		ttss1[1].style.display="none";

		var tss = document.getElementById("92")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		

	}
	else if(pyr2>100)
	{
		pyr2=pree
	}
	
	//snake bite
	
	else if(pyr2==43)
	{
		
		var tvar2 = 43-rann
		
		pyr2=17
		
		window.alert("Oops..! Computer got a bite (from 43 to 17)");
		
		var tss = document.getElementById("17")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		
		var ttss = document.getElementById(tvar2)
		
		var ttss1 = ttss.getElementsByTagName("span")
		
		ttss1[1].style.display="none";

		var tss = document.getElementById("17")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		

	}
	
	else if(pyr2==50)
	{
		
		var tvar2 = 50-rann
		
		pyr2=5
		
		window.alert("Oops..! Computer got a bite (from 50 to 5)");
		
		var tss = document.getElementById("5")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		
		var ttss = document.getElementById(tvar2)
		
		var ttss1 = ttss.getElementsByTagName("span")
		
		ttss1[1].style.display="none";

		var tss = document.getElementById("5")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		

	}
	else if(pyr2==56)
	{
		
		var tvar2 = 56-rann
		
		pyr2=8
		
		window.alert("Oops..! Computer got a bite (from 56 to 8)");
		
		var tss = document.getElementById("8")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		
		var ttss = document.getElementById(tvar2)
		
		var ttss1 = ttss.getElementsByTagName("span")
		
		ttss1[1].style.display="none";

		var tss = document.getElementById("8")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		
	}
	else if(pyr2==73)
	{
		
		var tvar2 = 73-rann
		
		pyr2=15
		
		window.alert("Oops..! Computer got a bite (from 73 to 15)");
		
		var tss = document.getElementById("15")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		
		var ttss = document.getElementById(tvar2)
		
		var ttss1 = ttss.getElementsByTagName("span")
		
		ttss1[1].style.display="none";

		var tss = document.getElementById("15")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		

	}
	else if(pyr2==84)
	{
	
		var tvar2 = 84-rann
		
		pyr2=58
		
		window.alert("Oops..! Computer got a bite (from 84 to 58)");
		
		var tss = document.getElementById("58")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		
		var ttss = document.getElementById(tvar2)
		
		var ttss1 = ttss.getElementsByTagName("span")
		
		ttss1[1].style.display="none";

		var tss = document.getElementById("58")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		

	}
	else if(pyr2==87)
	{
		
		var tvar2 = 87-rann
		
		pyr2=49
		
		window.alert("Oops..! Computer got a bite (from 87 to 49)");
		
		var tss = document.getElementById("49")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		
		var ttss = document.getElementById(tvar2)
		
		var ttss1 = ttss.getElementsByTagName("span")
		
		ttss1[1].style.display="none";

		var tss = document.getElementById("49")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		

	}
	else if(pyr2==98)
	{
		
		var tvar2 = 98-rann
		
		pyr2=40
		
		window.alert("Oops..! Computer got a bite (from 98 to 40)");
		
		var tss = document.getElementById("40")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		
		var ttss = document.getElementById(tvar2)
		
		var ttss1 = ttss.getElementsByTagName("span")
		
		ttss1[1].style.display="none";

		var tss = document.getElementById("40")

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		

	}
	
	
	else if(pyr2==100)
	{
		var result = document.getElementById("rt")
		
		result.textContent="Computer Won"
		
		var btn1 = document.getElementById("rld").style.display="none";
	
		
		
		var tvar11 = 100-rann
		
				
		var ts = document.getElementById("100")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[1].style.display="block";	
		
		var tts = document.getElementById(tvar11)
		
		var ts1 = tts.getElementsByTagName("span")
		
		ts1[1].style.display="none";

		var ts = document.getElementById("100")

		ts2 = ts.getElementsByTagName("span")
		
		ts2[1].style.display="block";
	
	}
	
	
	else
	{
	
		var tss = document.getElementById(pyr2)

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		
		var ttss = document.getElementById(pree)
		
		
		var ttss1 = ttss.getElementsByTagName("span")
		
		ttss1[1].style.display="none";

		var tss = document.getElementById(pyr2)

		tss2 = tss.getElementsByTagName("span")
		
		tss2[1].style.display="block";	
		

	}


},1000);//timeout ends	
	
	
}

function playa()
{
	
	console.log("done")

	const audio = new Audio()
	
	audio.src="D:\html\snake and ladder\Slide Whistle Up - Sound Effect(HD).mp3";
	
	audio.play();
	
	console.log(audio)
		
		
	
}

//information bar codes


//function to shrink and expand information container
function hovera()
{
	var a = document.getElementById("sbta");
	
	a.textContent="INSTRUCTIONS";
	
	var b = document.getElementById("sbtad").style.width="140px";
}

function mout()
{
	var a = document.getElementById("sbta");
	
	a.textContent="INSTR..";
	
	var b = document.getElementById("sbtad").style.width="60px";
}

//creates the condition for displaying and hiding the information container
var instr = 0

//function that executes the work of displaying and hiding the information container
function getintoinfo()
{
	instr++
	
	if(instr%2==1)
	{
		var d = document.getElementById("ins").style.display="block";
		
		var e = document.getElementById("insd").style.display="block";
	}
	else
	{
		var d = document.getElementById("ins").style.display="none";
		
		var e = document.getElementById("insd").style.display="none";
	}
	
}


//code dump



/*
function testp1()
{
	
	if(pc1%2==1)
	{
		pc1++
		
		console.log("player one turn")
		
		dice1()
	}
	else
	{
		window.alert("It's player two turn")
	}
	
}
*/



	
	/*
	var tss = document.getElementById(pyr2)

	tss2 = tss.getElementsByTagName("span")
	
	tss2[1].style.display="block";	
	
	var ttss = document.getElementById(pree)
	
	//console.log(ttss)
	
	var ttss1 = ttss.getElementsByTagName("span")
	
	ttss1[1].style.display="none";

	var tss = document.getElementById(pyr2)

	tss2 = tss.getElementsByTagName("span")
	
	tss2[1].style.display="block";	
	
	//console.log(tss)
	
	//console.log(tss2)
	
	*/
