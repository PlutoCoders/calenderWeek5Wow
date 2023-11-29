$(function () {
  // Trying to setup a date on the header
  function updateDate() {
    var currentDate = new Date();
    var dateElement = document.getElementById("dateTime");
    var dateOptions = { year: "numeric", month: "numeric", day: "numeric" };
    
    dateElement.textContent = currentDate.toLocaleDateString(undefined,dateOptions);
  };

  updateDate();

  // now we need to save to local storage
  function retrieveLocalStorage() {
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var storedValue = localStorage.getItem(timeBlockId);
      if (storedValue !== null) {
        // after retrieve, set
        $(this).find(".description").val(storedValue);
      }
    });
  }

  retrieveLocalStorage()

  



});




// creating a timer - week 5, 24, js (day.js)