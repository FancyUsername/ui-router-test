(function () {
    angular.module("app").component("projectVersions", {
        templateUrl: "project-versions.html",
        controller: function ($scope) {
            console.log($scope.projectScopeVariable);
        }
    });
})();
