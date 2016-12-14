app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/quiz.html',
			controller: 'QuizController'
		})

		.when('/quiz', {
			templateUrl: 'views/quiz.html',
			controller: 'QuizController'
		});

	$locationProvider.html5Mode(true);

}]);