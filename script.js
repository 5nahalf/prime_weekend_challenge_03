var apikey = '874568ad8c8402451210db15f2439a3771783d9f'; // Put your API key here

// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
function searchCallback(results) {
	console.log(results);
}

$(document).ready(function() {

	// Start the search here!
	search('batman');
});

// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){


// Example 1 - Cross Site Error
	/*$.ajax ({
	    type: 'GET',
	    dataType: 'json',
	    crossDomain: true,
	    url: 'http://www.giantbomb.com/api/search/?format=json&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
	    complete: function() {
	        console.log('ajax complete');
	    },
	    success: function(data) {
	        searchCallback(data.results);
	    }
	});*/

// Example 2: Using JSONP
/*$.ajax ({
	type: 'GET',
	dataType: 'jsonp',
	crossDomain: true,
	jsonp: 'json_callback',
	url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
	complete: function() {
		console.log('ajax complete');
	},
	success: function(data) {
		searchCallback(data.results);
	}
});*/

// Example 3, using CORS
	/*$.ajax({
		type: 'GET',
        url: 'http://updates.html5rocks.com',
        crossDomain: true,
        dataType: 'text',
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            alert('Error: ' + status);
        }
    });*/

// Example 4: Using the core $.ajax() method
/*$.ajax({

    // The URL for the request
    url: "example.php",

    // The data to send (will be converted to a query string)
    data: {
    	id: 123
    },

    // Whether this is a POST or GET request
    type: "GET",

    // The type of data we expect back
    dataType : "json",

    // Code to run if the request succeeds;
    // the response is passed to the function
    success: function( result ) {
    	$( "<h1>" ).text( json.title ).appendTo( "body" );
    	$( "<div class=\"content\">").html( result.html ).appendTo( "body" );
    },

    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    error: function( xhr, status, errorThrown ) {
    	alert( "Sorry, there was a problem!" );
    	console.log( "Error: " + errorThrown );
    	console.log( "Status: " + status );
    	console.dir( xhr );
    },

    // Code to run regardless of success or failure
    complete: function( xhr, status ) {
    	alert( "The request is complete!" );
    }
});*/

// Example 5: Using jQuery's Ajax convenience methods
 
	// Get plain text or HTML
	/*$.get( "/users.php", {
	    userId: 1234
	}, function( resp ) {
	    console.log( resp ); // server response
	});
	 
	// Add a script to the page, then run a function defined in it
	$.getScript( "/static/js/myScript.js", function() {
	    functionFromMyScript();
	});
	 
	// Get JSON-formatted data from the server
	$.getJSON( "/details.php", function( resp ) {
	 
	    // Log each key in the response data
	    $.each( resp, function( key, value ) {
	        console.log( key + " : " + value );
	    });
	});*/

}
