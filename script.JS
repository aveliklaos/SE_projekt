function openCat(evt, catName) {
    //Muutujad
    var i, tabcontent, tablinks;

    //class="tabcontent" elemntide võtmine ja peitmine
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //class="tablinks" elementide võtmine ja class="active" eemaldamine
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Hetkese tab-i näitamine ja class="active" lisamine nupule, mis avas tabi
    document.getElementById(catName).style.display = "block";
    evt.currentTarget.className += " active";
}
