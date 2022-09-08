
let txtInput = document.getElementById("txtinput");
let btn = document.getElementById("btn");
let txtResult = document.getElementById("result");

btn.onclick = function () {
    if(txtInput.value !== ""){
        if(txtInput.value.charAt(0) == "#"){
            let rslt = Decrypter(txtInput.value);
            txtResult.textContent = rslt;
            txtInput.value = "";
        } else {
            let rslt = Crypter(txtInput.value.toLowerCase());
            txtResult.textContent = "#0" + rslt;
            txtInput.value = "";
        }
    }
}

txtResult.onclick = function () {
    let content = txtResult.textContent;
}

function Crypter(text){
    let textArray = text.split("");
    let rslt = textArray.map(function (ele) {
        return CodeFinder(ele);
    }).join("");
    return rslt;
}

function Decrypter(code){
    let codeArray = code.split("0");
    let rslt = codeArray.map(function (ele) {
        return TextFinder(ele);
    }).join("");
    return rslt;
}

function CodeFinder(word) {
    switch (word) {
        case " ":return "10";break;
        case "a":return "20";break;
        case "b":return "220";break;
        case "c":return "2220";break;
        case "d":return "30";break;
        case "e":return "330";break;
        case "f":return "3330";break;
        case "g":return "40";break;
        case "h":return "440";break;
        case "i":return "4440";break;
        case "j":return "50";break;
        case "k":return "550";break;
        case "l":return "5550";break;
        case "m":return "60";break;
        case "n":return "660";break;
        case "o":return "6660";break;
        case "p":return "70";break;
        case "q":return "770";break;
        case "r":return "7770";break;
        case "s":return "77770";break;
        case "t":return "80";break;
        case "u":return "880";break;
        case "v":return "8880";break;
        case "w":return "90";break;
        case "x":return "990";break;
        case "y":return "9990";break;
        case "z":return "99990";break;
        case "0":return "&0";break;
        case "1":return "$0";break;
        case "2":return "!0";break;
        case "3":return "%0";break;
        case "4":return "¤0";break;
        case "5":return "+0";break;
        case "6":return "§0";break;
        case "7":return "µ0";break;
        case "8":return "@0";break;
        case "9":return "=0";break;
    }
}

function TextFinder(word) {
    switch (word) {
        case "1":return " ";break;
        case "2":return "a";break;
        case "22":return "b";break;
        case "222":return "c";break;
        case "3":return "d";break;
        case "33":return "e";break;
        case "333":return "f";break;
        case "4":return "g";break;
        case "44":return "h";break;
        case "444":return "i";break;
        case "5":return "j";break;
        case "55":return "k";break;
        case "555":return "l";break;
        case "6":return "m";break;
        case "66":return "n";break;
        case "666":return "o";break;
        case "7":return "p";break;
        case "77":return "q";break;
        case "777":return "r";break;
        case "7777":return "s";break;
        case "8":return "t";break;
        case "88":return "u";break;
        case "888":return "v";break;
        case "9":return "w";break;
        case "99":return "x";break;
        case "999":return "y";break;
        case "9999":return "z";break;
        case "&":return "0";break;
        case "$":return "1";break;
        case "!":return "2";break;
        case "%":return "3";break;
        case "¤":return "4";break;
        case "+":return "5";break;
        case "§":return "6";break;
        case "µ":return "7";break;
        case "@":return "8";break;
        case "=":return "9";break;
        case "#":return "";break;
    }
}