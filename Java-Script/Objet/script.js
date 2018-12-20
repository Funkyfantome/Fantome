var a = 0;

setInterval(() => {
    if (a == 0) {
        document.getElementsByTagName("table")[0].style = "border-bottom: 5px solid green; border-top: 5px solid green; border-right: 5px solid yellow; border-left: 5px solid yellow";
        a++;
    }
    else {
        document.getElementsByTagName("table")[0].style = "border-bottom: 5px solid yellow; border-top: 5px solid yellow; border-right: 5px solid green; border-left: 5px solid green";
        a=0;
    }
    document.getElementsByTagName("table")[0].style.transition="1s";
    
}, 1000);

var b = 0;
// var dp = document.querySelectorAll("td");

setInterval(() => {
    if (b == 0) {
        document.querySelectorAll("td").style = "border-bottom: 5px solid darkcyan; border-top: 5px solid darkcyan; border-right: 5px solid purple; border-left: 5px solid purple";
        b++;
    }
    else {
        document.querySelectorAll("td").style = "border-bottom: 5px solid purple; border-top: 5px solid purple; border-right: 5px solid darkcyan; border-left: 5px solid darkcyan";
        b=0;
    }

    
}, 1000);

var html = 0;

setInterval(() => {
    if (html == 0) {
        document.getElementsByTagName("html")[0].style= "background-color: wheat";
        html++;
    }
    else {
        document.getElementsByTagName("html")[0].style= "background-color: black";
        html=0;
    } 
    document.getElementsByTagName("html")[0].style.transition="1s";
    
}, 1000);