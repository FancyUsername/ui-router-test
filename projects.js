(function () {
    angular.module('app').component('projects', {
        bindings: {
            projects: '<'
        },

        templateUrl: "projects.html",

        controller: function () {
            var vm = this;
            this.filterChanged = filterChanged;

            this.search = function (item) {
                if (!vm.projectFilter) {
                    return true;
                }
                
                return _(item)
                    .pick(['id', 'name', 'projectlead'])
                    .toArray()
                    .find(p => p.toLowerCase().indexOf(vm.projectFilter.toLowerCase()) >= 0);
            };

            function filterChanged(searchText) {
                this.projectFilter.id = searchText;
            }
        }
    });
})();
