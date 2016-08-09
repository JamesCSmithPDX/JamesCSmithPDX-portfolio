page('/', Project.fetchAll, projectView.initIndexPage);
<<<<<<< HEAD
page('/portfolio', Project.fetchAll);
=======
page('/portfolio', Project.fetchAll, projectView.initIndexPage, projectView.portfolio);
>>>>>>> staging
page('/portfolio/*', '/portfolio');
page('/about', projectView.about);
page();
