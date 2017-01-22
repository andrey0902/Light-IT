App.factory('goodsFactory', function ($resource, baseUrl) {
    var service = {},
        goods,
        getProduct;

    var product = $resource(baseUrl + 'api/products/');
    function getGoods() {
        goods = product.query(function (result) {
            getProduct = result;
        })
    }
    getGoods();

    service.getGoods = function () {
        return goods;
    };
    service.getProduct = function(element){
        return _.find(getProduct, { id : + element });
    };

    return service;
});

