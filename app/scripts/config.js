'use strict';


var app = angular.module('Constants', []);

app.constant('APPLICATION', {
    'host' : 'https://ec2-54-148-29-117.us-west-2.compute.amazonaws.com:8443/mifosng-provider/',
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
    'ACTIVE_CLIENTS': 'api/v1/clients?tenantIdentifier=default&pretty=true&sqlSearch=status_enum=300',
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
