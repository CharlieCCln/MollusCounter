$(document).ready(function(){
  $(".specieslist").hide()
  $(".specieshuitre").hide()
  $(".speciespeigneopercule").hide()
  $(".speciesturritelle").hide()
  $(".speciespraire").hide()
  $(".comptagerenseignements").hide()
  $(".comptagerecensement").hide()
  $(".comptagecommentaires").hide()
  $(".comptageslist").hide()
  $(".dateheurecontent").hide()
  $(".positioncontent").hide()
  $(".milieucontent").hide()
  $(".meteocontent").hide()
  $(".espececontent").hide()
  $(".homedot").hide()
  $(".viewdot").click(clickView)
  $(".plusdot").click(clickPlus)
  $(".burgerdot").click(clickBurger)
  $(".retourmenu").click(clickRetourMenu)
  $(".spe1").click(clickHuitre)
  $(".spe2").click(clickPeigneOpercule)
  $(".spe3").click(clickTurritelle)
  $(".spe4").click(clickPraire)
  $(".retourliste").click(clickRetourListe)
  $(".dateheure").click(clickDateHeure)
  $(".position").click(clickPosition)
  $(".milieu").click(clickMilieu)
  $(".rock").click(clickRock)
  $(".wave").click(clickWave)
  $(".coast").click(clickCoast)
  $(".meteo").click(clickMeteo)
  $(".suncloud").click(clickSunCloud)
  $(".lightning").click(clickLightning)
  $(".snow").click(clickSnow)
  $(".sun").click(clickSun)
  $(".rain").click(clickRain)
  $(".espece").click(clickEspece)
  $(".espececontenthuitre").click(clickEspeceHuitre)
  $(".espececontentpeigneopercule").click(clickEspecePeigneOpercule)
  $(".espececontentturritelle").click(clickEspeceTurritelle)
  $(".espececontentpraire").click(clickEspecePraire)
  $(".commencer").click(clickCommencer)
  $(".retourrenseignements").click(clickRetourRenseignements)
  $(".retourmenu").click(clickRetourMenu)
  $(".valider").click(clickValider)
  // $(".enregistrer").click(clickEnregistrer)
  $(".retourrecensement").click(clickRetourRecensement)
  $(".envoyer").click(clickEnvoyer)

  $('.molette').on('mousewheel', function(event) {
    var nombreElement = $(this).data('nombre');
    var nombre = parseInt($('#'+nombreElement).text());

    if (event.deltaY > 0) {
      nombre++;
    } else {
      nombre--;
    }

    nombre = Math.max(nombre, 0);

    $('#'+nombreElement).text(nombre);
  });

  $('.toparrow').on('click', function(event) {
    var nombreElement = $(this).data('nombre');
    var nombre = parseInt($('#'+nombreElement).text());
    nombre++;
    nombre = Math.max(nombre, 0);

    $('#'+nombreElement).text(nombre);
  });

  $('.downarrow').on('click', function(event) {
    var nombreElement = $(this).data('nombre');
    var nombre = parseInt($('#'+nombreElement).text());
    nombre--;
    nombre = Math.max(nombre, 0);

    $('#'+nombreElement).text(nombre);
  });

  var hammertime = new Hammer(document.getElementById("molette1"), {});
hammertime.get('pan').set({
  direction: Hammer.DIRECTION_ALL,
  threshold: 50,
});
hammertime.on('panup', function(ev) {
  var nombreElement = $("#numbermale");
  console.log(nombreElement);
  var nombre = parseFloat(nombreElement.attr('data-value'));
  nombre+=0.2;
  nombre = Math.max(nombre, 0);

  nombreElement.attr('data-value', nombre);

  nombreElement.text(Math.round(nombre));
});
hammertime.on('pandown', function(ev) {
	console.log(ev);
});


})

function clickView(){
  $(".specieslist").show()
  $(".startmenu").hide()
}

function clickPlus(){
  $(".comptagerenseignements").show()
  $(".specieslist").hide()
  $(".specieshuitre").hide()
  $(".speciespeigneopercule").hide()
  $(".speciesturritelle").hide()
  $(".speciespraire").hide()
  $(".startmenu").hide()
}

function clickBurger(){
  $(".comptageslist").show()
  $(".startmenu").hide()
  $(".comptagecommentaires").hide()
}

function clickRetourMenu(){
  $(".startmenu").show()
  $(".specieslist").hide()
  $(".comptageslist").hide()
  $(".comptagerenseignements").hide()
  $(".comptagecommentaires").hide()
  document.getElementById("dateheure").innerHTML = "Date & Heure";
  document.getElementById("dateheure").style.color = "black";
  document.getElementById("dateheure").style.backgroundColor = "white";
  document.getElementById("position").innerHTML = "Position";
  document.getElementById("position").style.color = "black";
  document.getElementById("position").style.backgroundColor = "white";
  document.getElementById("milieu").innerHTML = "Milieu";
  document.getElementById("milieu").style.color = "black";
  document.getElementById("milieu").style.backgroundColor = "white";
  document.getElementById("meteo").innerHTML = "Météo";
  document.getElementById("meteo").style.color = "black";
  document.getElementById("meteo").style.backgroundColor = "white";
  document.getElementById("espece").innerHTML = "Espèce";
  document.getElementById("espece").style.color = "black";
  document.getElementById("espece").style.backgroundColor = "white";
  document.getElementById("textinput").value = "";
  $(".homedot").hide()
  document.getElementById("envoyer").innerHTML = "ENVOYER";
  document.getElementById("envoyer").style.width = "calc(100% - 85px)";
  $(".dateheurecontent").hide()
  $(".positioncontent").hide()
  $(".milieucontent").hide()
  $(".meteocontent").hide()
  $(".espececontent").hide()
  document.getElementById("numbermale").innerHTML = "0";
  document.getElementById("numberfemale").innerHTML = "0";
  document.getElementById("numberherma").innerHTML = "0";
  document.getElementById("textinput").innerHTML = "";
}

function clickHuitre(){
  $(".specieshuitre").show()
  $(".specieslist").hide()
}

function clickPeigneOpercule(){
  $(".speciespeigneopercule").show()
  $(".specieslist").hide()
}

function clickTurritelle(){
  $(".speciesturritelle").show()
  $(".specieslist").hide()
}

function clickPraire(){
  $(".speciespraire").show()
  $(".specieslist").hide()
}

function clickRetourListe(){
  $(".specieslist").show()
  $(".specieshuitre").hide()
  $(".speciespeigneopercule").hide()
  $(".speciesturritelle").hide()
  $(".speciespraire").hide()
}

function clickDateHeure(){
  $(".dateheurecontent").show()
  $(".positioncontent").hide()
  $(".milieucontent").hide()
  $(".meteocontent").hide()
  $(".espececontent").hide()
  document.getElementById("dateheure").innerHTML = datetime;
  document.getElementById("dateheure").style.color = "white";
  document.getElementById("dateheure").style.backgroundColor = "black";
}

function clickPosition(){
  $(".positioncontent").show()
  $(".dateheurecontent").hide()
  $(".milieucontent").hide()
  $(".meteocontent").hide()
  $(".espececontent").hide()
}

function clickMilieu(){
  $(".milieucontent").show()
  $(".positioncontent").hide()
  $(".dateheurecontent").hide()
  $(".meteocontent").hide()
  $(".espececontent").hide()
}

function clickRock(){
  document.getElementById("milieu").innerHTML = "Rocher";
  document.getElementById("milieu").style.color = "white";
  document.getElementById("milieu").style.backgroundColor = "black";
}

function clickWave(){
  document.getElementById("milieu").innerHTML = "Mer";
  document.getElementById("milieu").style.color = "white";
  document.getElementById("milieu").style.backgroundColor = "black";
}

function clickCoast(){
  document.getElementById("milieu").innerHTML = "Plage";
  document.getElementById("milieu").style.color = "white";
  document.getElementById("milieu").style.backgroundColor = "black";
}

function clickMeteo(){
  $(".meteocontent").show()
  $(".positioncontent").hide()
  $(".dateheurecontent").hide()
  $(".milieucontent").hide()
  $(".espececontent").hide()
}

function clickSunCloud(){
  document.getElementById("meteo").innerHTML = "Nuageux";
  document.getElementById("meteo").style.color = "white";
  document.getElementById("meteo").style.backgroundColor = "black";
}

function clickLightning(){
  document.getElementById("meteo").innerHTML = "Orageux";
  document.getElementById("meteo").style.color = "white";
  document.getElementById("meteo").style.backgroundColor = "black";
}

function clickSnow(){
  document.getElementById("meteo").innerHTML = "Neigeux / Grêleux";
  document.getElementById("meteo").style.color = "white";
  document.getElementById("meteo").style.backgroundColor = "black";
}

function clickSun(){
  document.getElementById("meteo").innerHTML = "Ensoleillé";
  document.getElementById("meteo").style.color = "white";
  document.getElementById("meteo").style.backgroundColor = "black";
}

function clickRain(){
  document.getElementById("meteo").innerHTML = "Pluvieux";
  document.getElementById("meteo").style.color = "white";
  document.getElementById("meteo").style.backgroundColor = "black";
}

function clickEspece(){
  $(".espececontent").show()
  $(".positioncontent").hide()
  $(".dateheurecontent").hide()
  $(".milieucontent").hide()
  $(".meteocontent").hide()
}

function clickEspeceHuitre(){
  document.getElementById("espece").innerHTML = "Huître";
  document.getElementById("espece").style.color = "white";
  document.getElementById("espece").style.backgroundColor = "black";
}

function clickEspecePeigneOpercule(){
  document.getElementById("espece").innerHTML = "Peigne Operculé";
  document.getElementById("espece").style.color = "white";
  document.getElementById("espece").style.backgroundColor = "black";
}

function clickEspeceTurritelle(){
  document.getElementById("espece").innerHTML = "Turritelle";
  document.getElementById("espece").style.color = "white";
  document.getElementById("espece").style.backgroundColor = "black";
}

function clickEspecePraire(){
  document.getElementById("espece").innerHTML = "Praire";
  document.getElementById("espece").style.color = "white";
  document.getElementById("espece").style.backgroundColor = "black";
}

function clickCommencer(){
  $(".comptagerecensement").show()
  $(".comptagerenseignements").hide()
}

function clickRetourRenseignements(){
  $(".comptagerenseignements").show()
  $(".comptagerecensement").hide()
}

function clickValider(){
  $(".comptagecommentaires").show()
  $(".comptagerecensement").hide()
}

function clickRetourRecensement(){
  $(".comptagerecensement").show()
  $(".comptagecommentaires").hide()
  $(".homedot").hide()
  document.getElementById("envoyer").innerHTML = "ENVOYER";
  document.getElementById("envoyer").style.width = "calc(100% - 85px)";
}

function clickEnvoyer(){
  $(".homedot").show()
  document.getElementById("envoyer").innerHTML = "ENVOYÉ !";
  document.getElementById("envoyer").style.width = "calc(100% - 170px)";
}
