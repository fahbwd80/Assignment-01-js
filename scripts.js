var myText = document.getElementById("text-area");
var result = document.getElementById("result");
var counter = document.getElementById("counter");
var limit = 150;
result.textContent = 0 + "/" + limit;

myText.addEventListener("input",function(){
    var textLenght = myText.value.length;
    result.textContent = textLenght + "/" + limit;
    counter.textContent = textLenght;
})