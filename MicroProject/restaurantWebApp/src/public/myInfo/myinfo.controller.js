(function() {

    angular.module('public')
        .controller('MyInfoController', MyInfoController)

    MyInfoController.$inject = ['MenuService']

    function MyInfoController(MenuService) {
        myInfoCtrl = this;
        myInfoCtrl.registered = false;



        myInfoCtrl.user = MenuService.getSignUpInfo();

        try {
            if (myInfoCtrl.user.firstname != null) {
                myInfoCtrl.registered = true;
            }
        } catch (e) {
            myInfoCtrl.registered = false;
        }
    }

})();
