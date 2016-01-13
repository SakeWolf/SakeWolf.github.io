(function() {
	var app = angular.module('top25', []);

	app.controller('ListController', function () {
		this.entry = album;
	});
})();

var album = {
	title: "Adventure",
	artist: "Madeon",
	ranking: 25,
	cover: "https://ia600305.us.archive.org/34/items/mbid-84ed7be8-9892-4379-93a9-452068c1363a/mbid-84ed7be8-9892-4379-93a9-452068c1363a-10045529637.jpg",
	description: "This album is fun and you can dance to it!"
};