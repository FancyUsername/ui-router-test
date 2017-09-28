(function () {
    angular.module("app").controller("projectController", function (project) {
        this.project = project;
        console.log("projectController", "this: ", this);
    });
})();
