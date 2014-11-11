'use strict';
 
  // Here we attach this controller to our testApp module
var TodoCtrl = angular.module('todoController',['todoService','Constants', 'GraphUtils'])
  
TodoCtrl.controller('TodoCtrl', function ($scope, $rootScope, $location, TodoService, REST_URL, PAGE_URL, APPLICATION, Session, Graph, Auth) {
  
  $scope.getTodos = function(){
    console.log('TodoCtrl : getTodos');
    //Set header values 
    $scope.getTotalActiveClients();
    $scope.getTotalBorrowers();
    $scope.getLoansInBadStanding();
    $scope.getRepaymentsDueThisWeek();    
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

 $scope.getTotalActiveClients = function(){
    console.log('TodoCtrl : getTotalActiveClients');    
    TodoService.clientList(REST_URL.ACTIVE_CLIENTS).then(function(result){
      console.log('Success : Return from todo totalActiveClients service.');
      $scope.totalActiveClient = result.data.totalFilteredRecords;
    },function(result){
      console.log('Error : Return from todo totalActiveClients service.');
      $scope.totalActiveClient = 0;
    });    
  };

  $scope.getTotalBorrowers = function(){
    console.log('TodoCtrl : getTotalBorrowers');
    TodoService.clientList(REST_URL.ACTIVE_CLIENTS).then(function(result){
      console.log('Success : Return from todo totalBorrowers service.');
      $scope.totalBorrowers = 629;
    },function(result){
      console.log('Error : Return from todo totalBorrowers service.');
      $scope.totalBorrowers = 629;
    });
  };

  $scope.getLoansInBadStanding = function(){
    console.log('TodoCtrl : getLoansInBadStanding');
    TodoService.clientList(REST_URL.ACTIVE_CLIENTS).then(function(result){
      console.log('Success : Return from todo loansInBadStanding service.');
      $scope.loansInBadStanding = 302;
    },function(result){
      console.log('Error : Return from todo loansInBadStanding service.');
      $scope.loansInBadStanding = 302;
    });
  };

  $scope.getRepaymentsDueThisWeek = function(){
    console.log('TodoCtrl : getRepaymentsDueThisWeek');
    TodoService.clientList(REST_URL.ACTIVE_CLIENTS).then(function(result){
      console.log('Success : Return from todo repaymentsDueThisWeek service.');
      $scope.repaymentsDueThisWeek = 147;
    },function(result){
      console.log('Error : Return from todo repaymentsDueThisWeek service.');
      $scope.repaymentsDueThisWeek = 147;
    });
  };

  $scope.username = Session.getValue(APPLICATION.username);  
  $scope.getTodos();
});