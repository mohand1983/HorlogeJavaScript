function horloge() {
  let d = new Date();
  let h = d.getHours();
  if (h < 10) {
    h = "0" + h;
  }
  let m = d.getMinutes();
  if (m < 10) {
    m = "0" + m;
  }
  let s = d.getSeconds();
  if (s < 10) {
    s = "0" + s;
  }
  let ms = d.getMilliseconds();
  if (ms < 100) {
    ms = "00" + ms;
  } else if (ms < 100) {
    ms = "0" + ms;
  }
  document.getElementById("horloge").value = h + ":" + m + ":" + s + ":" + ms;
}
//setInterval("horloge();", 10);
setInterval(() => {
  horloge();
}, 10);
function horlogeImage() {
  var date = new Date();
  var heures = date.getHours() + "";

  if (heures < 10) {
    heures = "0" + heures;
  }

  var min = date.getMinutes() + "";
  if (min < 10) {
    min = "0" + min;
  }
  var sec = date.getSeconds() + "";
  if (sec < 10) {
    sec = "0" + sec;
  }
  var ms = date.getMilliseconds() + "";
  if (ms < 10) {
    s = "00" + ms;
  } else if (ms < 100) {
    ms = "0" + ms;
  }

  //document.getElementById("horloge").value= h+":"+m+":"+s;
  var h1 = heures.substring(0, 1);
  var h2 = heures.substring(1);

  document.images[0].src = "./image/image" + h1 + ".png";

  document.images[1].src = "./image/image" + h2 + ".png";
  //document.images.src = "";

  ////les minutes
  var m1 = min.substring(0, 1);
  var m2 = min.substring(1);

  document.images[3].src = "./image/image" + m1 + ".png";

  document.images[4].src = "./image/image" + m2 + ".png";

  ////les secondes
  var s1 = sec.substring(0, 1);
  var s2 = sec.substring(1);

  document.images[6].src = "./image/image" + s1 + ".png";

  document.images[7].src = "./image/image" + s2 + ".png";

  /// les millseconds

  var ms1 = ms.substring(0, 1);
  //alert(ms1);
  var ms2 = ms.substring(1, 2);
  var ms3 = ms.substring(2);

  document.images[9].src = "./image/image" + ms1 + ".png";
  document.images[10].src = "./image/image" + ms2 + ".png";
  document.images[11].src = "./image/image" + ms3 + ".png";
}

/// quand je clique sur le bouton je demarre l'horloge
var ref;
function demarrer() {
  if (document.getElementById("control").value == "Start") {
    document.getElementById("control").value = "Stop";
    horlogeImage(); //// j'appelle cette fonction pour que l'hologe se mette à jour immédiatement
    ref = setInterval("horlogeImage();", 100);
  } else {
    document.getElementById("control").value = "Start";
    clearInterval(ref);
  }
}
