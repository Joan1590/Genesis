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

	//JUEGO 1 EL PARCHE
	$(".cajon").click(function(){
		var palabras = [{
			"palabra":"INTERDISCIPLINARIO",
			"esta":false
		},{
			"palabra":"DIGNIDAD",
			"esta":false
		},{
			"palabra":"DERECHOS",
			"esta":false
		},{
			"palabra":"BIOÉTICA",
			"esta":false
		},{
			"palabra":"DESIGUALDAD",
			"esta":false
		},{
			"palabra":"FAMILIA",
			"esta":false
		}];
		var puede = true;
		for(var i=0;i<$(".cajon").length;i++){
			var existe = false;
			for(var j=0;j<palabras.length;j++){
				if(palabras[j].esta)
					continue;
				if($(".cajon")[i].value==palabras[j].palabra){
					palabras[j].esta = true;
					existe = true;
					break;
				}
			}
			if(!existe)
				puede = false;
		}
		if(puede)
			$("#formElParcheFirst").css("display","block");
	});

	//JUEGO 2 EL PARCHE
	$(".completa").click(function(){
		if($(".completa").val().toUpperCase()=="LA BIOÉTICA SOCIAL DEBE HACER UN ESTUDIO INTERDISCIPLINARIO DE TODOS LOS IMPACTOS DIRECTOS E INDIRECTOS QUE CAMBIAN Y TRANSFORMAN LA FAMILIA")
			$("#formElParcheSecond").css("display","block");
	});

	//JUEGO 3 EL PARCHE
	$(".mapaconceptual").click(function(){
		if($(".mapa")[1].value.toUpperCase()=="POBREZA"&&$(".mapa")[2].value.toUpperCase()=="SEXO Y GÉNERO"&&$(".mapa")[3].value.toUpperCase()=="CICLOS VITALES"
			&&$(".mapa")[4].value.toUpperCase()=="MUJER CABEZA DE FAMILIA"&&$(".mapa")[5].value.toUpperCase()=="DIFERENCIAS FISIOLÓGICAS"&&$(".mapa")[6].value.toUpperCase()=="NACIMIENTO Y MUERTE"
			&&$(".mapa")[7].value.toUpperCase()=="DESIGUALDAD"&&$(".mapa")[8].value.toUpperCase()=="DIFERENCIAS PSICOLÓGICAS Y SOCIALES"&&$(".mapa")[9].value.toUpperCase()=="VEJEZ"
			&&$(".mapa")[10].value.toUpperCase()=="DIGNIDAD HUMANA"&&$(".mapa")[11].value.toUpperCase()=="DISCRIMINACIÓN SEXUAL"&&$(".mapa")[12].value.toUpperCase()=="SEGURIDAD SOCIAL")
		$("#formElParcheThird").css("display","block");
	});

	//JUEGO 1 NATIVO
	$(".cajonNativo").click(function(){
		var palabras = [{
			"palabra":"RENOVABLES",
			"esta":false
		},{
			"palabra":"PERENNES",
			"esta":false
		},{
			"palabra":"EXTERNALIDAD",
			"esta":false
		},{
			"palabra":"SOSTENIBILIDAD",
			"esta":false
		},{
			"palabra":"BIOPROSPECCIÓN",
			"esta":false
		},{
			"palabra":"BIODEGRADABILIDAD",
			"esta":false
		}];
		var puede = true;
		for(var i=0;i<$(".cajonNativo").length;i++){
			var existe = false;
			for(var j=0;j<palabras.length;j++){
				if(palabras[j].esta)
					continue;
				if($(".cajonNativo")[i].value==palabras[j].palabra){
					palabras[j].esta = true;
					existe = true;
					break;
				}
			}
			if(!existe)
				puede = false;
		}
		if(puede)
			$("#formNativoFirst").css("display","block");
	});

	//JUEGO 2 NATIVO
	$(".completaNativo").click(function(){
		if($(".completaNativo").val().toUpperCase()=="ES DIFÍCIL IMAGINAR UN DESARROLLO ECONÓMICO SIN IMPACTO SOBRE SU MEDIO PERO SI ES POSIBLE GENERAR PROCESOS DE PRODUCCIÓN MÁS SOSTENIBLES EN DONDE SE INTERNALICEN SUS OUTPUTS")
			$("#formNativoSecond").css("display","block");
	});

	//JUEGO 3 NATIVO
	$(".mapaconceptualNativo").click(function(){
		if($(".mapaNativo")[1].value.toUpperCase()=="ECOSISTEMAS"&&$(".mapaNativo")[2].value.toUpperCase()=="ECOLOGÍA HUMANA"&&$(".mapaNativo")[3].value.toUpperCase()=="BIOPIRATERÍA"&&$(".mapaNativo")[4].value.toUpperCase()=="TIERRA"
			&&$(".mapaNativo")[5].value.toUpperCase()=="ESTUDIA"&&$(".mapaNativo")[6].value.toUpperCase()=="ESPECIES"&&$(".mapaNativo")[7].value.toUpperCase()=="CAPAS DE LA TIERRA"&&$(".mapaNativo")[8].value.toUpperCase()=="COMPORTAMIENTO HUMANO"
			&&$(".mapaNativo")[9].value.toUpperCase()=="CULTURA"&&$(".mapaNativo")[10].value.toUpperCase()=="MEDIO AMBIENTE"&&$(".mapaNativo")[11].value.toUpperCase()=="FLORA"&&$(".mapaNativo")[12].value.toUpperCase()=="FAUNA"
			&&$(".mapaNativo")[13].value.toUpperCase()=="ATMÓSFERA"&&$(".mapaNativo")[14].value.toUpperCase()=="HIDRÓSFERA"&&$(".mapaNativo")[15].value.toUpperCase()=="GEOSFERA"&&$(".mapaNativo")[16].value.toUpperCase()=="CALIDAD DE VIDA"
			&&$(".mapaNativo")[17].value.toUpperCase()=="TRÁFICO ILEGAL"&&$(".mapaNativo")[18].value.toUpperCase()=="BIOMAS"&&$(".mapaNativo")[19].value.toUpperCase()=="HUELLA ECOLÓGICA"&&$(".mapaNativo")[20].value.toUpperCase()=="PERECE"
			&&$(".mapaNativo")[21].value.toUpperCase()=="AGRESOR"&&$(".mapaNativo")[22].value.toUpperCase()=="TERRESTRE"&&$(".mapaNativo")[23].value.toUpperCase()=="ACUÁTICO"&&$(".mapaNativo")[24].value.toUpperCase()=="AÉREO"
			&&$(".mapaNativo")[25].value.toUpperCase()=="EDUCACIÓN"&&$(".mapaNativo")[26].value.toUpperCase()=="GESTIÓN AMBIENTAL"&&$(".mapaNativo")[27].value.toUpperCase()=="BIOPROSPECCIÓN"&&$(".mapaNativo")[28].value.toUpperCase()=="TIPOS DE ESPECIES"
			&&$(".mapaNativo")[29].value.toUpperCase()=="PRINCIPIOS BIOÉTICOS"&&$(".mapaNativo")[30].value.toUpperCase()=="FITOGENÉTICA"&&$(".mapaNativo")[31].value.toUpperCase()=="ZOOGENÉTICA"&&$(".mapaNativo")[32].value.toUpperCase()=="PLANTAS"
			&&$(".mapaNativo")[33].value.toUpperCase()=="ANIMALES"&&$(".mapaNativo")[34].value.toUpperCase()=="MICROORGANISMOS"&&$(".mapaNativo")[35].value.toUpperCase()=="CADENAS TRÓFICAS")
		$("#formNativoThird").css("display","block");
	});

	//JUEGO 1 HISTORIA
	$(".cajonHistoria").click(function(){
		var palabras = [{
			"palabra":"BIOCÉNTRISMO",
			"esta":false
		},{
			"palabra":"ECOCENTRISMO",
			"esta":false
		},{
			"palabra":"LIBERTAD",
			"esta":false
		},{
			"palabra":"IGUALDAD",
			"esta":false
		},{
			"palabra":"FRATERNIDAD",
			"esta":false
		},{
			"palabra":"TRANSFORMACIÓN",
			"esta":false
		}];
		var puede = true;
		for(var i=0;i<$(".cajonHistoria").length;i++){
			var existe = false;
			for(var j=0;j<palabras.length;j++){
				if(palabras[j].esta)
					continue;
				if($(".cajonHistoria")[i].value==palabras[j].palabra){
					palabras[j].esta = true;
					existe = true;
					break;
				}
			}
			if(!existe)
				puede = false;
		}
		if(puede)
			$("#formHistoriaFirst").css("display","block");
	});

	//JUEGO 2 HISTORIA
	$(".completaHistoria").click(function(){
		if($(".completaHistoria").val().toUpperCase()=="LA BIOÉTICA BUSCA UNA TRANSFORMACIÓN EN LOS VALORES QUE RIGEN A LAS PERSONAS EN LAS DIFERENTES CULTURAS QUE EXISTEN EN EL MUNDO SOBRE TODO FRENTE A LA RELACIÓN CON LOS OTROS Y CON LA NATURALEZA")
			$("#formHistoriaSecond").css("display","block");
	});

	//JUEGO 3 HISTORIA
	$(".mapaconceptualHistoria").click(function(){
		if($(".mapaHistoria")[0].value.toUpperCase()=="HISTORIA DE LA BIOÉTICA"&&$(".mapaHistoria")[1].value.toUpperCase()=="IMPACTO SOBRE EL PLANETA"&&$(".mapaHistoria")[2].value.toUpperCase()=="FRITZ JAHR"&&$(".mapaHistoria")[3].value.toUpperCase()=="SOLUCIONAR"
			&&$(".mapaHistoria")[4].value.toUpperCase()=="ANTROPOCENTRISMO"&&$(".mapaHistoria")[5].value.toUpperCase()=="VAN RENSSELAER POTTER"&&$(".mapaHistoria")[6].value.toUpperCase()=="CALENTAMIENTO GLOBAL"&&$(".mapaHistoria")[7].value.toUpperCase()=="JURAMENTO HIPOCRÁTICO"
			&&$(".mapaHistoria")[8].value.toUpperCase()=="ANDRÉ HELLEGUER"&&$(".mapaHistoria")[9].value.toUpperCase()=="VIH/SIDA"&&$(".mapaHistoria")[10].value.toUpperCase()=="SAN FRANCISCO DE ASÍS"&&$(".mapaHistoria")[11].value.toUpperCase()=="ALDO LEOPOLD"
			&&$(".mapaHistoria")[12].value.toUpperCase()=="THE HASTING CENTER"&&$(".mapaHistoria")[13].value.toUpperCase()=="CALIDAD DE VIDA"&&$(".mapaHistoria")[14].value.toUpperCase()=="CENTRO DE INVESTIGACIÓN"&&$(".mapaHistoria")[15].value.toUpperCase()=="UNESCO")
		$("#formHistoriaThird").css("display","block");
	});

	//JUEGO 1 CIBER
	$(".tablaCiber1").click(function(){
		var puede = true;
		for(var i=0;i<$(".tablaCiber1 div").length;i++){
			if($(".tablaCiber1 div")[i].style.background==""){puede=false;
			}
		}
		if(puede){
			$("#formCiberFirst").css("display","block");
		}
	});

	//JUEGO 2 CIBER
	validateSecondGameCIBER = function(){
		var text= "";
		for(var i=0;i<$(".group1h").length;i++){text+=$(".group1h")[i].value;}
		if(text.toUpperCase()=="EMBRIÓN"){
			var text= "";
			for(var i=0;i<$(".group2h").length;i++){text+=$(".group2h")[i].value;}
			if(text.toUpperCase()=="NEUROÉTICA"){
				var text= "";
				for(var i=0;i<$(".group3h").length;i++){text+=$(".group3h")[i].value;}
				if(text.toUpperCase()=="GENES"){
					var text= "";
					for(var i=0;i<$(".group4h").length;i++){text+=$(".group4h")[i].value;}
					if(text.toUpperCase()=="CIENCIA"){
						var text= "";
						for(var i=0;i<$(".group5h").length;i++){text+=$(".group5h")[i].value;}
						if(text.toUpperCase()=="RAZILITUBUS"){
							var text= "";
							for(var i=0;i<$(".group1v").length;i++){text+=$(".group1v")[i].value;}
							if(text.toUpperCase()=="ACIBOREANA"){
								var text= "";
								for(var i=0;i<$(".group2v").length;i++){text+=$(".group2v")[i].value;}
								if(text.toUpperCase()=="TECNOLOGIA"){
									var text= "";
									for(var i=0;i<$(".group3v").length;i++){text+=$(".group3v")[i].value;}
									if(text.toUpperCase()=="CIBERACOSO"){
										$("#formCiberSecond").css("display","block");
									}
								}
							}
						}
					}	
				}		
			}
		}	
	}
	$(".tablaFull7").click(validateSecondGameCIBER);

	//JuEGO 3 CIBER
	function validarCIBER(){
		var arrayFull = [6,7,8,9,10,11,12,13,14,16,31,32,41,45,46,48,56,60,61,62,63,64,65,66,67,68,69,70,71,75,76,80,86,90,91,96,101,105,106,111,112,113,114,115,116,117,118,120,127,128,134,135,142,144,149,150,160,164,165,176,179,180,192,194,195,208,209,210,213,214,215,216,217,218,219,220,224];
		var puede=true;
		for(var i=0;i<arrayFull.length;i++){
			if ($(".tableFull8>tbody>tr>td")[arrayFull[i]].style.background!="yellow") {
				puede=false;
				break;
			};
		}
		if(puede){
			$("#formElGalenoThird").css("display","block");
		}
	}


	$(".tableFull8>tbody>tr>td").click(function(){
		if(this.style.background=="yellow"){
			this.style.background="white";
		}else{
			this.style.background="yellow";
		}
		validarCIBER();
	});		
});
