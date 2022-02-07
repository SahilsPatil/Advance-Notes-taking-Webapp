// let next = document.getElementById("next")
// let subject = document.getElementById("subject")
// let note = document.getElementById("note")
// let submit = document.getElementById("submit")
// let form = document.getElementById("form")
// let error1 = document.getElementById("error1")
// let section_two = document.getElementById("section_two")
// let section_one = document.getElementById("section_one")
// let section_three = document.getElementById("section_three")
// let section_four = document.getElementById("section_four")
// let notes = document.getElementById("notes")
// let note_s3 = document.getElementById("note_s3")
// let nextbtn = document.getElementById("nextbtn")
// let addbtn = document.getElementById("addbtn")
// let allbtn = document.getElementById("allbtn")
// let starbtn = document.getElementById("starbtn")
// let menubtn = document.getElementById("menubtn")
// let left = document.getElementById("left")

let isopen = false;


next.addEventListener("click", () => {
    if (subject.value == "") {
        error1.style.display = "block"
        subject.style.borderBottom = "2px solid red"
    }
    else {
        next.style.display = "none";
        subject.style.display = "none";
        note.style.display = "block";
        submit.style.display = "block";
        error1.style.display = "none"
    }


})


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let notesdata = [];
    let allnotes = localStorage.getItem("allnotes");
    if (allnotes == null) {
        // let notesdata = [];
    }
    else {
        notesdata = JSON.parse(allnotes);
    }

    notesdata.push({
        title: subject.value,
        desc: note.value,
        star: false
    });
    localStorage.setItem("allnotes", JSON.stringify(notesdata))

    subject.value = "";
    note.value = "";

    section_one.style.display = "none"
    section_two.style.display = "block"
    section_three.style.display = "none"
    section_four.style.display = "none"
    section_five.style.display = "none"
    home.style.display = "none"



    display();
})
function display() {
    let notesdata = [];
    let allnotes = localStorage.getItem("allnotes");
    if (allnotes == null) {
        let notesdata = [];
    }
    else {
        notesdata = JSON.parse(allnotes);
    }
    if (notesdata.length == 0) {
        notes.innerHTML = `  

        <div class="notes">
        <div class="note">
            <div class="fav" id="fav" style="opacity: 0;">
                &star;
            </div>
            <div class="note_title">
                😭
            </div>
            <div class="note_desc">
                Soory, Notes Not Found
            </div>
            <button id="takenote2" onclick="takenote2()">Take Note</button>
        </div>
    </div>`

    }
    else {
        notes.innerHTML = ``
        notesdata.forEach(function (notesdata, index) {
            if (notesdata.star) {
                notes.innerHTML += `
                <div class="note">
            <div class="fav" id="fav" onclick="favnote(${index})">
                    &starf;
            </div>
            <div class="note_title">
                ${notesdata.title}
            </div>
            <div class="note_desc">
                ${notesdata.desc}
            </div>
            <div class="drbtn">
            <button id="readbtn" onclick="readnote(${index})">Read</button>
                <button id="deletebtn" onclick="deletenote(${index})">Delete</button>
            </div>
        </div>`
            } else {
                notes.innerHTML += `
                <div class="note">
                <div class="fav" id="fav" onclick="favnote(${index})">
                &star;
            </div>
            <div class="note_title">
                ${notesdata.title}
            </div>
            <div class="note_desc">
                ${notesdata.desc}
            </div>
            <div class="drbtn">
            <button id="readbtn" onclick="readnote(${index})">Read</button>
                <button id="deletebtn" onclick="deletenote(${index})">Delete</button>
            </div>
        </div>`
            }

        });
    }
    section_one.style.display = "none"
    section_two.style.display = "block"
    section_three.style.display = "none"
    section_four.style.display = "none"
    section_five.style.display = "none"
    home.style.display = "none"


}

function deletenote(index) {
    let notesdata = [];
    let allnotes = localStorage.getItem("allnotes");
    if (allnotes == null) {
        let notesdata = [];
    }
    else {
        notesdata = JSON.parse(allnotes);
    }
    notesdata.splice(index, 1);
    localStorage.setItem("allnotes", JSON.stringify(notesdata))
    display();
}

function readnote(index) {
    let notesdata = [];
    let allnotes = localStorage.getItem("allnotes");
    if (allnotes == null) {
        let notesdata = [];
    }
    else {
        notesdata = JSON.parse(allnotes);
    }

    section_one.style.display = "none"
    section_two.style.display = "none"
    section_three.style.display = "block"
    section_four.style.display = "none"
    section_five.style.display = "none"
    home.style.display = "none"



    note_s3.innerHTML = `<div class="note_title_s3">
                            ${notesdata[index].title}
                        </div>
                        <div class="note_desc_s3">  
                            ${notesdata[index].desc}
                        </div>
                        <div class="dpntn_s3">
                            <button id="prevbtn" onclick="prevnote(${index - 1})">Prev</button>
                            <button id="deletebtn" onclick="deletenote(${index})">Delete</button>
                            <button id="nextbtn" onclick="nextnote(${index + 1})">Next</button>
                        </div>`
}

function nextnote(index) {
    let notesdata = [];
    let allnotes = localStorage.getItem("allnotes");
    if (allnotes == null) {
        let notesdata = [];
    }
    else {
        notesdata = JSON.parse(allnotes);
    }
    if (notesdata.length == index) {
        nextbtn.style.cursor = "unset"
        nextbtn.style.opacity = "0.5"
    }
    else {
        note_s3.innerHTML = `<div class="note_title_s3">
                               ${notesdata[index].title}
                           </div>
                           <div class="note_desc_s3">  
                               ${notesdata[index].desc}
                           </div>
                           <div class="dpntn_s3">
                               <button id="prevbtn" onclick="prevnote(${index - 1})">Prev</button>
                               <button id="deletebtn" onclick="deletenote(${index})">Delete</button>
                               <button id="nextbtn" onclick="nextnote(${index + 1})">Next</button>
                           </div>`

    }

}

function prevnote(index) {
    let notesdata = [];
    let allnotes = localStorage.getItem("allnotes");
    if (allnotes == null) {
        let notesdata = [];
    }
    else {
        notesdata = JSON.parse(allnotes);
    }
    if (index == -1) {
        prevbtn.style.cursor = "unset"
        prevbtn.style.opacity = "0.5"
    }
    else {
        note_s3.innerHTML = `<div class="note_title_s3">
                               ${notesdata[index].title}
                           </div>
                           <div class="note_desc_s3">  
                               ${notesdata[index].desc}
                           </div>
                           <div class="dpntn_s3">
                               <button id="prevbtn" onclick="prevnote(${index - 1})">Prev</button>
                               <button id="deletebtn" onclick="deletenote(${index})">Delete</button>
                               <button id="nextbtn" onclick="nextnote(${index + 1})">Next</button>
                           </div>`

    }
}

addbtn.addEventListener("click", () => {
    section_one.style.display = "block"
    section_two.style.display = "none"
    section_three.style.display = "none"
    section_four.style.display = "none"
    section_five.style.display = "none"
    home.style.display = "none"


    next.style.display = "block";
    subject.style.display = "block";
    subject.style.borderBottom = "2px solid rgb(235, 219, 0)";
    note.style.display = "none";
    submit.style.display = "none";
    error1.style.display = "none";
})
allbtn.addEventListener("click", () => {
    section_one.style.display = "none"
    section_two.style.display = "block"
    section_three.style.display = "none"
    section_four.style.display = "none"
    section_five.style.display = "none"
    home.style.display = "none"



    next.style.display = "none";
    subject.style.display = "none";
    subject.style.borderBottom = "2px solid rgb(235, 219, 0)";
    note.style.display = "none";
    submit.style.display = "none";
    error1.style.display = "none";

    display();
})

menubtn.addEventListener("click", () => {
    if (isopen) {
        menubtn.style.transform = "rotate(180deg)";
        if (innerWidth > 320) {
            left.style.display = "block";
            left.style.width = "auto";
            left.style.opacity = "1";
        }
        else {
            left.style.display = "none";
        }
        middle.style.display = "none";
        searchbar.style.display = "block";
        isopen = false;
    }
    else {
        menubtn.style.transform = "rotate(90deg)";
        if (innerWidth > 320) {
            left.style.display = "none";
            left.style.width = "0px";
            left.style.opacity = "-1";
        }
        searchbar.style.display = "none";
        middle.style.display = "flex";
        middle.style.transition = "5s";
        isopen = true;

    }
})

starbtn.addEventListener("click", () => {
    let notesdata = [];
    let allnotes = localStorage.getItem("allnotes");
    if (allnotes == null) {
        let notesdata = [];
    }
    else {
        notesdata = JSON.parse(allnotes);
    }
    if (notesdata.length == 0) {
        notes_s4.innerHTML = `    <div class="notes">
        <div class="note">
            <div class="fav" id="fav" style="opacity: 0;">
                &star;
            </div>
            <div class="note_title">
                😭
            </div>
            <div class="note_desc">
                Soory, Notes Not Found
            </div>
            <button id="takenote2" onclick="takenote2()">Take Note</button>
        </div>
    </div>`
    }
    else {
        notes_s4.innerHTML = ``
        notesdata.forEach(function (notesdata, index) {
            if (notesdata.star) {
                notes_s4.innerHTML += `<div class="note">
            <div class="fav" id="fav" onclick="favnote(${index})">
                    &starf;
            </div>
            <div class="note_title">
                ${notesdata.title}
            </div>
            <div class="note_desc">
                ${notesdata.desc}
            </div>
            <div class="drbtn">
            <button id="readbtn" onclick="readnote(${index})">Read</button>
                <button id="deletebtn" onclick="deletenote(${index})">Delete</button>
            </div>
        </div>`
            }
        })
    }
    section_one.style.display = "none"
    section_two.style.display = "none"
    section_three.style.display = "none"
    section_four.style.display = "block"
    section_five.style.display = "none"
    home.style.display = "none"
})

function favnote(index) {
    let notesdata = [];
    let allnotes = localStorage.getItem("allnotes");
    if (allnotes == null) {
        let notesdata = [];
    }
    else {
        notesdata = JSON.parse(allnotes);
    }
    if (notesdata[index].star) {
        notesdata[index].star = false
    }
    else {
        notesdata[index].star = true
    }
    localStorage.setItem("allnotes", JSON.stringify(notesdata))
    display();
    console.log(11111);
}

search.addEventListener("input", () => {
    let notesdata = [];
    let allnotes = localStorage.getItem("allnotes");
    if (allnotes == null) {
        let notesdata = [];
    }
    else {
        notesdata = JSON.parse(allnotes);
    }
    if (notesdata.length == 0) {
        notes_s4.innerHTML = `    <div class="notes">
        <div class="note">
            <div class="fav" id="fav" style="opacity: 0;">
                &star;
            </div>
            <div class="note_title">
                😭
            </div>
            <div class="note_desc">
                Soory, Notes Not Found
            </div>
            <button id="takenote2" onclick="takenote2()">Take Note</button>
        </div>
    </div>`
    }
    else {
        if (search.value == " ") {
            display();
        }
        else {
            notes_s5.innerHTML = ``;
            notesdata.forEach(function (notesdata, index) {
                if (notesdata.title.toLowerCase().includes(search.value)) {
                    if (notesdata.star) {
                        notes_s5.innerHTML += `<div class="note">
                            <div class="fav" id="fav" onclick="favnote(${index})">
                        &starf;
                                    </div>
                        <div class="note_title">
                    ${notesdata.title}
                        </div>
                        <div class="note_desc">
                    ${notesdata.desc}
                        </div>
                        <div class="drbtn">
                    <button id="readbtn" onclick="readnote(${index})">Read</button>
                    <button id="deletebtn" onclick="deletenote(${index})">Delete</button>
                        </div>
                        </div>`
                    }
                    else {
                        notes_s5.innerHTML += `<div class="note">
                    <div class="fav" id="fav" onclick="favnote(${index})">
                    &star;
                    </div>
                    <div class="note_title">
                    ${notesdata.title}
                    </div>
                    <div class="note_desc">
                    ${notesdata.desc}
                    </div>
                    <div class="drbtn">
                    <button id="readbtn" onclick="readnote(${index})">Read</button>
                    <button id="deletebtn" onclick="deletenote(${index})">Delete</button>
                    </div>
                    </div>`
                    }
                }
            })
            if (notes_s5.innerHTML === ``) {
                notes_s5.innerHTML = `    <div class="notes">
                <div class="note">
                <div class="fav" id="fav" style="opacity: 0;">
                    &star;
                </div>
                <div class="note_title">
                    😭
                </div>
                <div class="note_desc">
                    Soory, Notes Not Found
                </div>
                <button id="takenote2" class="takenote2">Take Note</button>
                </div>
                </div>`
            }
        }
    }

    section_one.style.display = "none"
    section_two.style.display = "none"
    section_three.style.display = "none"
    section_four.style.display = "none"
    section_five.style.display = "block"
    home.style.display = "none"

})


homemenu.addEventListener("click", () => {
    section_one.style.display = "none"
    section_two.style.display = "none"
    section_three.style.display = "none"
    section_four.style.display = "none"
    section_five.style.display = "none"
    home.style.display = "block"
})
notemenu.addEventListener("click", () => {
    section_one.style.display = "block"
    section_two.style.display = "none"
    section_three.style.display = "none"
    section_four.style.display = "none"
    section_five.style.display = "none"
    home.style.display = "none"

    next.style.display = "block";
    subject.style.display = "block";
    note.style.display = "none";
    submit.style.display = "none";
    error1.style.display = "none"
})
takenote.addEventListener("click", () => {
    section_one.style.display = "block"
    section_two.style.display = "none"
    section_three.style.display = "none"
    section_four.style.display = "none"
    section_five.style.display = "none"
    home.style.display = "none"

    next.style.display = "block";
    subject.style.display = "block";
    note.style.display = "none";
    submit.style.display = "none";
    error1.style.display = "none"
})
function takenote2() {
    section_one.style.display = "block"
    section_two.style.display = "none"
    section_three.style.display = "none"
    section_four.style.display = "none"
    section_five.style.display = "none"
    home.style.display = "none"

    next.style.display = "block";
    subject.style.display = "block";
    note.style.display = "none";
    submit.style.display = "none";
    error1.style.display = "none"
}