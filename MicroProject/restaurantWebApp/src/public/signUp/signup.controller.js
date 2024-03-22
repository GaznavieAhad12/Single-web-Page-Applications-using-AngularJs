(function(document) {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);


    SignUpController.$inject = ['MenuService']

    function SignUpController(MenuService) {
        var signUpCtrl = this;
        signUpCtrl.notfoundMenuNo = false;
        signUpCtrl.success = false;

        signUpCtrl.submit = function() {


            var promise = MenuService.getMenuNoItem(signUpCtrl.user.menuNo)
            promise.then(function(result) {


                signUpCtrl.notfoundMenuNo = false;
                signUpCtrl.success = true;

                MenuService.setSignUpInfo(signUpCtrl.user)
                signUpCtrl.successmssg = "Your Information has been saved"

            }, function(error) {

                signUpCtrl.notfoundMenuNo = true;
                signUpCtrl.success = false;


            })




        }
    }

})();
