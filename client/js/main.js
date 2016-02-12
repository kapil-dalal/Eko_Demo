
        //Controller
(function (angular) {
 
            app.controller('mainController', ['$scope', '$location','$state', 'Contact_us', function (scope, location,state, ContactUs) {
                scope.submitContactUsForm = function(){
                	var contactName = scope.contactName;
                	var contactEmail = scope.contactEmail;
                	var contactSubject = scope.contactSubject;
                	var contactMessage = scope.contactMessage;
                	var newContactObj = {name:contactName, email: contactEmail, subject: contactSubject, message: contactMessage};
                    console.log("newContactObj: ", newContactObj);
                    ContactUs.create(newContactObj, function(response){
                        console.log("contact data created: ", response);
                    }, function(err){
                        console.log("contact data err: ", err);
                    })             
                }
                scope.gotoDashboard = function() {
                    state.go('app.dashboard')
                }
            }]);
})(window.angular);
