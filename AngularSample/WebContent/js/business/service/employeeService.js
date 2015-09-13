/**
 * 
 */

var serviceModule = angular.module('sampleApp.employeeService',[]);
serviceModule.service('employeeService',['$http','$rootScope',function($http,$rootScope){
	//var serviceObj = {};
	
	this.getEmployees = function(){

		var tempUrl = "http://localhost:8081/AngularSample/rs/EmployeeService/getEmployeeList";
		 var request = $http({
             method: "get",
             url: tempUrl,
             
         });
         return( request.then( handleSuccess, handleError ) );
	};
	
	function handleSuccess(response){
		var result = JSON.parse(result);  
		var employArray = new Array();
		employArray = result.EmployeeList.employeeList;
		$rootScope.contacts = employArray[0].EmployeeDTO;
	}
	
	function handleError(response){
		alert(" error happened");
	}
}]);