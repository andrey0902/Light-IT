 App.controller('goodsCtrl', function (goodsFactory, $rootScope, reviewsFactory, userFactory) {
     this.element = null;
     var self = this;
     var template = './tpl/main.html';
     this.minValue = 3;
     this.maxValue = 200;
     this.requiredValue = true;
     this.access = undefined;
     this.goods = goodsFactory.getGoods();
     this.url = template;

     this.getUrl = function (data) {
         this.url = './tpl/' + data + '.html';
         this.showError = false;
         range()
     };

     this.getProductId = function (data) {
         this.product = data;
         this.reviews = reviewsFactory.getRecall(this.product);
     };

     this.goods = goodsFactory.getGoods();
         this.preview = function(item){
         this.product = item;
     };

     this.inquiry = function (data, isValid) {
         if(this.user){
             if(isValid){
                 // send data
                this.users.coment = null;
                 this.showError = false;
             }else{
                 this.showError = true;
             }
         }else{
             this.showError = true;
         }
     };

     this.inLogin = function (data, isValid) {
         if(isValid){
             this.success = userFactory.login(data);
             this.success.then(function (response) {
                 self.user = response;
                 if(self.user.message == "Username or password invalid"){
                     self.showErrorPasswordorLogin = true;
                     return;
                 }
                 self.url = template;
                 self.User = null;
                 self.showErrorPasswordorLogin = false;
             })
         }else{
             this.showError = true;
         }
     };

     this.quireReg = function (data, isValid) {
         if(isValid && this.showErrorPassword != true){
             this.success = userFactory.signUp({ "username": data.login, "password": data.password });
             this.success.then(function (response) {
                     self.user = response;
                     self.url = template;
                     self.newUser = null;
                 })
         }else{
            this.showError = true;
         }
     };
     this.getError = function (error) {
         if(angular.isDefined(error)) {
             if (error.required) {
                 return 'The field must not be empty';
             }
             if (error.minlength) {
                 return 'The field must contain at least 3 characters';
             }
             if (error.maxlength) {
                 return 'The field should contain a maximum of 10 characters';
             }
             if(!self.user){
                 return 'please login at the website'
             }
         }
     };

     this.mismatch = function(password, confirmPassword){
         if(password !== confirmPassword && password != undefined){
              this.showErrorPassword = true;

         }else{
             this.showErrorPassword = false;
         }};

     function range(){
        setTimeout(function () {
            $('#rating_1').rating({
                fx: 'full',
                image: 'img/stars.png',
                loader: 'img/ajax-loader.gif',
                url: '',
                callback: function(responce){
                    this.vote_success.fadeOut(2000);
                }
            });
        },100)
     }

});

