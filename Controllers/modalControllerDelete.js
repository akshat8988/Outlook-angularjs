app.controller('deleteModalController', function ($scope, $modalInstance, factory,clickId,arr,delMesg,$timeout) {
    $scope.folders = factory.folders();
    $scope.delete = function () {

        $scope.folders[delMesg].messages.push(arr[clickId]);
        arr.splice(clickId,1);

        $timeout(function () {
            $scope.alertMessage = "deleted successfully!";
            alert($scope.alertMessage);
                }, 1000);
        
        
        $modalInstance.close();
    }

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    }
})