// SCRIPT
var numboiteClick = -1;
var repondu = false;

var bonneRep = 3; // Numéro de la bonne réponse (A FIXER ULTERIEUREMENT)

$(function (){
    $(".boite").click(function() {
        if(!repondu) {
            numboiteClick = this.getAttribute("id").substring(5);
            for (i = 1; i <= 3; i++){
                $(document.getElementById("boite" + i)).removeClass("disabled");
                $(document.getElementById("boite" + i)).removeClass("boiteClicked");
            }
            $(document.getElementById("boite" + numboiteClick)).addClass("boiteClicked");
            $(document.getElementById("boite" + numboiteClick)).addClass("disabled");
        }
    }
    );

    $("#validerRepItem").click(function () {
        repondu = true;
        if(numboiteClick != bonneRep){
            $("#boite"+numboiteClick).removeClass("boiteClicked");
            $("#boite"+numboiteClick).addClass("mauvaiseReponse");
        }
        $("#boite"+bonneRep).addClass("bonneReponse");
        for (i = 1; i <= 3; i++)
            $(document.getElementById("boite" + i)).addClass("disabled");
    });
});


