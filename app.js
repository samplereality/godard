console.log("app");

$(document).ready(function() {

    function generate() {
        $("#output").html("");

        var grammarTracery = tracery.createGrammar(grammar);

            var s = grammarTracery.flatten("#origin#");
            console.log(s);
            var div = $("<div/>", {
                class : "outputSample",
                html : s
            });

            $("#output").append(div);

        

    }

    setTimeout(function() {
        generate();

    }, 10);

});
