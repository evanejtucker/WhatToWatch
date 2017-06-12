
$(document).ready(function() {

// Global Variables
//=================================================================================================


var genres = [];








// functions
//=================================================================================================

displayGenres = function() {
	// var SelectedGenre = $(this).attr("giphy");
	var queryURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=80b6c8343cf908fcdc17ccb31170064b";
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		results = response.genres;
		for (i=0; i<results.length; i++) {
			console.log(response.genres[i].name);
		}
		// console.log(response.genres[0].name);

	});

}







// main process
//=================================================================================================

$(".genreSubmit").on("click", function(event) {
	event.preventDefault();

	var selectedGenre = $("#movieGenre").val();
	alert(selectedGenre); 
	genres.push(selectedGenre);
	console.log(genres);

	$("#inputForm").children("input").val("");

});

displayGenres();



});