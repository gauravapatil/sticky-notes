let btn=document.getElementById("btn");
let text=document.getElementById("note");
let notes=document.getElementById("r_notes");
let color=document.getElementById("colors");
color.value="#00ffa1";
let msg=document.getElementById("msg");
let count=0;
// if(addNotes) {
//     count++;
// } 
// if(count===0) {
//     msg.innerText="You have not added any note yet";
// }
function addNotes(){
    if(text.value===""){
        alert("Please enter some text in Sticky Notes");
        return;
    }
     msg.innerText="";
    let div=document.createElement("div");
    let p=document.createElement("p");
    let cross_button=document.createElement("button");
    cross_button.id="button1";
    div.id="div1";
    
    div.appendChild(p);
    div.appendChild(cross_button);
    cross_button.innerText="X";
    p.innerText=text.value;
    notes.appendChild(div);
    div.style.padding="5px";
    div.style.margin="10px";
    div.style.display="flex";
    
    // cross_button.height=".6px";
    // div.style.minWidth="150px";
    // div.style.height="150px";
    let btn1=document.getElementById("button1");

    cross_button.style.backgroundColor=color.value;
    div.style.backgroundColor=color.value;
    
    
    text.value="";
    cross_button.addEventListener("click",function(){
        div.style.display="none";
        count--;
    })
    

    

}
btn.addEventListener("click",addNotes);