$(document).ready(function(){

	// ##### Global Variables #####
	var LinkPerk = "0";
	
	// ##### Functions #####
	
	function setHoverInfo(Perk){
	
		if ($(Perk).hasClass('perk-berserker')) { Perk = Berserker_skills }
		if ($(Perk).hasClass('perk-commando')) { Perk = Commando_skills }
		if ($(Perk).hasClass('perk-support')) { Perk = Support_skills }
		if ($(Perk).hasClass('perk-medic')) { Perk = Field_Medic_skills }
		if ($(Perk).hasClass('perk-demolition')) { Perk = Demolitionist_skills }
		if ($(Perk).hasClass('perk-firebug')) { Perk = Firebug_skills }
		if ($(Perk).hasClass('perk-gunslinger')) { Perk = Gunslinger_skills }
		if ($(Perk).hasClass('perk-sharpshooter')) { Perk = Sharpshooter_skills }
		if ($(Perk).hasClass('perk-swat')) { Perk = SWAT_skills }
		if ($(Perk).hasClass('perk-survivalist')) { Perk = Survivalist_skills }
	
		var info = document.getElementById("perk_info");
		info.innerHTML = ""
		
		var i;
		var j=0;
		
		for(i=0; i < 10; i++){

			if( Perk[6] && Perk[6][i+j] ){
			
				info.innerHTML = info.innerHTML + '<span id="info '+i+'"> <span id="i_big '+i+'" class="i_big "'+i+'"></span> <span id="i_small '+i+'" class="i_small '+i+'"></span> </span> <br>';
				
				var big = document.getElementById('i_big '+i);
				big.innerHTML = Perk[6][i+j];
				
				j=j+1;
				
				var small = document.getElementById('i_small '+i);
				small.innerHTML = Perk[6][i+j];
			
			}else{
				break;
			}
		
		}

	}
	
	function loadPerkSkills(perk){
	
		var name = [];
		var desc = [];
		var type = [];
		
		var i, j;
		
		for(j=0; j < 5; j++){
			for(i=0; i < perk.length; i++){
				if(perk[j] && perk[j][i]){
					name.push(perk[j][i].name);
					desc.push(perk[j][i].desc);
				}
			}
		}
		
		for(i=0; i < 5; i++){
			if(perk[5] && perk[5][i]){
				type.push(perk[5][i]);
			}
		}
		
		var skillTitle = document.getElementsByClassName("skill-name");
		var skillDesc = document.getElementsByClassName("skill-desc");
		var skillType = document.getElementsByClassName("skill-type");
		
		for(i=0; i < 10; i++){
			if(skillTitle[i] && skillDesc[i]){
				skillTitle[i].innerHTML = name[i];
				skillDesc[i].innerHTML = desc[i];
			}
			if(skillType[i]){
				skillType[i].innerHTML = type[i];
			}
		}
		
	}
	
	function addIcons(Sheet){
		var icons = document.getElementsByClassName("skill-icon");
		var k = 0;
		var i, j;
		
		for(j=0; j < 2; j++){
			for(i=0; i < icons.length/2; i++){
				icons[k].style.background = "url('images/talents/" + Sheet + "_sheet.png') " + i*-50 + "px " + j*-50 + "px";
				k++;
			}
		}
	}
	
	function updateLink(){
		var link = document.getElementById("talent-url");
		
		var row1 = ($(".row1 + .second").hasClass("active") && "2") || ($(".row1").hasClass("active") && "1") || "0";
		var row2 = ($(".row2 + .second").hasClass("active") && "2") || ($(".row2").hasClass("active") && "1") || "0";
		var row3 = ($(".row3 + .second").hasClass("active") && "2") || ($(".row3").hasClass("active") && "1") || "0";
		var row4 = ($(".row4 + .second").hasClass("active") && "2") || ($(".row4").hasClass("active") && "1") || "0";
		var row5 = ($(".row5 + .second").hasClass("active") && "2") || ($(".row5").hasClass("active") && "1") || "0";
		
		var LinkTalents = row1 + row2 + row3 + row4 + row5;
		
		var talents = LinkPerk + LinkTalents;
		
		if( window.location.href.search("perk=") != -1 ){
		
			link.innerHTML = window.location.href.split("?")[0] + "?perk=" + talents;
		
		}else{
		
			link.innerHTML = window.location.href + "?perk=" + talents;
		
		}
		
	}
	
	function loadParams(){
	
		var perk = "";
		var params = document.location.search.split("?");
		var num = params[1] && params[1].split("=")[1];
		
		if(isNaN(num) || (num[0] < 0 || num[0] > 9)){ return; }
		
		if(params[1].split("=")[0] == "perk"){
	
			if(num[0] == 0){
				perk = ".perk-berserker";
			}else if(num[0] == 1){
				perk = ".perk-commando";
			}else if(num[0] == 2){
				perk = ".perk-support";
			}else if(num[0] == 3){
				perk = ".perk-medic";
			}else if(num[0] == 4){
				perk = ".perk-demolition";
			}else if(num[0] == 5){
				perk = ".perk-firebug";
			}else if(num[0] == 6){
				perk = ".perk-gunslinger";
			}else if(num[0] == 7){
				perk = ".perk-sharpshooter";
			}else if(num[0] == 8){
				perk = ".perk-swat";
			}else if(num[0] == 9){
				perk = ".perk-survivalist";
			}
			
			$(perk).addClass("active");
			
			setPerk(perk);
			
			var i;
			var j = 1;

			for(i=1; i < 6; i++){
				if(num[i] == 1){
					$(".s"+j).addClass("active");
				}else if(num[i] == 2){
					$(".s"+(j+1)).addClass("active");
				}
				j=j+2;
			}
			
		}
		
		updateLink();

	}
	
	function setPerk(obj){
		$(".perk-skill").removeClass("active");
		$(".bg-frame2").removeClass("hide");
		$(".bg-frame2").addClass("show");
		$(".link-frame").removeClass("hide");
		$(".link-frame").addClass("show");
		$(".perk-frame").removeClass("active");
		$(obj).addClass("active");
	
		var Perk = "";
		var Sheet = "";
		
		if ($(obj).hasClass('perk-berserker')) { Perk = Berserker_skills, Sheet = "berserker", LinkPerk = "0" }
		if ($(obj).hasClass('perk-commando')) { Perk = Commando_skills, Sheet = "commando", LinkPerk = "1" }
		if ($(obj).hasClass('perk-support')) { Perk = Support_skills, Sheet = "support", LinkPerk = "2" }
		if ($(obj).hasClass('perk-medic')) { Perk = Field_Medic_skills, Sheet = "medic", LinkPerk = "3" }
		if ($(obj).hasClass('perk-demolition')) { Perk = Demolitionist_skills, Sheet = "demolition", LinkPerk = "4" }
		if ($(obj).hasClass('perk-firebug')) { Perk = Firebug_skills, Sheet = "firebug", LinkPerk = "5" }
		if ($(obj).hasClass('perk-gunslinger')) { Perk = Gunslinger_skills, Sheet = "gunslinger", LinkPerk = "6" }
		if ($(obj).hasClass('perk-sharpshooter')) { Perk = Sharpshooter_skills, Sheet = "sharpshooter", LinkPerk = "7" }
		if ($(obj).hasClass('perk-swat')) { Perk = SWAT_skills, Sheet = "swat", LinkPerk = "8" }
		if ($(obj).hasClass('perk-survivalist')) { Perk = Survivalist_skills, Sheet = "survivalist", LinkPerk = "9" }
		
		loadPerkSkills(Perk);
		addIcons(Sheet);
		updateLink();
	}
	
	$(".perk-frame").hover(
		function(){
			$(this).addClass("hover");
			$(".perk_info").addClass("show");
			$(".perk_info").removeClass("hide");
			setHoverInfo(this);
		},function(){
			$(this).removeClass("hover");
			$(".perk_info").addClass("hide");
			$(".perk_info").removeClass("show");
		}
	);
	
	$(".perk-frame").mousemove(function(event){
		$(".perk_info").offset({top: event.pageY+20, left: event.pageX+10});
	});
	
	$(".perk-frame").click(function(){
		setPerk(this);
	});
	
	$(".perk-skill").hover(
		function(){
			$(".bg-frame2").hasClass("show") && $(this).addClass("hover");
		},function(){
			$(".bg-frame2").hasClass("show") && $(this).removeClass("hover");
		}
	);
	
	$(".perk-skill").click(function(){
		var isActive = $(this).hasClass("active");
		$(this).hasClass("row1") && $(".row1").removeClass("active");
		$(this).hasClass("row2") && $(".row2").removeClass("active");
		$(this).hasClass("row3") && $(".row3").removeClass("active");
		$(this).hasClass("row4") && $(".row4").removeClass("active");
		$(this).hasClass("row5") && $(".row5").removeClass("active");
		isActive && $(this).removeClass("active") || $(this).addClass("active")
		
		updateLink();
	});
	
	// ##### Start #####
	loadParams();
	
});