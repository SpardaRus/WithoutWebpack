import * as $ from 'jquery'
import * as dateUtils from './dateUtils'

import '../css/container.css'
import '../css/content.css'
import '../css/menu.css'

$(document).ready(function () {
    $("#buttonSetText").click(function () {
        let dateNow = dateUtils.getCurrentDate();
        $("#text").text("Date:  " + dateNow);
    });
});