'use strict';
 
// Here we attach this controller to our testApp module
var LoginCtrl =  angular.module('loginController',['userServices','Utils','Constants']);
  
// The controller function let's us give our controller a name: MainCtrl
// We'll then pass an anonymous function to serve as the controller itself.
LoginCtrl.controller('LoginCtrl', function ($scope, $rootScope,$location, Auth, AuthService, Utility, AUTH_EVENTS, REST_URL, PAGE_URL, Session, Base64) {
  //Authentication controller 
  $scope.authenticate = function(loginDetails){
    console.log('LoginCtrl : authenticate');
    $scope.error=false;
    if ($scope.loginForm.$valid) {
      if(!Utility.isUndefinedOrNull(loginDetails)){
        Auth.setCredentials(loginDetails.username, loginDetails.password);
        AuthService.login(REST_URL.AUTHENTICATION+"?username="+loginDetails.username+"&password="+loginDetails.password).then(function(result){
          console.log('Success : Return from login service.');
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
          //TODO will delete it later
          //Session.create(result.data.base64EncodedAuthenticationKey, result.data.username, result.data.roles[0]);
          Session.create(Base64.encode(loginDetails.username + ':' + loginDetails.password), result.data.username, result.data.roles[0]);
          $location.url(PAGE_URL.HOME);
        },function(result){
          $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
          $scope.error=true;
          console.log('Error : Return from login service.');
        });
      }else{
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        $scope.error=true;
      }
    } else {
      $scope.loginForm.invalidate = true;
    }
  };

  $scope.logout = function(){
   AuthService.logout(REST_URL.AUTHENTICATION).then(function(result){
        Session.remove();
        $location.url(PAGE_URL.ROOT);
      },function(result){
          console.log('Error : Return from logout service.');
      });
  };

  //Clear error from the login page
  $scope.clearError = function(){
   $scope.loginForm.invalidate = false;
  };
});