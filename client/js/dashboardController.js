
        //Controller
(function (angular) {
    app.controller('dashboardController', ['$scope', '$state', 'Contact_us','$anchorScroll', '$location', function (scope, state, ContactUs, anchorScroll, location) {
        scope.scrollTo = function(id) {
            location.hash(id);
            anchorScroll();
        }
        ContactUs.find({}, function(response){
            if(response && response.result){
                response = response.result;
            }
            scope.contaceDataArr = response;
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
