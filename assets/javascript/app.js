
$(document).ready(function() {

// Global Variables
//=============================================================================================================================================


var genres = [];








// functions
//=============================================================================================================================================


// function to push all genres into a global array, so they can be used to creatn buttons that contain the correct ID
displayGenres = function() {
	var queryURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=80b6c8343cf908fcdc17ccb31170064b";
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		results = response.genres;
		for (i=0; i<results.length; i++) {
			genres.push(response.genres[i]);
		}

		genreButtons();

	});
}

// make a function to create button for every element in the genres array
// make sure they have the correct ID, or they wont wotk with the API
genreButtons = function() {

	for (i=0; i<genres.length; i++) {
		var genreButton = $("<button class='genre'>");
		genreButton.addClass("btn btn-warning btn-block");
		genreButton.attr("genre", genres[i]);
		genreButton.text(genres[i].name);
		$(".dropdown-menu").append(genreButton);
	}

}
alertGenre = function() {
	var genreName = $(this).attr("genre");
	console.log(this);
}







// main process
//=============================================================================================================================================

$(".genreSubmit").on("click", function(event) {
	event.preventDefault();

	var selectedGenre = $("#movieGenre").val();
	alert(selectedGenre); 
	$("#inputForm").children("input").val("");

});

displayGenres();


// if you try to console log gernes on page load it will be undefined becasue the ajax hasnt finished loading yet.
$(document).on("click", ".genre", alertGenre);




});