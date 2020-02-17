$(document).ready(function () {
    $("#buttonSetText").click(function () {
        let dateNow = getCurrentDate();
        $("#text").text("Date:  " + dateNow);
    });
});