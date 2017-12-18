var gifRetriever = {
	topics: [[],[]],
	topicCategories: [],
	buttonCreator: function() {
		//create a button and puts it in correct area (either 'my topics' or under the category header)
		//checks if it already exists as a topic. If so, does not create it, just opens up the category ...maybe highlights the topic?

		//gives class based on what category it is
		//opens category area for which it is created

		//Topics should have uniform capitalization - all lower or proper.
	},
	createGif: function(topic) {
		// Creates a gif based on which button was pressed
    	queryURL = "https://api.giphy.com/v1/gifs/search?q="+topic+"&api_key=dc6zaTOxFJmzC";

    	//random does only 1 gif at a time, so ajax needs to be inside of the for loop if doing random - unfotunately, that does not give rating. A next step for this would be reverse searching to find the rating based on the gif, so both could be done.

    	$.ajax({
	      url: queryURL,
	      method: 'GET'
	    }).done(function(response) {
	      // console.log(response);

	      //3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.


	      	// console.log(response.data);

	      for (var i = 0; i < 10; i++) {
	      	$("#images").prepend('<div class="thumbnail"><img alt="Bootstrap Thumbnail Third" src="'+response.data[i].images.fixed_height_still.url+'" data-still = "'+response.data[i].images.fixed_height_still.url+'" data-animate = "'+response.data[i].images.fixed_height.url+'" data-state = "still" class="gif caption"><p>Rated '+response.data[i].rating+'</p></div></div>');
	      }

	      //<div class="col-md-2">
	      // response.data[i].rating
	      //     5. Under every gif, display its rating (PG, G, so on).
	      // response.data[i].rating
	      // * This data is provided by the GIPHY API.
	      // * Only once you get images displaying with button presses should you move on to the next step.
	      //Fixed still: fixed_height_still
	      //fixed_height

	    });


	},
	animate: function(image) {
		//Animates or stills gif
		var state = $(image).attr("data-state");

        if (state == "still") {
          $(image).attr("src", $(image).attr("data-animate"));
          $(image).attr("data-state","animate");
        } else {
          $(image).attr("src", $(image).attr("data-still"));
          $(image).attr("data-state","still");
        }
	},
	startUp: function() {
		//starts program up
		//chooses random default category and brings it up
	}
}



$("body").on("click", ".topic", function() {
    	gifRetriever.createGif($(this).text());

});
$("body").on("click", "img", function() {
    	gifRetriever.animate(this);
    	console.log("hi");

});
