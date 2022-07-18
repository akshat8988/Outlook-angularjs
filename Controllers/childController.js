app.controller('childCtrl', childCtrl);
childCtrl.$inject = ['$scope', '$stateParams','$timeout','$modal'];
function childCtrl($scope, $stateParams,$timeout,$modal)
{
    $modal.open({

        templateUrl: '/childHtmls/loadChild.html',
        controller: 'loadChildCtrl'

    })

    $timeout(function () {
    $scope.childMesg = $scope.arrMessages[$stateParams.mesgId];
}, 2000);


}


