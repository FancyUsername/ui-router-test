(function () {
    angular.module("app").directive("fromToDatepicker", function () {
        return {
            restrict: 'E',
            scope: {
                onDatesSelected: "&"
            },
            template: `
                <input type="text" id="dt1">
                <input type="text" id="dt2">`,
            link: function (scope, element, attrs) {
                $(element).find("#dt1").datepicker(Object.assign(datepickerConfig(), {
                    onSelect: function (date) {
                        scope.dateFrom = date;
                        $(element).find("#dt2").val(date);
                        scope.$apply();
                    }
                }));
                $(element).find("#dt2").datepicker(Object.assign(datepickerConfig(), {
                    onSelect: function (date) {
                        scope.dateTo = date;
                        scope.$apply();
                        if (scope.onDatesSelected) {
                            scope.onDatesSelected({
                                "dateStart": scope.dateFrom,
                                "dateEnd": scope.dateTo
                            });
                        }
                    }
                }));
            }
        };
    });

    function datepickerConfig() {
        return {
            dateFormat: 'D dd.mm.yy',
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
