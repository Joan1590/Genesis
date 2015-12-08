$(document).ready(function(){
	//JUEGO 1 - GENESIS
	validateFirsGame = function(){
		var text= "";
		for(var i=0;i<$(".group1").length;i++){text+=$(".group1")[i].value;}
		if(text.toUpperCase()=="AICITSUJ"){
			var text= "";
			for(var i=0;i<$(".group2").length;i++){text+=$(".group2")[i].value;}
			if(text.toUpperCase()=="AIGOLOTNOED"){
				var text= "";
				for(var i=0;i<$(".group3").length;i++){text+=$(".group3")[i].value;}
				if(text.toUpperCase()=="PRINCIPIOS"){
					var text= "";
					for(var i=0;i<$(".group4").length;i++){text+=$(".group4")[i].value;}
					if(text.toUpperCase()=="BIOCENTRISMO"){
						var text= "";
						for(var i=0;i<$(".group5").length;i++){text+=$(".group5")[i].value;}
						if(text.toUpperCase()=="EUGENESIA"){
							var text= "";
							for(var i=0;i<$(".group6").length;i++){text+=$(".group6")[i].value;}
							if(text.toUpperCase()=="AUTONOMIA"){
								var text= "";
								for(var i=0;i<$(".group7").length;i++){text+=$(".group7")[i].value;}
								if(text.toUpperCase()=="DADINGID"){
									$("#formGenesisFirst").css("display","block");
								}
							}
						}
					}	
				}		
			}
		}	
	}
	$(".tablaFull").click(validateFirsGame);

	//JUEGO 2 GENESIS
	function validar(){
		var arrayFull = [0,2,3,4,5,6,7,8,9,15,17,30,32,42,45,47,49,50,51,52,53,54,55,56,57,60,62,70,72,75,77,84,87,90,92,98,102,105,107,112,114,119,120,122,126,129,134,135,140,144,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,168,174,179,180,182,194,195,196,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224];
		var puede=true;
		for(var i=0;i<arrayFull.length;i++){
			if ($(".tableFull1>tbody>tr>td")[arrayFull[i]].style.background!="yellow") {
				puede=false;
				break;
			};
		}
		if(puede){
			$("#formGenesisSecond").css("display","block");
		}
	}

	$(".tableFull1>tbody>tr>td").click(function(){
		if(this.style.background=="yellow"){
			this.style.background="white";
		}else{
			this.style.background="yellow";
		}
		validar();
	});

	//JUEGO 3 GENESIS
	$(".tabla3").click(function(){
		var puede = true;
		for(var i=0;i<$(".tabla3 div").length;i++){
			if($(".tabla3 div")[i].style.background==""){puede=false;
			}
		}
		if(puede){
			$("#formGenesisThird").css("display","block");
		}
	});

	//JUEGO 1 El GALENO
	$(".tabla4").click(function(){
		var puede = true;
		for(var i=0;i<$(".tabla4 div").length;i++){
			if($(".tabla4 div")[i].style.background==""){puede=false;
			}
		}
		if(puede){
			$("#formElGalenoFirst").css("display","block");
		}
	});
	
	//JUEGO 2 EL GALENO
	validateSecondGame = function(){
		var text= "";
		for(var i=0;i<$(".grupo1h").length;i++){text+=$(".grupo1h")[i].value;}
		if(text.toUpperCase()=="EXOGENO"){
			var text= "";
			for(var i=0;i<$(".grupo2h").length;i++){text+=$(".grupo2h")[i].value;}
			if(text.toUpperCase()=="SERES"){
				var text= "";
				for(var i=0;i<$(".grupo3h").length;i++){text+=$(".grupo3h")[i].value;}
				if(text.toUpperCase()=="FRAGILIDAD"){
					var text= "";
					for(var i=0;i<$(".group4h").length;i++){text+=$(".group4h")[i].value;}
					if(text.toUpperCase()=="REGENERAR"){
						var text= "";
						for(var i=0;i<$(".group1v").length;i++){text+=$(".group1v")[i].value;}
						if(text.toUpperCase()=="OMREFNE"){
							var text= "";
							for(var i=0;i<$(".group2v").length;i++){text+=$(".group2v")[i].value;}
							if(text.toUpperCase()=="XENOTRASPLANTE"){
								var text= "";
								for(var i=0;i<$(".group3v").length;i++){text+=$(".group3v")[i].value;}
								if(text.toUpperCase()=="ORGANOS"){
									var text= "";
									for(var i=0;i<$(".group4v").length;i++){text+=$(".group4v")[i].value;}
									if(text.toUpperCase()=="DOLOR"){
										$("#formElGalenoSecond").css("display","block");
									}
								}
							}
						}
					}	
				}		
			}
		}	
	}
	$(".tablaFull5").click(validateSecondGame);

	//JUEGO 3 EL GALENO
	function validarGaleno(){
		var arrayFull = [0,1,15,16,17,18,19,20,21,22,23,24,26,31,32,40,44,45,46,48,54,59,60,61,64,66,68,74,75,76,80,81,82,86,89,90,91,96,101,104,105,106,110,111,112,116,119,120,124,126,128,131,134,135,138,141,144,146,149,150,152,156,160,161,164,165,166,171,176,179,180,185,186,187,188,189,190,191,192,193,194,208,211,212,213,214,215,216,217,218,219,220,221,222,223,224];
		var puede=true;
		for(var i=0;i<arrayFull.length;i++){
			if ($(".tableFull6>tbody>tr>td")[arrayFull[i]].style.background!="yellow") {
				puede=false;
				break;
			};
		}
		if(puede){
			$("#formElGalenoThird").css("display","block");
		}
	}


	$(".tableFull6>tbody>tr>td").click(function(){
		if(this.style.background=="yellow"){
			this.style.background="white";
		}else{
			this.style.background="yellow";
		}
		validarGaleno();
	});

});