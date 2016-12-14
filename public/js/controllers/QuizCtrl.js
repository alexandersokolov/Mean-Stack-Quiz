app.controller('QuizController', function($scope) {

	$scope.tagline = 'The square root of life is pi!';
	$scope.isError = false;
    $scope.data = {
        "questions" : [
            {
                "name" : "what is the color in sky",
                "answers" : [ "Blue", "Red", "Green", "Yellow"
                ]
            },
            {
                "name" : "which floor is shiftkeylabs",
                "answers" : [ "1", "2", "3", "4"
                ]
            }
        ]
    }
	$scope.quesNumber = 1;

    $scope.questionText = $scope.data.questions[$scope.quesNumber - 1].name;
    $scope.answers = $scope.data.questions[$scope.quesNumber - 1].answers;

	$scope.nextQuestion = function () {
		$scope.questionText = $scope.data.questions[$scope.quesNumber].name;
		$scope.answers = $scope.data.questions[$scope.quesNumber].answers;
        $scope.quesNumber = $scope.quesNumber + 1;
    }



});