page('/', Project.fetchAll, projectView.initIndexPage);
page('/portfolio', projectView.portfolio);
page('/portfolio/*', '/portfolio');
page('/about', projectView.about);
page();
