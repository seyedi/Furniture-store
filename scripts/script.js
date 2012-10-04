window.onload = function() {
		document.body.className = '';
		setTimeout(function(){
			document.getElementById('loading').style.display='none';
		},1500)
	var train = document.getElementById("train"),
		ar 	  = document.getElementById("rightarrow"),
		al 	  = document.getElementById("leftarrow"),
		ad 	  = document.getElementById("downarrow"),
		au 	  = document.getElementById("uparrow"),
		logo  = document.getElementById("lgo"),
		shift = 0;
		al.style.display = "none";
		document.getElementById("main").style.width =  window.screen.width+"px";
////////////////////////Gallery script////////////////////////////////////
	ar.onclick = function() {
		shift -= 400;
		train.style.left = shift+"px";
		changeDisplay(shift);
	};

	al.onclick = function() {
		shift += 400;
		train.style.left = shift+"px";
		changeDisplay(shift);
	};

	function changeDisplay(n){
		switch(n){
			case 0:
				al.style.display = "none";
				break;
			case -5600:
				train.style.left = 0+"px";
				shift=0;
				al.style.display = "none";
			  	break;
			default:
				al.style.display = "block";
				ar.style.display = "block";
		}
	}
////////////////////////////Banner script////////////////////////////////////

	ad.onclick = function() {
		hideLogo();
		ad.style.display = "none";
	};

	au.onclick = function() {
		showLogo();
		ad.style.display = "block";
	};

	function hideLogo(){
		logo.style.height = 0;
		document.body.style.paddingTop = 75+"px";
	}

	function showLogo(){
		logo.style.height = 85+"px";
		document.body.style.paddingTop = 160+"px";
	}

	// function movScroll(y) {
	// 	window.scrollTo(0,y);
	// }
////////////////////////////Arrows script//////////////////////////////////////

	$(function() {
		$('#downarrow').click(function() {
			$('body,html').animate({scrollTop:480},800);
		});	
	});

	$(function() {
		$('#uparrow').click(function() {
			$('body,html').animate({scrollTop:0},800);
		});	
	});

	// if($("body,html").scrollTop()==0){
	// 	alert('salam');
	// }

///////////////////////////menu script//////////////////////////////////////
	$(function() {
		$('#home').click(function() {
			$('body,html').animate({scrollTop:0},800);
			showLogo();
			ad.style.display = "block";
		});	
	});

	$(function() {
		$('#gallery').click(function() {
			$('body,html').animate({scrollTop:480},800);
			hideLogo();
		});	
	});

	$(function() {
		$('#branche').click(function() {
			$('body,html').animate({scrollTop:0},800);
			hideLogo();
		});	
	});

	$(function() {
		$('#life').click(function() {
			$('body,html').animate({scrollTop:1123},800);
			hideLogo();
		});	
	});

	$(function() {
		$('#contact').click(function() {
			$('body,html').animate({scrollTop:1723},800);
			hideLogo();
		});	
	});	

///////////////////////////slide script/////////////////////////////////////
	// var curr = 1;
	// $(function() {
	// 	$('#nxt').click(function() {
	// 		$('#+'+curr+'+').fadeOut();
	// 		$('#+'+curr+'+').fadeIn();
	// 	});	
	// });	

////////////////////////////////////////////////////////////////////////////

}