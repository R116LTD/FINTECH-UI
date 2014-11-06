'use strict';


var app = angular.module('Constants', []);

app.constant('APPLICATION', {
    'host' : 'https://ec2-54-69-185-193.us-west-2.compute.amazonaws.com:8443/',
    'sessionName': 'ang_session',
    'authToken': 'token',
    'username' : 'username',
    'role' : 'role'
});

app.constant('REST_URL', {
    'AUTHENTICATION': 'api/v1/authentication',
    'TODO_LIST': 'todos',
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
