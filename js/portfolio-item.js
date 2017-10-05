$('#myModal').modal({ show: false})

$('.img-responsive').click(function(event)
{
	event.stopPropagation();
	$('#myModal').modal('show');
	return false;
});

$('a').click(function(event)
{
	if(event.target.id != "contactform" && event.target.id != "ccl")
	{
		event.stopPropagation();
		$('#myModal').modal('show');
		return false;
	}
	
	return true;

});
