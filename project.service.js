(function () {
    "use strict";
    
    angular.module("app").factory("projectService", function ($http, $q) {
        return {
            getAllProjects: getAllProjects,
            getProject: findProject,
            getVersions: getVersions,
            getTimetracking: getTimetracking
        };
        
        function getAllProjects() {
             return $http.get("projects.json").then(resp => resp.data);
        }
        
        function findProject(projectId) {
            return getAllProjects().then(resp => {
                return resp.find(p => p.id === projectId);
            });
        }
        
        function getVersions(href) {
            if (href) {
                return $http.get(href).then(resp => resp.data);
            }
            
            return $q(resolve => resolve([]));
        }
        
        function getTimetracking(dateStart, dateEnd) {
            var data = [["AW", "HK", "CS"], ["Issue 1", "Issue 2", "Issue 3", "Issue 4"]];
    
            var generated = _.transform(_.times(15, Number), (result, n) => {
                result.push({
                    assignee: data[0][_.random(0, data[0].length - 1)],
                    issue: data[1][_.random(0, data[1].length - 1)],
                    timespent: _.random(1, 10)
                });
            }, []);
            
            return $q(resolve => resolve(generated));
        }
    });
})();
