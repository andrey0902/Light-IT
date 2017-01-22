App.factory('reviewsFactory', function ($rootScope, $resource, baseUrl) {
    var service = {},
        reviews;
    var product = $resource(baseUrl + 'api/reviews/:id', {id: '@id'});

    var getReviws = function (elem) {
       return reviews = product.query(elem);
    };
    service.getRecall = function(element){
        return getReviws({id: element.id});
    };
    return service;
});

