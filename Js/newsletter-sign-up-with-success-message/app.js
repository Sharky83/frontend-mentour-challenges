document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var closeBtn = document.getElementsByClassName("close")[0];
  
    console.log("Initial modal display:", modal.style.display);
  
    document.querySelector("form").addEventListener("submit", function(event) {
      event.preventDefault();
      console.log("Form submitted, showing modal");
      modal.style.display = "block";
    });
  
    closeBtn.onclick = function() {
      console.log("Close button clicked, hiding modal");
      modal.style.display = "none";
    };
  
    window.onclick = function(event) {
      if (event.target == modal) {
        console.log("Outside of modal clicked, hiding modal");
        modal.style.display = "none";
      }
    };
  });
  