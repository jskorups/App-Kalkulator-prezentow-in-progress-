function doMath() {

    //pobranie sumy ze wszytskich pol z className
    var my_input1 = document.getElementsByClassName("sumaTato");

    var count = 0;
    for (var i = 0; i < my_input1.length; i++) {

        count = count + parseInt(my_input1[i].value);
    }
    //wyrzucenie sumy do inputa
    document.getElementById("zsumowaneT").value = count;
}

var idik;
function elList () {

    //pobranie wybranego wiersza z dropdown listy

    var e = document.getElementById("sel1");
    var f = (e.options[e.selectedIndex].value);
    console.log(f);

    // dopasowanie elementu z dropdownlisty do konkretnego id
    if (f == 'Mama') {
        idik = 'linkMama';
        console.log(idik);
    }
    else if (f == 'Tato') {
        idik = 'linkTato';
        console.log(idik);
    }
    else if (f == 'Ada') {
        idik = 'linkAda';
        console.log(idik);
    }
    else if (f == 'Pawel') {
        idik = 'linkPawel';
        console.log(idik);
    }
    else if (f == 'Kuba') {
        idik = 'linkKuba';
        console.log(idik);
    }
    else if (f == 'Magda') {
        idik = 'linkMagda';
        console.log(idik);
    }
    else if (f == 'Damian') {
        idik = 'linkDamian';
        console.log(idik);
    }
    else if (f == 'Klaudia') {
        idik = 'linkKlaudia';
        console.log(idik);
    }
    else if (f == 'Hubcio') {
        idik = 'linkHubcio';
        console.log(idik);
    }
    else {
        alert("Wybierz uzytkownika")
    }
};


//pobranie wartosci  z inputa


// Zamiana jesli wklejony zostal link lub brak zmiany jesli podany jest zwykly tekst

function zamiana () {

    var Content = document.getElementById('linkNazwa').value;
    console.log(Content);

    substring = "www";
    substring2 = "http://";

    var www = Content.indexOf(substring) !==-1;
    var http = (Content.indexOf(substring2) !==-1);

    if (www == 1 || http == 1){
        console.log('JESTES ZWYCEIZCA');
        var newContent = Content.replace(Content, '<a href="' + Content + '"'+ 'target="_blank"' + '>' + "Link" + '</a>');
        console.log(newContent);

    }
    else if (Content==""){
        alert("Wprowadz prezent")
        return 0;
    }
    else {
        var newContent = Content;
    }

    //Wyswietlenie tekstu lub linku w odpowiednim inpucie
    document.getElementById(idik).innerHTML = newContent;
}







/*
 Dodanie wiersza oraz kolumny dla kolejnego uzytkownika

 function Dodanie () {
 //pobranie imienia
 var imie = document.getElementById('usr').value; // table reference
 console.log(imie);
 }
 */



