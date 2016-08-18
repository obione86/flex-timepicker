(function () {
    "use strict";

    var app = angular
        .module('flextimepicker', [])
        .directive('flexTimepicker', flexTimepicker);

    function flexTimepicker() {

        var template =
            '<div class="ionic_timepicker_popup">' +
            '<div class="row" ng-class="{\'padding_left_15px\':time.format == 12}">' +
            '<div class="col col-25" ng-class="{\'col-offset-25 col-25\':time.format == 24}">' +
            '<button type="button" class="button button-clear button-small button-dark time_picker_arrows" ng-click="increaseHours()">' +
            '<i class="icon ion-chevron-up"></i></button>' +
            '<div ng-bind="time.hours" class="time_picker_box_text"></div>' +
            '<button type="button" class="button button-clear button-small button-dark time_picker_arrows" ng-click="decreaseHours()">' +
            '<i class="icon ion-chevron-down"></i></button>' +
            '</div>' +
            '<label class="col col-10 time_picker_colon"> : </label>' +
            '<div class="col col-25" ng-class="{\'col-25\':time.format == 24}">' +
            '<button type="button" class="button button-clear button-small button-dark time_picker_arrows" ng-click="increaseMinutes()"><i class="icon ion-chevron-up"></i></button>' +
            '<div ng-bind="time.minutes" class="time_picker_box_text"></div>' +
            '<button type="button" class="button button-clear button-small button-dark time_picker_arrows" ng-click="decreaseMinutes()"><i class="icon ion-chevron-down"></i></button>' +
            '</div>' +
            '<label class="col col-10 time_picker_colon" ng-if="time.format == 12"> : </label>' +
            '<div class="col col-25" ng-if="time.format == 12">' +
            '<button type="button" class="button button-clear button-small button-dark time_picker_arrows" ng-click="changeMeridian()"><i class="icon ion-chevron-up"></i></button>' +
            '<div ng-bind="time.meridian" class="time_picker_box_text"></div>' +
            '<button type="button" class="button button-clear button-small button-dark time_picker_arrows" ng-click="changeMeridian()"><i class="icon ion-chevron-down"></i></button>' +
            '</div>' +
            '</div>' +
            '</div>';

        var directive = {
            restrict: 'E',
            scope: {
                selectedTime: "=?",
                inputTime: '=?',
                options: '=?',
            },
            template: template,
            controller: Controller
        };

        return directive;

    }

    Controller.$inject = ['$scope', '$filter'];

    function Controller($scope, $filter) {
        $scope.today = resetHMSM(new Date()).getTime();
        $scope.time = {};
        $scope.selectedTime = $scope.selectedTime || {};
        $scope.options = $scope.options || {};
        $scope.time.format = $scope.options.format || 12;
        $scope.time.step = $scope.options.step || 15;
        $scope.time.inputTime = $scope.inputTime || (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60));

        /////////////////
        function resetHMSM(currentDate) {
            currentDate.setHours(0);
            currentDate.setMinutes(0);
            currentDate.setSeconds(0);
            currentDate.setMilliseconds(0);
            return currentDate;
        }

        //Increasing the hours
        $scope.increaseHours = function () {
            $scope.time.hours = Number($scope.time.hours);
            if ($scope.options.format == 12) {
                if ($scope.time.hours != 12) {
                    $scope.time.hours += 1;
                } else {
                    $scope.time.hours = 1;
                }
            }
            if ($scope.options.format == 24) {
                $scope.time.hours = ($scope.time.hours + 1) % 24;
            }
            $scope.time.hours = ($scope.time.hours < 10) ? ('0' + $scope.time.hours) : $scope.time.hours;
        };

        //Decreasing the hours
        $scope.decreaseHours = function () {
            $scope.time.hours = Number($scope.time.hours);
            if ($scope.options.format == 12) {
                if ($scope.time.hours > 1) {
                    $scope.time.hours -= 1;
                } else {
                    $scope.time.hours = 12;
                }
            }
            if ($scope.options.format == 24) {
                $scope.time.hours = ($scope.time.hours + 23) % 24;
            }
            $scope.time.hours = ($scope.time.hours < 10) ? ('0' + $scope.time.hours) : $scope.time.hours;
        };

        //Increasing the minutes
        $scope.increaseMinutes = function () {
            $scope.time.minutes = Number($scope.time.minutes);
            if (($scope.time.minutes % 10) > 0) {
                $scope.time.minutes = $scope.time.minutes + (10 - ($scope.time.minutes % 10));
                return;
            }
            $scope.time.minutes = ($scope.time.minutes + $scope.options.step) % 60;
            $scope.time.minutes = ($scope.time.minutes < 10) ? ('0' + $scope.time.minutes) : $scope.time.minutes;
        };

        //Decreasing the minutes
        $scope.decreaseMinutes = function () {
            $scope.time.minutes = Number($scope.time.minutes);
            if (($scope.time.minutes % 10) > 0) {
                $scope.time.minutes = $scope.time.minutes - ($scope.time.minutes % 10);
                return;
            }
            $scope.time.minutes = ($scope.time.minutes + (60 - $scope.options.step)) % 60;
            $scope.time.minutes = ($scope.time.minutes < 10) ? ('0' + $scope.time.minutes) : $scope.time.minutes;
        };

        //Changing the meridian
        $scope.changeMeridian = function () {
            $scope.time.meridian = ($scope.time.meridian === "AM") ? "PM" : "AM";
        };

        $scope.$watch('time', function (newVal, oldVal) {
            $scope.selectedTime = angular.copy($scope.time);
        }, true);

        function setMinSecs(ipTime, format) {
            $scope.time.hours = Math.floor(ipTime / (60 * 60));

            var rem = ipTime % (60 * 60);
            if (format == 12) {
                if ($scope.time.hours >= 12) {
                    $scope.time.meridian = 'PM';

                    if ($scope.time.hours > 12) {
                        $scope.time.hours -= 12;
                    }
                } else {
                    $scope.time.meridian = 'AM';
                }
            }
            $scope.time.minutes = rem / 60;

            $scope.time.hours = Math.floor($scope.time.hours);
            $scope.time.minutes = Math.floor($scope.time.minutes);

            if ($scope.time.hours.toString().length == 1) {
                $scope.time.hours = '0' + $scope.time.hours;
            }
            if ($scope.time.minutes.toString().length == 1) {
                $scope.time.minutes = '0' + $scope.time.minutes;
            }
            $scope.time.format = $scope.options.format;
        }

        setMinSecs($scope.time.inputTime, $scope.time.format);

    }

})();
