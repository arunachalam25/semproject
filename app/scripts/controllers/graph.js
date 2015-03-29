'use strict';

angular.module('mytodoApp')
  .controller('graph', function ($scope,$location,dataservice) {
  
    // Data 
    
    $scope.xAxis = 'Response Time';
    
    $scope.yAxis = 'search';

    $scope.points = [
      {
      label: 'January',
      yValue: 1,
      xValue: 0.0036
      },
      {
      label: 'February',
      yValue: 2,
      xValue: 0.0055
      },
      {
      label: 'March',
      yValue: 3,
      xValue: 0.0030
      },
      {
      label: 'April',
      yValue: 4,
      xValue: 0.0040
      },
      {
      label: 'May',
      yValue: 5,
      xValue: 0.0049
      },
      {
      label: 'June',
      yValue: 6,
      xValue: 0.0050
      },
      {
      label: 'July',
      yValue: 7,
      xValue: 0.0060
      },
      {
      label: 'August',
      yValue: 8,
      xValue: 0.0025
      },
      {
      label: 'September',
      yValue: 9,
      xValue: 0.0049
      },
      {
      label: 'October',
      yValue: 10,
      xValue: 0.0057
      },
      {
      label: 'November',
      yValue: 11,
      xValue: 0.0036
      },
      {
      label: 'December',
      yValue: 11,
      xValue: 342
      }
    ];
    
    // Find Maximum X & Y Axis Values - this is used to position the points as a percentage of the maximum
    $scope.maxX = 0;
    $scope.maxY = 0;
    
    var arrLength = $scope.points.length;
    for (var i = 0; i < arrLength; i++) {
        // Find Maximum X Axis Value
      	if ($scope.points[i].xValue > $scope.maxX)
        $scope.maxX = $scope.points[i].xValue;
      	// Find Maximum Y Axis Value
      	if ($scope.points[i].yValue > $scope.maxY)
        $scope.maxY = $scope.points[i].yValue;
    }
   
  // End Controller  
	

});
