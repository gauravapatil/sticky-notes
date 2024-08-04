let btn=document.getElementById("btn");
let text=document.getElementById("note");
let notes=document.getElementById("r_notes");
let color=document.getElementById("colors");
let msg=document.getElementById("msg");
let n=document.getElementById("notes")
function addNotes(){
    if(text.value===""){
        alert("Please enter some text in Sticky Notes");
        return;
    }
     msg.innerText="";
    let div=document.createElement("div");
    div.innerHTML = `<p>${text.values}</p> <button class="buttons" >X</button>`;
    // div.appendChild(p);
    // div.appendChild(cross_button);
    // cross_button.innerText="X";
    // p.innerText=text.value;
    n.appendChild(div);
    div.style.backgroundColor=color.value;
    text.value="";
    cross_button.addEventListener("click",function(){
        div.style.display="none";
    })

    

}
btn.addEventListener("click",addNotes);