
    let klickZaehler = 0;

    document.getElementById("meinButton").addEventListener("click", function() {
        klickZaehler++;

        if (klickZaehler === 1) {
            alert("boah ja, geil, klick mich noch mal!");
        } else if (klickZaehler === 2) {
            alert("das gefällt dir, was du perverser?");
        } else if (klickZaehler ===3) {
            alert("ich grüße meine jungs auf schalke");
        }        
        else {
            alert("ok bro, " + klickZaehler + " mal ist genug");
        }
    });