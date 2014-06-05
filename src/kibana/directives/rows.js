define(function (require) {
  var $ = require('jquery');
  var _ = require('lodash');
  var module = require('modules').get('kibana/directives');

  module.directive('kbnRows', function ($parse) {
    return {
      restrict: 'A',
      link: function ($scope, $el, attr) {
        var getter = $parse(attr.kbnRowsMin);
        $scope.$watch(attr.kbnRows, function (rows) {
          $el.empty();

          var min = getter($scope);
          var width = _.reduce(rows, function (memo, row) {
            return Math.max(memo, row.length);
          }, 0);

          if (!_.isArray(rows)) rows = [];
          if (min && rows.length < min) {
            // clone the rows so that we can add elements to it without upsetting the original
            rows = _.clone(rows);
            // crate the empty row which will be pushed into the row list over and over
            var emptyRow = new Array(width);
            // fill the empty row with values
            _.times(width, function (i) { emptyRow[i] = '\0'; });
            // push as many empty rows into the row array as needed
            _.times(min - rows.length, function () { rows.push(emptyRow); });
          }

          rows.forEach(function (row) {
            var $tr = $(document.createElement('tr'));
            var addCell = function (cell) {
              var $cell = $(document.createElement('td'));
              $cell.text(cell);
              $tr.append($cell);
            };

            row.forEach(addCell);
            if (width > row.length) _.times(width - row.length, _.partial(addCell, ''));

            $el.append($tr);
          });
        });
      }
    };
  });
});