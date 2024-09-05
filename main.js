var editor = document.getElementById("edit-code");
var display = document.getElementById("display-code");
var runner = document.getElementById("runner");

var keywords = ["echo", ""]

runner.addEventListener("mousedown", function() {
    alert("sorta work");
    yourcode = editor.value().split();
    alert(yourcode);
    keywords = ["echo"];
    for (var i = 0; i < keywords.length; i++) {
        keywordused = keywords[i];
        lengthof = keywordused.length;
        for (var j = 0; j < lengthof; j++) {
            if (yourcode[j] == keywordused[j]) {
                alert("good");
            }
        }
    }
});

