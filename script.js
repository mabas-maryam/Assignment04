var div = document.getElementById("hello");
div.style.backgroundColor = "brown";
div.style.width = "100px";
div.style.color = "aqua";
div.style.padding="50px 50px 50px 10px";
div.style.borderRadius="20px";
div.style.boxShadow="black 5px 5px 10px";
var p = document.createElement("p");
var text = "javaScript and HTML are great";
p.innerHTML = text;

p.style.fontStyle="italic";

div.appendChild(p);
console.log(p);