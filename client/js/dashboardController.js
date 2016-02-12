
        //Controller
(function (angular) {
    app.controller('dashboardController', ['$scope', '$state', 'Contact_us', function (scope, state, ContactUs) {
        console.log("dashboardController controller");

        ContactUs.find({}, function(response){
            if(response && response.result){
                response = response.result;
            }
            scope.contaceDataArr = response;
            console.log("get contact data response: ", response);
        }, function(err){
            console.log("get contact data err: ", err);
        })
        scope.gotoIndex = function() {
            state.go('app.index')
        }
        scope.gotoDashboard = function() {
            state.go('app.dashboard')
        }
        
    }]);
})(window.angular);
