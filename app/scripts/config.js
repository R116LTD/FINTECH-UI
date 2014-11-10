'use strict';


var app = angular.module('Constants', []);
var host="";
var getLocation = function (href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};
var baseApiUrl="https://ip-172-31-30-97.us-west-2.compute.internal:8443";
var queryLink = getLocation(baseApiUrl);
host = "https://" + queryLink.hostname + (queryLink.port ? ':' + queryLink.port : '');

app.constant('APPLICATION', {
    'host' : 'https://ip-172-31-30-97.us-west-2.compute.internal:8443/',
    'sessionName': 'ang_session',
    'authToken': 'token',
    'username' : 'username',
    'role' : 'role'
});

app.constant('REST_URL', {
    'AUTHENTICATION': 'api/v1/authentication',
    'TODO_LIST': 'api/v1/loans?tenantIdentifier=default&pretty=true',
    'SAVE_TODO': 'todo/save',
    'DELETE_TODO': 'todo/delete',
    'CLIENTS': 'api/v1/authentication',//TODO - URL to get client list will be placed here
});

app.constant('PAGE_URL', {
    'ROOT': '/',
    'HOME': '/home',
});

app.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
});

app.constant('USER_ROLES', {
  all: '*',
  admin: 'admin',
  user: 'user',
  guest: 'guest'
});
