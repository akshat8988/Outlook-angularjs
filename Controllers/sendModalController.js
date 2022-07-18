app.controller('sendCtrl', function ($scope, $modalInstance, factory,index) {
    $scope.subject = factory.subject();
    $scope.content = factory.content();
   
   
    $scope.folders = factory.folders();

    $scope.sendMesg = function () {

        $scope.folders[index].messages.push({
            subject:this.subject,
            content:this.content,
            
        }
        );

        $modalInstance.close();
    }
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    }
})

