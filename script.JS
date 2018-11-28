function openPage(pageName, elmnt, color) {
    // Muutujad 
    //class="tabcontent" elemntide võtmine ja peitmine
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //class="tablinks" elementide võtmine
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Näitab valitud/aktiivse tabi sisu 
    document.getElementById(pageName).style.display = "block";

    // Värvi lisamine nupule, mis tabi avas
    elmnt.style.backgroundColor = color;
}