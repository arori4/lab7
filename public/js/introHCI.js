'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	ga('send', 'pageview');
}

function track() {
	e.preventDefault();
	ga('create', 'UA-XXXX-Y', 'auto');
	ga('send', 'event', 'like', 'click');
	console.log('called2');
}