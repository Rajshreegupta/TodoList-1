const inp = document.querySelector("input");
const btn = document.getElementById("btn");
const lst = document.getElementById("list");

btn.addEventListener('click', ()=>{
    const li = document.createElement('li')
    li.onclick = function(e){
        e.target.remove()
    }
    li.innerText = inp.value;

    lst.append(li)
    inp.value=""
})