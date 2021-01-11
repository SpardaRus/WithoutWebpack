let alertButton = document.getElementById("alertButton")
if (alertButton) {
    alertButton.onclick = function () {
        alertDate()
    };
}


function alertDate() {
    let dateNow = getCurrentDate();
    alert('Now: ' + dateNow);
}

export function getCurrentDate() {
    let dateNow = new Date();
    return dateNow.toLocaleString();
}