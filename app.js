(function () {
    angular.module("app", ["ui.router"])

        .controller("MainController", function ($scope) {})

        .config(function ($stateProvider) {
            var states = [
                {
                    name: 'home',
                    url: '/home',
                    component: 'home'
                },
                {
                    name: 'projects',
                    url: '/projects',
                    templateUrl: 'projects.html',
                    resolve: {
                        projects: function (projectService) {
                            return projectService.getAllProjects();
                        }
                    },
                    controller: function($scope, projects) {
                        $scope.projects = projects;
                    }
                },
                {
                    name: 'projects.project',
                    url: '/{projectId}',
                    templateUrl: 'project.html',
                    resolve: {
                        project: function (projectService, $stateParams) {
                            return projectService.getProject($stateParams.projectId);
                        }
                    },
                    controller: function($scope, project) {
                        $scope.project = project;
                    }
                },
                {
                    name: 'projects.project.versions',
                    url: '/versions',
                    templateUrl: 'project-versions.html'
                },
                {
                    name: 'projects.project.timetracking',
                    url: '/timetracking',
                    templateUrl: 'project-timetracking.html'
                }
            ];

            states.forEach(state => $stateProvider.state(state));
        });
})();
