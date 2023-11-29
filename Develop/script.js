$(function () {
  // Trying to setup a date on the header
  function updateDate() {
    var currentDate = new Date();
    var dateElement = document.getElementById("dateTime");
    var dateOptions = { year: "numeric", month: "numeric", day: "numeric" };
    
    dateElement.textContent = currentDate.toLocaleDateString(undefined,dateOptions);
  };

  updateDate();

  // Okay first i need to find all the elements with the class "time-block"
  const timeBlocks = document.getElementsByClassName("time-block");
  $(".saveBtn").on("click", function () {
    var userText = $(this).siblings(".description").val();
    var timeBlock = $(this).parent().attr("id");
    localStorage.setItem(timeBlock, userText);
    console.log("Event Saved");
    alert("Event Saved");
  });

  // now we need to retrieve from local storage
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

  function refreshTimeBlocks() {
    var currentHour = moment().hour();
    $(".time-block").each(function () {
      const timeTimeBlocks = parseInt($(this).attr("id").split("-")[1]);

    // if else statements to add/remove (present future past) classes
      if (timeTimeBlocks < currentHour) {
        $(this).addClass("past").removeClass(`present future`);
      } else if (timeTimeBlocks === currentHour) {
        $(this).addClass("present").removeClass("past future");
      } else {
        $(this).addClass("future").removeClass("past present");
      }
    });
  }

  // runs function TO UPDATE TIME BLOCK ^^
  refreshTimeBlocks();
});
// creating a timer - week 5, 24, js (day.js)