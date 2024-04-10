let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");


btn.addEventListener("click", function () {
  let items = document.createElement("li");
  items.innerText = inp.value;

  let delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  delbtn.classList.add("delete");


  items.appendChild(delbtn);
  ul.appendChild(items);
  inp.value = "";
});

let delbtns = document.querySelectorAll(".delete");
for (delbtn of delbtns) {
  delbtn.addEventListener("click", function () {
    let par = this.parentElement;
    console.log("par");
    par.remove();
  })
}
