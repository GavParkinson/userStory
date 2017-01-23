angular.module('MyApp',['appRoutes', 'mainController', 'authService', 'userController', 'userService', 'storyController', 'storyService', 'reverseDirective'])

.config(function($httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');
});