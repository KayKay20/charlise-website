// alerting the 
function subName(name){
	var name = document.getElementById("label").value;
	var message = "thank you " + name + " for enrolling!"
	alert(message);

}
function showForm() {
    var display = document.getElementById("designBox");
    var form =  document.getElementById("wrapper");
    var button = document.getElementById("applyButton")

    if (form.style.display === "none") { // If the display is equal to none then this statement will run if the button is clicked on.
        form.style.display = "block";
        display.style.display = "none";
        button.innerHTML = "Close Form";
    }

    else { // If the display is not equal to none then this statement will run if the button is clicked on.
        form.style.display = "none";
        display.style.display = "block";
        button.innerHTML = "Open Form";
    }
}



	


