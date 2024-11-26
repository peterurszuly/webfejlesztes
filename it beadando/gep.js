document.getElementById("mybutton").addEventListener
    ("click", kavegep);
document.getElementById("mybuttonmagan").addEventListener
    ("click", kavegepmagan);
document.getElementById("maganszemelynek").addEventListener
    ("click", magan);
document.getElementById("cegnek").addEventListener
    ("click", ceg);
function ceg() {
    document.getElementById("ado").style.display = "block";
    document.getElementById("ado").value = "";
    document.getElementById("divceg").style.display = "block";
    document.getElementById("ado_label").style.display = "block";
    document.getElementById("divmagan").style.display = "none";
}


function magan() {
    document.getElementById("ado").style.display = "none";
    document.getElementById("ado").value = "maganszemely";
    document.getElementById("divceg").style.display = "none";
    document.getElementById("ado_label").style.display = "none";
    document.getElementById("divmagan").style.display = "block";
}

function kavegep() {


    if (document.getElementById("kapszulas").checked) {
        if (document.getElementById("db").value > 30) {
            document.getElementById("eredmeny").value = "Nespresso Gemini"
            document.getElementById("kave").value = "Nespresso kapszulák"
        }
        if (document.getElementById("db").value <= 30) {
            document.getElementById("eredmeny").value = "Nespresso Zenius Pro 100"
            document.getElementById("kave").value = "Nespresso kapszulák"
        }
    }
    if (document.getElementById("automata").checked) {
        document.getElementById("eredmeny").value = "Saeco PHEDRA EVO Espresso"
        if (document.getElementById("omnia").checked) { document.getElementById("kave").value = "Omnia Classic" }
        if (document.getElementById("jacobs").checked) { document.getElementById("kave").value = "Jacobs Krönung" }
        if (document.getElementById("segafredo").checked) { document.getElementById("kave").value = "Segafredo Intermezzo" }
        if (document.getElementById("piazza").checked) { document.getElementById("kave").value = "Piazza d'Oro Intenso" }
        if (document.getElementById("Specialty").checked) { document.getElementById("kave").value = "Specialty kávék" }
    }

    if (document.getElementById("hagyomanyos").checked) {
        if (document.getElementById("kavezo").checked) {
            if ((document.getElementById("db").value <= 30) && (document.getElementById("db").value > 20)) { document.getElementById("eredmeny").value = "ASTORIA FORMA 1 KAROS" }
            if (document.getElementById("db").value > 30) { document.getElementById("eredmeny").value = "ASTORIA FORMA 2 KAROS" }
            if (document.getElementById("db").value <= 20) { document.getElementById("eredmeny").value = "Saeco Royal Office" }
        }

        if (document.getElementById("dolgozoknak").checked) {
            if (document.getElementById("db").value <= 30) { document.getElementById("eredmeny").value = "Saeco Family" }
            if (document.getElementById("db").value > 30) { document.getElementById("eredmeny").value = "Saeco Royal Office" }
        }

        if (document.getElementById("rendezvenyek").checked) {
            if (document.getElementById("db").value <= 30) { document.getElementById("eredmeny").value = "Saeco Royal Office" }
            if ((document.getElementById("db").value > 30) && (document.getElementById("db").value <= 60)) { document.getElementById("eredmeny").value = "SASTORIA FORMA 1 KAROS" }
            if (document.getElementById("db").value > 60) { document.getElementById("eredmeny").value = "SASTORIA FORMA 2 KAROS" }
        }

        if (document.getElementById("kisbolt").checked) {
            if (document.getElementById("db").value <= 30) { document.getElementById("eredmeny").value = "Saeco Family" }
            if (document.getElementById("db").value > 30) { document.getElementById("eredmeny").value = "Saeco Royal Office" }
        }


        if (document.getElementById("omnia").checked) { document.getElementById("kave").value = "Omnia Classic" }
        if (document.getElementById("jacobs").checked) { document.getElementById("kave").value = "Jacobs Krönung" }
        if (document.getElementById("segafredo").checked) { document.getElementById("kave").value = "Segafredo Intermezzo" }
        if (document.getElementById("piazza").checked) { document.getElementById("kave").value = "Piazza d'Oro Intenso" }
        if (document.getElementById("Specialty").checked) { document.getElementById("kave").value = "Specialty kávék" }

    }
}

function kavegepmagan() {


    if (document.getElementById("kapszulasmagan").checked) {
        document.getElementById("eredmenymagan").value = "Nespresso Zenius Pro 100"
        document.getElementById("kavemagan").value = "Nespresso kapszulák"
    }

    if (document.getElementById("hagyomanyosmagan").checked) {
        if (document.getElementById("dbmagan").value <= 5) { document.getElementById("eredmenymagan").value = "Saeco Family" }
        else { document.getElementById("eredmenymagan").value = "Saeco Royal Office" }


        if (document.getElementById("omniamagan").checked) { document.getElementById("kavemagan").value = "Omnia Classic" }
        if (document.getElementById("jacobsmagan").checked) { document.getElementById("kavemagan").value = "Jacobs Krönung" }
        if (document.getElementById("segafredomagan").checked) { document.getElementById("kavemagan").value = "Segafredo Intermezzo" }
        if (document.getElementById("piazzamagan").checked) { document.getElementById("kavemagan").value = "Piazza d'Oro Intenso" }
        if (document.getElementById("Specialtymagan").checked) { document.getElementById("kavemagan").value = "Specialty kávék" }

    }
}

