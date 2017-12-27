'use strict';
angular.module('Alumni',[])
.controller('RegisterController', ['$scope', function($scope)	{
	$scope.register = {first_name:"", last_name:"", middle_name:"", address:"", city:"", areacode:"", telephone:"", email:"", name:"", password:"", passwordverify:""};

	$scope.showDetails1=false;
	$scope.student = function()	{
	$scope.showDetails1 = !$scope.showDetails1;
	};
}])

.controller('LoginController', ['$scope', function($scope)	{
	$scope.login = {email:"", password:""};

}])

.controller('ContentController', ['$scope', function($scope)	{
	$scope.donation = {amount:"" };
	$scope.contactUs = function()  {
		$scope.ContactForm.$setPristine();
		console.log($scope.contact);
	};


}])

.controller('ContactController', ['$scope', function($scope)	{
	$scope.contact = {name:"", email:"",message:"" };
	
}])
; 