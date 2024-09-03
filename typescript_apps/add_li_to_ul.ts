const main = document.createElement("main")
const ul: HTMLUListElement = document.createElement("ul")
main.appendChild(ul)

const li1: HTMLLIElement = document.createElement("li")
li1.innerHTML = "item 1"
const li2: HTMLLIElement = document.createElement("li")
li2.innerHTML = "item 2"

ul.id = "ul"
ul.appendChild(li1)
ul.appendChild(li2)

const input: HTMLInputElement = document.createElement("input")
input.placeholder = "Enter new item"
const button: HTMLButtonElement = document.createElement("button")
button.innerHTML = "Add"

main.appendChild(input)
main.appendChild(button)

button.addEventListener("click", () => {
  if (!input.value.trim()) {
    return
  }
  const newli = document.createElement("li")
  newli.innerHTML = input.value.trim()
  ul.appendChild(newli)
  input.value = ""
})

document.body.appendChild(main)
