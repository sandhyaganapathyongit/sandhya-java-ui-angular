/**
 * 
 */
 var sampleModule = angular.module('sampleApp',[]);
 
//RoutProvider - single page application
 
 sampleModule.config(['$routProvider',function($routProvider){
	 $routProvider.
	   when('/redirecting',
	 			{
	 				templateUrl:'../html/redirecting.html',
	 				controller:'MasterController'
	 			})
	 	when('/employee',
	 			{
	 				templateUrl:'../html/employeeManagement.html',
	 				controller:'ContactController'
	 			})
	 	when('/company',
	 			{
	 				templateUrl:'../html/companyManagement.html',
	 				controller:'CompanyController'
	 		
	 			});
 }]);
 
 
 //companyControler
 sampleModule.controller('CompanyController',['$scope','$rootScope',function($scope,$rootScope){
	 
 }]);

//masterControler
 sampleModule.controller('MasterController',['$scope','$rootScope',function($scope,$rootScope){
	 
 }]);
 
 sampleModule.controller('ContactController',['$scope','$rootScope','employeeService',function($scope,$rootScope,employeeService){
	 var uid = 1;
	 $rootScope.contacts = [];
	 employeeService.getEmployees();// calling rest service for loading table with employees
	 
//	     $scope.contacts = [
//	         { id:0, 'name': 'Sandhya', 
//	           'email':'hello@gmail.com', 
//	           'phone': '123-456-7890'
//	         }
//	     ];
	      
	     $scope.saveContact = function() {
	          
	         if($scope.newcontact.id == null) {
	         //if this is new contact, add it in contacts array
	         $scope.newcontact.id = uid++;
	         $scope.contacts.push($scope.newcontact);
	         } else {
	         //for existing contact, find this contact using id
	         //and update it.
	         for(i in $scope.contacts) {
	             if($scope.contacts[i].id == $scope.newcontact.id) {
	             $scope.contacts[i] = $scope.newcontact;
	             }
	         }                
	         }
	          
	         //clear the add contact form
	         $scope.newcontact = {};
	     };
	  
	   //This method will delete the row   
	     $scope.deleteRow = function(id) {
	          
	         //search contact with given id and delete it
	         for(i in $scope.contacts) {
	             if($scope.contacts[i].id == id) {
	                 $scope.contacts.splice(i,1);
	                 $scope.newcontact = {};
	             }
	         }
	          
	     };
	      
	    //This method will edit current row  
	     $scope.edit = function(id) {
	     //search contact with given id and update it
	         for(i in $scope.contacts) {
	             if($scope.contacts[i].id == id) {
	                 
	                 //copy of original object
	                 $scope.newcontact = angular.copy($scope.contacts[i]);
	             }
	         }
	     };
	 
 }]);