
  // Function to validate the form
  function validateForm() {
    var rating = document.getElementsByName("rating");
    var description = document.getElementsByName("description")[0].value;
    var reason1 = document.getElementsByName("reason1")[0].value;
    var reason2 = document.getElementsByName("reason2")[0].value;


    // Check if a rating is selected
    var ratingSelected = false;
    for (var i = 0; i < rating.length; i++) {
      if (rating[i].checked) {
        ratingSelected = true;
        break;
      }
    }

    // Validate other fields as needed
    if (!ratingSelected) {
      alert("Please select a rating.");
      return false;
    }

    if (description.trim() === "") {
      alert("Please provide a description.");
      return false;
    }

    

    // Form is valid, allow submission
    return true;
  }

  


function openPopup(){
  let popup = document.getElementById("popup");

  popup.classList.add("open-popup");
}


function closePopup(){
  let popup = document.getElementById("popup");

  popup.classList.remove("open-popup");
}