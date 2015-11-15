var app=angular.module('myApp', []);
app.controller('userCtrl', function($scope) {
$scope.fName = '';
$scope.lName = '';
$scope.sex = '';
$scope.age = '';
$scope.passw1 = '';
$scope.passw2 = '';
$scope.currentUser = '';
$scope.currentPage = 0;
$scope.pageSize = 6;

$scope.users = [
{fName:'Hege',  lName:"Pege", sex:"male", age:"92", myVar:false },
{fName:'Kim',   lName:"Pim" , sex:"male", age:"84", myVar:false},
{fName:'Sal',   lName:"Smith" , sex:"female", age:"15", myVar:false},
{fName:'Jack',  lName:"Jones" , sex:"male", age:"28", myVar:false},
{fName:'John',  lName:"Doe" , sex:"male", age:"12", myVar:false},
{fName:'Jack',  lName:"Jones" , sex:"male", age:"28", myVar:false},
{fName:'Hege',  lName:"Pege", sex:"male", age:"92", myVar:false },
{fName:'Kim',   lName:"Pim" , sex:"male", age:"84", myVar:false},
{fName:'John',  lName:"Doe" , sex:"male", age:"12", myVar:false},
{fName:'Peter', lName:"Pan" , sex:"male", age:"11", myVar:false},
{fName:'Peter', lName:"Pan" , sex:"male", age:"11", myVar:false},
{fName:'Jack',  lName:"Jones" , sex:"male", age:"28", myVar:false},
{fName:'John',  lName:"Doe" , sex:"male", age:"12", myVar:false},
{fName:'Sal',   lName:"Smith" , sex:"female", age:"15", myVar:false},
{fName:'Hege',  lName:"Pege", sex:"male", age:"92", myVar:false },
{fName:'Kim',   lName:"Pim" , sex:"male", age:"84", myVar:false},
{fName:'Sal',   lName:"Smith" , sex:"female", age:"15", myVar:false},

{fName:'Peter', lName:"Pan" , sex:"male", age:"11", myVar:false}
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false;
$scope.flag = true;


$scope.editUser = function(user) {
    $scope.flag = ! $scope.flag;

    $scope.currentUser = user
    $scope.edit = true;
    $scope.fName = user.fName;
    $scope.lName = user.lName; 
    $scope.sex = user.sex; 
    $scope.age = user.age; 
    user.myVar = !user.myVar;

};

$scope.createUser = function(fName1, lName1, sex1, age1){
  if($scope.currentUser != ''){
    $scope.fName = '';
    $scope.lName = '';
    $scope.sex = '';
    $scope.age = '';
    $scope.passw1 = '';
    $scope.passw2 = '';
    $scope.currentUser = '';
  }else{
    if(fName1 != '' || lName1 != '' || sex1 != '' || age1 != ''){
      var newUser = {fName:fName1,   lName:lName1 , sex:sex1, age:age1, myVar:false};
      $scope.users.push(newUser);
      $scope.currentUser = newUser;
    }
  }
};

$scope.deleteUser = function(user) {
  $scope.users.splice( $scope.users.indexOf(user) , 1 );

};

$scope.saveUser = function(fName, lName, sex, age){
  $scope.currentUser.fName = fName;
  $scope.currentUser.lName = lName;
  $scope.currentUser.sex = sex;
  $scope.currentUser.age = age;
};

$scope.$watch('passw1',function() {$scope.test();});
$scope.$watch('passw2',function() {$scope.test();});
$scope.$watch('fName', function() {$scope.test();});
$scope.$watch('lName', function() {$scope.test();});
$scope.$watch('sex',function() {$scope.test();});
$scope.$watch('passw2',function() {$scope.test();});

$scope.numberOfPages=function(){
        return Math.ceil($scope.users.length/$scope.pageSize);                
    }



$scope.test = function() {
  if ($scope.passw1 !== $scope.passw2) {
    $scope.error = true;
    } else {
    $scope.error = false;
  }
  $scope.incomplete = false;
  if ($scope.edit && (!$scope.fName.length ||
  !$scope.lName.length || !$scope.sex.length || !$scope.age.length ||
  !$scope.passw1.length || !$scope.passw2.length)) {
       $scope.incomplete = true;
  }
};

});

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});