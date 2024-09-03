var editor = document.getElementById("edit-code");
var display = document.getElementById("display-code");
var runner = document.getElementById("runner");

var keywords = ["echo", ""]

runner.addEventListener("mousedown", function() {
    yourcode = editor.value().split();
    function findkeyword(keyword, value) {
        for (var i = 0; i < keywords.length; i++) {
            keywordsplit = keyword.split();
        }
        var totaltest = 0
        for (var movekeys = 0; movekeys < keyword.length; movekeys++) {
            if (yourcode[value+movekeys] == keywordsplit[movekeys]) {
                totaltest++;
            }
        }
        if (totaltest == keyword.length-1) {
            return true
        }
        else {
            return false
        }
    }
    for (var char = 0; char < yourcode.length; char++) {
        if (findkeyword("echo", char) == true) {
            alert("Letsgooooooo")
        }
    }
});

