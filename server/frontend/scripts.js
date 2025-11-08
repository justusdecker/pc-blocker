var times = [];
const timingsDiv = document.getElementById("timings");
timingsDiv.innerText = "abc";

function addElement() {
    const timingsDiv = document.getElementById("timings");
    var start_time = document.getElementById("start_time").value;
    var end_time = document.getElementById("end_time").value;
    
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
    div.innerText = start_time + " - " + end_time;
    timingsDiv.appendChild(div);
    div.onclick = function() {
        timingsDiv.removeChild(div);
    }
    document.getElementById("info").innerText = start_time + " - " + end_time;
}