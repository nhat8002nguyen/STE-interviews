var main = document.createElement("main");
var ul = document.createElement("ul");
main.appendChild(ul);
var li1 = document.createElement("li");
li1.innerHTML = "item 1";
var li2 = document.createElement("li");
li2.innerHTML = "item 2";
ul.id = "ul";
ul.appendChild(li1);
ul.appendChild(li2);
var input = document.createElement("input");
input.placeholder = "Enter new item";
var button = document.createElement("button");
button.innerHTML = "Add";
main.appendChild(input);
main.appendChild(button);
button.addEventListener("click", function () {
    if (!input.value.trim()) {
        return;
    }
    var newli = document.createElement("li");
    newli.innerHTML = input.value.trim();
    ul.appendChild(newli);
    input.value = "";
});
document.body.appendChild(main);
