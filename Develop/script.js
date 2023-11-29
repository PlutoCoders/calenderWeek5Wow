$(function () {
  // Trying to setup a date on the header
  function updateDate() {
    var currentDate = new Date();
    var dateElement = document.getElementById("dateTime");
    var dateOptions = { year: "numeric", month: "numeric", day: "numeric" };
    
    dateElement.textContent = currentDate.toLocaleDateString(undefined,dateOptions);
  };

  updateDate();




});




// creating a timer - week 5, 24, js (day.js)