App.factory('goodsFactory',function ($resource) {
    var service={},
        goods,
        getProduct;
    const DB= 'http://smktesting.herokuapp.com/';
    var product=$resource(DB + 'api/products/');
    function getGoods() {
        goods=product.query(function (result) {
            getProduct =result;
        })
    }
    getGoods();

    service.getGoods=function () {
        return goods;
    };
    service.getProduct=function(element){
        return _.find(getProduct,{ id : +element });
    };

    return service;
});

