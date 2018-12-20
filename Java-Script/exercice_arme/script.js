function arme(nom, type) {
    this.nom = nom;
    if (type == "arc" || type == "sabre" || type == "lance") {
        this.type = type;
    } else {
        alert("Vous n'avez pas choisi la bonne arme !")
    }
    this.setType = function (type) {
        if (type == "arc" || type == "sabre" || type == "lance") {
            this.type = type;
        } else {
            alert("Vous n'avez pas choisi la bonne arme !")
        }
    }
    this.getType = function () {
        return (this.type);
    }
}

var arsenal = [];
arsenal[0] = new arme("Elfen", "arc");
arsenal[1] = new arme("Trancheuse d'ame", "sabre");
arsenal[2] = new arme("Durandal", "lance");
// arsenal[arsenal.length] = new arme ("Croc", "dague");
// arsenal[arsenal.length] = new arme ("Golden axe", "Hache");
// arsenal[arsenal.length] = new arme ("Epine", "fleuret");
// arsenal[arsenal.length] = new arme ("Heraclès", "Gourdin");
// arsenal[arsenal.length] = new arme ("Protector", "bopuclier");
// arsenal[arsenal.length] = new arme ("Guan dao", "hallebarde");
// arsenal[arsenal.length] = new arme ("Cruelle", "Nunchaku");
// arsenal[arsenal.length] = new arme ("Tao", "katana");
// arsenal[arsenal.length] = new arme ("Vif", "arbalette");
// arsenal[arsenal.length] = new arme ("Silencieuse", "couteau");
// arsenal[arsenal.length] = new arme("Excalibur", "épée");



// test de l'asenal

// arsenal[2].setType("Mix");

// document.write("<table>")
// document.write("<tr><th> Nom </th><th> type </th></tr>")
// for (i = 0; i < arsenal.length; i++) {
//     document.write("<tr><td>" + arsenal[i].nom + "</td><td>" + arsenal[i].type + "</td></tr>");
// }
// document.write("</tr></table>")

// fin du test de l'arsenal


function Player(pseudo, email, classe, arme1, arme2) {
    this.pseudo = pseudo;
    this.email = email;
    if (classe == "chevalier" || classe == "archer" || classe == "fantassin") {
        this.classe = classe;
    } else {
        alert("Vous n'avez pas choisi la bonne classe !")
    }
    this.setClasse = function (classe) {
        if (classe == "chevalier" || classe == "archer" || classe == "fantassin") {
            this.classe = classe;
        } else {
            alert("Vous n'avez pas choisi la bonne classe !")
        }
    }
    this.getClasse = function () {
        return (this.classe);
    }
    this.arme = [arme1, arme2]
    this.presentation = function () {
        return ("Le joueur s'appelle " + this.pseudo + ". Il est de la classe " + this.classe + " et ses armes sont " + this.arme[0].nom + "(type: " + this.arme[0].getType() + ") et " + this.arme[1].nom + "(type: " + this.arme[1].getType() + ").<br>");
    }
}

var serveur = [];
serveur[serveur.length] = new Player("March", "march@gmail.fr", "chevalier", arsenal[1],arsenal[2]);
serveur[serveur.length] = new Player("Arkange", "arckange@gmail.fr", "archer", arsenal[0],arsenal[1]);
serveur[serveur.length] = new Player("Edilren", "edilren@gmail.fr", "fantassin", arsenal[1],arsenal[2]);


for (i = 0; i < serveur.length; i++) {
    document.write(serveur[i].presentation());
}
