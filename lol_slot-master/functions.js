var ar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var ar1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var ar2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var ar3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var ar4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];




function fillColumns(){
	for(var i = 0; i < 21; i++){
		kolona1.append('<div class="box"></div>');
		kolona2.append('<div class="box"></div>');
		kolona3.append('<div class="box"></div>');
		kolona4.append('<div class="box"></div>');
		kolona5.append('<div class="box"></div>');
	}
}


function startTheSpin(){
	addNewColumns();
	fillNewColumns();
	startAnimation();
}

function addNewColumns(){
	for(var i = 1; i < 6; i++){
	container.append('<div class="newnew newColumns'+i+'"</div>');
	}
}

function startAnimation(){
	test = 0;
	kolona1.animate({
		top:"+=4200px"
	},4000,function(){
		$(this).remove();
	})
	$('.newColumns1').animate({
		top:"+=4200px"
	},4000,function(){

	})
	kolona2.animate({
		top:"+=4200px"
	},4200,function(){
		$(this).remove();
	})
	$('.newColumns2').animate({
		top:"+=4200px"
	},4200,function(){

	})
		kolona3.animate({
		top:"+=4200px"
	},4400,function(){
		$(this).remove();
	})
	$('.newColumns3').animate({
		top:"+=4200px"
	},4400,function(){

	})
		kolona4.animate({
		top:"+=4200px"
	},4600,function(){
		$(this).remove();
	})
	$('.newColumns4').animate({
		top:"+=4200px"
	},4600,function(){

	})
		kolona5.animate({
		top:"+=4200px"
	},4800,function(){
		$(this).remove();
	})
	$('.newColumns5').animate({
		top:"+=4200px"
	},4800,function(){
		test++;
		if (test === 1) {
			$('.delete').remove();
			$('.newnew').addClass('delete');
		};
		

	})
}

function fillNewColumns(){
		for(var i = 0; i < 21; i++){
			var rand = Math.floor(Math.random()*ar.length);
			var rand1 = Math.floor(Math.random()*ar1.length);
			var rand2 = Math.floor(Math.random()*ar2.length);
			var rand3 = Math.floor(Math.random()*ar3.length);
			var rand4 = Math.floor(Math.random()*ar4.length);
	$('.newColumns1').append('<div class="box">'+ar[rand]+'</div>');
	$('.newColumns2').append('<div class="box">'+ar1[rand1]+'</div>');
	$('.newColumns3').append('<div class="box">'+ar2[rand2]+'</div>');
	$('.newColumns4').append('<div class="box">'+ar3[rand3]+'</div>');
	$('.newColumns5').append('<div class="box">'+ar4[rand4]+'</div>');
}
}