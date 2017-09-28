(function() {
    angular.module("app").factory("projectService", function($http) {
        return {
            getAllProjects: getAllProjects,
            getProject: findProject
        };
        
        function getAllProjects() {
             return $http.get("projects.json").then(resp => resp.data);
        }
        
        function findProject(projectId) {
            return getAllProjects().then(resp => {
                return resp.find(p => p.id === projectId);
            });
        }
    });
})();
