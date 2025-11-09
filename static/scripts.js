var times = [];
const timingsDiv = document.getElementById("timings");
timingsDiv.innerText = "abc";

async function sendJsonData() {
    
    const url = '/send'; // URL des Servers, an den die Daten gesendet werden sollen
    const dataToSend = [];
    for (const entry of document.getElementsByClassName("time-entry")) {
        dataToSend.push(entry.innerText);
    }
    try {
        const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
        });

        if (!response.ok) {
        throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Erfolg:', result);

    } catch (error) {
        console.error('Fehler beim Senden der Daten:', error);
    }
}

function addElement() {
    const timingsDiv = document.getElementById("timings");
    var start_time = document.getElementById("start_time").value;
    var end_time = document.getElementById("end_time").value;
    var start_day = document.getElementById("start_day").value;
    var end_day = document.getElementById("end_day").value;
    if (!start_time || !end_time) {
        alert("Please enter both start and end times.");
        return;
    }

    if (start_time >= end_time) {
        alert("Start time must be earlier than end time.");
        return;
    }

    const div = document.createElement("div");
    div.className = "time-entry";
    div.innerText = start_time + " - " + end_time + " : " +  start_day + " to " + end_day;
    timingsDiv.appendChild(div);
    div.onclick = function() {
        timingsDiv.removeChild(div);
    }
    document.getElementById("info").innerText = start_time + " - " + end_time;
}