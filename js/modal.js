function showModal(event)
{
	//alert(event.target.id);
	var name = event.target.id;
	var modal = document.getElementById(name + "_modal");
	
	modal.style.display = "block";
	
	// Get the <span> element that closes the modal
	var span = document.getElementById(name + "_span");

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() 
	{
    	modal.style.display = "none";
	}
	
	var img = document.getElementById(name)
}