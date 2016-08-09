page('/', Project.fetchAll, projectView.initIndexPage);
page('/portfolio', Project.fetchAll);
page('/portfolio/*', '/portfolio');
page('/about', projectView.about);
page();
