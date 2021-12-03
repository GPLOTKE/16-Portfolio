const currentDayEl = $('#currentDay');

function displayTime() {
    const rightNowEl = moment().format('MMMM DD, YYYY, h:mm a');
    currentDayEl.text(rightNowEl);
    console.log(rightNowEl);
}

setInterval(displayTime, 1000);