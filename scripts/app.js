'use strict';
angular.module('Alumni', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider)	{
	$stateProvider
	// route for the home page
	.state('app', {
		url:'/',
		views: {
			'header': {
				templateUrl:'views/header.html',
			},
			'content':  {
				templateUrl:'views/content.html',
			},

			'footer':   {
				templateUrl:'views/footer.html',
			}
		}

	})

	//route for the registration from

	.state('app.register', {
		url:'register',
		views: {
			'content@':  {
				templateUrl:'views/register.html',
			}
		}

	})
	//route for the contact form
	.state('app.contact', {
		url:'contact',
		views: {
			'content@':  {
				templateUrl:'views/contactus.html',
			}
		}

	})
	//route for the login form

	.state('app.login', {
		url:'login',
		views: {
			'content@':  {
				templateUrl:'views/login.html',
			}
		}
	})
	.state('app.main', {
		url:'main',
		views: {
			'content@':  {
				templateUrl:'views/main.html',
			}
		}
	});
	$urlRouterProvider.otherwise('/');
})
; 