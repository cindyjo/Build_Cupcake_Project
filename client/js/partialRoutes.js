app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: '/partials/welcome.html'
    })
    .when('/cupcakes', {
        templateUrl: '/partials/cupcakes.html'
    })
    .when('/order_summary', {
        templateUrl: '/partials/order_summary.html'
    })
    .when('/in_house_order', {
    	templateUrl: '/partials/in_house_order.html'
    })
    .when('/make_your_own',{
    	templateUrl: 'partials/make_your_own.html'
    })
    .when('/confirmation',{
    	templateUrl: 'partials/confirmation.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});