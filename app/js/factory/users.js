App.config(['$resourceProvider', function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
App.factory('userFactory', function ($resource, baseUrl) {

    var service = {},
        newUser;
    var regisration = $resource(baseUrl + 'api/register/', {"username": "@username", "password": "@password"});
    var login = $resource(baseUrl + 'api/login/', {"username": "@username", "password": "@password"});

     var registrationUser = function (userParams) {
            return newUser = new regisration(userParams).$save();
    };
     var authorization = function (userParams) {
            return newUser = new login(userParams).$save();
    };

    service.login = function(userParams){
        return authorization(userParams);
    };

    service.signUp = function(userParams){
      return registrationUser(userParams);
    };
    return service;
});

