function add() {
	// Retrieve the entered form data
	var title = $('[name="item"]').val();
	// Fetch the existing test
	var test = gettest();
	// Push the new item into the existing list
	test.push({
		title : title
	});
	// Store the new list
	savetest(test);
	// Reload the page to show the new test
	window.location.reload();
}

function gettest() {
	// See if test is inside localStorage
	if (localStorage.getItem("test")) {
		// If yes, then load the test
		test = JSON.parse(localStorage.getItem("test"));
	} else {
		// Make a new array of test
		test = new Array();
	}
	return test;
}

function savetest(test) {
	// Save the list into localStorage
	localStorage.setItem("test", JSON.stringify(test));
}

function homepage() {
	// Fetch the existing test
	test = gettest();
	// Clear the list
	$('#items').find('li').remove();
	// Add every object to the test list
	$.each(test, function(index, item) {
		element = '<li>' + item.title + '</li>';
		$('#items').append(element);
	});

	$('#items').listview();
	$('#items').listview("refresh");
}