//======================================
// Fonctions Utiles
//======================================
function dw(str) {
    document.write(str);
}
function dwn(str) {
    document.write(str+"<br>");
}
function getEBI(id) {
    return document.getElementById(id);
}

//======================================
// Fonctions A
//======================================

function func01() {
    dwn("Hello World");

}
function func02() {
    dw('<p>Hello World</p>');
}
function func03() {
    dw('<div class="myclass"></div>');
}
function func05A() {
    dw('<p class="myp">');
}
function func05B() {
    dw("</p>");
}
function func04A() {
    dw('<div class="mydiv">');
}
function func04B() {
    dw('</div>');
}
function func06() {
    func04A();
    func05A();
    func05B();
    func05A();
    func05B();
    func04B();
}

//======================================
// Fonctions B
//======================================

function func07(nomC) {
    dw('<p class="' + nomC + '"></p>');
    //dw("<p class=\"" + nomC + "\"></p>");
}
function func08(idDiv, nomC) {
    dw('<div id="' + idDiv + '">');
    func07(nomC);
    func07(nomC);
    func04B();
}
function func09(N) {
    dw("<ul>");
    for (i = 1; i <= N; i++) {
        dw("<li>ligne " + i + "</li>");
    }
    dw("</ul>");
}

//======================================
// Boucles A
//======================================

function func01_32() {
    for (var i = 1; i <= 32; i++) {
        if (i % 3 == 0){
            continue;
        }
        dw(i);
        if (i != 32) dw(", ");
    }
}
function funcRepeat(N, S) {
    dw("<br>");
    for (var i = 1; i <= N; i++) {
        dw(S);
        dw("<br>");
    }
}
function func10(N) {
    for (var i = 1; i <= N; i++) {
        func05A();
        func05B();
    }
}
function func11(N, M) {
    for (var i = 1; i <= N; i++) {
        func04A();
        func10(M);
        func04B();
    }
}

//======================================
// Fonctions C
//======================================

function func12(str) {

    getEBI("mydiv").innerHTML = str;
}
function func13(str) {

    getEBI("mydiv").innerHTML += str;
}
function func14(T, S) {

    var myTag = getEBI(T);
    if (myTag.innerHTML == "") {
        myTag.innerHTML = "<strong>" + S + "</strong>";
    } else {
        myTag.innerHTML += "<span>" + S + "</span>";
    }
}
function func15(id, S) {

    if (S == "H") {
        mystyle = 'style="display: inline-block; list-style:none;padding:4px;"';
    } else {
        mystyle = 'style="list-style:none;"';
    }

    dw('<ul id="' + id + '">');
    dw('<li '+mystyle+'> un </li>');
    dw('<li '+mystyle+'> deux </li>');
    dw('<li '+mystyle+'> trois </li>');
    dw("</ul>");
}
function func15B(id, S, T1, T2, T3) {

    if (S == "H") {
        mystyle = 'style="display:inline-block; list-style:none; padding:4px;"';
    } else {
        mystyle = 'style="list-style:none;"';
    }

    dw('<ul id="' + id + '">');
    dw('<li '+mystyle+'> '+T1+'</li>');
    dw('<li '+mystyle+'> '+T2+' </li>');
    dw('<li '+mystyle+'> '+T3+' </li>');
    dw('</ul>');
}


function func16(t1, t2, t3){
    dw("<div>");
    dw("<nav>");
    func15B("myUl","H",t1, t2, t3);
    dw("</nav>");
    dw("</div>");
}