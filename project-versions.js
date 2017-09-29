(function () {
    angular.module("app").component("projectVersions", {
        bindings: {
            versions: "<"
        },
        templateUrl: "project-versions.html",
        controller: function() {
            this.$onInit = () => {
            }
        }
    });
})();
