'use strict';
 
  // Here we attach this controller to our testApp module
var TodoCtrl = angular.module('todoController',['todoService','Constants', 'GraphUtils'])
  
TodoCtrl.controller('TodoCtrl', function ($scope, $rootScope, $location, TodoService, REST_URL, PAGE_URL, APPLICATION, Session, Graph, Auth) {
  
  $scope.getTodos = function(){
    console.log('TodoCtrl : getTodos');
    //Set header values 
    $scope.getHomePageHeaderStatic();    
    //Start Dummy Charts
    $scope.borrowerPerLoanOfficer = Graph.getColumnChart('activeBorrowers');
    $scope.PARPerLoanOfficer = Graph.getColumnChart('parPerLoan');
    $scope.loanPortfolioCurrentMonth = Graph.getColumnChart('changesInLoanPortfolio');
    $scope.dueVsCollectedLastWeek = Graph.getPieChart();
    //End Dummy Charts
    TodoService.list(REST_URL.TODO_LIST).then(function(result){
      console.log('Success : Return from todo list service.');
      $scope.todos = result.data.todos;
      $rootScope.todos = $scope.todos;
    },function(result){
      console.log('Error : Return from todo list service.');
    }); 
  };

  $scope.saveTodo = function(todo){
    console.log('TodoCtrl : saveTodo');
    TodoService.save(REST_URL.SAVE_TODO, angular.toJson('{"todo": {"name": "'+todo.name+'"}}')).then(function(result){
      console.log('Success : Return from todo save service.');
      $location.url(PAGE_URL.HOME);
    },function(result){
      console.log('Error : Return from todo save service.');
    }); 
  };

  $scope.deleteTodo = function(todoId){
    console.log('TodoCtrl : deleteTodo');    
    TodoService.delete(REST_URL.DELETE_TODO, todoId).then(function(result){
      console.log('Success : Return from todo delete service.');
      $location.url(PAGE_URL.HOME);
    },function(result){
      console.log('Error : Return from todo delete service.');
    }); 
  };

  $scope.getHomePageHeaderStatic = function(){
    console.log('TodoCtrl : getHomePageHeaderStatic');
    TodoService.headerStatic(REST_URL.HEADER_STATISTIC).then(function(result){
      console.log('Success : Return from todo homePageHeaderStatic service.');
      $scope.totalActiveClient = result.data[0].totalActiveClient;
      $scope.totalBorrowers = result.data[0].totalBorrowers;
      $scope.loansInBadStanding = result.data[0].loansInBadStanding;      
      $scope.repaymentsDueThisWeek = result.data[0].repaymentsDueThisWeek;
    },function(result){
      console.log('Error : Return from todo homePageHeaderStatic service.');
      $scope.totalActiveClient = 0;
      $scope.totalBorrowers = 0;
      $scope.loansInBadStanding = 0;      
      $scope.repaymentsDueThisWeek = 0;
    });
  };

  $scope.username = Session.getValue(APPLICATION.username);  
  $scope.getTodos();
});