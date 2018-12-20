function hero(para1, para2, para3) {
    this.nom = para1;
    this.classe = para2;
    this.univers = para3;
    this.presentation = function() {
        return ("je joue " + this.nom + " c'est un " + this.classe + " de l'univers de " + this.univers + "<br>");
    }
}



var Dehaka = new hero('Dehaka', 'Guerrier', 'Star Craft');
var Sonya = new hero('Sonya', 'Guerrier', 'Diablo');
var Malganis = new hero('Malganis', 'Guerrier', 'WoW');
var Artanis = new hero('Artanis', 'Guerrier', 'Starcraft');
var Diablo = new hero('Diablo', 'Guerrier', 'Diablo');
var Dva = new hero('D.va', 'Guerrier', 'Overwatch');
var Léoric = new hero('Léoric', 'Guerrier', 'Diablo');
var Chen = new hero('Chen', 'Guerrier', 'WoW');
var Johanna = new hero('Johanna', 'Guerrier', 'Diablo');
var Kramer = new hero('Kramer', 'Guerrier', 'Starcraft');
var Balafré = new hero('Balafré', 'Guerrier', 'WoW');
var Muradin = new hero('Muradin', 'Guerrier', 'WoW');
var Varian = new hero('Varian', 'Multiclasse', 'WoW');
var Arthas = new hero('Arthas', 'Guerrier', 'WoW');
var Garrosh = new hero('Garrosh', 'Guerrier', 'WoW');
var Zarya = new hero('Zarya', 'Guerrier', 'Overwatch');
var Anubarak = new hero("Anub'arak",'Guerrier', 'WoW');
var Yrel = new hero('Yrel', 'Guerrier', 'WoW');
var Cho = new hero('Cho', 'Guerrier', 'WoW');
var Rexxar = new hero('Rexxar', 'Guerrier', 'WoW');
var Tyraël = new hero('Tyraël', 'Guerrier', 'Wow');
var Etc = new hero('Etc', 'Guerrier', 'WoW');

var Ragnaros = new hero('Ragnaros', 'Assassin', 'Wow');
var Alarak = new hero('Alarak', 'Assassin', 'Starcraft');
var Chromie = new hero('Chromie', 'Assassin', 'WoW');
var Lunara = new hero('Lunara','Assassin', 'WoW');
var Gall = new hero('Gall', 'Assassin', 'Wow');
var Butcher = new hero('Le Boucher', 'Assassin', 'Diablo');
var Thraal = new hero('Thraal', 'Assassin', 'WoW');
var Tychus = new hero('Tychus', 'Assassin', 'Starcraft');
var Nova = new hero('Nova', 'Assassin', 'Starcraft');
var Zeratul = new hero('Zeratul', 'Assassin', 'Starcraft');
var Samuro = new hero('Samuro', 'Assassin', 'WoW');
var Valeera = new hero('Valeera', 'Assassin', 'WoW');
var LiMing = new hero('Li-Ming', 'Assassin', 'Diablo');
var Jaina = new hero('Jaina', 'Assassin', 'WoW');
var Genji = new hero('Genji', 'Assassin', 'Overwatch');
var Orphéa = new hero('Orphéa', 'Assassin', 'Nexus');
var Cassia = new hero('Cassia', 'Assassin', 'Diablo');
var Illidan = new hero('Illidan', 'Assassin', 'WoW');
var Méphisto = new hero('Méphisto', 'Assassin', 'Diablo');
var Valla = new hero('Valla', 'Assassin', 'Diablo');
var Kaelthas= new hero("Kael'thas", 'Assassin', 'WoW');
var Kaelthuzad = new hero("Kael'thuzad", 'Assassin', 'WoW');
var Maiev = new hero('Maeiv', 'Assassin', 'Wow');
var Fénix = new hero('Fénix', 'Assassin', 'Starcraft');
var Tracer = new hero('Tracer', 'Assassin', 'Overwatch');
var Chacal = new hero('Chacal', 'Assassin', 'Overwatch');
var Hanzo = new hero('Hanzo', 'Assassin', 'Overwatch');
var Grisetête = new hero('Grisetête', 'Assassin', 'WoW');
var Zuljin = new hero("Zul'jin", 'Assassin', 'Wow');
var Kerrigan = new hero('Kerrigan', 'Assassin', 'Starcraft');
var Raynor = new hero('Raynor', 'Assassin', 'Starcraft');
var Falstad = new hero('Falstad', 'Assassin', 'WoW');
var Guldan = new hero("Gul'dan", 'Assassin', 'WoW');

var Nasibo = new hero('Nasibo', 'Spécialiste', 'Diablo');
var Asmodan = new hero('Asmodan', 'Spécialiste', 'Diablo');
var Probius = new hero('Probius', 'Spécialiste', 'Starcraft');
var Xul = new hero('Xul', 'Spécialiste', 'Diablo');
var Gazleu = new hero('Gazleu', 'Spécialiste', 'WoW');
var Marteau = new hero('Sgt Marteau', 'Spécialiste', 'Starcraft');
var Sylvanas = new hero('Sylvanas', 'Spécialiste', 'Starcraft');
var Bourbie = new hero('Bourbie', 'Spécialiste', 'WoW');
var Medivh = new hero('Medivh', 'Spécialiste', 'WoW');
var Zagara = new hero('Zagara', 'Spécialiste', 'Starcraft');
var Abathur = new hero('Abathur', 'Spécialiste', 'Starcraft');
var Tlv = new hero('Les Vikings Perdus', 'Spécialiste', 'Nexus');

var Lili = new hero('Lili', 'Soutien', 'WoW');
var Blanchetête = new hero('Blanchetête', 'Soutien', 'WoW');
var Deckard = new hero('Deckard Cain', 'Soutien', 'Diablo');
var Alextrasza = new hero('Alextrasza', 'Soutien', 'WoW');
var Lucio = new hero('Lucio', 'Soutien', 'Overwatch');
var Auriel = new hero('Auriel', 'Soutien', 'Diablo');
var Luisaile = new hero('Luisaile', 'Soutien', 'WoW');
var Uther = new hero('Uher', 'Soutien', 'WoW');
var Tassadar = new hero('Tassadar', 'Soutien', 'Starcraft');
var Morales = new hero('Lt Morales', 'Soutien', 'Starcraft');
var Stukov = new hero('Stukov', 'Soutien', 'Starcraft');
var Ana= new hero('Ana', 'Soutien', 'Overwatch');
var Rehgar = new hero('Rehgar', 'Soutien', 'WoW');
var Tyrande = new hero('Tyrande', 'Soutien', 'WoW');
var Malfurion = new hero('Malfurion', 'Soutien', 'WoW');
var Kharazim = new hero('Kharazim', 'Soutien', 'Diablo');

var heros = new Array (Dehaka, Sonya, Malganis, Artanis, Diablo, Dva, Léoric, Chen, Johanna,
    Kramer, Balafré, Muradin, Varian, Arthas, Garrosh, Zarya, Anubarak, Yrel,
    Cho, Rexxar, Tyraël, Etc, Ragnaros, Alarak, Chromie, Lunara, Gall, Butcher,
    Thraal, Tychus, Nova, Zeratul, Samuro, Valeera, LiMing, Jaina, Genji, Orphéa, Cassia,
    Illidan, Méphisto, Valla, Kaelthas, Kaelthuzad, Maiev, Fénix, Tracer, Chacal, Hanzo,
    Grisetête, Zuljin, Kerrigan, Raynor, Falstad, Guldan, Nasibo, Asmodan, Probius, Xul,
    Gazleu, Marteau, Sylvanas, Bourbie, Medivh, Zagara, Abathur, Tlv, Lili, Blanchetête, Deckard,
    Alextrasza, Lucio, Auriel, Luisaile, Uther, Tassadar, Morales, Stukov, Ana, Rehgar, Tyrande, Malfurion, Kharazim, );
    
    document.write(Nova.presentation());

