var Data_collection = [];

const x = document.getElementsByClassName(`heart`);
for (const classes of x) {
    classes.addEventListener(`click`, function () {
        const heart_store = parseInt(document.getElementById(`heartid`).innerText);
        const inc_heart = heart_store + 1;
        document.getElementById(`heartid`).innerText = inc_heart;
    });
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
    const f = new Date().toLocaleTimeString();
    Data_collection.push(f);
}

function police(x) {
    Data_collection = [];
    const emergency_container = document.getElementsByClassName(x);
    for (const y of emergency_container) {
        Data_collection.push(y.innerText);
    }
    const f = new Date().toLocaleTimeString();
    Data_collection.push(f);
}

function ambulance(x) {
    Data_collection = [];
    const emergency_container = document.getElementsByClassName(x);
    for (const y of emergency_container) {
        Data_collection.push(y.innerText);
    }
    const f = new Date().toLocaleTimeString();
    Data_collection.push(f);
}

function fire(x) {
    Data_collection = [];
    const emergency_container = document.getElementsByClassName(x);
    for (const y of emergency_container) {
        Data_collection.push(y.innerText);
    }
    const f = new Date().toLocaleTimeString();
    Data_collection.push(f);
}

function display(status, number) {
    const coin = document.getElementById(`coin`).innerText;
    const converted_coin = parseInt(coin);

    const heart = document.getElementById(`heartid`).innerText;
    const converted_heart = parseInt(heart);

    // Helper to log the call into history
    function logCall() {
        const x = document.getElementById(`history`);
        const z = document.createElement(`div`);
        z.innerHTML = `<div class="flex justify-between pt-4 flex-wrap gap-2">
                            <div>
                                <p>${Data_collection[0]}</p>
                                <p>${Data_collection[1]}</p>
                            </div>
                            <div>
                                <p>${Data_collection[2]}</p>
                            </div>
                        </div>`;
        x.appendChild(z);
    }

    // Case 1: enough coins, pay with coins as normal
    if (converted_coin >= 20) {
        logCall();
        const updated = converted_coin - 20;
        document.getElementById(`coin`).innerText = updated;
        alert(`Calling ${status} Number ${number}`);
        return;
    }

    // Case 2: not enough coins, but a heart is available
    if (converted_coin < 20 && converted_heart > 0) {
        logCall();
        const updated_heart = converted_heart - 1;
        document.getElementById(`heartid`).innerText = updated_heart;
        alert(`Calling ${status} Number ${number} (used 1 heart, coins insufficient)`);
        return;
    }

    // Case 3: no coins and no hearts
    if (converted_coin < 20 && converted_heart <= 0) {
        alert(`Sorry Not Sufficient Amount`);
        return;
    }
}

document.getElementById(`em_copy`).addEventListener(`click`, function () {
    const copytext = document.getElementById(`e_id`);
    navigator.clipboard.writeText(copytext.textContent);
    copy();
    alert(`Number copied! ${copytext.innerText}`);
});

document.getElementById(`p_copy`).addEventListener(`click`, function () {
    const copytext = document.getElementById(`p_id`);
    navigator.clipboard.writeText(copytext.textContent);
    copy();
    alert(`Number copied! ${copytext.innerText}`);
});

document.getElementById(`f_copy`).addEventListener(`click`, function () {
    const copytext = document.getElementById(`f_id`);
    navigator.clipboard.writeText(copytext.textContent);
    copy();
    alert(`Number copied! ${copytext.innerText}`);
});

document.getElementById(`a_copy`).addEventListener(`click`, function () {
    const copytext = document.getElementById(`a_id`);
    navigator.clipboard.writeText(copytext.textContent);
    copy();
    alert(`Number copied! ${copytext.innerText}`);
});

document.getElementById(`em_call`).addEventListener(`click`, function () {
    emergency(`emergency`);
    const x = document.getElementById(`e_stat`).innerText;
    const y = document.getElementById(`e_id`).innerText;
    display(x, y);
});

document.getElementById(`p_call`).addEventListener(`click`, function () {
    police(`police`);
    const x = document.getElementById(`p_stat`).innerText;
    const y = document.getElementById(`p_id`).innerText;
    display(x, y);
});

document.getElementById(`a_call`).addEventListener(`click`, function () {
    ambulance(`ambulance`);
    const x = document.getElementById(`a_stat`).innerText;
    const y = document.getElementById(`a_id`).innerText;
    display(x, y);
});

document.getElementById(`f_call`).addEventListener(`click`, function () {
    fire(`fire`);
    const x = document.getElementById(`f_stat`).innerText;
    const y = document.getElementById(`f_id`).innerText;
    display(x, y);
});

document.getElementById(`clear`).addEventListener(`click`, function () {
    const x = document.getElementById(`history`);
    x.innerHTML = ``;
});

// Search by phone number loop filter
document.getElementById(`searchInput`).addEventListener(`input`, function () {
    const search_value = this.value.trim();
    const number_ids = [`e_id`, `p_id`, `a_id`, `f_id`];

    for (const id of number_ids) {
        const number_el = document.getElementById(id);
        if (!number_el) continue;
        
        // Find the parent card element for each helpline
        const card = number_el.closest(`.bg-white`);

        if (card) {
            // Check if the card's phone number includes the typed search input
            if (search_value === "" || number_el.innerText.includes(search_value)) {
                card.style.display = ``; // Show matching card
            } else {
                card.style.display = `none`; // Hide non-matching card
            }
        }
    }
});