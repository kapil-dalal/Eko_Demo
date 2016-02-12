
        //Controller
(function (angular) {
 
            app.controller('mainController', ['$scope', '$location','$state', 'Contact_us', '$anchorScroll', function (scope, location,state, ContactUs, anchorScroll) {
                scope.scrollTo = function(id) {
                    location.hash(id);
                    anchorScroll();
                }
                scope.submitContactUsForm = function(){
                	var contactName = scope.contactName;
                	var contactEmail = scope.contactEmail;
                	var contactSubject = scope.contactSubject;
                	var contactMessage = scope.contactMessage;
                	var newContactObj = {name:contactName, email: contactEmail, subject: contactSubject, message: contactMessage};
                    ContactUs.create(newContactObj, function(response){
                        state.go('app.dashboard');
                    }, function(err){
                        console.log("contact data err: ", err);
                    })             
                }
                scope.gotoDashboard = function() {
                    state.go('app.dashboard')
                }
            }]);
})(window.angular);
