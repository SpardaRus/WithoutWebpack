import * as $ from 'jquery'
import * as dateUtils from './dateUtils'

$(document).ready(function () {
    $("#buttonSetText").click(function () {
        let dateNow = dateUtils.getCurrentDate();
        $("#text").text("Date:  " + dateNow);
    });
});