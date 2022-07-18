app.controller('loadCtrl', function ($modalInstance,$timeout) {
    $timeout(function () {
        $modalInstance.close();
    }, 2000);
})
