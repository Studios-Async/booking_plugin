$(document).ready(function() {
  $("#datepicker").datepicker({
    dateFormat: "dd-mm-yy",
    minDate: 0,
    maxDate: "+2w",
    beforeShowDay: function(date) {
      var day = date.getDay();
      // Disable Sundays (day 0) and Saturdays (day 6)
      return [day !== 0 && day !== 6, ""];
    },
    onSelect: function(dateText) {
      generateTimeSlots(dateText);
    }
  });

  function generateTimeSlots(dateText) {
    var timeSlotsContainer = $("#time-slots");
    timeSlotsContainer.empty();

    var selectedDate = $.datepicker.parseDate("dd-mm-yy", dateText);
    var startTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 10, 0);
    var endTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 17, 0);

    while (startTime < endTime) {
      var slotStart = startTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      var slotEnd = new Date(startTime.getTime() + 60 * 60 * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      var slot = $("<div>").addClass("time-slot").text(slotStart + " - " + slotEnd);
      timeSlotsContainer.append(slot);

      startTime.setTime(startTime.getTime() + 60 * 60 * 1000);
    }
  }
});



    