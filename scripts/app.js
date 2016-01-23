(function() {
	var app = angular.module('top25', []);

	app.controller('ListController', function () {
		this.entries = albums;
		this.title = title;
		this.opener = opener;
		this.closer = closer;

		this.setColor = function(ranking){
			if (ranking >= 21) {
				return "2406C6";
			} else if (ranking < 21 && ranking >= 16) {
				return "6C08D0";
			} else if (ranking < 16 && ranking >= 11) {
				return "9D02B9";
			} else if (ranking < 11 && ranking >= 6) {
				return "D0088A";
			} else {
				return "C6080B";
			}
		};
	});
})();