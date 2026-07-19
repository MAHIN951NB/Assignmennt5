var Data_collection = [];

const x = document.getElementsByClassName(`heart`)
for (const classes of x) {
    classes.addEventListener(`click`, function () {
        const heart_store = parseInt(document.getElementById(`heartid`).innerText)
        const inc_heart = heart_store + 1;
        document.getElementById(`heartid`).innerText = inc_heart
    })
}
function copy() {
    const x = parseInt(document.getElementById(`c_count`).innerText);
    const y = x + 1;
    document.getElementById(`c_count`).innerText = y;
}

function emergency(x) {
    Data_collection = [];
    const emergency_container = document.getElementsByClassName(x);
    for (const y of emergency_container) {
        Data_collection.push(y.innerText);
    }
    const f = new Date().toLocaleTimeString()
    Data_collection.push(f);

}
function police(x) {
    Data_collection = [];
    const emergency_container = document.getElementsByClassName(x);
    for (const y of emergency_container) {
        Data_collection.push(y.innerText);
    }
    const f = new Date().toLocaleTimeString()
    Data_collection.push(f);

}
function ambulance(x) {
    Data_collection = [];
    const emergency_container = document.getElementsByClassName(x);
    for (const y of emergency_container) {
        Data_collection.push(y.innerText);
    }
    const f = new Date().toLocaleTimeString()
    Data_collection.push(f);

}
function fire(x) {
    Data_collection = [];
    const emergency_container = document.getElementsByClassName(x);
    for (const y of emergency_container) {
        Data_collection.push(y.innerText);
    }
    const f = new Date().toLocaleTimeString()
    Data_collection.push(f);

}



function display(status, number) {
    const coin = document.getElementById(`coin`).innerText
    const converted_coin = parseInt(coin);

    if (converted_coin >= 20) {
        const x = document.getElementById(`history`);
        const z = document.createElement(`div`);
        z.innerHTML = `                            <div class="flex justify-between pt-4 flex-wrap gap-2">
                                <div>
                                    <p>${Data_collection[0]}</p>
                                    <p>${Data_collection[1]}</p>
                                </div>
                                <div>
                                    <p>${Data_collection[2]}</p>
                                </div>
                            </div>`
        x.appendChild(z);
        const updated = converted_coin - 20;
        document.getElementById(`coin`).innerText = updated;
        alert(`Calling ${status} Number ${number}`)
    }

    if (converted_coin < 20) {
        alert(`Sorry Not Sufficient Amount`)
        return;
    }


}

document.getElementById(`em_copy`).addEventListener(`click`, function () {
    const copytext = document.getElementById(`e_id`)
    navigator.clipboard.writeText(copytext.textContent);
    copy();
    alert(`Number copied! ${copytext.innerText}`);
})
document.getElementById(`p_copy`).addEventListener(`click`, function () {
    const copytext = document.getElementById(`p_id`)
    navigator.clipboard.writeText(copytext.textContent);
    copy();
    alert(`Number copied! ${copytext.innerText}`);
})
document.getElementById(`f_copy`).addEventListener(`click`, function () {
    const copytext = document.getElementById(`f_id`)
    navigator.clipboard.writeText(copytext.textContent);
    copy();
    alert(`Number copied! ${copytext.innerText}`);
})
document.getElementById(`a_copy`).addEventListener(`click`, function () {
    const copytext = document.getElementById(`a_id`)
    navigator.clipboard.writeText(copytext.textContent);
    copy();
    alert(`Number copied! ${copytext.innerText}`);
})


document.getElementById(`em_call`).addEventListener(`click`, function () {
    emergency(`emergency`);
    const x = document.getElementById(`e_stat`).innerText;
    const y = document.getElementById(`e_id`).innerText;
    display(x, y);
})

document.getElementById(`p_call`).addEventListener(`click`, function () {
    police(`police`);
    const x = document.getElementById(`p_stat`).innerText;
    const y = document.getElementById(`p_id`).innerText;
    display(x, y);
})
document.getElementById(`a_call`).addEventListener(`click`, function () {
    ambulance(`ambulance`);
    const x = document.getElementById(`a_stat`).innerText;
    const y = document.getElementById(`a_id`).innerText;
    display(x, y);
})
document.getElementById(`f_call`).addEventListener(`click`, function () {
    fire(`fire`);
    const x = document.getElementById(`f_stat`).innerText;
    const y = document.getElementById(`f_id`).innerText;
    display(x, y);
})



document.getElementById(`clear`).addEventListener(`click`, function () {
    const x = document.getElementById(`history`);
    x.innerHTML = ``
})