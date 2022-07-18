app.controller('loadChildCtrl', function ($modalInstance,$timeout) {
    $timeout(function () {
        $modalInstance.close();
    }, 2000);
})
