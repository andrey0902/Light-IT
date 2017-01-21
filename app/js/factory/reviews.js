App.factory('reviewsFactory',function ($rootScope,$resource) {
    var service={},reviews;
    const DBUrl= 'http://smktesting.herokuapp.com/api/reviews/:id';
    var product=$resource(DBUrl ,{id:'@id'});

    var getReviws= function (elem) {
       return  reviews=product.query(elem);

    };
    service.getRecall=function(element){
        return getReviws({id: element.id});
    };
    return service;
});

