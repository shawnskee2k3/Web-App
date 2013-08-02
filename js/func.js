angular.module('Movie', ['ngResource']);

function MovieCtrl($scope, $resource){
	$scope.movie = $resource('http://api.yummly.com/v1/api/recipes?',
			{action:'movies.json', apikey:'6c62bf081decd53a0904518503e507b7', q:'John', page_limit:'50', callback:'JSON_CALLBACK'},
			{get:{method:'JSONP'}});
	
	$scope.doSearch = function () {
		$scope.movieResult = $scope.movie.get({q:$scope.searchTerm});
	}
}

