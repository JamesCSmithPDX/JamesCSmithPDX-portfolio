(function(module){
  portfolioController = {};

  portfolioController.index = function() {
    console.log(Project.all.length);
    if (Project.all.length > 0) {
      projectView.portfolio();
    } else {
      console.log('In portfolioController empty');
      Project.fetchAll(projectView.initIndexPage);
    }
  };

  module.portfolioController = portfolioController;

})(window);
