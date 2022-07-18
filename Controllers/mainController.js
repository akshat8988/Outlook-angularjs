app.controller('mainCtrl', function ($scope, factory, $modal, $timeout, $q,$interval) {

    $scope.folders = factory.folders();

    $scope.arrMessages = factory.arrMessages();
    // $scope.messages = factory.messages();

    var delIndex = $scope.folders.findIndex(x => x.name === 'Delete');
    var sendIndex = $scope.folders.findIndex(x => x.name === 'Sent');


    $scope.viewMesg = function (index) {
        var promise = factory.getContent(index);
        promise.then(function (data) {
            $modal.open({
                templateUrl: '/childHtmls/loading.html',
                controller: 'loadCtrl'
            })
            
            $timeout(function () {
                $scope.arrMessages = data;
            }, 2000);

        }).catch(function (err) {

            console.log(err);

        })


    }
    $scope.viewMesg(0);

    $scope.addFolder = function () {
        $modal.open({
            templateUrl: '/childHtmls/addFolderModal.html',
            controller: 'modalController'
        })

    }

    $scope.deleteMesg = function (index) {
        $modal.open({
            templateUrl: '/childHtmls/deleteMesgModal.html',
            controller: 'deleteModalController',
            resolve: {
                clickId: function () {
                    return index;
                },
                arr: function () {
                    return $scope.arrMessages
                },
                delMesg: function () {
                    return delIndex
                }
            }
        });

    }

    $scope.compose = function () {
        $modal.open({
            templateUrl: '/childHtmls/sendModal.html',
            controller: 'sendCtrl',
            resolve: {
                index: function () {
                    return sendIndex
                },
            }
        })
    }
   
 $interval(function()
    {
        // $scope.time= moment().format('YYYY-MM-DD HH:mm:ss');
        $scope.time=moment().format('02-01-2021', 'DD-MM-YYYY');
    },1000);


});





