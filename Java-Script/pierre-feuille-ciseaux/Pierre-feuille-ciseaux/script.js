function onclickfunction1() {
  document.getElementById("p").style.borderBottom="5px solid black";
}
function onclickfunction2() {
  document.getElementById("f").style.border="5px solid black";
}
function  onclickfunction3() {
  document.getElementById("c").style.border="5px solid black";
}

function ia() {
  var ia = Math.floor(Math.random() * 51);
  
    if (ia < 20) {
        ia = "pierre";
    }
    else if(ia > 20 && ia < 40) {
        ia = "feuille";
    }
    else if(ia > 40) {
        ia = "ciseaux";
    }
    return ia;
}

function player(joueur) {
   
  if(joueur == "pierre") {
      joueur = "pierre";
  }
  else if(joueur == "feuille") {
      joueur = "feuille";
  }
  else if(joueur == "ciseaux") {
      joueur = "ciseaux";
  }
  return joueur;
}

// function comparer(ia, joueur) {
//   var scoreia = 0;
//   var scorej = 0;
   
//   if(joueur == ia) {
//       document.write("Egalité !" + ia);
//   }
//   else if((joueur == "pierre" && ia == "ciseaux") || (joueur == "feuille" && ia == "pierre") || (joueur == "ciseaux" && ia == "feuille")) {
//       document.write("Victoire" + ia);
//       scorej++;
//   }
//   else if((joueur == "feuille" && ia == "ciseaux") || (joueur == "piere" && ia == "feuille") || (joueur == "ciseaux" && ia == "pierre")) {
//       document.write("Défaite" + ia);
//       scoreia++;
//   }

// }

// function nouvellePartie(){
//   scoreia = 0;
//   scorej = 0;
// }