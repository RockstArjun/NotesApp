// def golbal variables
let yyyy =new Date();
let year=yyyy.getFullYear()
document.getElementById("year").innerText=year;
let i=1;
let y;
window.onload=localStorage.clear();
function EnableDisable(myValue) {
    let btnSubmit = document.getElementById("a-btn");
    if (myValue.value.trim() != "") {
        btnSubmit.disabled = false;
        btnSubmit.style.cursor="pointer"
    } else {
        btnSubmit.disabled = true;
        btnSubmit.style.cursor="not-allowed"
    }
};
// functtion which add note to local storage.
    const addNotes=()=>{
        y= `Note ${i}`;
        let x=document.getElementById('myValue').value;
        localStorage.setItem(y,x);
        document.getElementById('yn').classList.remove("none");
        document.getElementById('yn').classList.add("yours-notes");
        document.getElementById('myValue').value= '';
        updateNotes();
        i=i+1;
    }
    
    // function that create card and add to your notes section
    const updateNotes=()=>{
        let v = document.getElementById('noty');
        let element = document.createElement("div");
        element.className = "card";
        let element1 = document.createElement("span");
        element1.id = `span${i}`;
        let element2 = document.createElement("button");
        element2.className = `card-btn${i}`;
        element.appendChild(element1);
        element.appendChild(element2);
        v.appendChild(element);
        document.querySelector(`.card-btn${i}`).classList.add(`card-btn${i}`);
        let data=localStorage.getItem(y)
        document.getElementById(`span${i}`).innerHTML=data;
        document.querySelector(`.card-btn${i}`).setAttribute('onclick','ondelete()');
        document.querySelector(`.card-btn${i}`).style.height='29px';
        document.querySelector(`.card-btn${i}`).style.width='83px';
        document.querySelector(`.card-btn${i}`).style.border='1px solid #767676';
        document.querySelector(`.card-btn${i}`).style.cursor='pointer';
        document.querySelector(`.card-btn${i}`).style.margin='10px 0px 0px 0px';
        document.querySelector(`.card-btn${i}`).innerHTML='Delete Note';
    }
    
    // function that delete the note
    const ondelete=()=>{
        let z=document.querySelector('.card');
        z.remove();
    }

