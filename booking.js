document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.querySelector("button[type='submit']");
    submitButton.addEventListener("click", function(e) {
      e.preventDefault();
      var fullName = document.getElementById("fullName").value;
      var number = document.getElementById("number").value;
      var email = document.getElementById("email").value;
      var confirmEmail = document.getElementById("confirmEmail").value;
      var message = document.getElementById("message").value;
      var date = document.getElementById("datepicker").value;
      var timeSlot = document.querySelector(".time-slot.selected").textContent;
  
      // Perform form validation and booking submission
      // ...
  
      // Clear form fields after submission
      document.getElementById("fullName").value = "";
      document.getElementById("number").value = "";
      document.getElementById("email").value = "";
      document.getElementById("confirmEmail").value = "";
      document.getElementById("message").value = "";
      document.getElementById("datepicker").value = "";
      document.querySelector(".time-slot.selected").classList.remove("selected");
    });
  
    var cancelButton = document.getElementById("cancelButton");
    cancelButton.addEventListener("click", function() {
      // Perform cancellation logic
      // ...
    });
  
    document.addEventListener("click", function(e) {
      if (e.target.classList.contains("time-slot")) {
        var selectedSlot = document.querySelector(".time-slot.selected");
        if (selectedSlot) {
          selectedSlot.classList.remove("selected");
        }
        e.target.classList.add("selected");
      }
    });


  });
  
  