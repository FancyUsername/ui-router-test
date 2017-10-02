(function () {
    angular.module("app").directive("fromToDatepicker", function () {
        return {
            restrict: 'E',
            scope: {
                onDatesSelected: "&"
            },
            templateUrl: 'from-to-datepicker.html',
            controller: function ($scope, $location) {
                if ($location.search().dateFrom) {
                    $scope.dateFrom = $location.search().dateFrom;
                }
                if ($location.search().dateTo) {
                    $scope.dateTo = $location.search().dateTo;
                }
                
                $scope.notifySelected = function() {
                    $scope.updateUrl();
                    if ($scope.onDatesSelected) {
                        $scope.onDatesSelected({
                            "dateStart": $scope.dateFrom,
                            "dateEnd": $scope.dateTo
                        });
                    }
                };
                
                $scope.updateUrl = function() {
                    if ($scope.dateFrom) {
                        $location.search('dateFrom', $scope.dateFrom);
                    }
                    if ($scope.dateTo) {
                        $location.search('dateTo', $scope.dateTo);
                    }
                };
            },
            link: function (scope, element, attrs) {
                $(element).find("#dt1").datepicker(Object.assign(datepickerConfig(), {
                    onSelect: function (date) {
                        scope.dateFrom = date;
                        $(element).find("#dt2").val(date);
                        scope.$apply();
                        setTimeout(() => $(element).find("#dt2").datepicker("show"), 100);
                    }
                }));
                $(element).find("#dt2").datepicker(Object.assign(datepickerConfig(), {
                    onSelect: function (date) {
                        scope.dateTo = date;
                    }
                }));
            }
        };
    });

    function datepickerConfig() {
        return {
            //dateFormat: 'D dd.mm.yy',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            showWeek: true,
            weekHeader: "KW",
            changeYear: true,
            changeMonth: true,
            monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
        'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun',
        'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
            dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
        };
    }
})();
