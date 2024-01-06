'use strict'

document.getElementById("button").addEventListener("click", function() {
    var input = document.querySelector("input[type=text]").value;
    if (input > 10000) {
        document.getElementById('result').innerHTML = "残高が足りません。";
    } else {
        var result = 10000 - input;
        document.getElementById('output').innerHTML = "残高は" + result + "です。";
    }
});
