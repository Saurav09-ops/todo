let toDa = [];
let button = document.querySelectorAll(".btn2");
let i = 0;

document.querySelector(".btn").addEventListener("click", () => {
  let toDo = document.querySelector(".txt").value;
  let date = document.querySelector(".date").value;

  toDa.push({ toDo, date });

  let bag = "";

  toDa.forEach((item, i) => {
    bag += `<li>${item.toDo}</li>
            <div class="flex">${item.date}</div>
            <div class="flex"><button onclick="del(${i});" class="btn2">X</button></div>`;
  });
  console.log(bag);
  document.querySelector("ul").innerHTML = bag;
});

function del(a) {
  let tag = "";
  document.querySelector("ul").innerHTML = "";
  console.log(a);
  toDa.splice(a, 1);

  toDa.forEach((item, i) => {
    tag += `<li>${item.toDo}</li>
            <div class="flex">${item.date}</div>
            <div class="flex"><button onclick="del(${i});" class="btn2">X</button></div>`;
  });
  console.log(tag);
  document.querySelector("ul").innerHTML = tag;
}
