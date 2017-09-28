(function () {
    angular.module('app').component('projects', {
        bindings: {
            projects: '<'
        },

        templateUrl: "projects.html",
        
        controller: function() {
            this.filterChanged = filterChanged;
            
            function filterChanged(searchText) {
                this.projectFilter.id = searchText;
            }
        }
    })
})();
