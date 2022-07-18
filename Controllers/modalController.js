app.controller('modalController', function ($scope, $modalInstance, factory,$timeout) {
    $scope.add = factory.add();
    $scope.folders = factory.folders();

    $scope.ok = function () {
        $scope.folders.push({
            name:this.add   
        });

        $timeout(function () {
            $scope.alertMessage = "added successfully!";
            alert($scope.alertMessage);
        
                }, 1000);


        $modalInstance.close();
    }
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    }
})