(function() {
    angular.module("app").component("projectTimetracking", {
        templateUrl: "project-timetracking.html",
        controller: function(projectService) {
            var vm = this;
            
            this.datesSelected = function (dateStart, dateEnd) {
                projectService.getTimetracking(dateStart, dateEnd).then(resp => processData(resp));
            };
            
            this.getTimespent = (issue, assignee) => _.sumBy(_.filter(vm.projects, { 'issue': issue, 'assignee': assignee }), 'timespent');
            
            this.getTotalByIssue = issue => _.sumBy(_.filter(vm.projects, {'issue': issue}), 'timespent');
            
            this.getTotalByAssignee = assignee => _.sumBy(_.filter(vm.projects, {'assignee': assignee}), 'timespent');

            this.getTotal = () => _.sumBy(vm.projects, 'timespent');
            
            function processData(projects) {
                vm.projects = projects;
                vm.issues = _.sortBy(_.keys(_.groupBy(projects, 'issue')));
                vm.assignees = _.sortBy(_.keys(_.groupBy(projects, 'assignee')));
            }
        }
    });
})();
