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
                    component: 'projects',
                    resolve: {
                        projects: function (projectService) {
                            return projectService.getAllProjects();
                        }
                    }
                },
                {
                    name: 'projects.project',
                    url: '/{projectId}',
                    component: 'project',
                    resolve: {
                        project: function (projects, $transition$) {
                            return projects.find(p => p.id === $transition$.params().projectId);
                        }
                    }
                },
                {
                    name: 'projects.project.versions',
                    url: '/versions',
                    component: 'projectVersions',
                    resolve: {
                        versions: function (project, projectService) {
                            return projectService.getVersions(project.versions.href, []);
                        }
                    }
                },
                {
                    name: 'projects.project.timetracking',
                    url: '/timetracking',
                    component: 'projectTimetracking'
                }
            ];

            states.forEach(state => $stateProvider.state(state));
        });
})();
