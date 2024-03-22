(function() {
    "use strict";

    angular.module('common')
        .service('MenuService', MenuService);


    MenuService.$inject = ['$http', 'ApiPath'];

    function MenuService($http, ApiPath) {
        var service = this;

        service.getCategories = function() {
            return $http.get(ApiPath + '/categories.json').then(function(response) {
                return response.data;
            });
        };


        service.getMenuItems = function(category) {
            var config = {};
            if (category) {
                config.params = {
                    'category': category
                };
            }

            return $http.get(ApiPath + '/menu_items.json', config).then(function(response) {
                return response.data;
            });
        };



        service.getMenuNoItem = function(short_name) {

            return $http({
                method: "GET",
                url: "https://ruby-server.herokuapp.com/menu_items/" + short_name + ".json"
            }).then(function(response) {
                service.menuNoItem = response.data;
                return response.data;
            })
        }

        service.setSignUpInfo = function(user) {
            user.favDish = service.menuNoItem
            service.user = user
            console.log(service.user);
        }

        service.getSignUpInfo = function() {

            return service.user;
        }

    }

})();
